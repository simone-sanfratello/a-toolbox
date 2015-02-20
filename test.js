var tools = require('./main.js');

// add replaceAll in String prototype

console.log("no replace all in js native code that replace all the replace".replaceAll(' ', '_'));

//> no_replace_all_in_js_native_code_that_replace_all_the_replace

var _array = ['very', 'annoying', 'remove', 'elements', 'in', 'js', 'arrays'];
tools.array.remove(_array, 'very');
tools.array.remove(_array, 'annoying');
console.log(_array);

//>[ 'remove', 'elements', 'in', 'js', 'arrays' ]

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

console.log(tools.math.rnd(100));