const name2 = function sayMyname(surname, lastname) {
    if (surname === "Obafemi" || lastname === "olabayo") {
      console.log("Welcome Mr Obafemi");
      alert("Enjoy the rest of your day");
    } else {
      alert("User Not Recognized!!!!!");
    }
  };
  name2("Obafemi", "Olabayo");
  const phones = ["redmi", "tecno", "samsung", "iphone", "infinix"];
  const names = ["Obafemi", "Olabayo", "olayinka", "oladimeji", "samuel"];
  const namesfunction = function verify(surname, lastname) {
    if (surname === names[0] && lastname === phones[0]) {
      console.log("Welcome Mr Obafemi");
      alert("Enjoy the rest of your day");
    } else {
      alert("i no sabi you");
    }
  };
  const name1 = prompt("How old are you?");
  const Verify = function verifyAge(name) {
    if (name < 18) {
      alert("you are too young for this.");
    } else if (name === 18) {
      alert("Congratulations, you are old enough to drive a car.");
    } else if (name > 18) {
      console.log("Baba Agbalagbba, Afunni Ma wo be.");
    }
  };
  Verify(name1);
  const fruits = ["mango", "guava", "watermelon", "apples", "strawberry", "orange", "Banana"];
  const food = ["rice", "beans", "yam", ["bread", "beverage"]];
  fruits.pop();
  console.log(fruits);
  fruits.push("kiwi");
  console.log(fruits);
  fruits.shift();
  console.log(fruits);
  fruits.sort();
  alert(fruits);
  const fruitsFood = fruits.concat([food]);
  console.log(fruitsFood);