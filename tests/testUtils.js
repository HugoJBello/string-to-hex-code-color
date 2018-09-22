"use strict";
exports.__esModule = true;
var TestUtils = /** @class */ (function () {
    function TestUtils() {
    }
    TestUtils.prototype.calculateDiff = function (string1, string2) {
        return this.subCompare(string1, string2, 1).substring.length;
    };
    //https://stackoverflow.com/questions/13006556/check-if-two-strings-share-a-common-substring-in-javascript
    // Note: not fully tested, there may be bugs:
    TestUtils.prototype.subCompare = function (needle, haystack, min_substring_length) {
        // Min substring length is optional, if not given or is 0 default to 1:
        min_substring_length = min_substring_length || 1;
        // Search possible substrings from largest to smallest:
        for (var i = needle.length; i >= min_substring_length; i--) {
            for (var j = 0; j <= (needle.length - i); j++) {
                var substring = needle.substr(j, i);
                var k = haystack.indexOf(substring);
                if (k != -1) {
                    return {
                        found: 1,
                        substring: substring,
                        needleIndex: j,
                        haystackIndex: k
                    };
                }
            }
        }
        return {
            found: 0
        };
    };
    return TestUtils;
}());
exports.TestUtils = TestUtils;
