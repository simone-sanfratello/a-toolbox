# a-toolbox

[![NPM Version](http://img.shields.io/npm/v/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)
[![NPM Downloads](https://img.shields.io/npm/dm/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

javascript lightweight basic tools, zero dependecies, isomorphic

## Purpose

> "This is my rifle. There are many others like it, but this one is mine."

## Install

````bash
npm i a-toolbox --save
````

## Quick start

```js
const tools = require('a-toolbox');

tools.string.trim('({cut these brackets please)}', ['{', '}', '(', ')'])
// > 'cut these brackets please'

```

### On browser

<script src="node_modules/a-toolbox/dist/atoolbox.min.js"></script>
<script>
var data = {
  name: 'Alice',
  year: 2014,
  color: 'purple'
};

var str = '<div>My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}';
console.log('template:', tools.string.template(str, data));

//> template: <div>My name is Alice I was born in 2014 and my favourite color is purple</div>{nothing}
</script>

## API

documentation in progress

- [array](#array)
- [fs](#fs)
- [hash](#hash)
- [object](#object)
- [random](#random)
- [string](#string)
- [sys](#sys)
- [task](#task)
- [time](#time)
- [util](#util)

### array

todo

### fs
note: not available on browser

#### fs.exists(path)  
- _path_ \<string\> file path 
- _return:_ Promise.\<boolean\> true if file exists - and it's a file  

replace deprecated fs.exists  

_Example_

````js
tools.fs.exists('/tmp/file')
// > true
````

#### fs.touch(path)  
- _path_ \<string\> file path 
- _return:_ Promise.\<void\>   

create an empty file if not exists  

_Example_

````js
tools.fs.touch('/tmp/touch-me')

````

#### fs.unlink(path, [safe=true])  
- _path_ \<string\> file path 
- _[safe=true]_ \<boolean\> safe do not throw exception 
- _return:_ Promise.\<void\>   

delete file, optionally in safe mode  

_Example_

````js
tools.fs.unlink('/tmp/file')

````

### hash

todo

### object

todo

### random

todo

### string

todo

### sys
note: not available on browser

todo

### task

todo

### time
todo

### util

#### util.isSet()  

- _return:_ bool   

check if ``val`` is setted, means it's not ``null`` or ``undefined``  

#### util.onBrowser()  

- _return:_ bool   

check if you are on browser or not  

---

## Changelog

v. 1.0.0

- general review
- modular loader
- browser version

---

## TODO

- [ ] doc (readme, api)
- [ ] tdd via tollo
- [ ] keywords in github and package.json

---

## License

The MIT License (MIT)

Copyright (c) 2015-2018, [braces lab](https://braceslab.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
