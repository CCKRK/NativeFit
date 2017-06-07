var config = require("../../shared/config");
var ObservableArray = require("data/observable-array").ObservableArray;
var observableModule = require("data/observable");
var Observable = require("data/observable").Observable;
var d = new Date();
var appSettings = require('application-settings');
var token = appSettings.getString('token','defaultValue');
var http = require("http");

function getMessage(counter) {
if(counter>0){
        return counter;
}
return counter;
}


    function createViewModel() {
        var viewModel = new Observable();
    viewModel.counter = 0;
    viewModel.message = getMessage(viewModel.counter);
    viewModel.onTap5 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 10);
    };
        viewModel.onTap2 = function() {
        var weightfield = parseFloat(this.get("weightField"));
        this.set("weightField", weightfield + 2.5);
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
viewModel.add = function(num,num2){
    console.log(num);
    console.log(num2);
 return http.request({
    url: config.apiURL + '/AddProgress',
    method: "POST",
    headers: { "Content-Type": "application/json" },
    content: JSON.stringify({ userID: token, exerciseID:parseInt(num), recordDate:d,weight:parseInt(num2)})//harcoded 2
})
.then(function (response) {
    console.log(JSON.stringify(response.content.toJSON()));
    return  response.content.toJSON();
    })
    //.then(function(data){
      //  viewModel.push({ name: newExercise, id: this.exerciseID });
  //  });
};
    return viewModel;
    
}
module.exports = createViewModel;
