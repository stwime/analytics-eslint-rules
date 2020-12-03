/**
 * @fileoverview Checks that cypress test names follow the 'should' naming convention
 * @author danlosadrian
 */
"use strict";

module.exports = {
    meta: {
        docs: {
            description: "Check that tests have a descriptive name starting with 'Should'",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
    },

    create: function(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === "it") {
                    const nodeName = node.arguments[0];
                    if (nodeName.type !== "Literal") {
                        context.report({
                            node,
                            message: "Test name should be a string"
                        });
                    }
                    else if (!nodeName.value.toLowerCase().startsWith("should")) {
                        context.report({
                            node,
                            message: "Test must have a descriptive name starting with 'Should'"
                        });
                    }
                }
            }
        };
    }
};

