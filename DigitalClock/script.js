const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  let formatted = date.toLocaleTimeString();

  clock.innerHTML = `<span>${formatted}</span>`;
}, 1000);
