/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating cpp for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.cpp.logic');

goog.require('Blockly.cpp');


Blockly.cpp['controls_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var argument = Blockly.cpp.valueToCode(block, 'IF' + n,
    Blockly.cpp.ORDER_NONE) || '0';
  var branch = Blockly.cpp.statementToCode(block, 'DO' + n);
  var code = 'if (' + argument + ') {\n' + branch + '}';
  for (n = 1; n <= block.elseifCount_; n++) {
    argument = Blockly.cpp.valueToCode(block, 'IF' + n,
      Blockly.cpp.ORDER_NONE) || '0';
    branch = Blockly.cpp.statementToCode(block, 'DO' + n);
    code += ' else if (' + argument + ') {\n' + branch + '}';
  }
  if (block.elseCount_) {
    branch = Blockly.cpp.statementToCode(block, 'ELSE');
    code += ' else {\n' + branch + '}';
  }
  return code + '\n';
};

Blockly.cpp['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
    Blockly.cpp.ORDER_EQUALITY : Blockly.cpp.ORDER_RELATIONAL;
  var argument0 = Blockly.cpp.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.cpp.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.cpp['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
  var order = (operator == '&&') ? Blockly.cpp.ORDER_LOGICAL_AND :
    Blockly.cpp.ORDER_LOGICAL_OR;
  var argument0 = Blockly.cpp.valueToCode(block, 'A', order);
  var argument1 = Blockly.cpp.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = '0';
    argument1 = '0';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == '&&') ? '1' : '0';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.cpp['logic_negate'] = function(block) {
  // Negation.
  var order = Blockly.cpp.ORDER_LOGICAL_NOT;
  var argument0 = Blockly.cpp.valueToCode(block, 'BOOL', order) ||
    '1';
  var code = '!' + argument0;
  return [code, order];
};

Blockly.cpp['logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? '1' : '0';
  return [code, Blockly.cpp.ORDER_ATOMIC];
};

Blockly.cpp['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.cpp.ORDER_ATOMIC];
};

Blockly.cpp['logic_ternary'] = function(block) {
  // Ternary operator.
  var value_if = Blockly.cpp.valueToCode(block, 'IF',
    Blockly.cpp.ORDER_CONDITIONAL) || '0';
  var value_then = Blockly.cpp.valueToCode(block, 'THEN',
    Blockly.cpp.ORDER_CONDITIONAL) || 'null';
  var value_else = Blockly.cpp.valueToCode(block, 'ELSE',
    Blockly.cpp.ORDER_CONDITIONAL) || 'null';
  var code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.cpp.ORDER_CONDITIONAL];
};

Blockly.cpp['controls_switch'] = function(block) {
  var n = 0;
  var condition = Blockly.cpp.valueToCode(block, 'SWITCH', Blockly.cpp.ORDER_NONE) || '0';
  var argument = Blockly.cpp.valueToCode(block, 'CASE' + n,
    Blockly.cpp.ORDER_NONE) || n;
  var branch = Blockly.cpp.statementToCode(block, 'DO' + n);
    var defaultBranch = Blockly.cpp.statementToCode(block, 'DEFAULT');
  var code = 'switch (' + condition + ') {\ndefault :\n' + defaultBranch +'\ncase ' + argument + ' : \n'+ branch;
  for (n = 1; n <= block.caseCount_; n++) {
    argument = Blockly.cpp.valueToCode(block, 'CASE' + n,
      Blockly.cpp.ORDER_NONE) || n;
    branch = Blockly.cpp.statementToCode(block, 'DO' + n);
    code += '\ncase ' + argument + ' : ' + '\n' + branch;
  }
  return code + '\n';
};

Blockly.cpp['controls_switch_break'] = function(block) {
    return 'break;\n';
}