/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */
 
/// add_comment
Blockly.Msg.ADD_COMMENT = "Add Comment";
/// auth
Blockly.Msg.AUTH = "Please authorize this app to enable your work to be saved and to allow it to be shared by you.";
/// change_value_title
Blockly.Msg.CHANGE_VALUE_TITLE = "Change value:";
/// chat
Blockly.Msg.CHAT = "Chat with your collaborator by typing in this box!";
/// collapse_all
Blockly.Msg.COLLAPSE_ALL = "Collapse Blocks";
/// collapse_block
Blockly.Msg.COLLAPSE_BLOCK = "Collapse Block";
/// colour_blend_colour1
Blockly.Msg.COLOUR_BLEND_COLOUR1 = "colour 1";
/// colour_blend_colour2
Blockly.Msg.COLOUR_BLEND_COLOUR2 = "colour 2";
/// colour_blend_helpurl
Blockly.Msg.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
/// colour_blend_ratio
Blockly.Msg.COLOUR_BLEND_RATIO = "ratio";
/// colour_blend_title
Blockly.Msg.COLOUR_BLEND_TITLE = "blend";
/// colour_blend_tooltip
Blockly.Msg.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
/// colour_picker_helpurl
Blockly.Msg.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
/// colour_picker_tooltip
Blockly.Msg.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
/// colour_random_helpurl
Blockly.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
/// colour_random_title
Blockly.Msg.COLOUR_RANDOM_TITLE = "random colour";
/// colour_random_tooltip
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
/// colour_rgb_blue
Blockly.Msg.COLOUR_RGB_BLUE = "blue";
/// colour_rgb_green
Blockly.Msg.COLOUR_RGB_GREEN = "green";
/// colour_rgb_helpurl
Blockly.Msg.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
/// colour_rgb_red
Blockly.Msg.COLOUR_RGB_RED = "red";
/// colour_rgb_title
Blockly.Msg.COLOUR_RGB_TITLE = "colour with";
/// colour_rgb_tooltip
Blockly.Msg.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue.  All values must be between 0 and 100.";
/// controls_flow_statements_helpurl
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://code.google.com/p/blockly/wiki/Loops#Loop_Termination_Blocks";
/// controls_flow_statements_operator_break
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
/// controls_flow_statements_operator_continue
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
/// controls_flow_statements_tooltip_break
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
/// controls_flow_statements_tooltip_continue
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
/// controls_flow_statements_warning
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
/// controls_foreach_helpurl
Blockly.Msg.CONTROLS_FOREACH_HELPURL = "https://code.google.com/p/blockly/wiki/Loops#for_each for each block";
/// controls_foreach_input_inlist
Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST = "in list";
/// controls_foreach_input_inlist_tail
Blockly.Msg.CONTROLS_FOREACH_INPUT_INLIST_TAIL = "";
/// controls_foreach_input_item
Blockly.Msg.CONTROLS_FOREACH_INPUT_ITEM = "for each item";
/// controls_foreach_tooltip
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
/// controls_for_helpurl
Blockly.Msg.CONTROLS_FOR_HELPURL = "https://code.google.com/p/blockly/wiki/Loops#count_with";
/// controls_for_input_from_to_by
Blockly.Msg.CONTROLS_FOR_INPUT_FROM_TO_BY = "from %1 to %2 by %3";
/// controls_for_input_with
Blockly.Msg.CONTROLS_FOR_INPUT_WITH = "repeat with";
/// controls_for_tooltip
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Have the variable %1 take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
/// controls_if_elseif_tooltip
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
/// controls_if_else_tooltip
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
/// controls_if_helpurl
Blockly.Msg.CONTROLS_IF_HELPURL = "https://code.google.com/p/blockly/wiki/If_Then";
/// controls_if_if_tooltip
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
/// controls_if_msg_else
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "else";
/// controls_if_msg_elseif
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "else if";
/// controls_if_msg_if
Blockly.Msg.CONTROLS_IF_MSG_IF = "if";
/// controls_if_tooltip_1
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
/// controls_if_tooltip_2
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements.  Otherwise, do the second block of statements.";
/// controls_if_tooltip_3
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements.  Otherwise, if the second value is true, do the second block of statements.";
/// controls_if_tooltip_4
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements.  Otherwise, if the second value is true, do the second block of statements.  If none of the values are true, do the last block of statements.";
/// controls_repeat_helpurl
Blockly.Msg.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
/// controls_repeat_input_do
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "do";
/// controls_repeat_title
Blockly.Msg.CONTROLS_REPEAT_TITLE = "repeat %1 times";
/// controls_repeat_title_repeat
Blockly.Msg.CONTROLS_REPEAT_TITLE_REPEAT = "repeat";
/// controls_repeat_title_times
Blockly.Msg.CONTROLS_REPEAT_TITLE_TIMES = "times";
/// controls_repeat_tooltip
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
/// controls_whileuntil_helpurl
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://code.google.com/p/blockly/wiki/Loops#repeat";
/// controls_whileuntil_operator_until
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
/// controls_whileuntil_operator_while
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
/// controls_whileuntil_tooltip_until
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
/// controls_whileuntil_tooltip_while
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
/// delete_block
Blockly.Msg.DELETE_BLOCK = "Delete Block";
/// delete_x_blocks
Blockly.Msg.DELETE_X_BLOCKS = "Delete %1 Blocks";
/// disable_block
Blockly.Msg.DISABLE_BLOCK = "Disable Block";
/// duplicate_block
Blockly.Msg.DUPLICATE_BLOCK = "Duplicate";
/// enable_block
Blockly.Msg.ENABLE_BLOCK = "Enable Block";
/// expand_all
Blockly.Msg.EXPAND_ALL = "Expand Blocks";
/// expand_block
Blockly.Msg.EXPAND_BLOCK = "Expand Block";
/// external_inputs
Blockly.Msg.EXTERNAL_INPUTS = "External Inputs";
/// help
Blockly.Msg.HELP = "Help";
/// inline_inputs
Blockly.Msg.INLINE_INPUTS = "Inline Inputs";
/// lists_create_empty_helpurl
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://en.wikipedia.org/wiki/Linked_list#Empty_lists";
/// lists_create_empty_title
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "create empty list";
/// lists_create_empty_tooltip
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
/// lists_create_with_container_title_add
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
/// lists_create_with_container_tooltip
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
/// lists_create_with_input_with
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
/// lists_create_with_item_tooltip
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
/// lists_create_with_tooltip
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
/// lists_get_index_first
Blockly.Msg.LISTS_GET_INDEX_FIRST = "first";
/// lists_get_index_from_end
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# from end";
/// lists_get_index_from_start
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#";
/// lists_get_index_get
Blockly.Msg.LISTS_GET_INDEX_GET = "get";
/// lists_get_index_get_remove
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
/// lists_get_index_last
Blockly.Msg.LISTS_GET_INDEX_LAST = "last";
/// lists_get_index_random
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "random";
/// lists_get_index_remove
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "remove";
/// lists_get_index_tail
Blockly.Msg.LISTS_GET_INDEX_TAIL = "";
/// lists_get_index_tooltip_get_first
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
/// lists_get_index_tooltip_get_from_end
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = "Returns the item at the specified position in a list.  #1 is the last item.";
/// lists_get_index_tooltip_get_from_start
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = "Returns the item at the specified position in a list.  #1 is the first item.";
/// lists_get_index_tooltip_get_last
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
/// lists_get_index_tooltip_get_random
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
/// lists_get_index_tooltip_get_remove_first
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
/// lists_get_index_tooltip_get_remove_from_end
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = "Removes and returns the item at the specified position in a list.  #1 is the last item.";
/// lists_get_index_tooltip_get_remove_from_start
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = "Removes and returns the item at the specified position in a list.  #1 is the first item.";
/// lists_get_index_tooltip_get_remove_last
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
/// lists_get_index_tooltip_get_remove_random
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
/// lists_get_index_tooltip_remove_first
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
/// lists_get_index_tooltip_remove_from_end
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = "Removes the item at the specified position in a list.  #1 is the last item.";
/// lists_get_index_tooltip_remove_from_start
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = "Removes the item at the specified position in a list.  #1 is the first item.";
/// lists_get_index_tooltip_remove_last
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
/// lists_get_index_tooltip_remove_random
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
/// lists_get_sublist_end_from_end
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
/// lists_get_sublist_end_from_start
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "to #";
/// lists_get_sublist_end_last
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "to last";
/// lists_get_sublist_helpurl
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#Getting_a_sublist";
/// lists_get_sublist_start_first
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
/// lists_get_sublist_start_from_end
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
/// lists_get_sublist_start_from_start
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
/// lists_get_sublist_tail
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";
/// lists_get_sublist_tooltip
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
/// lists_index_of_first
Blockly.Msg.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
/// lists_index_of_helpurl
Blockly.Msg.LISTS_INDEX_OF_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#Getting_Items_from_a_List";
/// lists_index_of_last
Blockly.Msg.LISTS_INDEX_OF_LAST = "find last occurrence of item";
/// lists_index_of_tooltip
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list.  Returns 0 if text is not found.";
/// lists_inlist
Blockly.Msg.LISTS_INLIST = "in list";
/// lists_is_empty_helpurl
Blockly.Msg.LISTS_IS_EMPTY_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#is_empty";
/// lists_is_empty_title
Blockly.Msg.LISTS_IS_EMPTY_TITLE = "%1 is empty";
/// lists_length_helpurl
Blockly.Msg.LISTS_LENGTH_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#length_of";
/// lists_length_title
Blockly.Msg.LISTS_LENGTH_TITLE = "length of %1";
/// lists_length_tooltip
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
/// lists_repeat_helpurl
Blockly.Msg.LISTS_REPEAT_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#create_list_with";
/// lists_repeat_title
Blockly.Msg.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
/// lists_repeat_tooltip
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
/// lists_set_index_helpurl
Blockly.Msg.LISTS_SET_INDEX_HELPURL = "https://code.google.com/p/blockly/wiki/Lists#in_list_..._set";
/// lists_set_index_input_to
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "as";
/// lists_set_index_insert
Blockly.Msg.LISTS_SET_INDEX_INSERT = "insert at";
/// lists_set_index_set
Blockly.Msg.LISTS_SET_INDEX_SET = "set";
/// lists_set_index_tooltip_insert_first
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
/// lists_set_index_tooltip_insert_from_end
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = "Inserts the item at the specified position in a list.  #1 is the last item.";
/// lists_set_index_tooltip_insert_from_start
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = "Inserts the item at the specified position in a list.  #1 is the first item.";
/// lists_set_index_tooltip_insert_last
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
/// lists_set_index_tooltip_insert_random
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
/// lists_set_index_tooltip_set_first
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
/// lists_set_index_tooltip_set_from_end
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = "Sets the item at the specified position in a list.  #1 is the last item.";
/// lists_set_index_tooltip_set_from_start
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = "Sets the item at the specified position in a list.  #1 is the first item.";
/// lists_set_index_tooltip_set_last
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
/// lists_set_index_tooltip_set_random
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
/// lists_tooltip
Blockly.Msg.LISTS_TOOLTIP = "Returns true if the list is empty.";
/// logic_boolean_false
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "false";
/// logic_boolean_helpurl
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = "https://code.google.com/p/blockly/wiki/True_False";
/// logic_boolean_tooltip
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
/// logic_boolean_true
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "true";
/// logic_compare_helpurl
Blockly.Msg.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
/// logic_compare_tooltip_eq
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
/// logic_compare_tooltip_gt
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
/// logic_compare_tooltip_gte
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
/// logic_compare_tooltip_lt
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
/// logic_compare_tooltip_lte
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
/// logic_compare_tooltip_neq
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
/// logic_negate_helpurl
Blockly.Msg.LOGIC_NEGATE_HELPURL = "https://en.wikipedia.org/wiki/Negation";
/// logic_negate_title
Blockly.Msg.LOGIC_NEGATE_TITLE = "not %1";
/// logic_negate_tooltip
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false.  Returns false if the input is true.";
/// logic_null
Blockly.Msg.LOGIC_NULL = "null";
/// logic_null_helpurl
Blockly.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
/// logic_null_tooltip
Blockly.Msg.LOGIC_NULL_TOOLTIP = "Returns null.";
/// logic_operation_and
Blockly.Msg.LOGIC_OPERATION_AND = "and";
/// logic_operation_helpurl
Blockly.Msg.LOGIC_OPERATION_HELPURL = "https://code.google.com/p/blockly/wiki/And_Or";
/// logic_operation_or
Blockly.Msg.LOGIC_OPERATION_OR = "or";
/// logic_operation_tooltip_and
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
/// logic_operation_tooltip_or
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
/// logic_ternary_condition
Blockly.Msg.LOGIC_TERNARY_CONDITION = "test";
/// logic_ternary_helpurl
Blockly.Msg.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
/// logic_ternary_if_false
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "if false";
/// logic_ternary_if_true
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "if true";
/// logic_ternary_tooltip
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
/// math_addition_symbol
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";
/// math_arithmetic_helpurl
Blockly.Msg.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
/// math_arithmetic_tooltip_add
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
/// math_arithmetic_tooltip_divide
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
/// math_arithmetic_tooltip_minus
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
/// math_arithmetic_tooltip_multiply
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
/// math_arithmetic_tooltip_power
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
/// math_change_helpurl
Blockly.Msg.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
/// math_change_input_by
Blockly.Msg.MATH_CHANGE_INPUT_BY = "by";
/// math_change_title_change
Blockly.Msg.MATH_CHANGE_TITLE_CHANGE = "change";
/// math_change_tooltip
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
/// math_constant_helpurl
Blockly.Msg.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
/// math_constant_tooltip
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
/// math_constrain_helpurl
Blockly.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
/// math_constrain_title
Blockly.Msg.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
/// math_constrain_tooltip
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
/// math_division_symbol
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";
/// math_is_divisible_by
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "is divisible by";
/// math_is_even
Blockly.Msg.MATH_IS_EVEN = "is even";
/// math_is_negative
Blockly.Msg.MATH_IS_NEGATIVE = "is negative";
/// math_is_odd
Blockly.Msg.MATH_IS_ODD = "is odd";
/// math_is_positive
Blockly.Msg.MATH_IS_POSITIVE = "is positive";
/// math_is_prime
Blockly.Msg.MATH_IS_PRIME = "is prime";
/// math_is_tooltip
Blockly.Msg.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number.  Returns true or false.";
/// math_is_whole
Blockly.Msg.MATH_IS_WHOLE = "is whole";
/// math_modulo_helpurl
Blockly.Msg.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
/// math_modulo_title
Blockly.Msg.MATH_MODULO_TITLE = "remainder of %1 ÷ %2";
/// math_modulo_tooltip
Blockly.Msg.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
/// math_multiplication_symbol
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";
/// math_number_helpurl
Blockly.Msg.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
/// math_number_tooltip
Blockly.Msg.MATH_NUMBER_TOOLTIP = "A number.";
/// math_onlist_helpurl
Blockly.Msg.MATH_ONLIST_HELPURL = "";
/// math_onlist_operator_average
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
/// math_onlist_operator_max
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "max of list";
/// math_onlist_operator_median
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
/// math_onlist_operator_min
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "min of list";
/// math_onlist_operator_mode
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "modes of list";
/// math_onlist_operator_random
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
/// math_onlist_operator_std_dev
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
/// math_onlist_operator_sum
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "sum of list";
/// math_onlist_tooltip_average
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
/// math_onlist_tooltip_max
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
/// math_onlist_tooltip_median
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
/// math_onlist_tooltip_min
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
/// math_onlist_tooltip_mode
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
/// math_onlist_tooltip_random
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
/// math_onlist_tooltip_std_dev
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
/// math_onlist_tooltip_sum
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
/// math_power_symbol
Blockly.Msg.MATH_POWER_SYMBOL = "^";
/// math_random_float_helpurl
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
/// math_random_float_title_random
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
/// math_random_float_tooltip
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
/// math_random_int_helpurl
Blockly.Msg.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
/// math_random_int_title
Blockly.Msg.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
/// math_random_int_tooltip
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
/// math_round_helpurl
Blockly.Msg.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
/// math_round_operator_round
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "round";
/// math_round_operator_ceil
Blockly.Msg.MATH_ROUND_OPERATOR_CEIL = "round up";
/// math_round_operator_floor
Blockly.Msg.MATH_ROUND_OPERATOR_FLOOR = "round down";
/// math_round_operator_trunc
Blockly.Msg.MATH_ROUND_OPERATOR_TRUNC = "truncate";
/// math_round_tooltip
Blockly.Msg.MATH_ROUND_TOOLTIP = "Round a number up or down or truncate.";
/// math_single_helpurl
Blockly.Msg.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
/// math_single_op_absolute
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "absolute";
/// math_single_op_root
Blockly.Msg.MATH_SINGLE_OP_ROOT = "square root";
/// math_single_tooltip_abs
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
/// math_single_tooltip_exp
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
/// math_single_tooltip_log
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG = "Return the natural logarithm of a number.";
/// math_single_tooltip_log10
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
/// math_single_tooltip_log2
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG2 = "Return the base 2 logarithm of a number.";
/// math_single_tooltip_neg
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
/// math_single_tooltip_pow
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW = "Return base to the power of a number.";
/// math_single_tooltip_root
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
/// math_subtraction_symbol
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";
/// math_trig_acos
Blockly.Msg.MATH_TRIG_ACOS = "acos";
/// math_trig_asin
Blockly.Msg.MATH_TRIG_ASIN = "asin";
/// math_trig_atan
Blockly.Msg.MATH_TRIG_ATAN = "atan";
/// math_trig_cos
Blockly.Msg.MATH_TRIG_COS = "cos";
/// math_trig_helpurl
Blockly.Msg.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
/// math_trig_sin
Blockly.Msg.MATH_TRIG_SIN = "sin";
/// math_trig_tan
Blockly.Msg.MATH_TRIG_TAN = "tan";
/// math_trig_log
Blockly.Msg.MATH_TRIG_LOG = "log";
/// math_trig_log10
Blockly.Msg.MATH_TRIG_LOG10 = "log10";
/// math_trig_log2
Blockly.Msg.MATH_TRIG_LOG2 = "log2";
/// math_trig_tooltip_acos
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
/// math_trig_tooltip_asin
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
/// math_trig_tooltip_atan
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
/// math_trig_tooltip_cos
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
/// math_trig_tooltip_sin
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
/// math_trig_tooltip_tan
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
/// me
Blockly.Msg.ME = "Me";
/// new_variable
Blockly.Msg.NEW_VARIABLE = "New variable...";
/// new_variable_title
Blockly.Msg.NEW_VARIABLE_TITLE = "New variable name:";
/// ordinal_number_suffix
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";
/// procedures_allow_statements
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
/// procedures_before_params
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "with:";
/// procedures_callnoreturn_call
Blockly.Msg.PROCEDURES_CALLNORETURN_CALL = "";
/// procedures_callnoreturn_helpurl
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
/// procedures_callnoreturn_tooltip
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
/// procedures_callreturn_helpurl
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
/// procedures_callreturn_tooltip
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
/// procedures_call_before_params
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
/// procedures_create_do
Blockly.Msg.PROCEDURES_CREATE_DO = "Create '%1'";
/// procedures_defnoreturn_do
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
/// procedures_defnoreturn_helpurl
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
/// procedures_defnoreturn_procedure
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
/// procedures_defnoreturn_title
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "Name";
/// procedures_defnoreturn_tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
/// procedures_defreturn_helpurl
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
/// procedures_defreturn_return
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "return";
/// procedures_defreturn_tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
/// procedures_def_duplicate_warning
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
/// procedures_highlight_def
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
/// procedures_ifreturn_tooltip
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
/// procedures_ifreturn_warning
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
/// procedures_mutatorarg_title
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = "input name:";
/// procedures_mutatorarg_tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
/// procedures_mutatorcontainer_title
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
/// procedures_mutatorcontainer_tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
/// remove_comment
Blockly.Msg.REMOVE_COMMENT = "Remove Comment";
/// rename_variable
Blockly.Msg.RENAME_VARIABLE = "Rename variable...";
/// rename_variable_title
Blockly.Msg.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
/// text_append_appendtext
Blockly.Msg.TEXT_APPEND_APPENDTEXT = "append text";
/// text_append_helpurl
Blockly.Msg.TEXT_APPEND_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Text_modification";
/// text_append_to
Blockly.Msg.TEXT_APPEND_TO = "to";
/// text_append_tooltip
Blockly.Msg.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
/// text_changecase_helpurl
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Adjusting_text_case";
/// text_changecase_operator_lowercase
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
/// text_changecase_operator_titlecase
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
/// text_changecase_operator_uppercase
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
/// text_changecase_tooltip
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
/// text_charat_first
Blockly.Msg.TEXT_CHARAT_FIRST = "get first letter";
/// text_charat_from_end
Blockly.Msg.TEXT_CHARAT_FROM_END = "get letter # from end";
/// text_charat_from_start
Blockly.Msg.TEXT_CHARAT_FROM_START = "get letter #";
/// text_charat_helpurl
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Extracting_text";
/// text_charat_input_intext
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "in text";
/// text_charat_last
Blockly.Msg.TEXT_CHARAT_LAST = "get last letter";
/// text_charat_random
Blockly.Msg.TEXT_CHARAT_RANDOM = "get random letter";
/// text_charat_tail
Blockly.Msg.TEXT_CHARAT_TAIL = "";
/// text_charat_tooltip
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
/// text_create_join_item_tooltip
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
/// text_create_join_title_join
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
/// text_create_join_tooltip
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
/// text_get_substring_end_from_end
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
/// text_get_substring_end_from_start
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
/// text_get_substring_end_last
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
/// text_get_substring_helpurl
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Extracting_a_region_of_text";
/// text_get_substring_input_in_text
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
/// text_get_substring_start_first
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
/// text_get_substring_start_from_end
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
/// text_get_substring_start_from_start
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
/// text_get_substring_tail
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";
/// text_get_substring_tooltip
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
/// text_indexof_helpurl
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Finding_text";
/// text_indexof_input_intext
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "in text";
/// text_indexof_operator_first
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
/// text_indexof_operator_last
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
/// text_indexof_tail
Blockly.Msg.TEXT_INDEXOF_TAIL = "";
/// text_indexof_tooltip
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of first text in the second text.  Returns 0 if text is not found.";
/// text_isempty_helpurl
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Checking_for_empty_text";
/// text_isempty_title
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 is empty";
/// text_isempty_tooltip
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
/// text_join_helpurl
Blockly.Msg.TEXT_JOIN_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Text_creation";
/// text_join_title_createwith
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
/// text_join_tooltip
Blockly.Msg.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
/// text_length_helpurl
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Text_modification";
/// text_length_title
Blockly.Msg.TEXT_LENGTH_TITLE = "length of %1";
/// text_length_tooltip
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
/// text_print_helpurl
Blockly.Msg.TEXT_PRINT_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Printing_text";
/// text_print_title
Blockly.Msg.TEXT_PRINT_TITLE = "print %1";
/// text_print_tooltip
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
/// text_prompt_helpurl
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Getting_input_from_the_user";
/// text_prompt_tooltip_number
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
/// text_prompt_tooltip_text
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
/// text_prompt_type_number
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
/// text_prompt_type_text
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
/// text_text_helpurl
Blockly.Msg.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
/// text_text_tooltip
Blockly.Msg.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
/// text_trim_helpurl
Blockly.Msg.TEXT_TRIM_HELPURL = "https://code.google.com/p/blockly/wiki/Text#Trimming_%28removing%29_spaces";
/// text_trim_operator_both
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
/// text_trim_operator_left
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
/// text_trim_operator_right
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
/// text_trim_tooltip
Blockly.Msg.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
/// variables_default_name
Blockly.Msg.VARIABLES_DEFAULT_NAME = "item";
/// variables_get_create_set
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
/// variables_get_helpurl
Blockly.Msg.VARIABLES_GET_HELPURL = "https://code.google.com/p/blockly/wiki/Variables#Get";
/// variables_get_tail
Blockly.Msg.VARIABLES_GET_TAIL = "";
/// variables_get_title
Blockly.Msg.VARIABLES_GET_TITLE = "";
/// variables_get_tooltip
Blockly.Msg.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
/// variables_set_create_get
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
/// variables_set_helpurl
Blockly.Msg.VARIABLES_SET_HELPURL = "https://code.google.com/p/blockly/wiki/Variables#Set";
/// variables_set_tail
Blockly.Msg.VARIABLES_SET_TAIL = "to";
/// variables_set_title
Blockly.Msg.VARIABLES_SET_TITLE = "set";
/// variables_set_tooltip
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";

Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.VARIABLES_SET_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.VARIABLES_GET_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_CALLRETURN_CALL = Blockly.Msg.PROCEDURES_CALLNORETURN_CALL;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;

/// stdio_printf_title
Blockly.Msg.STDIO_PRINTF_TITLE = "printf";
/// stdip_printf_mutator_printfadd_title
Blockly.Msg.STDIP_PRINTF_MUTATOR_PRINTFADD_TITLE = "Add";
/// stdio_scanf_title
Blockly.Msg.STDIO_SCANF_TITLE = "scanf";
/// stdip_scanf_mutator_scanfadd_title
Blockly.Msg.STDIP_SCANF_MUTATOR_SCANFADD_TITLE = "Add";
/// stdio_scanf_tooltip
Blockly.Msg.STDIO_SCANF_TOOLTIP = "";
/// stdio_scanf_helpurl
Blockly.Msg.STDIO_SCANF_HELPURL = "https://en.wikipedia.org/wiki/Scanf_format_string";
/// stdio_newline_title
Blockly.Msg.STDIO_NEWLINE_TITLE = "new line";
/// stdio_newline_tooltip
Blockly.Msg.STDIO_NEWLINE_TOOLTIP = "new line character";
/// stdio_newline_helpurl
Blockly.Msg.STDIO_NEWLINE_HELPURL = "https://en.wikipedia.org/wiki/Newline";
/// comment_title
Blockly.Msg.COMMENT_TITLE = "comment";
/// comment_mutator_commentadd_title
Blockly.Msg.COMMENT_MUTATOR_COMMENTADD_TITLE = "Add";
/// comment_tooltip
Blockly.Msg.COMMENT_TOOLTIP = "A 'comment' is a sequence of characters beginning with a forward slash/asterisk combination (/*) that is treated as a single white-space character by the compiler and is otherwise ignored. A comment can include any combination of characters from the representable character set, including newline characters, but excluding the 'end comment' delimiter (*/). Comments can occupy more than one line but cannot be nested. Comments can appear anywhere a white-space character is allowed. Since the compiler treats a comment as a single white-space character, you cannot include comments within tokens. The compiler ignores the characters in the comment. Use comments to document your code.";
/// stdlib_convert_title
Blockly.Msg.STDLIB_CONVERT_TITLE = "Convert string %1 to %2";
/// stdlib_convert_int
Blockly.Msg.STDLIB_CONVERT_INT = "int";
/// stdlib_convert_double
Blockly.Msg.STDLIB_CONVERT_DOUBLE = "double";
/// stdlib_convert_tooltip
Blockly.Msg.STDLIB_CONVERT_TOOLTIP = "Convert stirng to integer or double type.";
/// stdlib_convert_helpurl
Blockly.Msg.STDLIB_CONVERT_HELPURL = "https://en.wikipedia.org/wiki/C_string_handling";
/// stdlib_rand_title
Blockly.Msg.STDLIB_RAND_TITLE = "rand %1";
/// stdlib_rand_tooltip
Blockly.Msg.STDLIB_RAND_TOOLTIP = "assign random number";
/// stdlib_rand_helpurl
Blockly.Msg.STDLIB_RAND_HELPURL = "https://en.wikipedia.org/wiki/C_mathematical_functions#Random_number_generation";
/// stdlib_randscope_title
Blockly.Msg.STDLIB_RANDSCOPE_TITLE = "scope:%1~%2";
/// stdlib_randscope_tooltip
Blockly.Msg.STDLIB_RANDSCOPE_TOOLTIP = "assign scope of random number.";
/// stdlib_randscope_helpurl
Blockly.Msg.STDLIB_RANDSCOPE_HELPURL = "https://en.wikipedia.org/wiki/C_mathematical_functions#Random_number_generation";
/// stdlib_srand_title
Blockly.Msg.STDLIB_SRAND_TITLE = "srand %1";
/// stdlib_malloc_title
Blockly.Msg.STDLIB_MALLOC_TITLE = "malloc %1";
/// stdlib_malloc_tooltip
Blockly.Msg.STDLIB_MALLOC_TOOLTIP = "Dinamic memory allocation";
/// stdlib_malloc_helpurl
Blockly.Msg.STDLIB_MALLOC_HELPURL = "https://en.wikipedia.org/wiki/C_dynamic_memory_allocation";
/// stdlib_sizeofformalloc_title
Blockly.Msg.STDLIB_SIZEOFFORMALLOC_TITLE = "size of %1";
/// stdlib_sizeofformalloc_tooltip
Blockly.Msg.STDLIB_SIZEOFFORMALLOC_TOOLTIP = "return the size by byte";
/// stdlib_sizeofformalloc_helpurl
Blockly.Msg.STDLIB_SIZEOFFORMALLOC_HELPURL = "https://en.wikipedia.org/wiki/Sizeof";
/// stdlib_arithformalloc_title
Blockly.Msg.STDLIB_ARITHFORMALLOC_TITLE = "%1 x %2";
/// stdlib_free_title
Blockly.Msg.STDLIB_FREE_TITLE = "free %1";
/// stdlib_free_tooltip
Blockly.Msg.STDLIB_FREE_TOOLTIP = "deallocate the memory";
/// stdlib_free_helpurl
Blockly.Msg.STDLIB_FREE_HELPURL = "https://en.wikipedia.org/wiki/C_dynamic_memory_allocation";
/// stdlib_exit_title
Blockly.Msg.STDLIB_EXIT_TITLE = "exit %1";
/// stdlib_exit_success
Blockly.Msg.STDLIB_EXIT_SUCCESS = "success";
/// stdlib_exit_failure
Blockly.Msg.STDLIB_EXIT_FAILURE = "failure";
/// stdlib_exit_tooltip
Blockly.Msg.STDLIB_EXIT_TOOLTIP = "Exit.";
/// stdlib_exit_helpurl
Blockly.Msg.STDLIB_EXIT_HELPURL = "https://en.wikipedia.org/wiki/Exit_(system_call)";
/// math_sin_title
Blockly.Msg.MATH_SIN_TITLE = "sin %1";
/// math_cos_title
Blockly.Msg.MATH_COS_TITLE = "cos %1";
/// math_tan_title
Blockly.Msg.MATH_TAN_TITLE = "tan %1";
/// math_pow_title
Blockly.Msg.MATH_POW_TITLE = "pow %1 ^ %2";
/// math_exp_title
Blockly.Msg.MATH_EXP_TITLE = "exp %1";
/// math_sqrt_title
Blockly.Msg.MATH_SQRT_TITLE = "sqrt %1";
/// math_abs_title
Blockly.Msg.MATH_ABS_TITLE = "absolute value%1";
/// math_numcheck_title
Blockly.Msg.MATH_NUMCHECK_TITLE = "%1 is a(an) %2 ?";
/// math_numcheck_isfinite
Blockly.Msg.MATH_NUMCHECK_ISFINITE = "finite value";
/// math_numcheck_isinf
Blockly.Msg.MATH_NUMCHECK_ISINF = "infinite value";
/// math_numcheck_signbit
Blockly.Msg.MATH_NUMCHECK_SIGNBIT = "negative value";
/// math_numcheck_isnan
Blockly.Msg.MATH_NUMCHECK_ISNAN = "NaN value";
/// math_numcheck_tooltip
Blockly.Msg.MATH_NUMCHECK_TOOLTIP = "";
/// math_numcompare_title
Blockly.Msg.MATH_NUMCOMPARE_TITLE = "%1 is %3 than %2";
/// math_numcompare_isgreater
Blockly.Msg.MATH_NUMCOMPARE_ISGREATER = "greater";
/// math_numcompare_isless
Blockly.Msg.MATH_NUMCOMPARE_ISLESS = "less";
/// math_numcompare_isgreq
Blockly.Msg.MATH_NUMCOMPARE_ISGREQ = "greater or equal";
/// math_numcompare_isleeq
Blockly.Msg.MATH_NUMCOMPARE_ISLEEQ = "less or equal";
/// math_numcompare_islegr
Blockly.Msg.MATH_NUMCOMPARE_ISLEGR = "less or greater";
/// math_numcompare_isunorder
Blockly.Msg.MATH_NUMCOMPARE_ISUNORDER = "unordered";
/// math_numcompare_tooltip
Blockly.Msg.MATH_NUMCOMPARE_TOOLTIP = "";
/// string_strlen_title
Blockly.Msg.STRING_STRLEN_TITLE = "string length %1";
/// string_strlen_tooltip
Blockly.Msg.STRING_STRLEN_TOOLTIP = "return length of string";
/// string_strlen_helpurl
Blockly.Msg.STRING_STRLEN_HELPURL = "https://en.wikipedia.org/wiki/C_string_handling";
/// string_strcat_title
Blockly.Msg.STRING_STRCAT_TITLE = "string add %1 and %2";
/// string_strcat_tooltip
Blockly.Msg.STRING_STRCAT_TOOLTIP = "concat two strings";
/// string_strcat_helpurl
Blockly.Msg.STRING_STRCAT_HELPURL = "https://en.wikipedia.org/wiki/C_string_handling";
/// string_strcpy_title
Blockly.Msg.STRING_STRCPY_TITLE = "string copy from %1 to %2";
/// string_strcpy_tooltip
Blockly.Msg.STRING_STRCPY_TOOLTIP = "copy first string into second string";
/// string_strcpy_helpurl
Blockly.Msg.STRING_STRCPY_HELPURL = "https://en.wikipedia.org/wiki/C_string_handling";
/// string_strcmp_title
Blockly.Msg.STRING_STRCMP_TITLE = "string compare %1 and %2";
/// string_strcmp_tooltip
Blockly.Msg.STRING_STRCMP_TOOLTIP = "compare two strings";
/// string_strcmp_helpurl
Blockly.Msg.STRING_STRCMP_HELPURL = "https://en.wikipedia.org/wiki/C_string_handling";
/// time_requiredtime_title
Blockly.Msg.TIME_REQUIREDTIME_TITLE = "time to do followings";
/// time_reqruiedtime_tale
Blockly.Msg.TIME_REQRUIEDTIME_TALE = "save in double variable %1";
/// time_time_current_title
Blockly.Msg.TIME_TIME_CURRENT_TITLE = "print current time";
/// variables_set_dist_variable
Blockly.Msg.VARIABLES_SET_DIST_VARIABLE = "variable";
/// variables_set_dist_pointer
Blockly.Msg.VARIABLES_SET_DIST_POINTER = "pointer";
/// variables_set_dist_array
Blockly.Msg.VARIABLES_SET_DIST_ARRAY = "array";
/// variables_set_pointer_spec_one
Blockly.Msg.VARIABLES_SET_POINTER_SPEC_ONE = "*";
/// variables_set_pointer_spec_two
Blockly.Msg.VARIABLES_SET_POINTER_SPEC_TWO = "**";
/// variables_set_array_spec_one
Blockly.Msg.VARIABLES_SET_ARRAY_SPEC_ONE = "[]";
/// variables_set_array_spec_two
Blockly.Msg.VARIABLES_SET_ARRAY_SPEC_TWO = "[][]";
/// variables_set_array_spec_three
Blockly.Msg.VARIABLES_SET_ARRAY_SPEC_THREE = "[][][]";
/// variables_set_type_int
Blockly.Msg.VARIABLES_SET_TYPE_INT = "int";
/// variables_set_type_unsigned_int
Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT= "unsigned int";
/// variables_set_type_float
Blockly.Msg.VARIABLES_SET_TYPE_FLOAT = "float";
/// variables_set_type_double
Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE = "double";
/// variables_set_type_char
Blockly.Msg.VARIABLES_SET_TYPE_CHAR= "char";
/// variables_set_iteration_normal
Blockly.Msg.VARIABLES_SET_ITERATION_NORMAL = "*";
/// variables_set_iteration_double
Blockly.Msg.VARIABLES_SET_ITERATION_DOUBLE = "**";
/// variables_set_iteration_triple
Blockly.Msg.VARIABLES_SET_ITERATION_TRIPLE = "***";
/// variables_declare_title
Blockly.Msg.VARIABLES_DECLARE_TITLE = "variable";
/// variables_declare_name
Blockly.Msg.VARIABLES_DECLARE_NAME = "name";
/// variables_declare_init
Blockly.Msg.VARIABLES_DECLARE_INIT = "initial value";
/// variables_declare_default_name
Blockly.Msg.VARIABLES_DECLARE_DEFAULT_NAME = "myVariable";
/// variables_pointer_declare_title
Blockly.Msg.VARIABLES_POINTER_DECLARE_TITLE = "pointer";
/// variables_pointer_declare_iteration
Blockly.Msg.VARIABLES_POINTER_DECLARE_ITERATION = "";
/// variables_pointer_declare_default_name
Blockly.Msg.VARIABLES_POINTER_DECLARE_DEFAULT_NAME = "myPointer";
/// variables_array_declare_title
Blockly.Msg.VARIABLES_ARRAY_DECLARE_TITLE = "array";
/// variables_array_declare_length
Blockly.Msg.VARIABLES_ARRAY_DECLARE_LENGTH = "length";
/// variables_array_declare_default_name
Blockly.Msg.VARIABLES_ARRAY_DECLARE_DEFAULT_NAME = "myArray";
/// variables_return
Blockly.Msg.VARIABLES_RETURN = "return ";
/// pointer_get_title
Blockly.Msg.POINTER_GET_TITLE = "";
/// array_get_title
Blockly.Msg.ARRAY_GET_TITLE = "";
/// function_set_type_int
Blockly.Msg.FUNCTION_SET_TYPE_INT = "int";
/// function_set_type_float
Blockly.Msg.FUNCTION_SET_TYPE_FLOAT = "float";
/// function_set_type_double
Blockly.Msg.FUNCTION_SET_TYPE_DOUBLE = "double";
/// function_set_type_long
Blockly.Msg.FUNCTION_SET_TYPE_LONG = "long";
/// function_set_type_longlong
Blockly.Msg.FUNCTION_SET_TYPE_LONGLONG = "long long";
/// function_set_type_short
Blockly.Msg.FUNCTION_SET_TYPE_SHORT = "short";
/// function_set_type_longdouble
Blockly.Msg.FUNCTION_SET_TYPE_LONGDOUBLE = "long double";
/// function_set_type_char
Blockly.Msg.FUNCTION_SET_TYPE_CHAR = "char";
/// define_declare_title
Blockly.Msg.DEFINE_DECLARE_TITLE = "#define";
/// define_declare_init
Blockly.Msg.DEFINE_DECLARE_INIT = "is";
/// define_declare_default_name
Blockly.Msg.DEFINE_DECLARE_DEFAULT_NAME = "myMacro";
/// define_get_title
Blockly.Msg.DEFINE_GET_TITLE = "";
/// define_set_type_constant
Blockly.Msg.DEFINE_SET_TYPE_CONSTANT = "constant";
/// define_set_type_macro
Blockly.Msg.DEFINE_SET_TYPE_MACRO = "macro";
/// main_block
Blockly.Msg.MAIN_BLOCK = "on start";
/// main_block_return
Blockly.Msg.MAIN_BLOCK_RETURN = "int type return value:";
/// controls_switch
Blockly.Msg.CONTROLS_SWITCH = "switch ";
/// controls_switch_case
Blockly.Msg.CONTROLS_SWITCH_CASE = "case";
/// structure_define_title
Blockly.Msg.STRUCTURE_DEFINE_TITLE = "structure type name";
/// structure_define_name
Blockly.Msg.STRUCTURE_DEFINE_NAME = "myStructure";
/// structure_mutatorcontainer_title
Blockly.Msg.STRUCTURE_MUTATORCONTAINER_TITLE = "members";
/// structure_mutatormem_var
Blockly.Msg.STRUCTURE_MUTATORMEM_VAR= "variable type";
/// structure_mutatormem_pointer
Blockly.Msg.STRUCTURE_MUTATORMEM_POINTER= "pointer type";
/// structure_mutatormem_array
Blockly.Msg.STRUCTURE_MUTATORMEM_ARRAY= "array type";
/// structure_mutatorarg_name
Blockly.Msg.STRUCTURE_MUTATORARG_NAME = "name";
/// structure_declare_title
Blockly.Msg.STRUCTURE_DECLARE_TITLE = "type";
/// structure_declare_tale
Blockly.Msg.STRUCTURE_DECLARE_TALE = "name";
/// structure_declare_name
Blockly.Msg.STRUCTURE_DECLARE_NAME = "myStructure1";
/// structure_set_name
Blockly.Msg.STRUCTURE_SET_NAME = "name";
/// structure_set_member
Blockly.Msg.STRUCTURE_SET_MEMBER = "member";
/// structure_get_name
Blockly.Msg.STRUCTURE_GET_NAME = "name";
/// structure_get_member
Blockly.Msg.STRUCTURE_GET_MEMBER = "member";
/// union_define_name
Blockly.Msg.UNION_DEFINE_NAME = "myUnion";
/// procedures_return_title
Blockly.Msg.PROCEDURES_RETURN_TITLE = "terminate function after return ";
/// procedures_return_tooltip
Blockly.Msg.PROCEDURES_RETURN_TOOLTIP = "Terminate function after return what you want to return. you can use it in anywhere";
/// plz_out_of_block
Blockly.Msg.PLZ_OUT_OF_BLOCK = "Warning: This block can be placed out of other blocks except function block.";
/// plz_inside_function
Blockly.Msg.PLZ_INSIDE_FUNCTION = "Warning: Place this block inside a function.";
/// plz_out_of_function
Blockly.Msg.PLZ_OUT_OF_FUNCTION = "Warning: Place this block out of a function.";
/// select_menu
Blockly.Msg.SELECT_MENU = "--Select--";
/// select_type
Blockly.Msg.SELECT_TYPE = "--Type--";
/// procedures_illegalname
Blockly.Msg.PROCEDURES_ILLEGALNAME = "illegal function name";
/// variables_illegalname
Blockly.Msg.VARIABLES_ILLEGALNAME = "illegal variable name";
/// structure_illegalname
Blockly.Msg.STRUCTURE_ILLEGALNAME = "illegal structure name";
/// controls_switch_break_warning
Blockly.Msg.CONTROLS_SWITCH_BREAK_WARNING = "WARNING : This block must be in switch block.";
/// controls_switch_break
Blockly.Msg.CONTROLS_SWITCH_BREAK = "break";
/// controls_switch_break_tooltip
Blockly.Msg.CONTROLS_SWITCH_BREAK_TOOLTIP = "break the statement and leave the switch block.";
/// controls_switch_default
Blockly.Msg.CONTROLS_SWITCH_DEFAULT = "if there are no corresponding value";
/// controls_switch_do
Blockly.Msg.CONTROLS_SWITCH_DO = "DO";
/// controls_switch_tooltip1
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP1 = "if there are no corresponding value, do first block statement and if value correspond with second value, do second block statement.";
/// controls_switch_tooltip2
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP2 = "if there are no corresponding value, do first block statement, if value correspond with second value, do second block statement, and if value correspond with third value, do third block statement.";
/// controls_switch_tooltip3
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP3 = "if there are no corresponding value, do first block statement and if value correspond with second value, do second block statement, .... , and if value correspond with last value, do last block statement.";
/// controls_switch_tooltip4
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP4 = "if there are no corresponding value, do first block statement and if value correspond with second value, do second block statement, .... , and if value correspond with last value, do last block statement.";
/// controls_switch_case_tooltip
Blockly.Msg.CONTROLS_SWITCH_CASE_TOOLTIP = "Add case."
/// mainprocedures_tooltip
Blockly.Msg.MAINPROCEDURES_TOOLTIP = "basically provided main function block. return integer value";
/// structure_define_tooptip
Blockly.Msg.STRUCTURE_DEFINE_TOOPTIP = "define structure. you can add, delete, rename the member of structure. it must be before using structure.";
/// structure_declare_tooptip
Blockly.Msg.STRUCTURE_DECLARE_TOOPTIP = "declare structure by selecting predefined structure(similar with declaring variables). it must be before using structure.";
/// structure_get_tooltip
Blockly.Msg.STRUCTURE_GET_TOOLTIP = "return value of structure member or structure itself.";
/// structure_set_tooltip
Blockly.Msg.STRUCTURE_SET_TOOLTIP = "assignment(set) the value into structure member or structure itself.";
/// structure_mutatorcontainer_tooltip
Blockly.Msg.STRUCTURE_MUTATORCONTAINER_TOOLTIP = "add, delete, or rearrange member.";
/// structure_mutatorarg_tooltip
Blockly.Msg.STRUCTURE_MUTATORARG_TOOLTIP = "add member of structure."
/// time_current_tooltip
Blockly.Msg.TIME_CURRENT_TOOLTIP = "print current time with the form '0000(year)-00(month)-00(day)-00(hour)-00(miniute)-00(seconds)'";
/// time_requiredtime_tooltip
Blockly.Msg.TIME_REQUIREDTIME_TOOLTIP = "save the time that is taken for doing followings into double variable";
/// variables_declare_tooltip
Blockly.Msg.VARIABLES_DECLARE_TOOLTIP = "declare variables";

/// iostream blocks
/// cout title
Blockly.Msg.IOSTREAM_COUT_TITLE = "cout <<";
/// helper to print more text
Blockly.Msg.IOSTREAM_COUT_MUTATOR_COUTADD_TITLE = "<<";
/// std::endl
Blockly.Msg.IOSTREAM_NEWLINE_TITLE = "end line";
/// read input from terminal
Blockly.Msg.IOSTREAM_CIN_TITLE = "cin >>";
/// cin tooltip
Blockly.Msg.IOSTREAM_CIN_TOOLTIP = "Read input from terminal";
/// read more line
Blockly.Msg.IOSTREAM_CIN_MUTATOR_CINADD_TITLE = ">>";