function compareJSON(obj1, obj2) {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  let obj1 = { name: "Person 1", age: 5 };
  let obj2 = { age: 5, name: "Person 1" };
  
  if (compareJSON(obj1, obj2)) {
    console.log("The JSON objects are equal.");
  } else {
    console.log("The JSON objects are not equal.");
  }
  