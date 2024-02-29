const ratingCardEl = document.getElementById("rating-card");
const thanksCardEl = document.getElementById("thanks-card");
const submitRatingButtonEl = document.getElementById("submit-btn");

submitRatingButtonEl.addEventListener("click", () => {
  ratingCardEl.classList.add("hidden");
  thanksCardEl.classList.remove("hidden");
});
