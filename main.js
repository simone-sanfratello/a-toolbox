
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
         * @param {*} item
         */
        remove: function (array, item) {
            var _index = array.indexOf(item);
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
         * get last element of array or null
         * @param {Array} array
         * @returns {*} last element of the array or null
         */
        last: function (array) {
            return array[array.length - 1] || null;
        },
        /**
         * get first element of array or null
         * @param {Array} array
         * @returns {*} last element of the array or null
         */
        first: function (array) {
            return array[0];
        },
        /**
         * check if array contains an element
         * @param {Array} array
         * @param {*} item
         * @returns {Boolean} 
         */
        contains: function (array, item) {
            return array.indexOf(item) != -1;
        },
        /**
         * insert an item into array at index position 
         * @param {Array} array
         * @param {number} index
         * @param {*} item
         */
        insert: function (array, index, item) {
            if(index > array.length)
                index = array.length;
            
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
                return array[tools.random.number(0, array.length - 1)];
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
        },
        /**
         * empty - need to not break references
         */
        empty: function (array) {
            while(array[0])
                array.pop();
        }
    },
    /**
     * random utils
     */
    random: {
        /**
         * get random int from 0 to val
         * @param {number} val max item
         * @returns {number}
         */
        rnd: function (val) {
            if (!val)
                return 0;
            return Math.floor(val * (Math.random() % 1));
        },
        /**
         * get random int from min to max
         * @param {number} min
         * @param {number} max
         * @returns {number}
         */
        number: function (min, max) {
            if (!max)
                return tools.random.rnd(min);

            min = Math.floor(min);
            max = Math.floor(max);
            return min + tools.random.rnd(1 + max - min);
        },
        /**
         * get random string
         * @param {number} [length=8]
         * @param {Array} [set=qwertyuiopasdfghjklzxcvbnm]
         * @returns {String}
         */
        string: function (length, set) {
            if(!length)
                lenght = 8;
            if(!set)
                set = 'qwertyuiopasdfghjklzxcvbnm';
            var _str = '';
            for(var i = 0; i < length; i++)
                _str += tools.array.randomElement(set);
            return _str;
        }
    },
    object: {
        /**
         *  merge obj2 into obj1
         *  @param {object} obj1
         *  @param {object} obj2
         */
        merge: function(obj1, obj2) {
            for(var i in obj2) {
                if(typeof obj2[i] == 'object') {
                    !obj1[i] && (obj1[i] = {});
                    tools.object.merge(obj1[i], obj2[i]);
                } else
                    obj1[i] = obj2[i];
            }
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



