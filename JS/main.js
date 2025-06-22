// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});




// Typewriter effect

const typewriterText = document.getElementById('typewriter');
const words = ['Web Developer', 'React Enthusiast', 'JavaScript Developer', 'Open Source Contributor'];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typewriterText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

// Start typing effect
type();


// Lottie Animation
const lottieContainer = document.getElementById('lottieContainer');
lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json' // Replace with your animation URL
});

// Simple Memory Game
function createMemoryGame() {
    const gameContainer = document.getElementById('memory-game');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
    const cards = [...colors, ...colors];
    
    cards.sort(() => Math.random() - 0.5);
    
    cards.forEach(color => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.style.backgroundColor = '#ddd';
        card.dataset.color = color;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

let flippedCard = null;
let canFlip = true;

function flipCard() {
    if (!canFlip || this === flippedCard) return;
    
    this.style.backgroundColor = this.dataset.color;
    
    if (!flippedCard) {
        flippedCard = this;
        return;
    }
    
    if (flippedCard.dataset.color === this.dataset.color) {
        flippedCard = null;
    } else {
        canFlip = false;
        setTimeout(() => {
            this.style.backgroundColor = '#ddd';
            flippedCard.style.backgroundColor = '#ddd';
            flippedCard = null;
            canFlip = true;
        }, 1000);
    }
}

createMemoryGame();

//

const icons = [ '👾', '｡🇯‌🇸‌', '⚛️']; // laptop, mouse, keyboard
const container = document.getElementById('rain-container');

function createDrop() {
  const icon = document.createElement('div');
  icon.classList.add('tech-icon');
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.animationDuration = 2 + Math.random() * 3 + 's';
  icon.style.fontSize = 9 + Math.random() * 50 + 'px';
  container.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 5000);
}

// create new drops every 200ms
setInterval(createDrop, 350);
