# Javascript Projects

All basic Javascript Projects

# Project 1 - Background Changer

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    body.style.backgroundColor = e.target.id;
  });
});
```

# Project 2 - BMI Calculator

```javascript
const results = document.querySelector("#results");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#Weight").value);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter valid Height ${height} is invalid`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter valid Weight ${weight} is invalid`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

# Project 3 - Digital Clock

```javascript
const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  let formatted = date.toLocaleTimeString();

  clock.innerHTML = `<span>${formatted}</span>`;
}, 1000);
```
