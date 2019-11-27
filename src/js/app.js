var app = (function () {
  
    //var importedModuleB = require('./register.js');
    var importedModuleA = require("./jquery-ui.js");
    var importedModuleC = require('./slider.js');
    var iModuleD = require('./item-quantity-dropdown.min.js')


    $(document).ready(() => {
      $('.iqdropdown').iqDropdown(  );
    });
    
    return {
      moduleA : importedModuleA,
      moduleC : importedModuleC,
      //moduleB : importedModuleB,
      moduleD : iModuleD,
    }
    
    

  })();
  
  module.exports = app;
