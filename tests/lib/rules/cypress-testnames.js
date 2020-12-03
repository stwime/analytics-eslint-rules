/**
 * @fileoverview Checks that cypress test names follow the 'should' naming convention
 * @author danlosadrian
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/cypress-testnames"),

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
ruleTester.run("cypress-testnames", rule, {

    valid: [
        {
            code: 'it("should be great", function (){})',
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
                message: "Test must have a descriptive name starting with 'Should'",
                type: "CallExpression"
            }]
        },
        {
            code: 'it("", function() {});',
            errors: [{
                message: "Test must have a descriptive name starting with 'Should'",
                type: "CallExpression"
            }]
        },
        {
            code: 'it(() => "Should support wildcard filters", function () {});',
            errors: [{
                message: "Test name should be a string",
                type: "CallExpression"
            }]
        }
    ]
});
