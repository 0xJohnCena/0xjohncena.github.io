// List of John Cena memes (you can add more URLs here)
const memeUrls = [
    'https://i.imgflip.com/3hpelr.jpg',
   
    'https://images3.memedroid.com/images/UPLOADED70/67faa7d4b6450.webp',
    'https://i.pinimg.com/564x/23/4c/a0/234ca062f971739227acee8cf2851c57.jpg',
    'https://www.thesportster.com/wp-content/uploads/2020/03/6a013c871bdf034aa9658f08a3714de6.jpg',
    'https://img-9gag-fun.9cache.com/photo/aEPnbjx_700bwp.webp',
    'https://i.kym-cdn.com/photos/images/newsfeed/002/219/125/88d.jpg',
    'https://i.ibb.co/whXnyWxt/sk33rupjc8z71.webp',
    'https://i.ytimg.com/vi/ySbYwiyld84/hqdefault.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/001/355/516/776.jpg',
    'https://static0.thesportsterimages.com/wordpress/wp-content/uploads/2020/03/5a73f2ab83b42.jpeg',
    'https://cdn.kibrispdr.org/data/681/john-cena-you-cant-see-me-meme-13.jpg',
    'https://www.thesportster.com/wp-content/uploads/2020/03/bfd.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/002/219/145/65a.png',
    'https://static0.thesportsterimages.com/wordpress/wp-content/uploads/2019/10/pjimage-31.jpg',
    'https://i.ibb.co/WW7PMHBv/john-cena-you-cant-see-me-meme-54.jpg',
]
// DOM Elements
const memeDisplay = document.getElementById('memeDisplay');
let currentMemeIndex = 0;

// Function to display current meme
function displayMeme() {
    memeDisplay.innerHTML = '';
    const img = document.createElement('img');
    img.src = memeUrls[currentMemeIndex];
    img.alt = 'John Cena Meme';
    memeDisplay.appendChild(img);
}

// Function to cycle through memes
function cycleMemes() {
    currentMemeIndex = (currentMemeIndex + 1) % memeUrls.length;
    displayMeme();
}

// Initialize with first meme
displayMeme();

// Change meme every 4 seconds
setInterval(cycleMemes, 4500);

// Add some fun effects when clicking on the meme
memeDisplay.addEventListener('click', () => {
    const img = memeDisplay.querySelector('img');
    img.style.animation = 'none';
    void img.offsetWidth; // Trigger reflow
    img.style.animation = 'glitch 0.5s infinite';
});

// Store memes in localStorage
let memes = JSON.parse(localStorage.getItem('memes')) || [];

// DOM Elements
const memeGallery = document.getElementById('memeGallery');
const memeUrlInput = document.getElementById('memeUrl');
const submitMemeButton = document.getElementById('submitMeme');
const invisibilityButton = document.getElementById('invisibilityButton');

// Initialize the gallery
function initializeGallery() {
    memeGallery.innerHTML = '';
    memes.forEach(meme => {
        const memeElement = createMemeElement(meme);
        memeGallery.appendChild(memeElement);
    });
}

// Create a meme element
function createMemeElement(meme) {
    const div = document.createElement('div');
    div.className = 'meme-item';
    
    const img = document.createElement('img');
    img.src = meme.url;
    img.alt = 'John Cena Meme';
    
    div.appendChild(img);
    return div;
}

// Handle meme submission
submitMemeButton.addEventListener('click', () => {
    const url = memeUrlInput.value.trim();
    if (url && isValidImageUrl(url)) {
        memes.push({ url });
        localStorage.setItem('memes', JSON.stringify(memes));
        memeUrlInput.value = '';
        initializeGallery();
    } else {
        alert('Please enter a valid image URL!');
    }
});

// Validate image URL
function isValidImageUrl(url) {
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
}

// Invisibility button functionality
invisibilityButton.addEventListener('click', () => {
    const elements = document.querySelectorAll('.section, nav, header, footer');
    elements.forEach(element => {
        element.classList.toggle('invisible');
    });
    
    // Add some fun text when everything is invisible
    if (document.querySelector('.invisible')) {
        const invisibleText = document.createElement('div');
        invisibleText.className = 'invisible-text';
        invisibleText.textContent = 'You Can\'t See Me!';
        invisibleText.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: var(--secondary-color);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            z-index: 1000;
        `;
        document.body.appendChild(invisibleText);
        
        setTimeout(() => {
            invisibleText.remove();
        }, 2000);
    }
});

// CTF Challenge - Hidden flag
const challengeBox = document.querySelector('.challenge-box');
challengeBox.addEventListener('click', () => {
    // The flag is hidden in the background color
    const flag = 'FLAG{You_Cant_See_Me_But_I_See_You}';
    alert('Congratulations! You found the flag: ' + flag);
});

// Initialize the gallery on page load
document.addEventListener('DOMContentLoaded', initializeGallery); 