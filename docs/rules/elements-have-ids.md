# Checks that common form elements have ids (elements-have-ids)


## Rule Details

Examples of **incorrect** code for this rule:

```js

<button></button>

```

Examples of **correct** code for this rule:

```js

<button id="anything"></button>

```

### Options

`targetNodes`: Array containing string names of every node that should always have an ID
