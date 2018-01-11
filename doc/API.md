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
- _[safe=true]_ \<boolean\> if safe do not throw exception 
- _return:_ Promise.\<void\>   

delete file, optionally in safe mode  

_Example_

````js

tools.fs.unlink('/tmp/file')

````


---

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

### util

#### util.isSet(val)  
- _val_ \<*\>  
- _return:_ bool   

check if ``val`` is setted, means it's not ``null`` or ``undefined``  


#### util.onBrowser()  

- _return:_ bool   

check if you are on browser or not  

