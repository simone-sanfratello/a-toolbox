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
