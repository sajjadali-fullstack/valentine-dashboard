
/**
 * Valentine's Week Roadmap Logic
 * Laptop + Mobile Responsive
 */

const lovePlan = [
    { d: 7, n: "Rose Day", i: "🌹", msg: "Aap meri life ke sabse khoobsurat phool ho!" },
    { d: 8, n: "Propose Day", i: "💍", msg: "I want to spend every single second with you." },
    { d: 9, n: "Chocolate Day", i: "🍫", msg: "Life is sweet, but you're the reason why." },
    { d: 10, n: "Teddy Day", i: "🧸", msg: "A soft hug from me to you, hamesha." },
    { d: 11, n: "Promise Day", i: "🤝", msg: "Waada hai, kabhi haath nahi chhodunga." },
    { d: 12, n: "Hug Day", i: "🤗", msg: "Your hugs are my favorite place in the world." },
    { d: 13, n: "Kiss Day", i: "💋", msg: "Sending you a million virtual kisses!" },
    { d: 14, n: "Valentine's Day", i: "💝", msg: "REDIRECT" }
];

// --- LOCK SYSTEM CONFIG ---
// Testing ke liye: const today = 14;
// Live karne ke liye: const today = new Date().getDate();
// const today = 14;
const today = new Date().getDate() 

const roadmap = document.getElementById('roadmap');

/**
 * Grid mein cards generate karna aur Lock/Unlock check karna
 */
lovePlan.forEach(day => {
    // Lock logic: Agar aaj ki date card ki date se choti hai toh locked
    const isUnlocked = today >= day.d;
    
    const card = document.createElement('div');
    card.className = `card ${isUnlocked ? 'active' : 'locked'}`;
    
    card.innerHTML = `
        <span class="icon">${isUnlocked ? day.i : '🔒'}</span>
        <h3>${day.n}</h3>
        <p>${day.d} Feb</p>
    `;
    
    card.onclick = () => {
        if (!isUnlocked) {
            alert(`Patience, Love! ❤️ Yeh surprise ${day.d} Feb ko khulega.`);
            return;
        }
        
        // Valentine's Day specific redirect
        if (day.d === 14) {
            window.location.href = "https://sajjadali-fullstack.github.io/valentine-surprise/";
        } else {
            // Baaki dino ke liye modal popup
            openModal(day.n, day.msg);
        }
    };
    
    roadmap.appendChild(card);
});

/**
 * Modal functions
 */
function openModal(title, text) {
    const modal = document.getElementById('modal');
    document.getElementById('m-title').innerText = title;
    document.getElementById('m-text').innerText = text;
    modal.style.display = 'flex';
    
    // Har unlock par celebration confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ff8fa3']
    });
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

/**
 * Floating Hearts Background Animation
 */
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '105vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.color = '#ff4d6d';
    heart.style.opacity = Math.random();
    heart.style.zIndex = "-1";
    heart.style.transition = `transform ${Math.random() * 3 + 3}s linear`;
    
    document.getElementById('hearts-container').appendChild(heart);
    
    // Animation start
    setTimeout(() => {
        heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
    }, 50);
    
    // Remove heart after it leaves screen
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Har 450ms mein ek naya heart generate hoga
setInterval(createHeart, 450);

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}