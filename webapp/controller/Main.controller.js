sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/ui5con/OOPSUI5Con/utils/Calculator"
], function (Controller, Calculator) {
    "use strict";
    return Controller.extend("com.sap.ui5con.OOPSUI5Con.controller.Main", {
        calc: Calculator.getCalculatorInstance(),
        onAdd: function (oEvt) {
            var a = Number(this.getView().byId("input1").getValue()),
                b = Number(this.getView().byId("input2").getValue()),
                c = Calculator.getCalculatorInstance().add(a, b);
            alert(c);
        },

        onPressOfGetFragment: function (oevt) {
            sap.ui.require(["com/sap/ui5con/OOPSUI5Con/manager/DataFetchingManager"],
                function (DataFetcher) {
                    new DataFetcher(this, this.alertData);
                }.bind(this));
        },

        onPressOfGetButton: function() {
            sap.ui.require(["com/sap/ui5con/OOPSUI5Con/manager/ActionButtonManager"], function(ButtonManager) {
                if(!this._oButtonPanel) {
                    this._oButtonPanel = new ButtonManager(this).getView();
                    this.getView().byId("myPanel").addContent(this._oButtonPanel );
                }
            }.bind(this));
        },

        alertData: function (data) {
            alert(data);
        }

    });
});