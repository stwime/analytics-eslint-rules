/**
 * @fileoverview Checks that cypress test names follow the 'should' naming convention
 * @author danlosadrian
 */
"use strict";

module.exports = {
    rules: {
        "should-convention": {
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
                        return;
                        }
                        if (!nodeName.value.toLowerCase().indexOf("should") === 0) {
                        context.report({
                            node,
                            message: "Test must have a descriptive name starting with 'Should'"
                        });
                        }
                    }
                    }
                };
            }
        }
    }
};