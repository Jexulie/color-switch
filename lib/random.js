/**
 * rnd -> hex, rgb, hsv, hsl, cmyk
 */

function rndHex() {
    var set = "0123456789abcdef";
    var rndHex = "#";
    for(var i = 0; i < 6; i++){
        rndHex += set.charAt(Math.floor(Math.random() * set.length));
    }
    return rndHex;
}

function rndRgb() {
    return {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    }
}

function rndHsv() {
    return {
        h: Math.floor(Math.random() * 360),
        s: Math.floor(Math.random() * 100),
        v: Math.floor(Math.random() * 100)
    }
}

function rndHsl() {
    return {
        h: Math.floor(Math.random() * 360),
        s: Math.floor(Math.random() * 100),
        l: Math.floor(Math.random() * 100)
    }
}

function rdnCmyk() {
    return {
        c: Math.floor(Math.random() * 100),
        m: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        k: Math.floor(Math.random() * 100)
    }
}

module.exports = {
    rndHex,
    rndRgb,
    rndHsl,
    rndHsv,
    rdnCmyk
}