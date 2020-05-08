'use strict';

goog.provide('Blockly.cpp.string');

goog.require('Blockly.cpp');

Blockly.cpp['library_string_strlen'] = function(block) {
    var code;
    var arg = Blockly.cpp.valueToCode(block, 'VAR',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    Blockly.cpp.definitions_['include_cpp_string'] =
        '#include <string.h>';
    code = 'strlen(' + arg + ')';
    return [code, Blockly.cpp.ORDER_NONE];
};

Blockly.cpp['library_string_strcat'] = function(block) {
    var code;
    var arg1 = Blockly.cpp.valueToCode(block, 'STR1',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    var arg2 = Blockly.cpp.valueToCode(block, 'STR2',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    Blockly.cpp.definitions_['include_cpp_string'] =
        '#include <string.h>';
    code = 'strcat(' + arg1 + ', '+ arg2 + ')';
    return [code, Blockly.cpp.ORDER_NONE];
};

Blockly.cpp['library_string_strcpy'] = function(block) {
    var code;
    var arg1 = Blockly.cpp.valueToCode(block, 'STR1',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    var arg2 = Blockly.cpp.valueToCode(block, 'STR2',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    Blockly.cpp.definitions_['include_cpp_string'] =
        '#include <string.h>';
    code = 'strcpy(' + arg2 + ', '+ arg1 + ')';
    return [code, Blockly.cpp.ORDER_NONE];
};

Blockly.cpp['library_string_strcmp'] = function(block) {
    var code;
    var arg1 = Blockly.cpp.valueToCode(block, 'STR1',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    var arg2 = Blockly.cpp.valueToCode(block, 'STR2',
            Blockly.cpp.ORDER_NONE) || '\"\"';
    Blockly.cpp.definitions_['include_cpp_string'] =
        '#include <string.h>';
    code = 'strcmp(' + arg1 + ', '+ arg2 + ')';
    return [code, Blockly.cpp.ORDER_NONE];
};