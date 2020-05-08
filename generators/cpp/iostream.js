'use strict';

goog.provide('Blockly.cpp.iostream');

goog.require('Blockly.cpp');

Blockly.cpp['library_iostream_cout'] = function(block) {
    // Print statement
    var code = 'cout';

    for (var n = 0; n <= block.printAddCount_; n++) {
      var argument = Blockly.cpp.valueToCode(block, 'VAR' + n,
          Blockly.cpp.ORDER_NONE) || '';

        var childConnection = block.inputList[n].connection;
        var childBlock = childConnection.targetBlock();

        if(childBlock) {
          var childBlockType = childBlock.type;
          if(childBlockType == 'library_iostream_text') {
            code += ' << \"' + argument + '\"';
          } else {
            code += ' << ' + argument;
          }
        }
    }

    Blockly.cpp.definitions_['include_cpp_iostream'] =
        '#include <iostream>';
    return code + ';\n';
};

Blockly.cpp['library_iostream_text'] = function(block) {
    // Text value.
    var code = Blockly.cpp.quote_(block.getFieldValue('TEXT'));
    if (block.getParent()
        && (block.getParent().type == 'library_iostream_cout'
        || block.getParent().type == 'define_declare'
        || block.getParent().type == 'comment')) {
        return [code, Blockly.cpp.ORDER_ATOMIC];
    } else if (code.length == 1) {
        code = '\'' + code + '\'';
    } else {
        code = '\"' + code + '\"';
    }
    return [code, Blockly.cpp.ORDER_ATOMIC];
};

Blockly.cpp['library_iostream_newLine'] = function(block) {
    // new line block for '\n'
    var code = '\\n';
    if (block.getParent()
        && (block.getParent().type == 'library_iostream_cout')) {
      code = 'endl';
      return [code, Blockly.cpp.ORDER_ATOMIC];
    }
    return [code, Blockly.cpp.ORDER_NONE];
};

Blockly.cpp['library_iostream_cin'] = function(block) {
    // Scan statement
    var code = 'cin';

    for (var n = 0; n <= block.scanAddCount_; n++) {
      var argument = Blockly.cpp.valueToCode(block, 'VAR' + n,
            Blockly.cpp.ORDER_NONE) || '';
      if(argument.length) {
        code += ' >> ' + argument;
      }
    } // for loop end


    Blockly.cpp.definitions_['include_cpp_iostream'] =
        '#include <iostream>';
    return code + ';\n';
};

Blockly.cpp['comment'] = function(block) {
    // Comment statement
    var argument = '';
    var code = '';
    var numOfLine = 0;

    for (var n = 0; n <= block.commentAddCount_; n++) {
        argument = Blockly.cpp.valueToCode(block, 'VAR' + n,
            Blockly.cpp.ORDER_NONE) || '';

        var childConnection = block.inputList[n].connection;
        var childBlock = childConnection.targetBlock();

        if(childBlock){
            var childBlockType = childBlock.type;

            if (childBlockType != 'library_stdio_text')
            {
                if (childConnection.isSuperior()) {
                    childConnection.targetBlock().setParent(null);
                } else {
                    childConnection.sourceBlock_.setParent(null);
                }
                // Bump away.
                childConnection.sourceBlock_.bumpNeighbours_();
            }
        }
        if(argument != ''){
            code += argument + '\n';
        }
        numOfLine += 1;
    } // for loop end

    if (numOfLine == 1){
        if(argument != '')
            code = '//' + code;
        else
            code = '//\n';
    } else {
        code = '/*\n' + code + '*/\n';
    }

    return code;
};