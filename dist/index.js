"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
/**
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
function getAdd(op1, op2) {
    return op1 + op2;
}
exports.getAdd = getAdd;
