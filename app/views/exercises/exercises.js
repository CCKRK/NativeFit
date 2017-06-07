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
        weightField:0,
        //onTap5: weightField.onTap5,
        onTap2: weightField.onTap2,
        //onTap10:weightField.onTap10,
        //onTap25:weightField.onTap25,
        //onTap45:weightField.onTap45,
        // this was part of adding a dynamic custom module.
        /*answers1:["5lbs",
                "10lbs",
                "20lbs"
            ]
        */
       
    });
    page.bindingContext=pageData;
        // I can add the buttons here programmatically.

// this was an event listener for the custom button module.
/*var questionControl = page.getViewById('buttonmod');
questionControl.on('selectedValueChanged',function(eventData){

});*/
//possible way to add buttons, but not very good.
            var viewLayout = page.getViewById("buttons");
            var arr = []
            for(var j = 2; j<40; j+=2){
                arr[j] = j;
            }
            console.log(arr[2]);
            //var arr = [1,2,4,6,8,1,35,40]
            var btn = []
            for(let i of arr){
                btn[i] = new buttonModule.Button()
                //btn[i] = new buttonModule.Button()
                btn[i].text = i*2.5 + "lb";
                btn[i].margin="05";
                btn[i].padding="10";
                var onTap = function(){
                    for(var j = 0; j<i;j++){
                        pageData.onTap2();
                    }

                };
                btn[i].addEventListener(buttonModule.Button.tapEvent, onTap, this);
                //return btn[i];
            }
            var btn2lb = new buttonModule.Button();
            btn2lb.text = "2.5lb";
            btn2lb.margin ="05";
            btn2lb.padding="10";
            var onTap = function () {
            pageData.onTap2();
            };
            btn2lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            /*
            var btn5lb = new buttonModule.Button();
            btn5lb.text = "5lb";
            btn5lb.margin ="05";
            btn5lb.padding="10";
            var onTap = function () {
                for(var i=0;i<2;i++){
                    pageData.onTap2();
                }
           // pageData.onTap5();
            };
            btn5lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            var btn10lb = new buttonModule.Button();
            btn10lb.text = "10lb";
            btn10lb.margin ="05";
            btn10lb.padding="10";
            var onTap = function () {
            for(var i=0;i<4;i++){
                    pageData.onTap2();
                }
            };
            btn10lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            var btn20lb = new buttonModule.Button();
            btn20lb.text = "20lb";
            btn20lb.margin ="05";
            btn20lb.padding="10";
            var onTap = function () {
            for(var i=0;i<8;i++){
                pageData.onTap2();
            }
            };
            btn20lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            var btn25lb = new buttonModule.Button();
            btn25lb.text = "25lb";
            btn25lb.margin ="05";
            btn25lb.padding="10";
            var onTap = function () {
            for(var i=0;i<10;i++){
                pageData.onTap2();
            }
            };
            btn25lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            var btn45lb = new buttonModule.Button();
            btn45lb.text = "45lb";
            btn45lb.margin ="05";
            btn45lb.padding="10";
            var onTap = function () {
                for(var i=0;i<18;i++){
                pageData.onTap2();
            }
            };
            btn45lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
        if(dataItem.param2 == 2){
            btn5lb.text = "2.5lb";
            viewLayut.addChild(btn5lb);
            btn10lb.text = "5lb";
            viewLayout.addChild(btn10lb);
            btn20lb.text = "10lb";
            viewLayout.addChild(btn20lb);
            
        }*/
        if(dataItem.param2 == 2){
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
            //viewLayout.addChild(btn5);
           // viewLayout.addChild(btn10);
            //viewLayout.addChild(btn25);
            ///viewLayout.addChild(btn45);
        };
        if(dataItem.param2 == 1){
            viewLayout.addChild(btn[2]);
            viewLayout.addChild(btn[4]);
            viewLayout.addChild(btn[8]);
            viewLayout.addChild(btn[20]);
            //viewLayout.addChild(btn5);
           // viewLayout.addChild(btn10);
            //viewLayout.addChild(btn25);
            ///viewLayout.addChild(btn45);
        };
        if(dataItem.param2 == 3){
            var viewLayout = page.getViewById("buttons");
            var btn5lb = new buttonModule.Button();
            btn5lb.text = "5lb";
            btn5lb.margin ="05";
            btn5lb.padding="10";
            var onTap5 = function () {
            pageData.onTap2();
            };
            btn5lb.addEventListener(buttonModule.Button.tapEvent, onTap5, this);
            viewLayout.addChild(btn2lb);
            viewLayout.addChild(btn5lb);
            var btn10lb = new buttonModule.Button();
            btn10lb.text = "10lb";
            btn10lb.margin ="05";
            btn10lb.padding="10";
            var onTap = function () {
            pageData.onTap5();
            };
            btn10lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            viewLayout.addChild(btn10lb);
            var btn25lb = new buttonModule.Button();
            btn25lb.text = "25lb";
            btn25lb.margin ="05";
            btn25lb.padding="10";
            var onTap = function () {
            pageData.onTap10();
            pageData.onTap2();
            };
            btn25lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            viewLayout.addChild(btn25lb);
            var btn45lb = new buttonModule.Button();
            btn45lb.text = "50lb";
            btn45lb.margin ="05";
            btn45lb.padding="10";
            var onTap = function () {
            pageData.onTap25();
            };
            btn45lb.addEventListener(buttonModule.Button.tapEvent, onTap, this);
            viewLayout.addChild(btn45lb);
        };
    }

exports.loaded = function(args) {
}

exports.onNavigatingTo = onNavigatingTo; 