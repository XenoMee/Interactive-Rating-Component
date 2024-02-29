const ratingCardEl = document.getElementById("rating-card");
const thanksCardEl = document.getElementById("thanks-card");
const submitRatingButtonEl = document.getElementById("submit-btn");
const ratingListEl = document.getElementById("rating-list");
const ratingSelectedEl = document.getElementById("selected-rating");
const ratingNumbersArray = ratingListEl.children;
let isSelected = false;

submitRatingButtonEl.addEventListener("click", () => {
  if (isSelected) {
    ratingCardEl.classList.add("hidden");
    thanksCardEl.classList.remove("hidden");
  } else return;
});

ratingListEl.addEventListener("click", (e) => {
  const currentRating = e.target.closest("span");
  if (!currentRating) return;
  isSelected = true;
  currentRating.style.backgroundColor = "#FC7614";
  currentRating.style.color = "#fff";
  ratingSelectedEl.textContent = `You selected ${currentRating.textContent} out of ${ratingNumbersArray.length}!`;
});
