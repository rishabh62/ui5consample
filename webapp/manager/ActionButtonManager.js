sap.ui.define(["sap/ui/base/Object"], function (Object) {
    return Object.extend("om.sap.ui5con.OOPSUI5Con.manager.ActionButtonManager", {
        constructor: function (oDelegate) {
            this._oDelegate = oDelegate;
            this._oFragmentInstance = undefined;
            this._createFragment();
        },
        _createFragment: function () {
            if (!this._oFragmentInstance) {
                this._oFragmentInstance = sap.ui.xmlfragment("com.sap.ui5con.OOPSUI5Con.fragment.ActionButtons", this);
            }
        },
        getView: function () {
            return this._oFragmentInstance;
        },
        onPressOfA: function () {
            alert("a");
        },
        onPressOfB: function () {
            alert("b");
        },
        onPressOfC: function () {
            alert("c");
        }
    });
});