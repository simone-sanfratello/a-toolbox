# a-toolbox
[![NPM Version](http://img.shields.io/npm/v/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)
[![NPM Downloads](https://img.shields.io/npm/dm/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRV4AM2CA9F78 "Donate using Paypal")

Javascript lightweight tools 

"This is my rifle. There are many others like it, but this one is mine."

## Npm Installation

    $ npm install a-toolbox

## Tools

```js

var tools = require('a-toolbox.js');

```

#### add replaceAll in String prototype

```js

console.log("no replace all in js native code that replace all the replace".replaceAll(' ', '_'));

//> no_replace_all_in_js_native_code_that_replace_all_the_replace

```

#### array function management, inspired to goog.array (to be continued)

```js

var _array = ['very', 'annoying', 'remove', 'elements', 'in', 'js', 'arrays'];
tools.array.remove(_array, 'very');
tools.array.remove(_array, 'annoying');
console.log(_array);

//>[ 'remove', 'elements', 'in', 'js', 'arrays' ]

```

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
