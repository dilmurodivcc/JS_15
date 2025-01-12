class Animal {
  constructor(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes a sound: ${this.sound}`);
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name, "Cat", "Meow");
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name, "Dog", "Woof");
  }
}
const cat = new Cat("Kitty");
const dog = new Dog("Buddy");
function loger1() {
  cat.makeSound();
  dog.makeSound();
}

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  add(grade) {
    this.grades.push(grade);
  }

  sum() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    const middle = sum / this.grades.length;
    console.log(`O'rtacha baho: ${middle.toFixed(2)}`);
  }
}
const student = new Student("Ali", 20); 
student.add(90);
student.add(80);
student.add(85);
function loger2() {
  student.sum();
}



class Car {
  constructor(color,brand, model, year, mileage = 0) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }


  drive(km) {
    this.mileage += km;
    console.log(`${this.color} rangli ${this.brand} ${this.model} ${km} km yurdi. Yangi mileage: ${this.mileage} km.`);
  }
  getCarAge(){
    this.age = new Date().getFullYear() - this.year;
    console.log(`${this.color} rangli ${this.brand} ${this.model} ${this.age} yosh`);
  }
}

const car = new Car("Qora", "Mercedes", "CLS 63s AMG", 2018, 50000);

function loger3() {
  car.drive(1000);
  car.getCarAge();
}



// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  mouseWheel: true,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchEventsTarget: "container",
  touchRatio: 1,
});
// Kodlarni belgilash
function copyCode() {
  const codeBlock = document.querySelector("pre code");
  const text = codeBlock.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Kod nusxalandi!"))
    .catch((err) => alert("Nusxalashda xatolik yuz berdi: " + err));
}
