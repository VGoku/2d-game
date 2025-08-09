// Flying Bats Animation
(function() {
  const BAT_COUNT = 5;
  const BAT_SIZE = 20;
  const SPEED_RANGE = { min: 2, max: 5 };

  function createBat() {
    const bat = document.createElement('div');
    bat.className = 'flying-bat';
    bat.style.cssText = `
      position: fixed;
      width: ${BAT_SIZE}px;
      height: ${BAT_SIZE}px;
      background: url('/bat.png') no-repeat center/contain;
      pointer-events: none;
      z-index: 1000;
    `;
    
    // Random starting position
    bat.x = Math.random() * window.innerWidth;
    bat.y = Math.random() * window.innerHeight;
    
    // Random speed and direction
    bat.speedX = (Math.random() * (SPEED_RANGE.max - SPEED_RANGE.min) + SPEED_RANGE.min) * (Math.random() < 0.5 ? 1 : -1);
    bat.speedY = (Math.random() * (SPEED_RANGE.max - SPEED_RANGE.min) + SPEED_RANGE.min) * (Math.random() < 0.5 ? 1 : -1);
    
    document.body.appendChild(bat);
    return bat;
  }

  function updateBat(bat) {
    bat.x += bat.speedX;
    bat.y += bat.speedY;

    // Bounce off edges
    if (bat.x < 0 || bat.x > window.innerWidth - BAT_SIZE) {
      bat.speedX *= -1;
    }
    if (bat.y < 0 || bat.y > window.innerHeight - BAT_SIZE) {
      bat.speedY *= -1;
    }

    // Update position
    bat.style.transform = `translate(${bat.x}px, ${bat.y}px) scaleX(${bat.speedX > 0 ? 1 : -1})`;
  }

  // Create bats
  const bats = Array.from({ length: BAT_COUNT }, createBat);

  // Animation loop
  function animate() {
    bats.forEach(updateBat);
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
})(); 