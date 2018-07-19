sap.ui.define(["sap/ui/base/Object",
    "com/sap/ui5con/OOPSUI5Con/utils/CalculatorImplementation"], function (Object, Calc) {
    var _calcSharedInstance;
    var _instance = Object.extend("com.sap.ui5con.OOPSUI5Con.utils.Calculator", {
        getCalculator: function() {
            return new Calc().getInterface();
        }
    });
    function _getCalculatorInstance() {
        if(!_calcSharedInstance) {
            _calcSharedInstance = new _instance().getCalculator()
        }
        return _calcSharedInstance;
    }
    return {
        getCalculatorInstance : _getCalculatorInstance
    };
});