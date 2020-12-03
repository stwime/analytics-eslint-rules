# eslint-plugin-benocs-analytics

Ensures all common form elements have IDs set

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-benocs-analytics`:

```
$ npm install eslint-plugin-benocs-analytics --save-dev
```


## Usage

Add `benocs-analytics` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "benocs-analytics"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "benocs-analytics/elements-have-ids": 2
    }
}
```

## Supported Rules


### elements-have-ids

Configuration:

```json
{
    "rules": {
        "benocs-analytics/elements-have-ids": [
             "error",
            {
                "targetNodes": ["input", "select", "textarea","button"] 
            },
        ]
    }
}
```





