const Names: Array<string> = ['Rahul', 'Rohit'];
// Names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is done!');
  }, 2000);
});
promise.then((data) => {
  data.length;
});

// OWN GENERIC FUNCTION

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

function mergeA<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

let mergeData = merge({ name: 'Rahul' }, { age: 27 });
console.log(merge({ name: 'Rahul' }, { age: 27 }));
console.log(mergeData.name);
// let mergeData1 = mergeA({ name: "Rahul" }, 26);
