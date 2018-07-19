sap.ui.define([
    "sap/ui/base/Object"
], function(Object) {
    return Object.extend("com.sap.ui5con.OOPSUI5Con.manager.DataFetchingManager", {
        constructor: function(oDelegate, fnCallback) {
            this._oDelegate = oDelegate;
            this._fnCallback = fnCallback;
            this.getData().then(function(data) {
                this._fnCallback.call(oDelegate, data)
            }.bind(this));
        },
        getData: function() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() { resolve("Hello World!!!!" )}, 2000);
            });
        }
    });
});