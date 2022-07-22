// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const emptyHeart = document.querySelectorAll(".like-glyph");

const errorPopUp = function () {
  document.querySelector("#modal").classList.remove("hidden");
  setTimeout(function () {
    document.querySelector("#modal").classList.add("hidden");
  }, 3000);
};

// -- FIX CODE - need to take mimicServer out so I can take catch out of if/else block

// emptyHeart.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     if (btn.textContent === EMPTY_HEART) {
//       mimicServerCall()
//         .then(function () {
//           btn.textContent = FULL_HEART;
//           btn.classList.toggle("activated-heart");
//         })
//         .catch(errorPopUp());
//     } else if (btn.textContent === FULL_HEART) {
//       mimicServerCall()
//         .then(function () {
//           btn.textContent = EMPTY_HEART;
//           btn.classList.toggle("activated-heart");
//         })
//         .catch(errorPopUp());
//     }
//   });
// });

emptyHeart.forEach(function (btn) {
  btn.addEventListener("click", function () {
    mimicServerCall()
      .then(() => {
        if (btn.textContent === EMPTY_HEART) {
          btn.textContent = FULL_HEART;
          btn.classList.toggle("activated-heart");
        } else if (btn.textContent === FULL_HEART) {
          btn.textContent = EMPTY_HEART;
          btn.classList.toggle("activated-heart");
        }
      })
      .catch(errorPopUp);
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
