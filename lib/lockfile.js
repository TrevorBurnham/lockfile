(function() {
  var fs, path;
  var __slice = Array.prototype.slice;
  fs = require('fs');
  path = require('path');
  exports.check = path.exists;
  exports.create = function() {
    var contents, filename;
    filename = arguments[0], contents = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return fs.writeFileSync(filename, contents.join(''));
  };
  exports.checkOrCreate = function() {
    var callback, contents, filename, _i;
    filename = arguments[0], contents = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), callback = arguments[_i++];
    return path.exists(filename, function(exists) {
      if (!exists) {
        exports.create.apply(exports, [filename].concat(__slice.call(contents)));
      }
      return callback(exists);
    });
  };
}).call(this);
