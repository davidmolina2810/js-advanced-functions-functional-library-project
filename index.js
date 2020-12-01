const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof(collection) === "object") {
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection)
        }
      } else {
        for (i = 0; i < this.length; i++) {
          callback(collection[i], i, collection)
        } 
      }
      return collection
    },

    map: function(collection, callback) {
      const collectionCopy = (collection instanceof Array) ? collection.slice() : Object.entries(collection)
      const newArr = []
      if (collection instanceof Array) {
        for (i = 0; i < collectionCopy.length; i++) {
          newArr.push(callback(collectionCopy[i], i, collectionCopy))
        }
      } else {
        for (const [key, value] of collectionCopy) {
          newArr.push(callback(value, key, collectionCopy))
        }
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      const collectionCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      if (!acc) {
        acc = collectionCopy[0]
        for (let i = 0; i < collectionCopy.length - 1; i++) {
          acc = callback(acc, collectionCopy[i+1], collectionCopy)
        }
      } else {
        for (let i = 0; i < collectionCopy.length; i++) {
          acc = callback(acc, collectionCopy[i], collectionCopy)
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
      return undefined 
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      const filtered = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filtered.push(collection[i])
        }
      }
      return filtered
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let total = 0
      for (let i = 0; i < collection.length; i++) {
        total += 1
      }
      return total
    },

    first: function(array, n=1) {
      let newArr = []
      for (let i = 0; i < n; i++) {
        newArr.push(array[i])
      }
      if (newArr.length === 1) {
        return newArr[0]
      }
      return newArr
    }, 

    last: function(array, n=1) {
      let newArr = []
      if (n === 1) {
        return array.pop()
      }
      for (let i = 0; i < n; i++) {
        newArr.unshift(array.pop())
      }
      return newArr
    }, 

    compact: function(array) {
      const falsies = [false, null, 0, "", undefined, NaN]
      return array.filter(el => !falsies.includes(el))
    }, 

    sortBy: function(array, callback) {
      const newArr = array.slice()
      return newArr.sort((a,b) => { return callback(a) - callback(b)})
    }

  }
})()

fi.libraryMethod()
