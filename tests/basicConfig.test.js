"use strict";
exports.__esModule = true;
// npm install mocha chai @types/chai @types/mocha ts-node --save-dev
var chai_1 = require("chai");
require("mocha");
var index_1 = require("../index");
var testUtils_1 = require("./testUtils");
var basicStringArray = [undefined, "some text", "SOME TEXT", "more text", "apples", "bannanas", "", "f"];
var smallSizedTextArrary = ["a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4"];
var testUtils = new testUtils_1.TestUtils();
describe('Testing the default config', function () {
    it('should transform a string in a hex code', function () {
        var str2HexColor = new index_1.String2HexCodeColor();
        for (var _i = 0, basicStringArray_1 = basicStringArray; _i < basicStringArray_1.length; _i++) {
            var str = basicStringArray_1[_i];
            var obtainedColor = str2HexColor.stringToColor(str);
            chai_1.expect(obtainedColor).not.to.equal(undefined);
        }
    });
});
describe('Testing the default config with shade', function () {
    it('should transform a string in a hex code and shade the color', function () {
        var str2HexColor = new index_1.String2HexCodeColor(-0.6);
        console.log(testUtils.calculateDiff("aaaaa1", "2aaa"));
        for (var _i = 0, basicStringArray_2 = basicStringArray; _i < basicStringArray_2.length; _i++) {
            var str = basicStringArray_2[_i];
            var obtainedColor = str2HexColor.stringToColor(str);
            chai_1.expect(obtainedColor).not.to.equal(undefined);
        }
    });
});
describe('Testing the default config with small strings', function () {
    it('small strings should be assinged colors that are different enough', function () {
        var str2HexColor = new index_1.String2HexCodeColor();
        var obtainedColorArray = [];
        console.log(testUtils.calculateDiff("aaaaa1", "2aaa"));
        var reducerCalcColor = function (accumulator, value) { accumulator.push(str2HexColor.stringToColor(value)); return accumulator; };
        var colorArray = smallSizedTextArrary.reduce(reducerCalcColor, []);
        console.log(colorArray);
        for (var i = 2; i < colorArray.length; i++) {
            var diff = testUtils.calculateDiff(colorArray[i], colorArray[i - 1]);
            console.log(diff);
            chai_1.expect(diff).to.lessThan(3);
        }
    });
});
