var app = (function () {
  
    var importedModuleA = require('./datepicker.js');
    var importedModuleA = require('./test.js');
    var importedModuleC = require('./register.js');
    
    return {
      moduleA : importedModuleA,
      moduleB : importedModuleB,
      moduleB : importedModuleC,
    }
    
  })();
  
  module.exports = app;