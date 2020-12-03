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
            code: '<button id="button1"></button>',
        },
        {
            code: '<button id="button1" />',
        },
        {
            code: '<input id="button1"></input>',
        },
        {
            code: '<div></div>',
        }
      ],

    invalid: [
        {
            code: '<button></button>',
            errors: [{
                message: "Common form elements should have an ID",
                type: "JSXOpeningElement"
            }]
        },
        {
            code: '<button id=""></button>',
            errors: [{
                message: "Common form elements should not have empty IDs",
                type: "JSXOpeningElement"
            }]
        }
    ]
});
