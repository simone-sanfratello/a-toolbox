
String.prototype.replaceAll = function(from, to) {
    return this.split(from).join(to);
};

var atoolbox = {
    
    /**
     * array utils, inspired to goog.array
     */
    array: {
        remove: function (array, value) {
            var _index = array.indexOf(value);
            if (_index != -1)
                array.splice(_index, 1);
        }
    },
    
    /**
     * tasks (promises) async manage
     * @param {function} done callback when all tasks are completed
     */
    tasks: function (done) {
        var __tasks = [];
        return {
            todo: function (id) {
                __tasks.push(id);
            },
            done: function (id) {
                atoolbox.array.remove(__tasks, id);
                1 > __tasks.length && (done && done());
            }
        };
    }
};

module.exports = atoolbox;