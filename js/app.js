const num = document.getElementById("number");
const btns = document.querySelectorAll("#btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      num.style.color = "red";
      num.style.textShadow = "1px 1px 1px white";
    }
    if (count > 0) {
      num.style.color = "green";
    }
    if (count === 0) {
      num.style.color = "white";
    }
    num.textContent = count;
  });
});
