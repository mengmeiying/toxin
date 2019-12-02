var app = (function () {
  
    var importedModuleB = require('./register.js');
    var importedModuleA = require("./jquery-ui.js");
    var importedModuleC = require('./slider.js');
    var importedModuleE = require('./star.js');
    var iModuleD = require('./item-quantity-dropdown.min.js');
    var importedModuleF = require('./jquery.min.js');


    $(document).ready(() => {
      $('.iqdropdown').iqDropdown(  );
    });
    
    return {
      moduleA : importedModuleA,
      moduleC : importedModuleC,
      moduleB : importedModuleB,
      moduleD : iModuleD,
      moduleE : importedModuleE,
      moduleF : importedModuleF,
    }
    
    

  })();
  
  module.exports = app;
