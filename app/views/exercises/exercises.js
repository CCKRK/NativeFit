var frameModule = require("ui/frame");
var observableModule = require("data/observable");

function onNavigatingTo(args) {  
    var page = args.object;
    var dataItem = page.navigationContext;
    //page.bindingContext = dataItem;
    console.log(dataItem.param1);
}

exports.onNavigatingTo = onNavigatingTo;  
/*exports.gotohome = function(){
	frameModule.topmost().navigate("views/login/login");
    
};*/