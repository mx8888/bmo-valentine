function moveButton() {
    var noBtn = document.getElementById('no-btn');
    var maxWidth = window.innerWidth - noBtn.offsetWidth;
    var maxHeight = window.innerHeight - noBtn.offsetHeight;
    var x = Math.random() * maxWidth;
    var y = Math.random() * maxHeight;

    x = Math.max(0, Math.min(x, maxWidth));
    y = Math.max(0, Math.min(y, maxHeight));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
document.getElementById("yes-btn").addEventListener("click", function () {
    alert("YIIEE IKAW AH HAHAHAHAH");
  
    // Trigger heart
    hearts();
  });
  
  function hearts() {
    const heartContainer = document.getElementById('heart-container');
  
    heartContainer.innerHTML = '';
  

    for (let i = 0; i < 69; i++) { 
      const heart = document.createElement('span');
      const size = Math.random() * 60 + 30; 
      const xPos = Math.random() * 100; 
      const yPos = Math.random() * 80 + 10; 
      const delay = Math.random() * 5; 
  
 
      heart.classList.add('particle');
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${xPos}%`;
      heart.style.top = `${yPos}%`;
      heart.style.animationDelay = `${delay}s`;
  
      heartContainer.appendChild(heart);
  }
  }  
