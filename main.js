
String.prototype.replaceAll = function (from, to) {
    return this.split(from).join(to);
};

var tools = {
    /**
     * array utils, inspired to goog.array
     */
    array: {
        /**
         * remove an element from array
         * @param {Array} array
         * @param {*} value
         */
        remove: function (array, value) {
            var _index = array.indexOf(value);
            if (_index != -1)
                array.splice(_index, 1);
        },
        /**
         * remove an element from array at position
         * @param {Array} array
         * @param {number} index
         */
        removeAt: function (array, index) {
            return Array.prototype.splice.call(array, index, 1).length == 1;
        },
        /**
         * check if array contains an element
         * @param {Array} array
         * @param {*} value
         * @returns {Boolean} 
         */
        contains: function (array, value) {
            return array.indexOf(value) != -1;
        },
        /**
         * insert an item into array at index position 
         * @param {Array} array
         * @param {number} index
         * @param {*} item
         */
        insert: function (array, index, item) {
            if (array[index])
                array.splice(index, 0, item);
            else
                array[index] = item;
        },
        /**
         * get random element from array
         * @param {Array} array
         * @param {*} not
         * @returns {*} element
         */
        randomElement: function (array, not) {
            if (!not)
                return array[tools.math.random(0, array.length - 1)];
            else {
                var _item, i = 0;
                do {
                    _item = randomElement(array);
                } while (not.indexOf(_item) != -1 && ++i < array.length);
                return _item;
            }
        },
        /**
         * concat arrays
         * @param {...Array} arrays to chain
         * @returns {Array} chained arrays
         * @example tools.array.concat([0,1,2],[3,4,5]) > [0,1,2,3,4,5]
         */
        concat: function (args) {
            return Array.prototype.concat.apply(Array.prototype, arguments);
        }
    },
    /**
     * math (?) utils
     */
    math: {
        /**
         * return random int from 0 to val
         * @param {number} val max value
         * @returns {number}
         */
        rnd: function (val) {
            if(!val)
                return 0;
            return Math.floor(val * (Math.random() % 1));
        },
        /**
         * return random int from min to max
         * @param {number} min
         * @param {number} max
         * @returns {number}
         */
        random: function (min, max) {
            if (!max)
                return tools.math.rnd(min);

            min = Math.floor(min);
            max = Math.floor(max);
            return min + tools.math.rnd(1 + max - min);
        }
    },
    /**
     * tasks (promises) async manage
     * @param {function} done callback when all tasks are completed
     */
    tasks: function (done) {
        var __tasks = [];
        return {
            /**
             * schedule what to do 
             * @param {string} id
             */
            todo: function (id) {
                __tasks.push(id);
            },
            /**
             * declare it's done
             * @param {string} id
             */
            done: function (id) {
                tools.array.remove(__tasks, id);
                1 > __tasks.length && (done && done());
            }
        };
    }
};
if (typeof window == 'undefined')
    module.exports = tools;