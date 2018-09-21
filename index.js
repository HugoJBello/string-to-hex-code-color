"use strict";
exports.__esModule = true;
var String2HexCodeColor = /** @class */ (function () {
    function String2HexCodeColor(defaultShadePercentage) {
        this.defaultShadePercentage = -0.6;
        this.defaultShadePercentage = defaultShadePercentage;
    }
    String2HexCodeColor.prototype.shadeColor = function (color, percent) {
        if (!percent) {
            percent = this.defaultShadePercentage;
        }
        var f = parseInt(color.slice(1), 16);
        var t = percent < 0 ? 0 : 255;
        var p = percent < 0 ? percent * -1 : percent;
        var R = f >> 16;
        var G = f >> 8 & 0x00FF;
        var B = f & 0x0000FF;
        var result = '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
        return result;
    };
    String2HexCodeColor.prototype.stringToColor = function (str, shadePercentage) {
        str = str + this.preHash(str).toString();
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return this.shadeColor(colour, shadePercentage);
    };
    String2HexCodeColor.prototype.preHash = function (str) {
        {
            var hash = 0;
            if (str.length === 0) {
                return hash;
            }
            for (var i = 0; i < str.length; i++) {
                var char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
    };
    return String2HexCodeColor;
}());
exports.String2HexCodeColor = String2HexCodeColor;
