



// 1
const student = {
    name: "Сыймык",
    age: 16,
    course: "Frontend"
};
student.age = 16;
student.city = "Osh";
delete student.course;

console.log(student);


// 2
const car = {
    brand: "Mercedes", 
    model: "w221",
    year: 2021,
    color: "black"
};

const keys = Object.keys(car);

console.log("Количества свойств:", keys.length);

console.log(Object.keys(car));

// 3

const product = {
  name: "Laptop",
  price: 50000,
  quantity: 3
};

const laptops = Object.values(product);

console.log("Количества свойств:", laptops.length);

const has = laptops.includes(50000);
console.log(has);

// 4

const user = {
  name: "Руслан",
  age: 20,
  city: "Ош"
};

const info = Object.assign(user);

const intri = Object.entries(user);

for (const [key, value] of intri) {
    console.log(`${key}: ${value}`);
}

// 5

const user1 = {
  name: "Азамат",
  age: 18
};

const user2 = {
  city: "Бишкек",
  course: "JavaScript"
};

const users = Object.assign({}, user1, user2);

console.log("users:", users);
console.log("user1:", user1);
console.log("user2:", user2);



// 6

const phone = {
  brand: "Apple",
  model: "iPhone 15",
  price: 80000
};

Object.freeze(phone);

phone.price = 70000;
phone.color = "black";
delete phone.model;

console.log(phone);



// 7


const employee = {
  name: "Бекзат",
  position: "Developer",
  salary: 40000
};

Object.seal(employee);

employee.salary = 50000;
employee.age = 22;
delete employee.position;

console.log(employee);


// 8


const shop = {
  name: "Tech Store",
  products: 25,
  city: "Ош",
  rating: 4.5
};

console.log("Ключи:", Object.keys(shop));
console.log("Значение:", Object.values(shop));
console.log("Пары:", Object.entries(shop));

shop.admin = true;
delete shop.rating;

Object.freeze(shop);
shop.products = 50;

console.log(shop);



// 9


const profile = {
  username: "coder123",
  age: 17,
  city: "Ош"
};

const newData = {
  age: 18,
  city: "Бишкек",
  course: "Backend"
};

const upprofile = Object.assign({}, profile, newData);
const profileKeys = Object.keys(profile);
console.log("Ключи:", profileKeys);
console.log("Количества свойств:", profileKeys.length);

for (const [key, value] of Object.entries(upprofile)) {
    console.log(`${key}: ${value}`);
}

Object.seal(upprofile);
upprofile.username = "new_Syimyk";
upprofile.email = "syimyk4747@gmail.com"

console.log(upprofile);



// 10


const student2 = { 
    name: "Айбек", 
    age: 19, course: "JavaScript", 
    grade: 85 
};
const add = { 
    city: "Бишкек", 
    active: true 
};

const profiles = Object.assign({}, student2, add);

console.log("Ключи:", Object.keys(profiles));
console.log("Значения:", Object.values(profiles));

for (const [key, value] of Object.entries(profiles)) {
  console.log(`${key}: ${value}`);
}

if (profiles.grade >= 80) {
  console.log("Отличный студент");
} else {
  console.log("Нужно улучшить результат");
}

profiles.grade = 95;
Object.freeze(profiles);

profiles.name = "Сыймык";

console.log(Object.isFrozen(profiles));
console.log(profiles);