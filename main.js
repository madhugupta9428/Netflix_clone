// CARDS SECTION LOGIC

let slider = document.getElementById("slider");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let currentIndex = 0;

next.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = 4;
    btnOpen();
  } else if (currentIndex == 4) {
    currentIndex = 6;
  } else {
    currentIndex = 6;
  }

  updateCard();
});

function updateCard() {
  let cardWidth = slider.querySelector("div").offsetWidth;
  slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

function btnOpen() {
  let prevBtn = document.createElement("button");
  let img = document.createElement("img");
  let btnBox = document.getElementById("btnBox");
  img.src = "img/left.svg";
  prevBtn.classList.add(
    "absolute",
    "left-30",
    "top-10",
    "w-[24px]",
    "h-[120px]",
    "bg-[#ffffff1a]",
    "hover:bg-[#ffffff3a]",
    "pointer",
    "border-none",
    "rounded-md"
  );
  prevBtn.prepend(img);
  btnBox.prepend(prevBtn);

  prevBtn.addEventListener("click", () => {
    if (currentIndex == 6) {
      currentIndex = 4;
    } else if (currentIndex == 4) {
      currentIndex = 0;
      btnBox.removeChild(prevBtn);
    } else {
      currentIndex = 0;
    }

    updateCard();
  });
}

// FAQ Section Logic

function faqtoggle(button) {
  const answer = button.nextElementSibling;
  const plusIcon = button.querySelector(".plus");
  const crossIcon = button.querySelector(".cross");

  answer.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
}

// function faqtoggle(button) {
//   const answer = button.nextElementSibling;
//   const plus = button.querySelector(".plus");
//   const cross = button.querySelector(".cross");

//   // agar hidden hai → open karo
//   if (answer.classList.contains("hidden")) {
//     answer.classList.remove("hidden");

//     // smooth height animation
//     answer.style.maxHeight = answer.scrollHeight + "px";

//     plus.classList.add("hidden");
//     cross.classList.remove("hidden");
//   } else {
//     // smooth close animation
//     answer.style.maxHeight = "0px";

//     setTimeout(() => {
//       answer.classList.add("hidden");
//     }, 300); // animation ka time

//     plus.classList.remove("hidden");
//     cross.classList.add("hidden");
//   }
// }
