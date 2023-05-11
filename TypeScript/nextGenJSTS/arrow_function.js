"use strict";
const myArrowAdd = (a, b) => {
    return a + b;
};
console.log({ normalArrow: myArrowAdd(2, 63) });
// there is always a return statement ater arow function if we write in same line
const myArrowAddWithoutBraces = (a, b) => a + b;
console.log({ singleLine: myArrowAddWithoutBraces(39, 7) });
//  Passing default Parameter
const myArrowAddDefaultParam = (a, b = 20) => {
    return a + b;
};
console.log({ withParam: myArrowAddDefaultParam(2) });
// without 2nd param
console.log({ withoutParam: myArrowAddDefaultParam(2) });
