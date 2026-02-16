// ========================================
// MUSIC PLAYER FUNCTIONALITY
// ========================================

const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const audio = document.getElementById('birthdayAudio');
let isPlaying = false;

playBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        playBtn.classList.remove('playing');
    } else {
        audio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        playBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => animateCounter(counter));
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const counterBoxes = document.querySelectorAll('.counter-box');
counterBoxes.forEach(box => counterObserver.observe(box.parentElement.parentElement));

// ========================================
// CANDLE BLOW FUNCTIONALITY
// ========================================

let candlesBlown = 0;
const candles = document.querySelectorAll('.candle');

candles.forEach(candle => {
    candle.addEventListener('click', function() {
        if (this.textContent === '🕯️') {
            this.textContent = '💨';
            this.style.opacity = '0.3';
            candlesBlown++;
            
            if (candlesBlown === 3) {
                setTimeout(() => {
                    document.getElementById('cakeMessage').textContent = '🎉 Wish Granted! May all your dreams come true! 🎉';
                    createFireworks();
                }, 500);
            }
        }
    });
});

// ========================================
// FIREWORKS EFFECT
// ========================================

function createFireworks() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
            firework.style.position = 'fixed';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            firework.style.fontSize = '2rem';
            firework.style.zIndex = '1000';
            firework.style.pointerEvents = 'none';
            firework.style.animation = 'fadeOut 1s ease-out forwards';
            document.body.appendChild(firework);
            
            setTimeout(() => firework.remove(), 1000);
        }, i * 50);
    }
}

// ========================================
// BALLOON POP FUNCTIONALITY
// ========================================

const balloonItems = document.querySelectorAll('.balloon-item');

balloonItems.forEach(balloon => {
    balloon.addEventListener('click', function() {
        if (this.textContent.trim() === '🎈') {
            const message = this.dataset.message;
            this.style.transform = 'scale(1.5)';
            this.style.opacity = '0';
            
            setTimeout(() => {
                this.textContent = '💥';
                this.style.transform = 'scale(1)';
                this.style.opacity = '1';
            }, 200);
            
            document.getElementById('balloonMessage').textContent = message;
            
            setTimeout(() => {
                document.getElementById('balloonMessage').textContent = '';
            }, 2000);
        }
    });
});

// ========================================
// LOVE BUTTON COUNTER
// ========================================

let loveCount = 0;
const loveBtn = document.getElementById('loveBtn');
const loveCountDisplay = document.getElementById('loveCount');

loveBtn.addEventListener('click', function(event) {
    loveCount++;
    loveCountDisplay.textContent = loveCount;
    
    // Create floating heart
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float-up 2s ease-out forwards';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
    
    // Button animation
    loveBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        loveBtn.style.transform = 'scale(1)';
    }, 100);
});

// ========================================
// GALLERY LIGHTBOX
// ========================================

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        }
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}

// ========================================
// CONFETTI GENERATION
// ========================================

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Generate confetti periodically
setInterval(createConfetti, 300);

// Initial confetti burst
for (let i = 0; i < 30; i++) {
    setTimeout(createConfetti, i * 100);
}

// ========================================
// CAKE HOVER EFFECT
// ========================================

const cake = document.getElementById('cake');
cake.addEventListener('mouseenter', function() {
    this.style.animation = 'bounce 0.5s';
});

cake.addEventListener('animationend', function() {
    this.style.animation = '';
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c💕 Happy Birthday Dinda! 💕', 'font-size: 20px; color: #ff69b4; font-weight: bold;');
console.log('%cMade with Love & Code 💖', 'font-size: 14px; color: #ff1493;');