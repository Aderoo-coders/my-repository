//write Javascript program that checks two numbers and return true if one of the numbers is 100 or the sum of the two numbers is 100.
 function sum(a, b) {
  if (a === 100 || b === 100 || (a + b ===100) ) {
    console.log("its true!");

  } else {
    console.log("its false!");
    
  }
}
sum(100,20)
sum(80,20)
sum(40,20)
// or 
 const numbers100 = (num1, num2) => {
  return num1 ===100 || num2 === 100 || (num1 + num2 ===100);
 }
console.log(numbers100(100, 20));
console.log(numbers100(200, 20));
console.log(numbers100(200, 20));
console.log(numbers100(40, 20));
console.log(numbers100(40, 20));

//write javascript program to get extension of filename.

    const getFile = (fileName) => fileName.slice(fileName.lastIndexOf('.'));
    lastIndexOf.slice('');
    console.log(getFile('index.html'));
    console.log(getFile('index.js'));
    console.log(getFile('index.gs'));
    console.log(getFile('index.css'));      
   // write a js program to get current get date //
     const current = () => {
      const date = new Date();
      const days = date.getDate();
      const year = date.getFullYear();
      const month = date.getMonth();
      return `${month}-${days}-${year}`;
     }
     console.log(current());
     
   /* add a required validation to input that shows an  error message next to the entry if it does have any text entered */

   const elementDom = document.querySelector('form');
    elementDom.addEventListener('submit', (event) => {
      event.preventDefault();

      const input = document.getElementById("myInput");
      const error = document.getElementById("error");
      
      if (input.value.trim()==="") {
        error.style.display = "inline";
      } else {
        
      }
    })

     const validation = (event) => {
     }























/* async function populate() {
  const requestURL = "//mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  const Request = new Request(requestURL);
  const response = await fetch(Request);
  const superheroes = await response.json();

  populateHeader(superheroes);
  populateHeroes(superheroes);
}
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
*/







/*const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
for(i=0;i<fruits.length;i++){
    text += "<li>" + fruits[i] + "<li>";
}
text += "</ul>";
console.log(text);
*/
/*let x = "";
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  for (let i in myObj.cars) {
    x += myObj.cars[i].name;
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }
  console.log(x);*/

  /*const numbers1 = [45, 4, 9, 16, 25];
numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
 export const export_module = () => {
  console.log(MediaElementAudioSourceNode);
  
 }
  */
            // Arrow functions

 /* let array = ['alex', 'miftah', 'tooffa'].join(" * ");
  console.log(array);

        // template literals

  const substract = 'alex'
export function sub() {
  console.log(`hello, am a frontend developer and  my name is ${substract}`);
 }
 sub()
       // destructing 
    export const user = {
        name: 'john', 
        age: 25, 
        gender: male
       }
       const {name, age gender} = user;

     // callback functions
setTimeout(() => {
  console.log("alex");
  setTimeout(() => {
    console.log("siyamee");
    setTimeout(() => {
      console.log("lelisee");
    }, 1000);
  }, 1000);
}, 1000);


  function fetchData(callback){
    setTimeout(() => {
      const data = {name: "alex", age:23}
      callback(data);
    }, 1000);
  }
   fetchData((data) => {
    console.log("data is recieved:", data);
   })
    */
 
    // creating promises 
/*
    async const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
       const success = true;
        if (success) {
          resolve('successfully fetched!');
        } else {
          reject('rejected successfully!');
        }
      }, 2000);
    });

     fetchData
     .then((data) => {
      console.log(data);
     })
     .catch((error) => {
      console.error("Error",error);
     })
      */
      
    // function closure 
/*
    function makeCounter() {
      let count = 0;
      return function () {
        count++;
        return count;
      };
    }
    const counter = makeCounter();
    console.log(counter()); 
    console.log(counter()); 
    console.log(counter()); 
    console.log(counter()); 
    console.log(counter()); 
    */
