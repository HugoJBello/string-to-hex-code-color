[![npm version](https://badge.fury.io/js/string-to-hex-code-color.svg)](https://badge.fury.io/js/string-to-hex-code-color)

string-to-hex-code-color
===========
# Basic usage

An javascript library that lets you obtain css colors (hexadecimal code) from strings of text using hash functions. **Different text inputs will give you different colors**, which makes it a great tool to visualize different tags or text strings. 

[Bug-reports or feature request](https://github.com/HugoJBello/string-to-hex-code-color/issues) as well as any other kind of **feedback is highly welcome!**


Check the [**live demo here!!**](https://string-to-hex-code-color.firebaseapp.com/)

To install the package just use:

```
npm install string-to-hex-code-color -S
```


then import the module in your typescript class (or js script)

```typescript
import {String2HexCodeColor} from 'string-to-hex-code-color';
```

and to obtain an hexadecimal code color from a string you just:


```typescript
const string2HexCodeColor = new String2HexCodeColor();
console.log("color for the text 'Test Text':")
console.log(string2HexCodeColor.stringToColor('Test Text'))

console.log("color for the text 'Test Text':")
console.log(string2HexCodeColor.stringToColor('Test Text2'))
```

this will give you the hex colors: 

```
color for the text 'Test Text':
#fb8f94
color for the text 'Test Text2':
#976ffd
```

which are

![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/str2col1TextExample.png)

and 

![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/str2col1TextExample2.png)

# Shade

If you want to obtain darker or lighter colors than usual you can add a second parameter to shade the output. For instance


```typescript
const string2HexCodeColor = new String2HexCodeColor();
console.log("color for the text 'Test Text' with shade -0.5")
console.log(string2HexCodeColor.stringToColor('Test Text',-0.5))

console.log("color for the text 'Test Text' with shade -0.2")
console.log(string2HexCodeColor.stringToColor('Test Text',-0.2))

console.log("color for the text 'Test Text' with shade 0.2")
console.log(string2HexCodeColor.stringToColor('Test Text',0.2))
```

this will give you the hex colors: 

```
color for the text 'Test Text' with shade -0.5
#7e484a
color for the text 'Test Text2' with shade -0.2:
#c97276
color for the text 'Test Text2' with shade 0.2:
#fca5a9
```

which are

![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/shade1.png)


![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/shade2.png)

![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/shade3.png)

Here you have more examples with different shades:

![](https://raw.githubusercontent.com/HugoJBello/string-to-hex-code-color/master/screenshots/table.png)

## Default shade
The default shade is 0, but by adding a numeric parameter in the constructor you can change the shade. For instance:

```typescript
    const string2HexCodeColor = new String2HexCodeColor(0.2);
```

will give you lighter colors.
