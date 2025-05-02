// Primitives And Referenced [] , {} , ()  <- These All Types Of Brackets 
// Will Cretae Premitives 


// Premitaives

let aNumber = 12 ;
aNumber = "String" // Not Allowed 
let a = true ;
let b = "Abhishek"

//  Referenced

let array = [ 1 ,2 ,3 , "String Is Allowed"] ;
let numberArray : number[] = [ 1,23,4, "String IS Not Allowed"]
let tuple : [String , number] = ["A Tuple IS A Array With Pre Defined Size And The Location Of The Datataype Is Ass Mentioned ",19]

enum myEnum {
   ADMIN = "admin" ,
   GUEST = "guest" ,
   USER = "user"
}


myEnum.ADMIN // Way To Use


//  When we will not assign any by default data type and 
// any value to a variable then the data type will be ANY
// eg .
let aVriable ;







// 1. any - disables type checking
let anything: any = "Hello";
console.log("any type:", anything);
anything = 10;
console.log("any type reassigned:", anything);

// 2. unknown - safer alternative to any
let notSure: unknown = "TypeScript";
const printUnknown = (value: unknown): void => {
    if (typeof value === "string") {
        console.log("unknown type (safe):", value.toUpperCase());
    } else {
        console.log("unknown type is not a string");
    }
};
printUnknown(notSure);

// 3. void - function with no return (arrow function)
const greet = (): void => {
    console.log("This is a void arrow function");
};
greet();

// 4. undefined - a variable explicitly set to undefined
let undef: undefined = undefined;
const showUndefined = function(): void {
    console.log("undefined type:", undef);
};
showUndefined();

// 5. null - intentional empty value
let empty: null = null;
const logNull = (): void => {
    console.log("null type:", empty);
};
logNull();

// 6. never - function that never returns (throws error)
const crash = (): never => {
    throw new Error("This function never returns (crash)");
};

// Uncomment the line below to test never
// crash(); // ❌ Will crash and stop execution





//  Basic Defferance Between Unknown Ans Any Is Tat Unknown Is A Safer Alternatiove TO Any 

let x ;
x = 12 ;
x = "Abhishek"

x.toLocaleLowerCase() ; // Ambugity



let y:unknown ;
y = 12 ;
y = "Abhishek"

// y.toLocaleLowerCase() ; // Ambugity Will Be Resolved

if( typeof y == "string" ){  // Required Better Way 
 console.log("A String");
 
}
else{
    console.log("A Number");
    
}