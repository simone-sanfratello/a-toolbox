# a-toolbox

[![NPM Version](http://img.shields.io/npm/v/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)
[![NPM Downloads](https://img.shields.io/npm/dm/a-toolbox.svg?style=flat)](https://www.npmjs.org/package/a-toolbox)

[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

javascript lightweight basic tools

> "This is my rifle. There are many others like it, but this one is mine."

## Npm Installation

````
npm install a-toolbox
````

## Tools on Node.js

```js

var tools = require('a-toolbox.js');

```

## Tools on Browser

```html

<script src="https://raw.githubusercontent.com/simone-sanfratello/a-toolbox/master/main.js"></script>

```

## Tools

**NOTE: missing documentation or obsolete**

#### tasks async manage

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