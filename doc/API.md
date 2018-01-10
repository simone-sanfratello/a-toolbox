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
- _[safe=true]_ \<boolean\> safe do not throw exception 
- _return:_ Promise.\<void\>   

delete file, optionally in safe mode  

_Example_

````js
tools.fs.unlink('/tmp/file')

````


---

### util

#### util.isSet()  

- _return:_ bool   

check if ``val`` is setted, means it's not ``null`` or ``undefined``  

_Example_

````js
()

````

#### util.onBrowser()  

- _return:_ bool   

check if you are on browser or not  

_Example_

````js
()

````
