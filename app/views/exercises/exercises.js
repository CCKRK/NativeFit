var frameModule = require("ui/frame");
var observableModule = require("data/observable");

function onNavigatingTo(args) {  
    var page = args.object;
    var dataItem = page.navigationContext;
    var pageData = new observableModule.fromObject({
        workoutName: dataItem.param1
    });
    page.bindingContext = pageData;
}

exports.onNavigatingTo = onNavigatingTo; 