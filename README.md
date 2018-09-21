[![npm version](https://badge.fury.io/js/string-to-hex-code-color.svg)](https://badge.fury.io/js/ngx-string-to-css-color)

string-to-hex-code-color===========

An javascript library that lets you obtain css colors (hexadecimal code) from strings of text using hash functions. **Different text inputs will give you different colors**, which makes it a great tool to visualize different tags or text strings. 

[Bug-reports or feature request](https://github.com/HugoJBello/string-to-hex-code-color/issues) as well as any other kind of **feedback is highly welcome!**

#Check the [**live demo here!!**](https://ngx-string-to-css-color.firebaseapp.com/)

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
    console.log("color for the text 'Text Example':")
    console.log(string2HexCodeColor.stringToColor('Text Example'))

    console.log("color for the text 'Text Example':")
    console.log(string2HexCodeColor.stringToColor('Text Example2'))
```

this will give you the hex colors: 

```
    color for the text 'Text Example':
    #0c5401
    color for the text 'Text Example2':
    #17454f
```

which are

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/str2col1Text Example.png)

and 

![](https://raw.githubusercontent.com/HugoJBello/ngx-string-to-css-color-lib/master/screenshots/str2col1Text Example2.png)


By adding a numeric parameter in the constructor you can change the shade. For instance:

```typescript
    const string2HexCodeColor = new String2HexCodeColor(0.2);
```
will give you lighter colors. The default shade is -0.6, the greater the shade the lighter the colors will be