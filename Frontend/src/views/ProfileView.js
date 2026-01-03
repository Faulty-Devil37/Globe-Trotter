import { Navbar } from '../components/Navbar';

export const ProfileView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8">User Profile</h2>

        <!-- Profile Header -->
        <div class="card flex gap-4 items-center mb-8" style="padding: 3rem;">
           <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden; border: 4px solid var(--bg-body); box-shadow: var(--shadow-card);">
             <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80" style="width: 100%; height: 100%; object-fit: cover;">
           </div>
           <div class="flex-1 ml-4">
              <h3 style="font-size: 2rem; margin-bottom: 0.5rem;">Alex Thompson</h3>
              <p style="color: var(--text-body); margin-bottom: 1.5rem; max-width: 600px;"> Avid traveler, photographer, and coffee enthusiast. Exploring the world one city at a time.</p>
              <div class="flex gap-2">
                 <button class="btn btn-outline">Edit Profile</button>
                 <button class="btn btn-outline">Settings</button>
              </div>
           </div>
        </div>

        <!-- Preplanned Trips -->
        <section class="mb-8">
          <div class="flex justify-between items-center mb-4">
             <h3>Saved for Later</h3>
             <button class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.85rem;">View All</button>
          </div>
          <div class="grid grid-3">
            ${[1, 2, 3].map(i => `
              <div class="card clickable" style="justify-content: flex-end; min-height: 200px; background-image: linear-gradient(to top, rgba(0,0,0,0.6), transparent), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80'); background-size: cover;">
                 <h4 style="color: white; margin-bottom: 0.25rem;">Dream Trip ${i}</h4>
                 <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">5 Locations</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Previous Trips -->
        <section>
          <h3 class="mb-4">Travel History</h3>
          <div class="grid grid-3">
            ${[1, 2, 3].map(i => `
              <div class="card">
                 <div class="flex justify-between items-start mb-4">
                    <div style="width: 50px; height: 50px; background: var(--bg-body); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                       <i data-lucide="flag" style="color: var(--primary-color);"></i>
                    </div>
                    <span style="font-size: 0.85rem; color: var(--text-body);">2023</span>
                 </div>
                 <h4 class="mb-2">Past Adventure ${i}</h4>
                 <button class="btn btn-outline" style="width: 100%; margin-top: auto;">View Album</button>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </main>
  `;
};
