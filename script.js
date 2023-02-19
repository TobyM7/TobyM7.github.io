const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 10;
  }, 30);
};

/* -- ⬇️⬇️ Multi-color version ⬇️⬇️ -- */

const wrapper = document.getElementById("bubble-wrapper");

let index = 0;

const Red = {
  One: "rgb(239, 83, 80)",
  Two: "rgb(244, 67, 54)",
  Three: "rgb(229, 57, 53)",
  Four: "rgb(211, 47, 47)",
  Five: "rgb(198, 40, 40)",
};

const Green = {
  One: "rgb(102, 187, 106)",
  Two: "rgb(76, 175, 80)",
  Three: "rgb(67, 160, 71)",
  Four: "rgb(56, 142, 60)",
  Five: "rgb(46, 125, 50)",
};

const Blue = {
  One: "rgb(66, 165, 245)",
  Two: "rgb(33, 150, 243)",
  Three: "rgb(30, 136, 229)",
  Four: "rgb(25, 118, 210)",
  Five: "rgb(21, 101, 192)",
};
const colorArray = [Red, Green, Blue];
const randomIndex = Math.floor(Math.random() * colorArray.length);
const Color = colorArray[randomIndex];

/* -- Step 2️⃣: Pick the order of colors -- */

const colors = [
  Color.One,
  Color.Two,
  Color.Three,
  Color.Four,
  Color.Five,
  Color.Four,
  Color.Three,
  Color.Two,
];

const animateBubble = (x) => {
  const bubble = document.createElement("div");

  bubble.className = "bubble";
  bubble.style.left = `${x}px`;

  /* -- Step 3️⃣: Cycle through the colors using an index variable and the modulus (%) operator -- */

  bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];

  wrapper.appendChild(bubble);

  setTimeout(() => wrapper.removeChild(bubble), 2000);
};

window.onmousemove = (e) => animateBubble(e.clientX);
