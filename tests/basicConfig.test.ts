// npm install mocha chai @types/chai @types/mocha ts-node --save-dev
import { expect } from 'chai';
import 'mocha';
import { String2HexCodeColor } from '../index';
import {TestUtils} from './testUtils';

const basicStringArray = [undefined,"some text", "SOME TEXT", "more text", "apples", "bannanas", "", "f"]
const smallSizedTextArrary = ["a","b","c","d","e","f","g","h","1","2","3","4"]
const testUtils = new TestUtils();

describe('Testing the default config', () => {
  it('should transform a string in a hex code', () => {
    const str2HexColor: String2HexCodeColor = new String2HexCodeColor();
    let obtainedColorArray = [];
    for (let str of basicStringArray){
        const obtainedColor = str2HexColor.stringToColor(str);
        expect(obtainedColor).not.to.equal(undefined);
    }
  });
})

describe('Testing the default config with shade', () => {
  it('should transform a string in a hex code and shade the color', () => {
    const str2HexColor: String2HexCodeColor = new String2HexCodeColor(-0.6);
    let obtainedColorArray = [];
    console.log(testUtils.calculateDiff("aaaaa1","2aaa"));
    for (let str of basicStringArray){
        const obtainedColor = str2HexColor.stringToColor(str);
        expect(obtainedColor).not.to.equal(undefined);
    }
  });
})

describe('Testing the default config with small strings', () => {
  it('small strings should be assinged colors that are different enough', () => {
    
  });
})

