var UserData = /** @class */ (function () {
    function UserData() {
        this.Portfolios = [];
    }
    return UserData;
}());
var Portfolio = /** @class */ (function () {
    function Portfolio(name) {
        this.Name = name;
    }
    // methods
    Portfolio.prototype.getCurrentPrice = function () {
        var currentPrice = 0;
        for (var _i = 0, _a = this.Stocks; _i < _a.length; _i++) {
            var stock = _a[_i];
            currentPrice = stock.getCurrentPrice();
        }
        return currentPrice;
    };
    Portfolio.prototype.getCostPrice = function () {
        var costPrice = 0;
        for (var _i = 0, _a = this.Stocks; _i < _a.length; _i++) {
            var stock = _a[_i];
            costPrice = stock.CostPrice;
        }
        return costPrice;
    };
    return Portfolio;
}());
var Stock = /** @class */ (function () {
    function Stock(name, code, unitCount, costPrice, targPercentage, currUnitPrice, currUnitDate) {
        this.Name = name;
        this.StockCode = code;
        this.UnitCount = unitCount;
        this.CostPrice = costPrice;
        this.TargetPercentage = targPercentage;
        this.CurrentUnitPrice = currUnitPrice;
        this.CurrentUnitPriceDate = currUnitDate;
    }
    // methods
    Stock.prototype.getCurrentPrice = function () {
        return this.UnitCount * this.CurrentUnitPrice;
    };
    return Stock;
}());
