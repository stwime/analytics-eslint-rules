/**
 * @fileoverview Checks that common form elements have ids
 * @author stwime
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/elements-have-ids"),

RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
      },
    }
  });
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("elements-have-ids", rule, {

    valid: [
        {
            code: 'it("should be great", function ()',
        },
        {
            code: 'it("Should support wildcard filters", function () {});',
        },
        {
            code: 'itit();',
        },
        {
            code: 'test();',
        }
      ],

    invalid: [
        {
            code: 'it("Test 1", function() {});',
            errors: [{
                message: "Error Here",
                type: "CallExpression"
            }]
        },
        {
            code: 'it("", function() {});',
            errors: [{
                message: "Error Here",
                type: "CallExpression"
            }]
        },
        {
            code: 'it(() => "Should support wildcard filters", function () {});',
            errors: [{
                message: "Error Here",
                type: "CallExpression"
            }]
        }
    ]
});
