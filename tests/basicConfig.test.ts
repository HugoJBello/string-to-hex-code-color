import { expect } from 'chai';
import 'mocha';
import { String2HexCodeColor } from '../index';
import {TestUtils} from './testUtils';

const basicStringArray = ["some text", "SOME TEXT", "more text", "apples", "bannanas", "", "f"]
const smallSizedTextArrary = ["a","b","c","d","e","f","g","h","1","2","3","4"]
const testUtils = new TestUtils();

describe('Testing the default config', () => {
  it('should transform a string in a hex code', () => {
    const str2HexColor: String2HexCodeColor = new String2HexCodeColor();
    for (let str of basicStringArray){
        const obtainedColor = str2HexColor.stringToColor(str);
        expect(obtainedColor).not.to.equal(undefined);
    }
  });
})

describe('Testing the default config with shade', () => {
  it('should transform a string in a hex code and shade the color', () => {
    const str2HexColor: String2HexCodeColor = new String2HexCodeColor(-0.6);
    for (let str of basicStringArray){
        const obtainedColor = str2HexColor.stringToColor(str);
        expect(obtainedColor).not.to.equal(undefined);
    }
  });
})

describe('Testing the default config with small strings', () => {
  it('small strings should be assinged colors that are different enough', () => {
    const str2HexColor: String2HexCodeColor = new String2HexCodeColor();
    let obtainedColorArray = [];

    let reducerCalcColor = (accumulator:any, value:string) => {accumulator.push(str2HexColor.stringToColor(value)); return accumulator};
    let colorArray = smallSizedTextArrary.reduce(reducerCalcColor,[]);
    
    for (let i=2; i<colorArray.length;i++){
        let diff =testUtils.calculateDiff(colorArray[i],colorArray[i-1]);
        console.log(diff);
        expect(diff).to.lessThan(4);
    }
  });
})


