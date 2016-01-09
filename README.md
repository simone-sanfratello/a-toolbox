# a-toolbox
[![NPM Version](http://img.shields.io/npm/v/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)
[![NPM Downloads](https://img.shields.io/npm/dm/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Code Climate](https://codeclimate.com/github/simone-sanfratello/a-toolbox/badges/gpa.svg)](https://codeclimate.com/github/simone-sanfratello/a-toolbox)
[![Test Coverage](https://codeclimate.com/github/simone-sanfratello/a-toolbox/badges/coverage.svg)](https://codeclimate.com/github/simone-sanfratello/a-toolbox/coverage)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRV4AM2CA9F78 "Donate using Paypal")

Javascript lightweight tools

"This is my rifle. There are many others like it, but this one is mine."

## Npm Installation

    $ npm install a-toolbox

## Tools on Node.js

```js

var tools = require('a-toolbox.js');

```

## Tools on Browser

```html

<script src="https://raw.githubusercontent.com/simone-sanfratello/a-toolbox/master/main.js"></script>

```

## Tools

#### tasks (promises) async manage

```js

var _tasks = new tools.tasks(function () {
    console.log('well done');
});

var _asyncOperationTimeout = [ 500, 1000, 200, 1500, 100];

for(var i  in _asyncOperationTimeout) {
    _tasks.todo('task#' + i);
}
for(var i  in _asyncOperationTimeout) {
    setTimeout(function(i){
        return function() {
            console.log('done task #', i);
            _tasks.done('task#' + i);
        };
    }(i), _asyncOperationTimeout[i]);

}

//>done task # 4
//>done task # 2
//>done task # 0
//>done task # 1
//>done task # 3
//>well done

```

#### object merge

```js

var _merge = {a: 1, b: 2};
console.log('to merge', _merge);
tools.object.merge(_merge, {a: 4, c: { d: 8, e: 9}});
console.log('merged', _merge);

//>to merge { a: 1, b: 2 }
//>merged { a: 4, b: 2, c: { d: 8, e: 9 } }

```

#### random

```js

console.log('random number from 1 to 100:', tools.random.number(1, 100));

//>random number from 1 to 100: 14

console.log('random string of 8 chars, default set:', tools.random.string(8));

//>random string of 8 chars, default set: dcglhcvr

var _hex = '0123456789abcdef';
console.log('random string of 16 chars, custom set (hex)', _hex, ':', tools.random.string(16, _hex));

//>random string of 16 chars, custom set (hex) 0123456789abcdef : b4a61c1af5360fd4

```

#### string template
Replace marker in template string with provided object data

```js

var data = {
    name: 'Alice',
    year: 2014,
    color: 'yellow'
};

var str = '<div>My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}';
console.log('template:', tools.string.template(str, data));

//> template: <div>My name is Alice I was born in 2014 and my favourite color is yellow</div>{nothing}

```

#### string trim
Trim string using custom chars

```js

var str = '({cut these silly brackets please)}';
console.log('trim:', tools.string.trim(str, ['{','}','(',')']));

//> trim: cut these silly brackets please

```

#### replaceAll in String prototype

```js

console.log("no replace all in js native code that replace all the replace".replaceAll(' ', '_'));

//> no_replace_all_in_js_native_code_that_replace_all_the_replace

```

#### array remove

```js

var _array = ['very', 'annoying', 'remove', 'elements', 'in', 'js', 'arrays'];
tools.array.remove(_array, 'very');
tools.array.remove(_array, 'annoying');
console.log(_array);

//>[ 'remove', 'elements', 'in', 'js', 'arrays' ]

```

#### array removeAt

```js

tools.array.removeAt(_array, 4);
console.log(_array);

//>[ 'remove', 'elements', 'in', 'arrays' ]

```

#### array first and last

```js

console.log('last element is', tools.array.last(_array));

//>last element is js

console.log('first element is', tools.array.first(_array));

//>first element is remove

```

#### array contains

```js

console.log('contains js?', tools.array.contains(_array, 'js'));

//>contains js? true

console.log('contains ruby?', tools.array.contains(_array, 'ruby'));

//>contains ruby? false

```

#### array insert

```js

tools.array.insert(_array, 0, 'something');
console.log('inserted something', _array);

//>inserted something [ 'something', 'remove', 'elements', 'in', 'js' ]

```

#### array get random element

```js

console.log('get random element:', tools.array.randomElement(_array));

//>get random element element: in

```

#### array concat

```js

console.log('concat more arrays', tools.array.concat(_array, [0,1,2,3], ['a','b','c']));

//>concat more arrays [ 'something',
//>  'remove',
//>  'elements',
//>  'in',
//>  'js',
//>  0,
//>  1,
//>  2,
//>  3,
//>  'a',
//>  'b',
//>  'c' ]

```

#### array empty
When you need to keep references

```js

tools.array.empty(_array);
console.log('empty it', _array);

//>empty it []

```

## License

The MIT License (MIT)

Copyright (c) 2015 Simone Sanfratello

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
