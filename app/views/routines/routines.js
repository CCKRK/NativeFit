var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var page;
var workoutListViewModel = require("../../shared/view-models/workout-list-view-model");
var frameModule = require("ui/frame");
var view = require("ui/core/view");
var drawer;

var workoutList = new workoutListViewModel([]);
var pageData = new observableModule.fromObject({
    workoutList: workoutList
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    drawer = view.getViewById(page, "sideDrawer");

    workoutList.empty();
    workoutList.load();
};
exports.gotolist = function(){
	frameModule.topmost().navigate("views/login/login");
};
exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
};

exports.pageLoaded = pageLoaded;