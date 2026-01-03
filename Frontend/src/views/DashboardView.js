import { Navbar } from '../components/Navbar';

export const DashboardView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <div class="flex justify-between items-end mb-8">
           <div>
              <h2 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--text-heading);">Welcome Back</h2>
              <p style="color: var(--text-body);">Ready for your next adventure?</p>
           </div>
           <p style="color: var(--text-body); font-size: 0.9rem;">${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>

        <section class="hero-container mb-8">
           <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&h=800&fit=crop" style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
           <div class="hero-overlay">
              <div class="hero-content">
                 <span style="background: rgba(255,255,255,0.2); color: white; padding: 0.5rem 1rem; border-radius: 99px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Discover</span>
                 <h1 style="color: white; font-size: 3.5rem; line-height: 1.1; margin: 1.5rem 0;">Explore the Unseen <br><span style="color: var(--accent-color);">World.</span></h1>
                 <p style="color: rgba(255,255,255,0.9); font-size: 1.15rem; margin-bottom: 2.5rem; line-height: 1.7;">
                   Curate your perfect journey with our advanced itinerary builder and personalized suggestions.
                 </p>
                 <div class="flex gap-4">
                    <a href="#/create-trip" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem;">Start Planning</a>
                    <a href="#/search-city" class="btn" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px);">Explore Destinations</a>
                 </div>
              </div>
           </div>
        </section>

        <div class="flex gap-4 mb-8 items-center card" style="padding: 1rem;">
           <div class="flex items-center gap-2 flex-1 px-4">
             <i data-lucide="search" style="color: var(--text-body);"></i>
             <input type="text" id="dashboard-search" placeholder="Search destinations, trips..." style="border: none; box-shadow: none; font-size: 1.05rem; background: transparent; padding: 0.5rem;">
           </div>
           <div style="height: 30px; width: 1px; background: var(--border-color);"></div>
           <div class="flex gap-2">
             <button class="btn btn-outline" style="border-radius: 99px; font-size: 0.9rem;">Filters</button>
           </div>
        </div>

        <section>
          <div class="flex items-center justify-between mb-6">
              <h3>Global Trending</h3>
              <a href="#/search-city" class="flex items-center gap-2" style="color: var(--primary-color); font-weight: 600; font-size: 0.95rem;">View All <i data-lucide="arrow-right" style="width: 16px;"></i></a>
          </div>
          
          <div id="popular-destinations-container" class="grid grid-5">
              <p style="grid-column: span 5; text-align: center; color: var(--text-body);">Loading global adventures...</p>
          </div>
        </section>

        <section style="margin-top: 3rem;">
           <h3 class="mb-6">Journey History</h3>
           <div class="grid grid-3">
            ${[1, 2, 3].map(i => `
              <div class="card clickable" style="padding: 0; overflow: hidden; height: 340px;">
                <div style="height: 200px; width: 100%; position: relative;">
                   <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                   <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.9); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.75rem; font-weight: 700; color: var(--primary-color);">COMPLETED</div>
                </div>
                <div style="padding: 1.5rem; display: flex; flex-direction: column; height: 140px; justify-content: space-between;">
                   <div>
                      <h4 style="margin-bottom: 0.25rem;">European Summer ${i}</h4>
                      <p style="font-size: 0.9rem; color: var(--text-body);">Oct 12 - Oct 20, 2024</p>
                   </div>
                   <div style="display: flex; gap: 0.5rem;">
                      <span style="font-size: 0.85rem; background: #F1F5F9; padding: 0.25rem 0.5rem; border-radius: 4px; color: var(--text-body);">4 Cities</span>
                      <span style="font-size: 0.85rem; background: #F1F5F9; padding: 0.25rem 0.5rem; border-radius: 4px; color: var(--text-body);">Relaxing</span>
                   </div>
                </div>
              </div>
            `).join('')}
           </div>
        </section>
      </div>
    </main>
  `;
};

export const initDashboard = async () => {
  const container = document.querySelector('#popular-destinations-container');
  if (!container) return;

  try {
    // Calling the FastAPI Backend
    const response = await fetch('http://127.0.0.1:8000/popular-destinations/');
    const destinations = await response.json();

    if (destinations.length > 0) {
      container.innerHTML = destinations.map(dest => `
        <div class="card clickable text-center justify-center pointer animate-fade" style="padding: 0; overflow: hidden; aspect-ratio: 0.8;">
          <img src="${dest.image_url}" style="width: 100%; height: 60%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x200?text=Explore'">
          <div style="padding: 1rem;">
            <h4 style="margin: 0; font-size: 1.1rem; color: var(--text-heading);">${dest.city}</h4>
            <p style="font-size: 0.85rem; color: var(--text-body); margin-top: 0.25rem;">Popular Choice</p>
            <button class="btn btn-primary" style="margin-top: 0.5rem; padding: 0.4rem 1rem; font-size: 0.8rem;">Explore</button>
          </div>
        </div>
      `).join('');
    }
  } catch (err) {
    console.error("Dashboard failed to load:", err);
    container.innerHTML = `<p style="grid-column: span 5; color: red; text-align: center;">Backend fortress unreachable. Ensure Uvicorn is running!</p>`;
  }
};