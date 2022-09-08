function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
      p0 = Math.floor((1 + percent / 100) * p0 + aug);
      count++
    } 
    return count;
}

// solution 2 ==>
//  let year=0;
//    while (p0<p){
//      year++; 
//      p0=p0+(p0*(percent/100))+aug
//    }
//    return year
