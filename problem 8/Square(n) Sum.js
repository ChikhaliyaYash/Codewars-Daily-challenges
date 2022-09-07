let n = numbers;
  let val = 0
  for(let i=0 ; i <  n.length ; i++){
      val+=n[i] **2
    }
    return val

    // solution 2 ====>
    // function squareSum(numbers){
    //     var result = 0;
    //     for (var i = 0; i < numbers.length; i++) {
    //       result += (numbers[i] * numbers[i]);
    //     }
    //     return result;
    //   }