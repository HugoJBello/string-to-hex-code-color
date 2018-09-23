
export class TestUtils{
constructor(){}

public calculateDiff(string1:string, string2:string): number{
    return this.subCompare(string1,string2,1).substring.length;
}

//https://stackoverflow.com/questions/13006556/check-if-two-strings-share-a-common-substring-in-javascript
// Note: not fully tested, there may be bugs:
public subCompare (needle:any, haystack:any, min_substring_length:number) {

    // Min substring length is optional, if not given or is 0 default to 1:
    min_substring_length = min_substring_length || 1;
  
    // Search possible substrings from largest to smallest:
    for (let i=needle.length; i>=min_substring_length; i--) {
        for (let j=0; j <= (needle.length - i); j++) {
            let substring = needle.substr(j,i);
            let k = haystack.indexOf(substring);
            if (k != -1) {
                return {
                    found : 1,
                    substring : substring,
                    needleIndex : j,
                    haystackIndex : k
                }
            }
        }
    }
    return {
        found : 0
    }
  }
}