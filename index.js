/***************************************************************************
 * Collection Helpers: myEach, myMap, myReduce, myFind, myFilter, mySize,
 * myFirst, myLast, myKeys, myValues
 ***************************************************************************/

// myEach: iterates collections (arrays or objects),
// and returns the original collection
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
}

// myMap: map values to a new array without mutating original
function myMap(collection, callback) {
  let result = [];
  myEach(collection, val => result.push(callback(val)));
  return result;
}

// myReduce: reduce array or object values to a single value
function myReduce(collection, callback, acc) {
  let start = acc;
  let initializing = arguments.length < 3;

  myEach(collection, val => {
    if (initializing) {
      start = val;
      initializing = false;
    } else {
      start = callback(start, val, collection);
    }
  });

  return start;
}

// myFind: return first element satisfying predicate, or undefined
function myFind(collection, predicate) {
  let found;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        found = collection[i];
        break;
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        found = collection[key];
        break;
      }
    }
  }
  return found;
}

// myFilter: return a new array of values satisfying predicate
function myFilter(collection, predicate) {
  let result = [];
  myEach(collection, val => {
    if (predicate(val)) {
      result.push(val);
    }
  });
  return result;
}

// mySize: count elements in array or keys in object
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// myFirst: return first element or first n elements
function myFirst(array, n) {
  if (!Array.isArray(array)) return undefined;

  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

// myLast: return last element or last n elements
function myLast(array, n) {
  if (!Array.isArray(array)) return undefined;

  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

// myKeys: return object's own enumerable keys
function myKeys(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

// myValues: return object's own enumerable values
function myValues(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

/***************************************************************************
 * Export Helpers
 ***************************************************************************/

// If you're using Node.js with require():
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};

// Or attach to global if tests expect them in global/window scope:
// global.myEach = myEach
// etc.
