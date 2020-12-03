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
                    TemplateLiteral(node) {
                        context.report(node, 'Do not use template literals');
                    }
                };
            }
        }
    }
};