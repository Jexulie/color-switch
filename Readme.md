# Color-Switch

Random Color Generator and Converter

# Installing 

```sh
$ npm install color-switch
```

# Usage
```js
    var cs = require('color-switch');

    // random color
    cs.rndRgb(); // -> {r: 222, g: 123, b:53 }

    // converting RGB to Hex
    cs.rgbToHex('#006699'); // -> {r: 0 , g: 102, b: 153}
```

# Functions

## Random Color Generating.

Info | Example Code | Output-Type | Result
--- | --- | --- | ---
Generate Rgb | cs.rndRgb() | Object | {r:111 , g: 111, b:111} 
Generate Hex | cs.rndHex() | String | #111111
Generate Hsv | cs.rndHsv() | Object | {h: 111, s: 111, v: 111}
Generate Hsl | cs.rndHsl() | Object | {h: 111, s: 111, l: 111}
Generate Cmyk | cs.rndCmyk() | Object | {c: 111, m: 111, y: 111, k: 111}


## Color Converting.

### RGB
--- 

Info | Example Code | Input-Type | Output-Type | Result
--- | --- | --- | --- | ---
Convert RGB to Hex | cs.rgbToHex(color) |Object|String|#111111
Convert RGB to HSL| cs.rgbToHsl(color) |Object|Object| {h: 111, s: 111, l: 111}
Convert RGB to HSV| cs.rgbToHsv(color) |Object|Object|{h: 111, s: 111, v: 111}
Convert RGB to CMYK| cs.rgbToCmyk(color) |Object|Object| {c: 111, m: 111, y: 111, k: 111}

### Hex
--- 

Info | Example Code | Input-Type | Output-Type | Result
--- | --- | --- | --- | ---
Convert Hex to RGB| cs.hexToRgb(color)  |String|Object|{r:111 , g: 111, b:111} 
Convert Hex to HSL| cs.hexToHsl(color)  |String|Object| {h: 111, s: 111, l: 111}
Convert Hex to HSV| cs.hexToHsv(color)  |String|Object|{h: 111, s: 111, v: 111}
Convert Hex to CMYK| cs.hexToCmyk(color) |String|Object| {c: 111, m: 111, y: 111, k: 111}

### HSL
--- 

Info | Example Code | Input-Type | Output-Type | Result
--- | --- | --- | --- | ---
Convert HSL to RGB| cs.hslToRgb(color) |Object|Object|{r:111 , g: 111, b:111} 
Convert HSL to Hex| cs.hslToHex(color) |Object|String|#111111
Convert HSL to HSV| cs.hslToHsv(color) |Object|Object|{h: 111, s: 111, v: 111}
Convert HSL to CMYK| cs.hslToCmyk(color) |Object|Object| {c: 111, m: 111, y: 111, k: 111}

### HSV
--- 

Info | Example Code | Input-Type | Output-Type | Result
--- | --- | --- | --- | ---
Convert HSV to RGB| cs.hsvToRgb |Object|Object|{r:111 , g: 111, b:111} 
Convert HSV to Hex| cs.hsvToHex(color) |Object|String|#111111
Convert HSV to HSL| cs.hsvToHsl(color)  |Object|Object| {h: 111, s: 111, l: 111}
Convert HSV to CMYK| cs.hsvToCmyk(color) |Object|Object| {c: 111, m: 111, y: 111, k: 111}

### CMYK
--- 

Info | Example Code | Input-Type | Output-Type | Result
--- | --- | --- | --- | ---
Convert CMYK to RGB| cs.cmykToRgb(color) |Object|Object|{r:111 , g: 111, b:111} 
Convert CMYK to Hex| cs.cmykToHex(color) |Object|String|#111111
Convert CMYK to HSV| cs.cmykToHsv(color)  |Object|Object|{h: 111, s: 111, v: 111}
Convert CMYK to HSL| cs.cmykToHsl(color) |Object|Object| {h: 111, s: 111, l: 111}

## Misc

### Stringify

Convert Color Object to String.

```js
    cs.stringify({r: 111, g:111, b:111}) // -> '(111,111,111)'
```

### Objectify

Convert String Color to Object.

```js
    cs.objectify('(111,111,111)', 'HSL') // -> {h: 111, s:111, l:111}
```

# License
[MIT]()