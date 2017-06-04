var config = require("../../shared/config");
var ObservableArray = require("data/observable-array").ObservableArray;
var appSettings = require('application-settings');
var token = appSettings.getString('token','defaultValue');
var d = new Date();
var n = d.getDay()+1;
var http = require("http");
function workoutListViewModel(items) {
    var viewModel = new ObservableArray(items);
viewModel.load = function() {
     return http.request({
        url: config.apiURL + '/GetAllItems?userID=' + token+ '&dayID='+ n,
        method: "GET",
    }).then(function (response) {
        return  response.content.toJSON();
    }).then(function(data){
            data.Exercises.forEach(function(workoutList){
                viewModel.push({
                    name:workoutList.exerciseName,
                    id:workoutList.exerciseID,
                    exerciseType: workoutList.exerciseType,
                    routineName: workoutList.routineName
                });
            });
        });
};
    viewModel.empty = function() {
    while (viewModel.length) {
        viewModel.pop();
    }
};
        return viewModel;
}
function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.status);
    }
    return response;
};
module.exports = workoutListViewModel;