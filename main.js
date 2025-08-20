const reviews = [
  {
    name: 'Diane J. Rhoades',
    img: 'https://plus.unsplash.com/premium_photo-1661288439917-1542b58a962b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D',
    text: 'I was honestly skeptical about ordering online, but this completely changed my mind. The quality is outstanding and arrived even faster than promised. My friends keep asking where I got it! Will definitely be a repeat customer. The customer service team was also super helpful when I had questions about sizing.',
    role: 'UX Research Analyst',
  },
  {
    name: 'David K.',
    img: 'https://images.unsplash.com/photo-1556741576-1d17b478d761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fEN1c3RvbWVyfGVufDB8fDB8fHww',
    text: "Does the job but nothing to write home about. The description made it sound more premium than it actually is. It's functional and well-made, but I expected a bit more for the price. Not disappointed, but not thrilled either. Might look elsewhere next time.",
    role: 'DevOps Automation Specialist',
  },
  {
    name: 'Maria L.',
    img: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEN1c3RvbWVyfGVufDB8fDB8fHww',
    text: 'Bought this as a birthday present for my sister and she absolutely loves it! The attention to detail is impressive and it looks much more expensive than what I paid. Shipping was quick and it arrived beautifully packaged. This company really knows how to take care of their customers.',
    role: 'UX Designer',
  },
  {
    name: 'James R.',
    img: 'https://plus.unsplash.com/premium_photo-1664049362569-e65216ceb8ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEN1c3RvbWVyfGVufDB8fDB8fHww55',
    text: "Overall really pleased with this purchase. Does exactly what it's supposed to do and the price point is fair. Only complaint is that the packaging could be better - arrived a bit banged up, though the product itself was fine. Would recommend, just maybe improve the shipping materials.",
    role: 'Backend Engineer',
  },
];

const img = document.querySelector('.author-img');
const authorName = document.querySelector('.author-info').firstElementChild;
const authorRole = document.querySelector('.author-info').lastElementChild;
const text = document.querySelector('.review').firstElementChild;

let currentPerson = 0;

const container = document.querySelector('.btn-container');
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('next-btn')) {
    currentPerson++;
    if (currentPerson > reviews.length - 1) {
      currentPerson = 0;
    }
    showPerson();
  } else if (e.target.classList.contains('previous-btn')) {
    currentPerson--;
    if (currentPerson < 0) {
      currentPerson = 0;
    }
    showPerson();
  } else if (e.target.classList.contains('random-btn')) {
    currentPerson = Math.floor(Math.random() * reviews.length);
    showPerson();
  }
});

function showPerson() {
  const review = reviews[currentPerson];
  img.src = review.img;
  authorName.textContent = review.name;
  authorRole.textContent = review.role;
  text.textContent = review.text;
}
