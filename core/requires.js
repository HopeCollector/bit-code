/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Default Blockly entry point. Use this to pick and choose which
 * fields and renderers to include in your Blockly bundle.
 * @author samelh@google.com (Sam El-Husseini)
 */
'use strict';

goog.provide('Blockly.requires');

goog.require('Blockly');
goog.require('Blockly.Field');
goog.require('Blockly.Msg');
goog.require('goog.asserts');
goog.require('goog.userAgent');
goog.require('Blockly.Toolbox');
goog.require('Blockly.Workspace');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Variables');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.Bubble');
goog.require('Blockly.Icon');
goog.require('Blockly.BlockSvg');
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('rtclient');
goog.require('Blockly.Flyout');
goog.require('goog.events.BrowserFeature');
goog.require('goog.html.SafeHtml');
goog.require('goog.ui.tree.TreeControl');
goog.require('goog.ui.tree.TreeNode');
goog.require('Blockly.Block');
goog.require('Blockly.Structure');
goog.require('goog.ui.MenuItem');
goog.require('Blockly.FieldAngle');
goog.require('Blockly.FieldColour');
goog.require('Blockly.FieldStructure');
goog.require('Blockly.FieldImage');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.FieldVariableArray');
goog.require('Blockly.Generator');
goog.require('Blockly.Procedures');
goog.require('Blockly.Realtime');
goog.require('Blockly.WidgetDiv');
goog.require('Blockly.inject');
goog.require('goog.color');
goog.require('goog.events');
goog.require('goog.ui.ColorPicker');
goog.require('goog.Disposable');
goog.require('Blockly.Names');
goog.require('Blockly.Comment');
goog.require('Blockly.ContextMenu');
goog.require('Blockly.Warning');
goog.require('Blockly.Xml');
goog.require('goog.string');
goog.require('Blockly.Trashcan');
goog.require('goog.ui.Menu');
goog.require('goog.Timer');
goog.require('Blockly.Css');
goog.require('Blockly.Input');
goog.require('goog.cssom');
goog.require('Blockly.Connection');
goog.require('Blockly.FieldCheckbox');
goog.require('Blockly.FieldStructureMember');
goog.require('Blockly.FieldVariablePointer');
goog.require('Blockly.FieldVariableDefine');
goog.require('Blockly.utils');
goog.require('Blockly.Blocks');
goog.require('Blockly.Mutator');
goog.require('Blockly.ScrollbarPair');
goog.require('Blockly.Tooltip');
goog.require('Blockly.FieldLabel');