/*
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
        viewLayout.addChild(button1);
        */
/*var stackLayout = require("ui/layouts/stack-layout").StackLayout;
var buttonModule= require("ui/button").Button;
var page = require("ui/page");
var Control = (function (_super) {
    global.__extends(ButtonControl, _super);
 
    function ButtonControl() {
        _super.call(this);
 
        var testButton = new buttonModule();
        testButton.text = "Custom button";
 
        this.addChild(testButton);
 
    }
    return Control;
 
})(stackLayout);
 
exports.ButtonControl = Control;*/

var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Button = require("ui/button").Button;
 
var Control = (function (_super) {
    global.__extends(QuestionControl, _super);
    Object.defineProperty(QuestionControl.prototype, "customText",{
            get: function(){
                return this._customText;
            },
            set: function(value){
                this._customText = value;
                this.updateLabelText();
            }
    });
    Object.defineProperty(QuestionControl.prototype, "question",{
        get: function(){
            return this._question;
        },
        set: function(value){
            this._question = value;
            this.populateData();
        }
    });
    
    Object.defineProperty(QuestionControl.prototype, "answers",{
        get: function(){
            return this._answers;
        },
        set: function(value){
            this._answers = value;
            this.populateData();
        }
    });
    function QuestionControl() {
        _super.call(this);
        this._question="";
        this._answers=[];
        var selectedAnswerView = null;
        
        this.populateData = function(){
            this.removeChildren();
            var lblQuestion = new Button();
            lblQuestion.text = this._question;
            lblQuestion.className = "question";
            this.addChild(lblQuestion);
        
            for(var i=0; i<this._answers.length; i++){
                var lblAnswer = new Button();
                lblAnswer.className = "answer";
                lblAnswer.text = this._answers[i];
        
                lblAnswer.on('tap', function(){
                    onAnswerTap(this);
                }.bind(lblAnswer));
        
                this.addChild(lblAnswer);
        
            }
        }
        function onAnswerTap(args){
        
            if(selectedAnswerView == null){
                //if no object is selected, select the current tapped object
                selectedAnswerView = args;
                selectedAnswerView.className = 'selected-answer';
            }else{
                //first deselect the previously selected object
                selectedAnswerView.className = 'answer';
                selectedAnswerView = args;
                selectedAnswerView.className = 'selected-answer';
            }
        }
        var testButton = new Button();
        testButton.padding="10";
        testButton.margin="05";
        this.updateLabelText = function(){
            testButton.text = this._customText;
        }
        
 
        this.addChild(testButton);
 
    }
    return QuestionControl;
 
})(StackLayout);
 
exports.QuestionControl = Control;