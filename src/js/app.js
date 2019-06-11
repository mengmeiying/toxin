var app = (function () {
  
    var importedModuleA = require('./datepicker.js');
    var importedModuleB = require('./register.js');
    var importedModuleC = require('./slider.js');
    
    return {
      moduleA : importedModuleA,
      moduleB : importedModuleB,
      moduleC : importedModuleC,
    }
    
  })();
  
  module.exports = app;