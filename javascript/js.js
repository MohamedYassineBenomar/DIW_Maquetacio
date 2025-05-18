
    document.addEventListener('DOMContentLoaded', () => {
      /* ───────────────── nav‑main padding on scroll ───────────────── */
        const navMain = document.getElementById('nav-main');

        function setNavPadding() {
    const scrollTop = window.scrollY;
    const screenWidth = window.innerWidth;

    let newPadding;

    if (screenWidth <= 576) {
      // Mobile
      newPadding = scrollTop > 200 ? '10px' : '20px';
    } else if (screenWidth <= 768) {
      // Tablet
      newPadding = scrollTop > 255 ? '20px' : '40px';
    } else {
      // Desktop
      newPadding = scrollTop > 600 ? '30px' : '60px';
    }

    // 🛑 Only update if padding is different
    if (navMain.style.padding !== newPadding) {
      navMain.style.padding = newPadding;
    }
  }

      window.addEventListener('scroll', setNavPadding);
      setNavPadding(); // Run on load                                  // first run
    
      /* ───────────────── video controls ───────────────────────────── */
      const video      = document.getElementById('video_rest');
      const playBtn    = document.getElementById('playBtn');
      const pauseBtn   = document.getElementById('pauseBtn');
      const muteBtn    = document.getElementById('muteBtn');
      const unmuteBtn  = document.getElementById('unmuteBtn');
    
      function refreshBtns() {
        playBtn .classList.toggle('inactive', !video.paused);
        pauseBtn.classList.toggle('inactive',  video.paused);
        muteBtn .classList.toggle('inactive', !video.muted);
        unmuteBtn.classList.toggle('inactive', video.muted);
      }
    
      playBtn .onclick = () => { video.play();  refreshBtns(); };
      pauseBtn.onclick = () => { video.pause(); refreshBtns(); };
      muteBtn .onclick = () => { video.muted = true;  refreshBtns(); };
      unmuteBtn.onclick= () => { video.muted = false; refreshBtns(); };
    
      video.addEventListener('play',         refreshBtns);
      video.addEventListener('pause',        refreshBtns);
      video.addEventListener('volumechange', refreshBtns);
    
      refreshBtns();                         // initial state
    });
