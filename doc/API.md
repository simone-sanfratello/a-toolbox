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

#### object.raise(flat)  
- _flat_ \<Object\>  
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

### string

#### string.template(str, obj, [remove=false])  
- _str_ \<string\>  
- _obj_ \<Object\>  
- _[remove=false]_ \<boolean\> remove missing placeholders from obj, default false 
- _return:_ string   

replace placeholders inside graph brackets {} with obj dictionary\n~ES6 template string without $  

_Example_

````js

tools.string.template('hi {name} how are you?', {name: 'Alice'})
// > 'hi Alice how are you?'
````

#### string.trim(str, cuts)  
- _str_ \<string\>  
- _cuts_ \<Array<string>\>  
- _return:_ string   

trim string  

_Example_

````js

tools.string.trim(' regular trim      ')
// > 'regular trim'
````

#### string.replaceAll(str, from, to)  
- _str_ \<string\>  
- _from_ \<string\>  
- _to_ \<string\>  
- _return:_ string   

  

_Example_

````js

tools.string.replaceAll('abcadaeafaga', 'a', '')
// > 'bcdefg'
````

#### string.capitalize(str)  
- _str_ \<string\>  
- _return:_ string   

  

_Example_

````js

tools.string.capitalize('alice')
// > 'Alice'
````

#### string.prependMissing(prefix, str)  
- _prefix_ \<string\>  
- _str_ \<string\>  
- _return:_ string   

  

_Example_

````js

tools.string.prependMissing('miss ', 'Alice')
// > 'miss Alice'
````


---

### random

#### random.rnd(max)  
- _max_ \<number\>  
- _return:_ number   

get random int from 0 to max  

_Example_

````js

tools.random.rnd(10)
// > 5
````

#### random.number(min, max)  
- _min_ \<number\>  
- _max_ \<number\>  
- _return:_ number   

get random int from min to max  

_Example_

````js

tools.random.number(10, 20)
// > 11
````

#### random.string([length=8], [set=abcdefghijklmnopqrstuvwxyz])  
- _[length=8]_ \<number\>  
- _[set=abcdefghijklmnopqrstuvwxyz]_ \<Array\>  
- _return:_ string   

get random string  

_Example_

````js

tools.random.string(8)
// > 'ajdsfchakwt'
````

#### random.hex([length=8])  
- _[length=8]_ \<number\>  
- _return:_ string   

get random hex string  

_Example_

````js

tools.random.hex(8)
// > '1bc956bf'
````

#### random.hash(salt)  
- _salt_ \<?string\>  
- _return:_ string   

get random hash string  

_Example_

````js

tools.random.hash()
// > '1f8a690b7366a2323e2d5b045120da7e93896f471f8a690b731f8a690b739ab5'
````

#### random.element(array, not)  
- _array_ \<Array<*>\>  
- _not_ \<Array<*>\>  
- _return:_ * element  

get random element from array  

_Example_

````js

tools.random.element([1,2,3,4,5])
// > 1
````


---

### sys

#### sys.isRoot()  

- _return:_ bool is root or not  

check if running user is root  

