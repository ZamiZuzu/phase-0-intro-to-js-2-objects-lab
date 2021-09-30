// Write your solution in this file!
const employee = {
    name: "Chris",
    streetAddress: "10 Broadway",

};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};

    newObj[key] = value;

    return newObj;
 }

 const newEmployee = updateEmployeeWithKeyAndValue(
     employee,
     name,
     "Sam",
 );

 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
 }

 const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(
     employee,
     name,
     "Sam",
 );

 function deleteFromEmployeeByKey(obj, key) {
    const newObj = {...obj};

    delete newObj[key];

    return newObj;
 }

 const newEmployee3 = deleteFromEmployeeByKey();

 function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
 }

 const newEmployee4 = destructivelyDeleteFromEmployeeByKey();