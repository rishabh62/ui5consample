sap.ui.define(["sap/ui/base/Object"], function(Object) {
    return Object.extend("com.sap.ui5con.OOPSUI5Con.utils.CalculatorImplementation", {
            add: function (a, b) {
                return this.validateNumberQuery(a, b) ? (a + b) : undefined;
            },
            sub: function (a, b) {
                return this.validateNumberQuery(a, b) ? (a - b) : undefined;
            },
            multiply: function (a, b) {
                return this.validateNumberQuery(a, b) ? (a * b) : undefined;
            },
            divide: function (a, b) {
                return this.validateNumberQuery(a, b) ? (a / b) : undefined;
            },
            validateNumberQuery: function (a, b) {
                return !isNaN(a) && !isNaN(b);
            },
            getInterface: function () {
                return new sap.ui.base.Interface(this, ["add", "sub", "multiply", "divide"]);
            }
        }
    );
});