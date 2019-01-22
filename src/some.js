function sum(...numbers) {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    })
}
class SomeMath {
    avg(...numbers) {
        return sum(...numbers)/numbers.length;
    }
    max(...numbers){
        return Math.max(...numbers);
    }
    merge(a,b){
        console.log(a);
      return {
           ...a,
           ...b
      }
    }
}


// export default avg;
export default new SomeMath;
