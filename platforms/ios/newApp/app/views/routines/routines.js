
var frameModule = require("ui/frame");
var view = require("ui/core/view");
var drawer;
var todaysDate = new Date();
var todaysNumber = todaysDate.getDay();

function pageLoaded(args) {
    var page = args.object;
    drawer = view.getViewById(page, "sideDrawer");
}

exports.gotolist = function(){
	frameModule.topmost().navigate("views/login/login");
};
exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
};

exports.pageLoaded = pageLoaded;