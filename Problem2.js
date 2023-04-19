var object1 = { a: 5, b: "srikanth" };
var object2 = { b: "goo boy", c: false };
var object3 = { b: "snake", d: [1, 2, 3] };
var object4 = { c: true, d: [4, 5, 6], e: undefined };
var clubObjects = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var club = {};
    for (var i = 0; i < args.length; i++) {
        for (var prop in args[i]) {
            if (args[i][prop] !== null && args[i][prop] !== undefined)
                club[prop] = args[i][prop];
        }
    }
    return club;
};
var clubbedObjects = clubObjects(object1, object2, object3, object4);
console.log(clubbedObjects);
