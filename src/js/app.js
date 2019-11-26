var app = (function () {
  
    var importedModuleB = require('./register.js');
    var importedModuleC = require('./slider.js');
    
    return {
      moduleA : importedModuleC,
      moduleB : importedModuleB,
    }
    
  })();
  
  module.exports = app;
console.log("HEY WTF")