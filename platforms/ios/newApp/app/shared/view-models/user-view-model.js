var config = require ("../../shared/config");
var appSettings = require('application-settings')
var validator = require("email-validator");
var http = require("http");
var observableModule = require("data/observable");
function User(info) {
    info = info || {};
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || ""
    });
        viewModel.login = function(){
     return http.request({
        url: config.apiURL + '/AuthenticateUser',
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ email: viewModel.get("email"), password: viewModel.get("password") })
    }).then(function (response) {
        return  response.content.toJSON();

        }).then(function(data){
            if(data.status != 200){
                throw Error(data.status);
            }
            appSettings.setString('token',data.UserID); //this is a horrible way of storing something.
        })
    };
        viewModel.register = function(){
     return http.request({
        url: config.apiURL + '/CreateUser',
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({ email: viewModel.get("email"), password: viewModel.get("password") })
    })
    .then(function (response) {
        return  response.content.toJSON();

    }).then(function(data){
        //this is not appropriate. the errors are not descriptive.
            if(data.status != 200){
                throw Error('Username Unavailable');
            }
            return data;
        })
    };
    viewModel.isValidEmail = function() {
        var email = this.get("email");
        return validator.validate(email);
    };
    return viewModel;
}
function handleErrors(response) {
    if (response.content.status != 200) {
        console.log(JSON.stringify(response.content.status));
        throw Error(response.content.status);
    }
    return response;
}
module.exports = User;