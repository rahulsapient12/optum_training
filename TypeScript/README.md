# 1. What is Type Script ?
1. TypeScript is a superset of JavaScript which adds new features and advantages to JS.
2. TypeScript can not be executed by Browsers rather it is to be transpiled to native JS then browsers can execute.
3. Features are compiled to JS workarounds.
# 2. Why TypeScript ?
1. Consider this example
```
   function add(a,b){
      return a + b;
     }
   console.log(add("1","5"))
```

2. Here add funtion takes two parameters and adds both of them but we passed string of numbers this will result in output as `"15"`. 
3. TS can solve this kind of situations easily by haldling type specefic variables and functions.
4. [JS File](./00_why_TS.js)
5. [HTML File](./00_why_TS.html)
6. npm install -g typescript
7. tsc ./00_why_TypeScript.ts
8. ![Screenshot (8)](https://github.com/rahulsapient12/optum_training/assets/113187955/b4ce7328-53e3-4c4f-a365-c6c68b17eeab)


# What are the main advantages of TypeScript?

Going into greater technical detail, TypeScript gives you:

1. Strict typing
Everything stays the way we define it. Need a variable to always be a number? It’ll always be a number, then.

2. Structural typing
Indispensable when you care about fully defining the actual structure you use. JavaScript allows for a lot of strange things to be done, so relying on a specific structure is a much safer solution.

3. Type annotations
A handy way of saying explicitly what type should be used.

4. Type inference
Implicit typing performed by TypeScript itself, so that your developers don’t need to provide types where the compiler can find them on its own.