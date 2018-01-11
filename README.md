# a-toolbox

[![NPM Version](http://img.shields.io/npm/v/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)
[![NPM Downloads](https://img.shields.io/npm/dm/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

javascript lightweight basic tools, isomorphic

## Purpose

> "This is my rifle. There are many others like it, but this one is mine."

## Install

````bash
npm i a-toolbox --save
````

## Quick start

```js
const tools = require('a-toolbox')

tools.string.trim('({cut these brackets please)}', ['{', '}', '(', ')'])
// > 'cut these brackets please'

```

modular import

```js
const tools = {
  string: require('a-toolbox/string'),
  fs: require('a-toolbox/fs')
}

```

### On browser

````html
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
````

## API

documentation in progress

- [array](#array)
- [fs](#fs)
- [hash](#hash)
- [object](#object)
- [util](#util)
- [random](#random)
  todo
- [string](#string)
  todo
- [sys](#sys)
  todo
- [task](#task)
  todo
- [time](#time)
  todo


### array

#### array.remove(array, item)  
- _array_ \<Array<*>\>  
- _item_ \<*\>  
  

remove an element from array\nit removes only the first occurrence  

_Example_

````js
let a = ['js','ruby','python']
tools.array.remove(a, 'ruby')
// > a = ['js','python']
````

#### array.removeAt(array, index)  
- _array_ \<Array<*>\>  
- _index_ \<number\>  
  

remove an element from array at position  

_Example_

````js
let a = [1,2,3]
tools.array.removeAt(a, 0)
// > a = [2,3]
````

#### array.last(array)  
- _array_ \<Array<*>\>  
- _return:_ * last element of the array or undefined  

get last element of array or undefined  

_Example_

````js

tools.array.last([1,2,3])
// > 3
````

#### array.at(array)  
- _array_ \<Array<*>\>  
- _return:_ * nth element of array; if negative, start from end: -1 = last element; undefined if missing  

get nth element of array  

_Example_

````js

tools.array.at([1,2,3], 0)
// > 1
````

#### array.first(array)  
- _array_ \<Array<*>\>  
- _return:_ * first element of the array or undefined  

get first element of array or undefined  

_Example_

````js

tools.array.first([1,2,3])
// > 1
````

#### array.contains(array, item)  
- _array_ \<Array<*>\>  
- _item_ \<*\>  
- _return:_ boolean   

check if array contains an element  

_Example_

````js

tools.array.contains([1,2,3], 1)
// > true
````

#### array.insert(array, index, item)  
- _array_ \<Array<*>\>  
- _index_ \<number\>  
- _item_ \<*\>  
  

insert an item into array at index position  

_Example_

````js
let a = ['john','alice','bob']
tools.array.insert(a, 0, 'mary')
// > a = ['mary', 'john', 'alice', 'bob']
````

#### array.concat(arrays)  
- _arrays_ \<...Array<*>\> to chain 
- _return:_ Array\<*\> chained arrays  

concat arrays  

_Example_

````js

tools.array.concat([0,1,2],[3,4,5])
// > [0,1,2,3,4,5]
````

#### array.empty()  

  

empty array - need to keep references  

_Example_

````js
let a = [0,1,2]
tools.array.empty(a)
// > a = []
````

#### array.add(array, item, [unique=false])  
- _array_ \<Array<*>\>  
- _item_ \<*\>  
- _[unique=false]_ \<boolean\>  
  

push item into array, optionally check if already exists  

_Example_

````js
let a = [0,1,2,3]
tools.array.add(a, 3, true)
// > a = [0,1,2,3]
````


---

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

#### fs.touch(path, [mode=0o666])  
- _path_ \<string\> file path 
- _[mode=0o666]_ \<number\>  
- _return:_ Promise.\<void\>   

create an empty file if not exists  

_Example_

````js

tools.fs.touch('/tmp/touch-me')

````

#### fs.unlink(path, [safe=true])  
- _path_ \<string\> file path 
- _[safe=true]_ \<boolean\> if safe do not throw exception 
- _return:_ Promise.\<void\>   

delete file, optionally in safe mode  

_Example_

````js

tools.fs.unlink('/tmp/file')

````


---

### hash

#### hash.sha256(data)  
- _data_ \<string\> any string 
- _return:_ string sha256 in hex format  

Generate hash using sha256 in hex format  

_Example_

````js

tools.hash.sha256('usk6fgbuygbu6')
// > 'ee42f619919727584b66fe25248ed4bba8e87dcfb3e62a90143ea17ba48df58e'
````


---

### object

#### object.flat(obj)  
- _obj_ \<Object\>  
- _return:_ Object   

flat keys in object  

_Example_

````js

tools.object.flat({ a: { a1: 1, a2: 2 }, b: 3 })
// > { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
````

#### object.merge(a, b)  
- _a_ \<Object\>  
- _b_ \<Object\>  
  

merge b into a  

_Example_

````js
let a = {a:1,b:'ciao'}
tools.object.merge(a, {a:4,c:{d:8,e:9}})
// > a = { a: 4, b: 'ciao', c: { d: 8, e: 9 } }
````

#### object.clone(obj)  
- _obj_ \<Object|Array\> The array or the object to clone 
- _return:_ Object|Array   

Clone an array or an object in input  

_Example_

````js

tools.object.clone({a: 1, b: 'ciao'})
// > {a: 1, b: 'ciao'}
````

#### object.getKeys(obj)  
- _obj_ \<Object\>  
- _return:_ Array\<string\>   

  

_Example_

````js

tools.object.getKeys({a: () => { }, b: 1, c: 'ciao'})
// > ['a','b','c']
````

#### object.inherits(destination, source)  
- _destination_ \<Object\>  
- _source_ \<Object\>  
  

it use ``Object.getOwnPropertyNames`` to inherits child from parent, without prototype  

_Example_

````js
let a = {}
tools.object.inherits(a, {f0:() => { },p1:1,p2:'ciao'})
// > a = {f0: () => { }, p1: 1, p2: 'ciao'}
````

#### object.empty(obj)  
- _obj_ \<Object\>  
  

empty object - need to keep references  

_Example_

````js
let a = {a:0,b:1,c:2,d:[],e:{f:-1}}
tools.object.empty(a)
// > a = {}
````

#### _f.raise(obj)  
- _obj_ \<Object\>  
- _return:_ Object   

restore flat object  

_Example_

````js

tools.object.raise({ 'a.a1': 1, 'a.a2': 2, 'b': 3 })
// > { a: { a1: 1, a2: 2 }, b: 3 }
````

#### object.raise(obj)  
- _obj_ \<Object\>  
- _return:_ Object   

restore flat object  

_Example_

````js

tools.object.raise({ 'a.a1': 1, 'a.a2': 2, 'b': 3 })
// > { a: { a1: 1, a2: 2 }, b: 3 }
````

#### object.getByFlatKey(obj, fkey)  
- _obj_ \<Object\>  
- _fkey_ \<string\>  
- _return:_ Object   

get value in object using a flat key  

_Example_

````js

tools.object.getByFlatKey({ a: { b: {c: 1} } }, 'a.b.c')
// > 1
````

#### object.setByFlatKey(obj, fkey, val)  
- _obj_ \<Object\>  
- _fkey_ \<string\>  
- _val_ \<*\>  
  

set value in object using a flat key  

_Example_

````js
let a = {}
tools.object.setByFlatKey(a, 'a.b.c', 1)
// > a = { a: { b: {c: 1} } }
````


---

### util

#### util.isSet(val)  
- _val_ \<*\>  
- _return:_ bool   

check if ``val`` is setted, means it's not ``null`` or ``undefined``  


#### util.onBrowser()  

- _return:_ bool   

check if you are on browser or not  


---

## Changelog

v. 1.2.0

- use [hash.js](https://github.com/indutny/hash.js) instead of ``crypto``

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
