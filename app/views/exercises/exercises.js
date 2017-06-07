var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var view = require("ui/core/view");
var buttonModule = require("ui/button");
var layout = require("ui/layouts/stack-layout");
var ObservableArray = require("data/observable-array").ObservableArray;
//var createViewModel = require("../../shared/view-models/exercise-view-model").createViewModel;
var exerciseListViewModel = require("../../shared/view-models/calculator-view-model");
//var weightField = new exerciseListViewModel([]);
var weightField = new exerciseListViewModel();

function onNavigatingTo(args) {  
    var page = args.object;
    var dataItem = page.navigationContext;

    var pageData = new observableModule.fromObject({
        workoutName: dataItem.param1,
        exerciseType: dataItem.param2,
        weightField: 255,
        onTap5: weightField.onTap5,
        onTap2: weightField.onTap2,
        onTap10:weightField.onTap10,
        onTap25:weightField.onTap25,
        onTap45:weightField.onTap45,
                question1:"How many continents are there?",
        answers1:["7 Continents",
                "1 Continent",
                "There are no continents"
            ]
    
       
    });
    page.bindingContext=pageData;
        // I can add the buttons here programmatically.
        if(dataItem.param2 = 1){
        var button1 = new buttonModule.Button();
        button1.text = "5lbs";
        button1.margin ="05";
        button1.padding="10";
        var onTap = function () {
        pageData.onTap5();
        };
        button1.addEventListener(buttonModule.Button.tapEvent, onTap, this);
        var viewLayout = page.getViewById("buttons");
        //viewLayout.addChild(button1);
        
    }
}
exports.loaded = function(args) {
   //args.object.bindingContext = new createViewModel();
}
/*btnTap5 = function(){
    weightField.btnTap5();
}*/
//exports.btnTap5 = btnTap5;
exports.onNavigatingTo = onNavigatingTo; 
//exports.addWeight = addWeight;