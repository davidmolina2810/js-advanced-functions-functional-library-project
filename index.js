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
      const collectionCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (i = 0; i < collectionCopy.length; i++) {
        if (predicate(collectionCopy[i])) {
          return collectionCopy[i]
        }
      }
      return undefined 
    },


  }
})()

fi.libraryMethod()
