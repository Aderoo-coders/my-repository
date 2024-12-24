

/* function sum(a, b){
    if (a === 100 || b === 100 || (a + b == 100)) {
        console.log('its checked!');
    }
    else {
        console.log('not fulfilled!');
    }
}
   sum(100,0);
   sum(70,10);
   sum(80,20);
   sum(50,50);
   sum(30,70);
   sum(10,10);
   */
   // or 

    /* const num = (num1, num2) => {
      if (num1 === 100 || num2 === 100 || (num1 + num2)) {
         return console.log('its true');   
      }
      else {
        return console.log('its false!');
      }
     }
     num(20,80);
     num(12,80);
     num(30,60);
     num(20,30); 
*/
     function current(){
       const new_date = new Date();
       const days =  new_date.getDate();
       const month =  new_date.getMonth();
       const year =  new_date.getFullYear();
       return `${month}-${days}-${year}`;

     }
     console.log(current());


      
