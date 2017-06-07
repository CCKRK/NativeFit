var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var view = require("ui/core/view");
var buttonModule = require("ui/button");
var layout = require("ui/layouts/stack-layout");
var ObservableArray = require("data/observable-array").ObservableArray;
var exerciseListViewModel = require("../../shared/view-models/calculator-view-model");
var weightField = new exerciseListViewModel();

function onNavigatingTo(args) {  
    var page = args.object;
    var dataItem = page.navigationContext;

    var pageData = new observableModule.fromObject({
        workoutName: dataItem.param1,
        exerciseType: dataItem.param2,
        exerciseID: dataItem.param3,
        weightField:0,
        onTap2: weightField.onTap2,
       
    });
    page.bindingContext=pageData;
        // I can add the buttons here programmatically.

// this was an event listener for the custom button module.
/*var questionControl = page.getViewById('buttonmod');
questionControl.on('selectedValueChanged',function(eventData){

});*/
            //I hate the way I've added buttons here.
            var viewLayout = page.getViewById("buttons");
            var arr = []
            for(var j = 2; j<40; j+=2){
                arr[j] = j;
            }
            var btn = []
            for(let i of arr){
                btn[i] = new buttonModule.Button()
                btn[i].text = i*2.5 + "lb";
                btn[i].margin="05";
                btn[i].padding="10";
                var onTap = function(){
                    for(var j = 0; j<i;j++){
                        pageData.onTap2();
                    }

                };
                btn[i].addEventListener(buttonModule.Button.tapEvent, onTap, this);
            }
            var btn2lb = new buttonModule.Button();
            btn2lb.text = "2.5lb";
            btn2lb.margin ="05";
            btn2lb.padding="10";
            var onTap = function () {
            pageData.onTap2();
            };
            btn2lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
        if(dataItem.param2 == 1){
            btn[2].text = "2.5lb"
            viewLayout.addChild(btn[2]);
            btn[4].text = "5lb"
            viewLayout.addChild(btn[4]);
            btn[8].text = "10lb"
            viewLayout.addChild(btn[8]);
            btn[20].text = "25lb"
            viewLayout.addChild(btn[20]);
            btn[36].text = "45lb"
            viewLayout.addChild(btn[36]);
        };
        if(dataItem.param2 == 2){
            viewLayout.addChild(btn[2]);
            viewLayout.addChild(btn[4]);
            viewLayout.addChild(btn[8]);
            viewLayout.addChild(btn[20]);
        };
        if(dataItem.param2 == 3){
            //TODO: ADD SUPPORT FOR REPS
        };
    }
exports.save = function(args){
    var weight = args.object.parent.parent.bindingContext.weightField;
    var eID = args.object.parent.parent.bindingContext.exerciseID;
    weightField.add(eID,weight);
    frameModule.topmost().goBack();
}
exports.onNavigatingTo = onNavigatingTo; 