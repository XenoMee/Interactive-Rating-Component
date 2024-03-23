const ratingCardEl = document.getElementById('rating-card');
const thanksCardEl = document.getElementById('thanks-card');
const submitRatingButtonEl = document.getElementById('submit-btn');
const ratingListEl = document.getElementById('rating-list');
const ratingSelectedEl = document.getElementById('selected-rating');
const ratingNumbersArray = ratingListEl.children;
let isSelected = false;

submitRatingButtonEl.addEventListener('click', (e) => {
  if (!isSelected) return;

  ratingCardEl.classList.add('hidden');
  thanksCardEl.classList.remove('hidden');
  thanksCardEl.classList.add('grid');
});

ratingListEl.addEventListener('click', (e) => {
  const selectedRating = e.target.closest('span');
  if (!selectedRating) return;
  else {
    isSelected = true;
    selectedRating.style.color = '#fff';
    selectedRating.style.backgroundColor = '#FC7614';
    ratingSelectedEl.textContent = `You selected ${selectedRating.textContent} out of ${ratingNumbersArray.length}`;
  }
});
