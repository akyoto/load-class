# load-class

Requires all files from the specified directory as members of the class.

```js
let loadClass = require('load-class')

// loadClass normally requires a modifier as a first parameter.
// Here we bind the first parameter to a noop function
// so we can work with a partially applied function.
loadClass = loadClass.bind(null, func => func)

class Test {}

module.exports = loadClass(Test, __dirname)
```