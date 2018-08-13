/**
 * rgb -> hex +, hsl +, hsv +, cmyk +
 * hex -> rgb +, hsl +, hsv +, cmyk +
 * hsl -> rgb +, hex +, hsv +, cmyk +
 * hsv -> rgb +, hex +, hsl +, cmyk +
 * cmyk -> rgb +, hex, hsl +, hsv +
 */


// RGB
function rgbToHex(color) {
    var hexIt = c => c.toString(16).length === 1 ? "0" + c.toString(16) : c.toString(16);
    return `#${hexIt(color.r)}${hexIt(color.g)}${hexIt(color.b)}`;
}

function rgbToHsl(color) {
    var h, s, l;

    var r = color.r / 255;
    var g = color.g / 255;
    var b = color.b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;

    // calc hue
    if (c === 0) {
        // all same
        h = 0;
    } else if (max === r) {
        h = ((g - b) / c) % 6;
    } else if (max === g) {
        h = ((b - r) / c) + 2;
    } else if (max === b) {
        h = ((r - g) / c) + 4;
    }
    // degree
    h *= 60;

    // calc lightness
    l = (max + min) * .5;

    // calc saturation
    if (c === 0) {
        s = 0;
    } else if (l > 0.5) {
        s = c / (2 - max - min);
    } else {
        s = c / (min + max);
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return {
        h,
        s,
        l
    }
}

function rgbToHsv(color) {
    var h, s, v;
    var r = color.r / 255;
    var g = color.g / 255;
    var b = color.b / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var c = max - min;

    // calc hue
    if (c === 0) {
        // all same
        h = 0;
    } else if (max === r) {
        h = ((g - b) / c) % 6;
    } else if (max === g) {
        h = ((b - r) / c) + 2;
    } else if (max === b) {
        h = ((r - g) / c) + 4;
    }
    // degree
    h *= 60;

    // lightness
    v = max;

    // saturation
    if (c === 0) {
        s = 0;
    } else {
        s = c / v;
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    v = Math.round(v * 100);

    return {
        h,
        s,
        v
    }
}

function rgbToCmyk(color) {
    var c, m, y, k;
    var r = color.r / 255;
    var g = color.g / 255;
    var b = color.b / 255;

    // calc key
    k = 1 - Math.max(r, g, b);

    // calc cyan
    c = (1 - r - k) / (1 - k);
    // calc magenta
    m = (1 - g - k) / (1 - k);
    // calc yellow
    y = (1 - b - k) / (1 - k);

    k = Math.round(k * 100);
    c = Math.round(c * 100);
    m = Math.round(m * 100);
    y = Math.round(y * 100);

    return {
        c,
        m,
        y,
        k
    }
}
// HEX
function hexToRgb(color) {
    var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return r ? {
        r: parseInt(r[1], 16),
        g: parseInt(r[2], 16),
        b: parseInt(r[3], 16)
    } : null;
}

function hexToHsl(color) {
    var rgb = hexToRgb(color);
    return rgbToHsl(rgb);
}

function hexToHsv(color) {
    var rgb = hexToRgb(color);
    return rgbToHsv(rgb);
}

function hexToCmyk(color) {
    var rgb = hexToRgb(color);
    return rgbToCmyk(rgb);
}
// HSL
function hslToRgb(color) {
    var r, g, b, temp_r, temp_g, temp_b, temp, temp2;
    var h = color.h / 360;
    var s = color.s / 100;
    var l = color.l / 100;

    // no saturation
    if (s === 0) {
        return {
            r: l * 255,
            g: l * 255,
            b: l * 255
        }
    }

    temp = l < .5 ? l * (1 + s) : (l + s) - (l * s);
    temp2 = (2 * l) - temp;

    temp_r = h + 0.333;
    temp_g = h;
    temp_b = h - 0.333;

    // make sure 0 < c < 1
    temp_r = calibrate(temp_r);
    temp_g = calibrate(temp_g);
    temp_b = calibrate(temp_b);

    // test it
    r = tests(temp_r) * 255;
    g = tests(temp_g) * 255;
    b = tests(temp_b) * 255;

    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    return {
        r,
        g,
        b
    }

    function calibrate(c) {
        if (c < 0) {
            return c + 1;
        } else if (c > 1) {
            return c - 1;
        } else {
            return c;
        }
    }

    function tests(c) {
        if (6 * c < 1) {
            c = temp2 + ((temp - temp2) * (6 * c));
        } else if (2 * c < 1) {
            c = temp;
        } else if (3 * c < 2) {
            c = temp2 + ((temp - temp2) * ((0.666 - c) * 6));
        } else {
            c = temp2;
        }
        return c;
    }
}

function hslToHex(color) {
    var rgb = hslToRgb(color);
    return rgbToHex(rgb);
}

function hslToHsv(color) {
    var rgb = hslToRgb(color);
    return rgbToHsv(rgb);
}

function hslToCmyk(color) {
    var rgb = hslToRgb(color);
    return rgbToCmyk(rgb);
}
// HSV
function hsvToRgb(color) {
    var r, g, b;
    var r1, g1, b1;
    var h = color.h;
    var s = color.s / 100;
    var v = color.v / 100;
    var c = v * s;
    var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    var m = v - c;

    console.log(h)

    if (h >= 60 && h < 120) {
        r1 = x;
        g1 = c;
        b1 = 0;
    } else if (h >= 120 && h < 180) {
        r1 = 0;
        g1 = c;
        b1 = x;
    } else if (h >= 180 && h < 240) {
        r1 = 0;
        g1 = x;
        b1 = c;
    } else if (h >= 240 && h < 300) {
        r1 = x;
        g1 = 0;
        b1 = c;
    } else if (h >= 300 && h <= 360) {
        r1 = c;
        g1 = 0;
        b1 = x;
    } else {
        r1 = c;
        g1 = x;
        b1 = 0;
    }

    r = (r1 + m) * 255;
    g = (g1 + m) * 255;
    b = (b1 + m) * 255;

    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    return {
        r,
        g,
        b
    }
}

function hsvToHex(color) {
    var rgb = hsvToRgb(color);
    return rgbToHex(rgb);
}

function hsvToHsl(color) {
    var rgb = hsvToRgb(color);
    return rgbToHsl(rgb);
}

function hsvToCmyk(color) {
    var rgb = hsvToRgb(color);
    return rgbToCmyk(rgb);
}
//CMYK
function cmykToRgb(color) {
    var r, g, b;

    var c = color.c / 100;
    var m = color.m / 100;
    var y = color.y / 100;
    var k = color.k / 100;

    // calc rgb
    r = 255 * (1 - c) * (1 - k);
    g = 255 * (1 - m) * (1 - k);
    b = 255 * (1 - y) * (1 - k);

    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    return {
        r,
        g,
        b
    }
}

function cmykToHex(color) {
    var rgb = cmykToRgb(color);
    return rgbToHex(rgb);
}

function cmykToHsl(color) {
    var rgb = cmykToRgb(color);
    return rgbToHsl(rgb);
}

function cmykToHsv(color) {
    var rgb = cmykToRgb(color);
    return rgbToHsv(rgb);
}

module.exports = {
    rgbToHex,
    rgbToHsl,
    rgbToHsv,
    rgbToCmyk,
    hexToRgb,
    hexToHsl,
    hexToHsv,
    hexToCmyk,
    hslToRgb,
    hslToHex,
    hslToHsv,
    hslToCmyk,
    hsvToRgb,
    hsvToHex,
    hsvToHsl,
    hsvToCmyk,
    cmykToRgb,
    cmykToHex,
    cmykToHsl,
    cmykToHsv

}