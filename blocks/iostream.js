'use strict';

goog.provide('Blockly.Blocks.iostream');

goog.require('Blockly.Blocks');

Blockly.Blocks['library_iostream_cout'] = {
    /**
     * Block for [cout function] in Cpp.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendValueInput('VAR0')
            .setCheck(null)
            .appendField(Blockly.Msg.IOSTREAM_COUT_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['library_iostream_cout_add']));
        this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
        this.tag = Blockly.Msg.TAG_IOSTREAM_COUT;
        this.printAddCount_ = 0;
    },
    /**
     * Create XML to represent the number of cout inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        if (!this.printAddCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.printAddCount_) {
            container.setAttribute('printadd', this.printAddCount_);
        }
        return container;
    },
    /**
     * Parse XML to restore cout inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.printAddCount_ = parseInt(xmlElement.getAttribute('printadd'), 10);
        for (var x = 1; x <= this.printAddCount_; x++) {
            this.appendValueInput('VAR' + x)
                .setCheck(null)
                .appendField(''); // a blank space
        }
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'library_iostream_cout_cout');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 1; x <= this.printAddCount_; x++) {
            var printAddBlock = Blockly.Block.obtain(workspace, 'library_iostream_cout_add');
            printAddBlock.initSvg();
            connection.connect(printAddBlock.previousConnection);
            connection = printAddBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        for (var x = this.printAddCount_; x > 0; x--) {
            this.removeInput('VAR' + x);
        }
        this.printAddCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'library_iostream_cout_add':
                    this.printAddCount_++;
                    var printInput = this.appendValueInput('VAR' + this.printAddCount_)
                        .setCheck(null)
                        .appendField('');
                    // Reconnect any child blocks.
                    if (clauseBlock.valueConnection_) {
                        printInput.connection.connect(clauseBlock.valueConnection_);
                    }
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'library_iostream_cout_add':
                    var inputPrint = this.getInput('VAR' + x);
                    clauseBlock.valueConnection_ =
                        inputPrint && inputPrint.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                    x++;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    //when the block is changed,
    onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks['library_iostream_cout_cout'] = {
    /**
     * Mutator block for cout_add container.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendDummyInput()
            .appendField(Blockly.Msg.IOSTREAM_COUT_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['library_iostream_cout_add'] = {
    /**
     * Mutator bolck for cout_add condition.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendDummyInput()
            .appendField(Blockly.Msg.IOSTREAM_COUT_MUTATOR_COUTADD_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['library_iostream_text'] = {
    /**
     * Block for text value.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(90);
        this.appendDummyInput()
            .appendField('\"')
            .appendField(new Blockly.FieldTextInput(''), 'TEXT')
            .appendField('\"');
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
        this.tag = Blockly.Msg.TAG_IOSTREAM_TEXT;
    },
    /**
     * Create an image of an open or closed quote.
     * @param {boolean} open True if open quote, false if closed.
     * @return {!Blockly.FieldImage} The field image of the quote.
     * @private
     */
    // newQuote_: function(open) {
    //     if (open == Blockly.RTL) {
    //         var file = 'quote1.png';
    //     } else {
    //         var file = 'quote0.png';
    //     }
    //     return new Blockly.FieldImage(Blockly.pathToBlockly + 'media/' + file,
    //         12, 12, '"');
    // },

    onchange: function()  {
        Blockly.Blocks.requireInFunction();

        if (this.getFieldValue('TEXT')) {
            var txtlength = this.getFieldValue('TEXT').length;
            if (txtlength == 1) {
                this.changeOutput('CHAR');
            }
            else {
                this.changeOutput('STR');
            }
        }
    }
    //when the block is changed,
};

Blockly.Blocks['library_iostream_newLine'] = {
    /**
     * Block for text value.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(90);
        this.interpolateMsg(Blockly.Msg.IOSTREAM_NEWLINE_TITLE,
            Blockly.ALIGN_RIGHT);
        this.setOutput(true, 'String');
        this.setTooltip(Blockly.Msg.IOSTREAM_NEWLINE_TOOLTIP);
        this.tag = Blockly.Msg.TAG_IOSTREAM_NEWLINE;
    },
    onchange: Blockly.Blocks.requireInFunction
    //when the block is changed,
};

Blockly.Blocks['library_iostream_cin'] = {
    /**
     * Block for [cin function] in C.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendValueInput('VAR0')
            .setCheck(['Variable', 'VAR_INT', 'VAR_UNINT', 'VAR_FLOAT', 'VAR_DOUBLE', 'VAR_CHAR',
                'Array', 'Pointer', 'PTR_INT', 'PTR_UNINT', 'PTR_FLOAT', 'PTR_DOUBLE', 'PTR_CHAR', 'Aster'])
            .appendField(Blockly.Msg.IOSTREAM_CIN_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['library_iostream_cin_add']));
        this.setTooltip(Blockly.Msg.IOSTREAM_CIN_TOOLTIP);
        this.tag = Blockly.Msg.TAG_IOSTREAM_CIN;
        this.scanAddCount_ = 0;
    },
    /**
     * Create XML to represent the number of cin inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        if (!this.scanAddCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.scanAddCount_) {
            container.setAttribute('scanadd', this.scanAddCount_);
        }
        return container;
    },
    /**
     * Parse XML to restore cin inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.scanAddCount_ = parseInt(xmlElement.getAttribute('scanadd'), 10);
        for (var x = 1; x <= this.scanAddCount_; x++) {
            this.appendValueInput('VAR' + x)
                .setCheck(['Variable', 'VAR_INT', 'VAR_UNINT', 'VAR_FLOAT', 'VAR_DOUBLE', 'VAR_CHAR',
                    'Array', 'Pointer', 'PTR_INT', 'PTR_UNINT', 'PTR_FLOAT', 'PTR_DOUBLE', 'PTR_CHAR', 'Aster'])
                .appendField(''); // a blank space

        }
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'library_iostream_cin_cin');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 1; x <= this.scanAddCount_; x++) {
            var scanAddBlock = Blockly.Block.obtain(workspace, 'library_iostream_cin_add');
            scanAddBlock.initSvg();
            connection.connect(scanAddBlock.previousConnection);
            connection = scanAddBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        // Disconnect all the elseif input blocks and remove the inputs.
        for (var x = this.scanAddCount_; x > 0; x--) {
            this.removeInput('VAR' + x);
        }
        this.scanAddCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'library_iostream_cin_add':
                    this.scanAddCount_++;
                    var scanInput = this.appendValueInput('VAR' + this.scanAddCount_)
                        .setCheck(['Variable', 'VAR_INT', 'VAR_UNINT', 'VAR_FLOAT', 'VAR_DOUBLE', 'VAR_CHAR',
                            'Array', 'Pointer', 'PTR_INT', 'PTR_UNINT', 'PTR_FLOAT', 'PTR_DOUBLE', 'PTR_CHAR', 'Aster'])
                        .appendField('');
                    // Reconnect any child blocks.
                    if (clauseBlock.valueConnection_) {
                        scanInput.connection.connect(clauseBlock.valueConnection_);
                    }
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'library_iostream_cin_add':
                    var inputScan = this.getInput('VAR' + x);
                    clauseBlock.valueConnection_ =
                        inputScan && inputScan.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                        x++;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    //when the block is changed,
    onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks['library_iostream_cin_cin'] = {
    /**
     * Mutator block for cin_add container.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendDummyInput()
            .appendField(Blockly.Msg.IOSTREAM_CIN_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.IOSTREAM_CIN_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['library_iostream_cin_add'] = {
    /**
     * Mutator bolck for cin_add condition.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(280);
        this.appendDummyInput()
            .appendField(Blockly.Msg.STDIP_CIN_MUTATOR_CINADD_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.IOSTREAM_CIN_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['comment'] = {
    /**
     * Block for comment in C.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(75);
        this.appendValueInput('VAR0')
            .setCheck(null)
            .appendField(Blockly.Msg.COMMENT_TITLE);
        //this.appendDummyInput()
        //    .appendField(Blockly.Msg.COMMENT_TITLE)
        //    .appendField(new Blockly.FieldTextInput(), 'VAR0');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['comment_add']));
        this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP);
        this.tag = Blockly.Msg.TAG_COMMENT;
        this.commentAddCount_ = 0;
    },
    /**
     * Create XML to represent the number of comment inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function() {
        if (!this.commentAddCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.commentAddCount_) {
            container.setAttribute('commentadd', this.commentAddCount_);
        }
        return container;
    },
    /**
     * Parse XML to restore comment inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function(xmlElement) {
        this.commentAddCount_ = parseInt(xmlElement.getAttribute('commentadd'), 10);
        for (var x = 1; x <= this.commentAddCount_; x++) {
            this.appendValueInput('VAR' + x)
                .setCheck(null)
                .appendField(''); // a blank space
            //this.appendDummyInput()
            //    .appendField('       ') // a blank space
            //    .appendField(new Blockly.FieldTextInput(), 'VAR' + x);
        }
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, 'comment_comment');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 1; x <= this.commentAddCount_; x++) {
            var commentAddBlock = Blockly.Block.obtain(workspace, 'comment_add');
            commentAddBlock.initSvg();
            connection.connect(commentAddBlock.previousConnection);
            connection = commentAddBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function(containerBlock) {
        // Disconnect all the elseif input blocks and remove the inputs.
        for (var x = this.commentAddCount_; x > 0; x--) {
            this.removeInput('VAR' + x);
            //this.appendDummyInput()
            //    .removeField('       ')
            //    .removeField('VAR' + x);
        }
        this.commentAddCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'comment_add':
                    this.commentAddCount_++;
                    var commentInput =
                        this.appendValueInput('VAR' + this.commentAddCount_)
                            .setCheck(null)
                            .appendField('');
                    //this.appendDummyInput()
                    //    .appendField('       ') // a blank space
                    //    .appendField(new Blockly.FieldTextInput(), 'VAR' + this.commentAddCount_);
                    // Reconnect any child blocks.
                    if (clauseBlock.valueConnection_) {
                        commentInput.connection.connect(clauseBlock.valueConnection_);
                    }
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'comment_add':
                    var inputComment = this.getInput('VAR' + x);
                    clauseBlock.valueConnection_ =
                        inputComment && inputComment.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                        x++;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
        }
    }
};

Blockly.Blocks['comment_comment'] = {
    /**
     * Mutator block for comment_add container.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(75);
        this.appendDummyInput()
            .appendField(Blockly.Msg.COMMENT_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['comment_add'] = {
    /**
     * Mutator bolck for comment_add condition.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(75);
        this.appendDummyInput()
            .appendField(Blockly.Msg.COMMENT_MUTATOR_COMMENTADD_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP);
        this.contextMenu = false;
    }
};