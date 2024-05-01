function findName(names) { 
    let shortsName = names[0];  
    for (let i = 1; i < names.length; i++) { 
      if (names[i].length < shortsName.length) { 
        shortsName = names[i];  
      } 
    } 
    return shortsName; 
  } 
   
  const name = ['Johneklk', 'Alexej', 'Emily', 'Mikerrrrr']; 
  const smallName = findName(name); 
  console.log( smallName);


  function tusktypeof(data){
    return typeof data;
  }

  console.log(tusktypeof('5'));
  console.log(tusktypeof(5));
  console.log(tusktypeof(false));
  console.log(tusktypeof({}));
