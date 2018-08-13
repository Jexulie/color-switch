var rnd = require('./lib/random');
var convert = require('./lib/convert');
var misc = require('./lib/misc');

var cs = {
    /**
     * Random RGB Color.
     */
    rndRgb: () => rnd.rndRgb(),
    /**
     * Random Hex Color.
     */
    rndHex: () => rnd.rndHex(),
    /**
     * Random HSV Color.
     */
    rndHsv: () => rnd.rndHsv(),
    /**
     * Random HSL Color.
     */
    rndHsl: () => rnd.rndHsl(),
    /**
     * Random CMYK Color.
     */
    rndCmyk: () => rnd.rdnCmyk(),

    /**
     * Converts Color Object to String.
     * @param {object} color
     */
    stringify: color => misc.stringify(color),

    /**
     * Converts Color String to Object.
     * @param {string} color
     * @param {string} type 'RGB', 'HSL', 'HSV', 'CMYK'
     */
    objectify: (color, type) => misc.objectify(color, type),

    /**
     * Converts RGB To Hex.
     * @param {object} color RGB
     * @param {number} color.r red
     * @param {number} color.g green
     * @param {number} color.b blue
     */
    rgbToHex: color => convert.rgbToHex(color),
    /**
     * Converts RGB To HSL.
     * @param {object} color RGB
     * @param {number} color.r red
     * @param {number} color.g green
     * @param {number} color.b blue
     */
    rgbToHsl: color => convert.rgbToHsl(color),
    /**
     * Converts RGB To HSV.
     * @param {object} color RGB
     * @param {number} color.r red
     * @param {number} color.g green
     * @param {number} color.b blue
     */
    rgbToHsv: color => convert.rgbToHsv(color),
    /**
     * Converts RGB To CMYK.
     * @param {object} color RGB
     * @param {number} color.r red
     * @param {number} color.g green
     * @param {number} color.b blue
     */
    rgbToCmyk: color => convert.rgbToCmyk(color),


    /**
     * Converts Hex to RGB.
     * @param {string} color Hex
     */
    hexToRgb: color => convert.hexToRgb(color),
    /**
     * Converts Hex to HSL.
     * @param {string} color Hex
     */
    hexToHsl: color => convert.hexToHsl(color),
    /**
     * Converts Hex to HSV.
     * @param {string} color Hex
     */
    hexToHsv: color => convert.hexToHsv(color),
    /**
     * Converts Hex to CMYK.
     * @param {string} color Hex
     */
    hexToCmyk: color => convert.hexToCmyk(color),


    /**
     * Converts HSL to RGB.
     * @param {object} color HSL
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.l lightness
     */
    hslToRgb: color => convert.hslToRgb(color),
    /**
     * Converts HSL to Hex.
     * @param {object} color HSL
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.l lightness
     */
    hslToHex: color => convert.hslToHex(color),
    /**
     * Converts HSL to HSV.
     * @param {object} color HSL
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.l lightness
     */
    hslToHsv: color => convert.hslToHsv(color),
    /**
     * Converts HSL to CMYK.
     * @param {object} color HSL
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.l lightness
     */
    hslToCmyk: color => convert.hslToCmyk(color),


    /**
     * Converts HSV to RGB.
     * @param {object} color HSL
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.l lightness
     */
    hsvToRgb: color => convert.hsvToRgb(color),
    /**
     * Converts HSV to HSL
     * @param {object} color HSV
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.v value
     */
    hsvToHsl: color => convert.hsvToHsl(color),
    /**
     * Converts HSV to Hex.
     * @param {object} color HSV
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.v value
     */
    hsvToHex: color => convert.hsvToHex(color),
    /**
     * Converts HSV to HSV.
     * @param {object} color HSV
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.v value
     */
    hsvToCmyk: color => convert.hsvToCmyk(color),


    /**
     * Converts CMYK to RGB.
     * @param {object} color HSV
     * @param {number} color.h hue
     * @param {number} color.s saturation
     * @param {number} color.v value
     */
    cmykToRgb: color => convert.cmykToRgb(color),
    /**
     * Converts CMYK to HSL.
     * @param {object} color CYMK
     * @param {number} color.c cyan
     * @param {number} color.m magenta
     * @param {number} color.y yellow
     * @param {number} color.k key
     */
    cmykToHsl: color => convert.cmykToHsl(color),
    /**
     * Converts CMYK to HSV.
     * @param {object} color CYMK
     * @param {number} color.c cyan
     * @param {number} color.m magenta
     * @param {number} color.y yellow
     * @param {number} color.k key
     */
    cmykToHsv: color => convert.cmykToHsv(color),
    /**
     * Converts CMYK to Hex.
     * @param {object} color CYMK
     * @param {number} color.c cyan
     * @param {number} color.m magenta
     * @param {number} color.y yellow
     * @param {number} color.k key
     */
    cmykToHex: color => convert.cmykToHex(color)
}

module.exports = cs;