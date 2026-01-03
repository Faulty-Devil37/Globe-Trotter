import { Navbar } from '../components/Navbar';

export const DashboardView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4" style="font-size: 2rem;">Welcome Back, Traveler</h2>
        
        <!-- 3D Hero Section -->
        <section class="hero-3d-container mb-8" id="hero-3d">
          <!-- Layer 1: Background (Deep) -->
          <div class="hero-layer hero-layer-bg">
             <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&h=800&fit=crop" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
          </div>
          
          <!-- Layer 2: Floating Elements (Mid) -->
          <div class="hero-layer hero-layer-mid">
             <div class="float-3d" style="position: absolute; top: 10%; right: 10%; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(5px); border-radius: 50%;"></div>
             <div class="float-3d" style="position: absolute; bottom: 20%; left: 10%; width: 60px; height: 60px; background: rgba(255, 112, 67, 0.3); border-radius: 50%; animation-delay: 1s;"></div>
          </div>

          <!-- Layer 3: Text (Front) -->
          <div class="hero-layer hero-layer-top flex flex-column items-center justify-center text-center p-4">
             <h1 style="color: white; font-size: 4rem; text-shadow: 0 10px 20px rgba(0,0,0,0.3); letter-spacing: -1px; margin-bottom: 1rem;">
               Discover Your <br><span style="color: var(--accent-color);">Next Adventure</span>
             </h1>
             <p style="color: rgba(255,255,255,0.9); font-size: 1.2rem; max-width: 600px; margin-bottom: 2rem;">
               Plan, share, and explore the world with our 3D interactive travel planner.
             </p>
             <a href="#/create-trip" class="btn btn-accent btn-3d" style="padding: 1rem 2.5rem; border-radius: 99px; font-size: 1.2rem;">
               Start Journey
             </a>
          </div>
        </section>

        <!-- Search Bar & Controls -->
        <div class="flex gap-4 mb-8 items-center card-3d" style="background: white; padding: 1rem; border-radius: var(--radius-card); box-shadow: var(--shadow-card);">
           <div class="flex items-center gap-2 flex-1 px-4">
             <i data-lucide="search" style="color: var(--text-body);"></i>
             <input type="text" id="dashboard-search" placeholder="Search destinations, trips..." style="border: none; box-shadow: none; font-size: 1.1rem; padding: 0.5rem;">
           </div>
           <div class="flex gap-2">
             <button class="btn btn-outline" style="border-radius: 99px;">Group by</button>
             <button class="btn btn-outline" style="border-radius: 99px;">Filter</button>
             <button class="btn btn-outline" style="border-radius: 99px;">Sort</button>
           </div>
        </div>

        <!-- Top Regional Selections -->
        <section>
          <div class="flex items-center justify-between mb-4">
             <h3>Top 3D Destinations</h3>
             <a href="#/search-city" style="color: var(--primary-color); font-weight: 600;">View All</a>
          </div>
          <div class="grid grid-5">
            ${[1, 2, 3, 4, 5].map(i => `
              <div class="card card-3d items-center justify-center text-center clickable" style="aspect-ratio: 1; cursor: pointer;">
                <div class="float-3d" style="width: 60px; height: 60px; background: var(--bg-body); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                   <i data-lucide="map-pin" style="color: var(--primary-color);"></i>
                </div>
                <h4 style="margin: 0; font-size: 1.1rem; transform: translateZ(10px);">Region ${i}</h4>
                <span style="font-size: 0.85rem; color: var(--text-body);">12 Trips</span>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Previous Trips -->
        <section style="margin-top: 3rem;">
           <h3 class="mb-4">Recent Trips</h3>
           <div class="grid grid-3">
            ${[1, 2, 3].map(i => `
              <div class="card card-3d" style="padding: 0; overflow: hidden; height: 320px; position: relative; cursor: pointer;">
                <div class="hero-layer-bg" style="height: 200px; width: 100%; overflow: hidden;">
                   <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; transform: scale(1.1);">
                </div>
                <div style="padding: 1.5rem; background: white; position: relative; z-index: 2;">
                   <h4 style="margin-bottom: 0.5rem;">Trip History ${i}</h4>
                   <p style="font-size: 0.9rem; color: var(--text-body);">Oct 12 - Oct 20, 2024</p>
                </div>
              </div>
            `).join('')}
           </div>
        </section>

      </div>
    </main>
  `;
};

export const initDashboard = () => {
  // 3D Parallax Logic for Hero
  const hero = document.getElementById('hero-3d');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5;

      const bg = hero.querySelector('.hero-layer-bg');
      const topLayer = hero.querySelector('.hero-layer-top');

      if (bg) bg.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
      if (topLayer) topLayer.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
    });

    hero.addEventListener('mouseleave', () => {
      const bg = hero.querySelector('.hero-layer-bg');
      const topLayer = hero.querySelector('.hero-layer-top');
      if (bg) bg.style.transform = `scale(1.1) translate(0,0)`;
      if (topLayer) topLayer.style.transform = `translate(0,0)`;
    });
  }

  // Generic 3D Card Tilt Logic
  const cards = document.querySelectorAll('.card-3d');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    });
  });
};
