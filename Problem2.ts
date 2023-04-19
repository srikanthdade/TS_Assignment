const object1 = { a: 5, b: "srikanth" };
const object2 = { a:1, b: "goo boy", c: false };
const object3 = { b: "snake", d: [1, 2, 3] };
const object4 = { a:48, c: true, d: [4, 5, 6], e: undefined };

const clubObjects = (...args: {}[]): {} => {
    let club: {} = {};
  
    for (let i = 0; i < args.length; i++) {
      for (let prop in args[i]) {
        if (args[i][prop] !== null && args[i][prop] !== undefined)
          club[prop] = args[i][prop];
      }
    }
    return club;
  };
  const clubbedObjects = clubObjects(object1, object2, object3, object4);
  console.log(clubbedObjects);