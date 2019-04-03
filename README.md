# TreinaWeb Front Playground

Playground to teach HTML and CSS in a interactive way

## Set the JSON configuration file

https://treinaweb.github.io/treinaweb-front-playground/?playgroundData={json file url}

## Configuration

``` javascript
{
    "html": {
        "initial": "", /* HTML code */
        "controllers": []
    },
    "css": {
        "initial": "", /* hidden CSS code */
        "controllers": [
            {
                "selector": "", /* element selectorr */
                "props": [ /* CSS properties to control */
                    /* CSS Props Controller */
                ]
            }
        ]
    }
}
```

### CSS Props Controller

```js
{
    "name": "width", /* property name */
    "value": "50", /* property initial value */
    "valueSuffix": "%", /* (optional) property value suffix */
    "hideTextValue": false, /* (optional) if true shows only input element */
    "type": "string", /* input type */
}
```

### CSS Input Types

#### string, text, number, color
No configuration required


#### radio, select
```js
{
    "options": [
        {
            "value": "", /* option value */
            "name": "" /* (optional) option label */
        }
    ]
}
```

#### check
```js
{
    "onValue": "",
    "offValue": "",
    "checkName": "" /* (optional) checkbox label */
}
```

#### range
```js
{
    "properties": [ /* input tag properties */
        {
            "name": "min",
            "value": "0"
        },
        {
            "name": "max",
            "value": "100"
        },
        {
            "name": "step",
            "value": "10"
        }
    ]
}
```
