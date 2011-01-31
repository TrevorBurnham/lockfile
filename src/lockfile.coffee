fs = require 'fs'
path = require 'path'

exports.check = path.exists

exports.create = (filename, contents...) ->
  fs.writeFileSync filename, contents.join('')

exports.checkOrCreate = (filename, contents..., callback) ->
  path.exists filename, (exists) ->
    exports.create filename, contents... unless exists
    callback exists