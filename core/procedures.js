/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Utility functions for handling procedures.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Procedures');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.Names');
goog.require('Blockly.Workspace');
goog.require('Blockly.Block');
goog.require('Blockly.Connection');

/**
 * Category to separate procedure names from variables and generated functions.
 */
Blockly.Procedures.NAME_TYPE = 'PROCEDURE';

/**
 * Find all user-created procedure definitions.
 * @return {!Array.<!Array.<!Array>>} Pair of arrays, the
 *     first contains procedures without return variables, the second with.
 *     Each procedure is defined by a three-element list of name, parameter
 *     list, and return value boolean.
 */
Blockly.Procedures.allProcedures = function() {
  var blocks = Blockly.mainWorkspace.getAllBlocks();
  var proceduresReturn = [];
  var proceduresNoReturn = [];
  for (var x = 0; x < blocks.length; x++) {
    var func = blocks[x].getProcedureDef;
    if (func) {
      var tuple = func.call(blocks[x]);
      if (tuple) {
        if (tuple[0]) {
          proceduresReturn.push(tuple);
        } else {
          proceduresNoReturn.push(tuple);
        }
      }
    }
  }

  proceduresNoReturn.sort(Blockly.Procedures.procTupleComparator_);
  proceduresReturn.sort(Blockly.Procedures.procTupleComparator_);
  return [proceduresNoReturn, proceduresReturn];
};

/**
 * Comparison function for case-insensitive sorting of the first element of
 * a tuple.
 * @param {!Array} ta First tuple.
 * @param {!Array} tb Second tuple.
 * @return {number} -1, 0, or 1 to signify greater than, equality, or less than.
 * @private
 */
Blockly.Procedures.procTupleComparator_ = function(ta, tb) {
  var a = ta[1].toLowerCase();
  var b = tb[1].toLowerCase();
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

/**
 * Ensure two identically-named procedures don't exist.
 * @param {string} name Proposed procedure name.
 * @param {!Blockly.Block} block Block to disambiguate.
 * @return {string} Non-colliding name.
 */
Blockly.Procedures.findLegalName = function(name, block) {
  if (block.isInFlyout) {
    // Flyouts can have multiple procedures called 'procedure'.
    return name;
  }
  while (!Blockly.Procedures.isLegalName(name, block.workspace, block)) {
    // Collision with another procedure.
    var r = name.match(/^(.*?)(\d+)$/);
    if (!r) {
      name += '2';
    } else {
      name = r[1] + (parseInt(r[2], 10) + 1);
    }
  }
  return name;
};

/**
 * Does this procedure have a legal name?  Illegal names include names of
 * procedures already defined.
 * @param {string} name The questionable name.
 * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
 * @param {Blockly.Block} opt_exclude Optional block to exclude from
 *     comparisons (one doesn't want to collide with oneself).
 * @return {boolean} True if the name is legal.
 */
Blockly.Procedures.isLegalName = function(name, workspace, opt_exclude) {
  var blocks = workspace.getAllBlocks();
  // Iterate through every block and check the name.
  for (var x = 0; x < blocks.length; x++) {
      if (blocks[x] == opt_exclude) {
          continue;
      }
      var func;
      if (blocks[x].type == 'procedures_defreturn' || blocks[x].type == 'procedures_defnoreturn') {
          func = blocks[x].getProcedureDef;
      }
      else if (blocks[x].type == 'structure_define') {
          func = blocks[x].getName;
      }
      else {
          func = blocks[x].getDeclare;
      }

      if (func) {
          var procName = func.call(blocks[x]);

          // for function, structures
          if(func == blocks[x].getProcedureDef) {
              if (Blockly.Names.equals(procName[1], name)) {
                  return false;
              }
          }

          // for variables, pointer, array
          else if (Blockly.Names.equals(procName[0], name)) {
              return false;
          }
      }
  }
  return true;
};

/**
 * Rename a procedure.  Called by the editable field.
 * @param {string} text The proposed new name.
 * @return {string} The accepted name.
 * @this {!Blockly.FieldVariable}
 */
Blockly.Procedures.rename = function(text) {
  // Strip leading and trailing whitespace.  Beyond this, all names are legal.
  text = text.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');

  // Ensure two identically-named procedures don't exist.
  text = Blockly.Procedures.findLegalName(text, this.sourceBlock_);
  // Rename any callers.
  var blocks = this.sourceBlock_.workspace.getAllBlocks();
  for (var x = 0; x < blocks.length; x++) {
    var func = blocks[x].renameProcedure;
    if (func) {
      func.call(blocks[x], this.text_, text);
    }
  }
    text = Blockly.Names.prototype.safeName_(text);

    return text;
};

/**
 * Construct the blocks required by the flyout for the procedure category.
 * @param {!Array.<!Blockly.Block>} blocks List of blocks to show.
 * @param {!Array.<number>} gaps List of widths between blocks.
 * @param {number} margin Standard margin width for calculating gaps.
 * @param {!Blockly.Workspace} workspace The flyout's workspace.
 */
Blockly.Procedures.flyoutCategory = function(blocks, gaps, margin, workspace) {
  if (Blockly.Blocks['procedures_defnoreturn']) {
    var block = Blockly.Block.obtain(workspace, 'procedures_defnoreturn');
      block.initSvg();
    blocks.push(block);
    gaps.push(margin * 2);
  }
  if (Blockly.Blocks['procedures_defreturn']) {
    var block = Blockly.Block.obtain(workspace, 'procedures_defreturn');
    block.initSvg();
    blocks.push(block);
    gaps.push(margin * 2);
  }
  if (Blockly.Blocks['procedures_return']) {
      var block = Blockly.Block.obtain(workspace, 'procedures_return');
      block.initSvg();
      blocks.push(block);
      gaps.push(margin * 2);
  }
  if (Blockly.Blocks['main_block']) {
    var block = Blockly.Block.obtain(workspace, 'main_block');
    block.initSvg();
    blocks.push(block);
    gaps.push(margin * 2);
  }
  if (gaps.length) {
    // Add slightly larger gap between system blocks and user calls.
    gaps[gaps.length - 1] = margin * 3;
  }

  function populateProcedures(procedureList, templateName) {
    for (var x = 0; x < procedureList.length; x++) {
      var block = Blockly.Block.obtain(workspace, templateName);
      block.setFieldValue(procedureList[x][1], 'NAME');
      var tempIds = [];
      for (var t = 0; t < procedureList[x][3].length; t++) {
        tempIds[t] = 'ARG' + t;
      }
      block.setProcedureParameters(procedureList[x][3], procedureList[x][4], procedureList[x][5], procedureList[x][6], tempIds);
      block.initSvg();
      blocks.push(block);
      gaps.push(margin * 2);
    }
  }

  var tuple = Blockly.Procedures.allProcedures();
  populateProcedures(tuple[0], 'procedures_callnoreturn');
  populateProcedures(tuple[1], 'procedures_callreturn');
};

/**
 * Find all the callers of a named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to find callers in.
 * @return {!Array.<!Blockly.Block>} Array of caller blocks.
 */
Blockly.Procedures.getCallers = function(name, workspace) {
  var callers = [];
  var blocks = workspace.getAllBlocks();
  // Iterate through every block and check the name.
  for (var x = 0; x < blocks.length; x++) {
    var func = blocks[x].getProcedureCall;
    if (func) {
      var procName = func.call(blocks[x]);
      // Procedure name may be null if the block is only half-built.
      if (procName && Blockly.Names.equals(procName, name)) {
        callers.push(blocks[x]);
      }
    }
  }
  return callers;
};

/**
 * When a procedure definition is disposed of, find and dispose of all its
 *     callers.
 * @param {string} name Name of deleted procedure definition.
 * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
 */
Blockly.Procedures.disposeCallers = function(name, workspace) {
  var callers = Blockly.Procedures.getCallers(name, workspace);
  for (var x = 0; x < callers.length; x++) {
    callers[x].dispose(true, false);
  }
};

/**
 * When a procedure definition changes its parameters, find and edit all its
 * callers.
 * @param {string} name Name of edited procedure definition.
 * @param {!Blockly.Workspace} workspace The workspace to delete callers from.
 * @param {!Array.<string>} paramNames Array of new parameter names.
 * @param {!Array.<string>} paramIds Array of unique parameter IDs.
 */
Blockly.Procedures.mutateCallers = function(name, types, workspace,
  paramNames, paramTypes, paramDist, paramSpec, paramIds) {
  var callers = Blockly.Procedures.getCallers(name, workspace);
  for (var x = 0; x < callers.length; x++) {
    callers[x].setProcedureParameters(paramNames, paramTypes, paramDist, paramSpec, paramIds);
  }
};

/**
 * Find the definition block for the named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to search.
 * @return {Blockly.Block} The procedure definition block, or null not found.
 */
Blockly.Procedures.getDefinition = function(name, workspace) {
  var blocks = workspace.getAllBlocks();
  for (var x = 0; x < blocks.length; x++) {
    var func = blocks[x].getProcedureDef;
    if (func) {
      var tuple = func.call(blocks[x]);
      if (tuple && Blockly.Names.equals(tuple[1], name)) {
        return blocks[x];
      }
    }
  }
  return null;
};

Blockly.Procedures.typeCheck = function() {
  var type = ['int', 'float', 'double', 'long', 'short', 'long', 'char'];
  var pointer_iteration = ['Normal', 'Double', 'Triple'];
};
/**
 * Check return value is proper type in that function
 * @param {string} returnType Return type of function
 * @param {string, integer, float, double, etc} returnValue Actual return value of function
 */
Blockly.Procedures.returnTypeCheck = function(returnType, returnValue) {
  var available = true;

  //if return value is not proper, block show the warning meesage
  if (!available) {
    Blockly.Block.setWarningText('Warning: return value is not proper.\nPlease confirm the return type');
  }
};

Blockly.Procedures.getTypePlusArgs = function(block) {
    var args = [];
    var argTypes = [];
    var argDist = [];
    var argSpec = [];
    var typePlusArgs = [];

    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.cpp.variableDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
        argTypes[x] = block.types_[x];
        argDist[x] = block.dist_[x];
        argSpec[x] = block.spec_[x];
        if(argDist[x] == 'v'){
            typePlusArgs[x] = argTypes[x] + ' ' + args[x];
        }
        else if(argDist[x] =='a'){
            if(argSpec[x][0] == 1)
                typePlusArgs[x] = argTypes[x] + ' ' + args[x] + '[' + argSpec[x][1] + ']';
            else if(argSpec[x][0] == 2)
                typePlusArgs[x] = argTypes[x] + ' ' + args[x] + '[' + argSpec[x][1] + ']' + '[' + argSpec[x][2] + ']';
            else if(argSpec[x][0] == 3)
                typePlusArgs[x] = argTypes[x] + ' ' + args[x] + '[' + argSpec[x][1] + ']' + '[' + argSpec[x][2] + ']' + '[' + argSpec[x][2] + ']';
        }
        else if(argDist[x] =='p'){
            typePlusArgs[x] = argTypes[x] + argSpec[x] + ' ' + args[x];
        }
    }
    return typePlusArgs;
};