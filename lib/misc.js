function stringify(color) {
    if (typeof color === 'object') {
        var first = color[Object.keys(color)[0]];
        var second = color[Object.keys(color)[1]];
        var third = color[Object.keys(color)[2]];

        return `(${first},${second},${third})`;
    } else {
        return color;
    }
}

function objectify(color, type) {
    if (/#.*/ig.test(color)) {
        return color;
    }
    var regx = /(\d{3})\,(\d{3})\,(\d{3})\,?(\d{3})?/ig
    var getColors = regx.exec(color);
    switch(type){
        case 'RGB':
            return {
                r: getColors[1],
                g: getColors[2],
                b: getColors[3]
            }
        case 'HSL':
            return {
                h: getColors[1],
                s: getColors[2],
                l: getColors[3]
            }
        case 'HSV':
            return {
                h: getColors[1],
                s: getColors[2],
                v: getColors[3]
            }
        case 'CMYK':
            if(typeof getColors[4] === 'undefined'){
                return color;
            }
            return {
                c:getColors[1],
                m:getColors[2],
                y:getColors[3],
                k:getColors[4]
            }
    }
}

module.exports = {
    stringify,
    objectify
}