var tools = require('./main.js');

// add replaceAll in String prototype

console.log("no replace all in js native code that replace all the replace".replaceAll(' ', '_'));

//> no_replace_all_in_js_native_code_that_replace_all_the_replace

var _array = ['very', 'annoying', 'remove', 'elements', 'in', 'js', 'arrays'];
tools.array.remove(_array, 'very');
tools.array.remove(_array, 'annoying');
console.log(_array);

//>[ 'remove', 'elements', 'in', 'js', 'arrays' ]

tools.array.removeAt(_array, 4);
console.log(_array);

//>[ 'remove', 'elements', 'in', 'arrays' ]

console.log('last element is', tools.array.last(_array));

//>last element is js

console.log('first element is', tools.array.first(_array));

//>first element is remove

console.log('contains js?', tools.array.contains(_array, 'js'));

//>contains js? true

console.log('contains ruby?', tools.array.contains(_array, 'ruby'));

//>contains ruby? false

tools.array.insert(_array, 0, 'something');
console.log('inserted something', _array);

//>inserted something [ 'something', 'remove', 'elements', 'in', 'js' ]

console.log('get random element:', tools.array.randomElement(_array));

//>get random element element: in

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

tools.array.empty(_array);
console.log('empty it', _array);

//>empty it []

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

var _merge = {a: 1, b: 2};
console.log('to merge', _merge);
tools.object.merge(_merge, {a: 4, c: { d: 8, e: 9}});
console.log('merged', _merge);

//>to merge { a: 1, b: 2 }
//>merged { a: 4, b: 2, c: { d: 8, e: 9 } }

console.log('random number from 1 to 100:', tools.random.number(1, 100));

//>random number from 1 to 100: 14

console.log('random string of 8 chars, default set:', tools.random.string(8));

//>random string of 8 chars, default set: dcglhcvr

var _hex = '0123456789abcdef';
console.log('random string of 16 chars, custom set (hex)', _hex, ':', tools.random.string(16, _hex));

//>random string of 16 chars, custom set (hex) 0123456789abcdef : b4a61c1af5360fd4

var data = {
    name: 'Alice',
    year: 2014,
    color: 'yellow'
};

var str = '<div>My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}';
console.log('template:', tools.string.template(str, data));

