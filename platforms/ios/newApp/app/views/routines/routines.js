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
    var page = args.object;
    page.bindingContext = pageData;

    drawer = view.getViewById(page, "sideDrawer");

    workoutList.empty();
    workoutList.load();
};
exports.gotolist = function(){
    
	frameModule.topmost().navigate("views/exercises/exercises");
};
exports.navigateToExercise=function(args) {  
    var navigationOptions={
        moduleName:"views/exercises/exercises",
        context:{param1:"foo"  }
    }
    frameModule.topmost().navigate(navigationOptions);

    //frameModule.topmost().navigate("views/exercises/exercises");
}
exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
};
//exports.navigateToExercise = navigateToExercise;

//exports.pageLoaded = pageLoaded;