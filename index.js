let fs = require('fs')
let path = require('path')

module.exports = function(modifier, MyClass, directory) {
	fs.readdirSync(directory)
	.map(file => path.join(directory, file))
	.filter(file => fs.statSync(file).isFile())
	.map(file => file.replace(/\.[^/.]+$/, ''))
	.forEach(file => {
		let name = path.basename(file)

		if(name === 'index')
			return

		MyClass.prototype[name] = modifier(require(file))
	})

	return MyClass
}