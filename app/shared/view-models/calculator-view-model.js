
var ObservableArray = require("data/observable-array").ObservableArray;
var observableModule = require("data/observable");
var Observable = require("data/observable").Observable;
/*function exerciseListViewModel(items) {
var viewModel = new observableArray(items);
    viewModel.load = function(){
        viewModel.weightField = 0;

    };
    viewModel.btnTap5 = function(){
        viewModel.Push({ weightField: 5});
        console.log(weightField);
    }
    return viewModel;
}*/

function getMessage(counter) {
if(counter>0){
        return counter;
}
return counter;
}

/*function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 0;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        this.counter += 5;
        this.set("weightField", getMessage(this.counter));
    }*/
    function createViewModel() {
        var viewModel = new Observable();
    //var viewModel = new Observable();
    viewModel.counter = 0;
    viewModel.message = getMessage(viewModel.counter);
    /*this.numberButtonPressed = function(num) {
        viewModel.counter += num;
        this.set("weightField",getMessage(viewModel.counter));
    };*/
    viewModel.onTap5 = function() {
        //viewModel.counter += 5;
        //this.set("weightField", getMessage(viewModel.counter));
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 10);
    };
        viewModel.onTap2 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 5);
    };
        viewModel.onTap10 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 20);
    };
        viewModel.onTap25 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 50);
    };
        viewModel.onTap45 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 90);
    };

    return viewModel;
    
}
/*
    Calc.prototype.btnTap1 = function () {
        this.numberButtonPressed(1);
    };
    Calc.prototype.btnTap2 = function () {
        this.numberButtonPressed(2);
    };
    Calc.prototype.btnTap3 = function () {
        this.numberButtonPressed(3);
    };
    Calc.prototype.btnTap4 = function () {
        this.numberButtonPressed(4);
    };
    Calc.prototype.btnTap5 = function () {
        this.numberButtonPressed(5);
    };
    Calc.prototype.btnTap6 = function () {
        this.numberButtonPressed(6);
    };
    Calc.prototype.btnTap7 = function () {
        this.numberButtonPressed(7);
    };
    Calc.prototype.btnTap8 = function () {
        this.numberButtonPressed(8);
    };
    Calc.prototype.btnTap9 = function () {
        this.numberButtonPressed(9);
    };
    Calc.prototype.btnTap0 = function () {
        this.numberButtonPressed(0);
    }; */
module.exports = createViewModel;
