// Auto-play background music softly on load
window.addEventListener('load', function() {
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.3; // Low volume for subtlety
    bgMusic.play().catch(e => console.log('Autoplay blocked; user must interact.'));
});

// Surprise button
document.getElementById('surprise-btn').addEventListener('click', function() {
    const surprise = document.getElementById('surprise');
    surprise.style.display = surprise.style.display === 'none' ? 'block' : 'none';
});

// Love letter button
document.getElementById('letter-btn').addEventListener('click', function() {
    const letter = document.getElementById('love-letter');
    letter.style.display = letter.style.display === 'none' ? 'block' : 'none';
});
