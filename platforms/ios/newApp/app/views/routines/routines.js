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
    //not sure what would happen here
	//frameModule.topmost().navigate("views/exercises/exercises");
};

exports.nameTap=function(args) {  
    var item = args.view.bindingContext;
    var index = workoutList.indexOf(item);
    var navigationOptions={
        // this goes to a working barbell exercise view
        moduleName:"views/exercises/exercises",
        //moduleName:"views/newexercise/newexercise",
        context:{param1:workoutList.getItem(index).name,
                param2:workoutList.getItem(index).exerciseType}
    }
   // this goes a working barbell exercise view
    frameModule.topmost().navigate(navigationOptions);

   // frameModule.topmost().navigate("views/newexercise/newexercise");
}
exports.toggleDrawer = function() {
    drawer.toggleDrawerState();
};