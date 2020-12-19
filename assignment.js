const feetToMile = feet =>{
    return feet/5280;
}

const woodCalculator = (chair,table,bed) =>{
    const total = chair + (table*3) + (bed*5);
    return total;
}

const brickCalculator = floors =>{
    if(floors<=10){
        return 15*1000;
    }
    else if(floors>10 && floors<=20){
        return 12*1000;
    }
    else if(floors>20){
        return 10*1000;
    }
}

const tinyFriend = (arr) => {
  if (arr != null) {
    let mini = arr[0];
    for (let i = 0; i < arr.length; i++) {
      const names = arr[i];
      if (names.length < mini.length) {
        mini = names;
      }
    }
    console.log(mini);
  } else {
    console.log("Empty");
  }
};
