var layout = require("ui/layouts/grid-layout");
var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var frameModule = require("ui/frame");
var observableModule = require("data/observable");
var view = require("ui/core/view");

var ObservableArray = require("data/observable-array").ObservableArray;
//var createViewModel = require("../../shared/view-models/exercise-view-model").createViewModel;
var exerciseListViewModel = require("../../shared/view-models/calculator-view-model");
//var weightField = new exerciseListViewModel([]);
var weightField = new exerciseListViewModel();

exports.loaded = function(args) {
    var page = args.object;
        var dataItem = page.navigationContext;
    var pageData = new observableModule.fromObject({
        workoutName: dataItem.param1,
        exerciseType: dataItem.param2,
        weightField: 55,
        onTap5: weightField.onTap5,
        onTap2: weightField.onTap2,
        onTap10:weightField.onTap10,
        onTap25:weightField.onTap25,
        onTap45:weightField.onTap45
       
    });
    var gridLayout = new layout.GridLayout();
    var button1 = new buttonModule.Button();
    var label1 = new labelModule.Label();
        
    button1.text = "btn2";
    button1.tap = "{{ onTap2 }}";
    label1.text = "{{ weightField }}";
    label1.items= "{{ weightField }}";
        
    layout.GridLayout.setColumn(button1, 0);
    layout.GridLayout.setColumn(label1, 1);
    gridLayout.addChild(button1);
    gridLayout.addChild(label1);
        
    var firstColumn = new layout.ItemSpec(1, "auto");
    var secondColumn = new layout.ItemSpec(1, "auto");
    var firstRow = new layout.ItemSpec(1, "auto");
        
    gridLayout.addColumn(firstColumn);
    gridLayout.addColumn(secondColumn);
    gridLayout.addRow(firstRow);

    page.content = gridLayout;
    page.bindingContext=pageData;
        
};