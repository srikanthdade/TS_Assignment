var items = [
    { id: 171239, name: "Srikanth", class: 108 },
    { id: 17118, name: "Naveen", class: 110 },
    { id: 171308, name: "Supriya", class: 108 },
    { id: 171423, name: "Srikanth", class: 109 },
    { id: 171112, name: "Supriya", class: 109 },
];
var Duplicate = function (singleValues, value) {
    for (var i = 0; i < singleValues.length; i++) {
        if (singleValues[i] == value)
            return true;
    }
    return false;
};
var singleItems = function (items, prop) {
    var singleValues = [];
    return items.filter(function (item) {
        var value = item[prop];
        if (Duplicate(singleValues, value)) {
            return false;
        }
        else {
            singleValues.push(value);
            return true;
        }
    });
};
var result = singleItems(items, "name");
console.log(result);
