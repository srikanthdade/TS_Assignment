const items = [
    { id: 171239, name: "Srikanth", class: 108 },
    { id: 17118, name: "Naveen", class: 110 },
    { id: 171308, name: "Supriya", class: 108 },
    { id: 171423, name: "Srikanth", class: 109 },
    { id: 171112, name: "Supriya", class: 109 },
];
let Duplicate = function (singleValues, value) {
    for (let i = 0; i < singleValues.length; i++) {
        if (singleValues[i] == value)
            return true;
    }
    return false;
};

let singleItems = function (items, prop) {
    let singleValues = [];
    return items.filter(function (item) {
        let value = item[prop];
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