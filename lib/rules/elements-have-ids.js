/**
 * @fileoverview Checks that common form elements have ids
 * @author stwime
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Checks that common form elements have ids",
            category: "JSX",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
          {
            "type": "object",
            "properties": {
              "targetNodes": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false,
          }
      ]
    },

    create: function(context) {

        const defaultTargetNodes = ["input", "select", "textarea","button"];
        let targetNodes = context.options.targetNodes;
        if (!targetNodes){
            targetNodes = defaultTargetNodes;
        }
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          JSXOpeningElement(node) {
            const nodeType = node.name.name;
            if (!targetNodes.includes(nodeType)) {
              return;
            }
            //Find "id" field
            const id = node.attributes.find(
              (attr) => attr.type === "JSXAttribute" && attr.name.name === "id"
            );
            if (!id) {
              context.report({
                node,
                message: "Common form elements should have an ID"
              });
              return;
            }
            if (id.value.type === "JSXExpressionContainer"){
              return;
            }
            if (id.value.type === "Literal" && id.value.value.length === 0){
                context.report({
                node,
                message: "Common form elements should not have empty IDs"
              });
            }
          }
        };
    }
};
