interface SkillArray {
  [index: number]: string;
}
interface Person {
  name: string;
  age: number;
  skills: SkillArray;
}

const myObj: Person = {
  name: "Rahul",
  age: 27,
  skills: ["JS", "TS"],
};

// After cloning the my obj data to cloneobj variable if we modify cloneobj autpomatically myobj will change
// This is called value by reference
const cloneObj: Person = myObj;
cloneObj.name = "Rahul Nayak";
console.log({ cloneObj });
console.log({ myObj });

// lets achive this using spread operator
const newCloneObj: Person = { ...myObj };
newCloneObj.age = 26;
console.log({ cloneObj });
console.log({ myObj });
console.log({ newCloneObj });

// Lets try spread operators with Array
const objNew: Person = {
  name: "Rohit",
  age: 16,
  skills: ["C++"],
};
const myArry: Person[] = [...[objNew], newCloneObj];
console.log(myArry);
