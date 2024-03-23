const ratingCardEl = document.querySelector('.rating-card');
const thanksCardEl = document.querySelector('.thanks-card');
const submitRatingBtn = document.querySelector('.submit-btn');
const rateAgainBtn = document.querySelector('.rate-again-btn');
const ratingListEl = document.querySelector('#rating-list');
const ratingSelectedEl = document.querySelector('#selected-rating');

const displayRatingCard = () => {
  ratingCardEl.style.scale = '0';
  setTimeout(() => {
    thanksCardEl.style.scale = '1';
  }, 250);
};

const displayAppreciationCard = () => {
  thanksCardEl.style.scale = '0';
  setTimeout(() => {
    ratingCardEl.style.scale = '1';
  }, 250);
};

const removeSelectedState = () => {};

submitRatingBtn.addEventListener('click', displayRatingCard);
rateAgainBtn.addEventListener('click', displayAppreciationCard);

ratingListEl.addEventListener('click', (e) => {
  const selectedRating = e.target.closest('.rating-item');
  const selectedBtn = ratingListEl.querySelector('[aria-selected="true"');
  if (!selectedRating) return;

  if (selectedBtn) {
    selectedBtn.setAttribute('aria-selected', 'false');
  }

  selectedRating.setAttribute('aria-selected', 'true');
  ratingSelectedEl.textContent = `You selected ${selectedRating.textContent} out of 5`;
});
