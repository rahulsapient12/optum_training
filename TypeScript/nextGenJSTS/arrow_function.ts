const myArrowAdd = (a: number, b: number) => {
  return a + b;
};
console.log({ normalArrow: myArrowAdd(2, 63) });
// there is always a return statement ater arow function if we write in same line
const myArrowAddWithoutBraces = (a: number, b: number) => a + b;
console.log({ singleLine: myArrowAddWithoutBraces(39, 7) });

//  Passing default Parameter
const myArrowAddDefaultParam = (a: number, b: number = 20) => {
  return a + b;
};
console.log({ withParam: myArrowAddDefaultParam(2) });
// without 2nd param
console.log({ withoutParam: myArrowAddDefaultParam(2) });
