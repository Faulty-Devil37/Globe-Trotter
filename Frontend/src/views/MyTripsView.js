import { Navbar } from '../components/Navbar';

export const MyTripsView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8" style="font-size: 2rem;">My Trips</h2>

        <!-- Action Row -->
        <div class="card flex gap-4 mb-8 items-center" style="padding: 1.5rem;">
           <div class="flex-1 flex items-center gap-2 px-4" style="background: var(--bg-body); padding: 0.75rem 1rem; border-radius: 99px;">
             <i data-lucide="search" style="color: var(--text-body);"></i>
             <input type="text" placeholder="Search my journeys..." style="border: none; background: transparent; padding: 0; box-shadow: none;">
           </div>
           <div class="flex gap-2">
              <button class="btn btn-outline" style="border-radius: 99px;">Pending</button>
              <button class="btn btn-outline" style="border-radius: 99px;">Planned</button>
           </div>
        </div>

        <!-- Ongoing -->
        <section>
           <h3 class="mb-4 text-primary">Ongoing Adventures</h3>
           <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: row; height: 300px; box-shadow: var(--shadow-hover);">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" style="width: 40%; object-fit: cover;">
              <div style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; width: 60%;">
                 <div style="text-transform: uppercase; letter-spacing: 1px; color: var(--accent-color); font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">Current Trip</div>
                 <h2 style="margin-bottom: 1rem; font-size: 2.25rem;">Eurotrip 2024</h2>
                 <p style="color: var(--text-body); margin-bottom: 2rem; max-width: 500px;">Exploring the classics of Western Europe. Currently in: <span style="color: var(--text-heading); font-weight: 600;">Paris, France</span></p>
                 <a href="#/itinerary-view" class="btn btn-primary" style="align-self: flex-start;">View Itinerary</a>
              </div>
           </div>
        </section>

        <!-- Upcoming -->
        <section style="margin-top: 4rem;">
           <h3 class="mb-4">Upcoming Trips</h3>
           <div class="grid grid-2">
              <div class="card" style="padding: 0; overflow: hidden; position: relative; height: 300px;">
                 <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.2;">
                 <div style="position: relative; z-index: 1; padding: 2.5rem; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                    <h3 style="font-size: 2rem;">Japan Spring</h3>
                    <p style="font-size: 1.1rem; color: var(--text-body);">April 2024</p>
                    <button class="btn btn-outline mt-4" style="align-self: flex-start; background: white;">View Details</button>
                 </div>
              </div>
           </div>
        </section>

        <!-- Completed -->
        <section style="margin-top: 4rem;">
           <h3 class="mb-4">Past Journeys</h3>
           <div class="grid grid-3">
              ${[1, 2].map(i => `
                 <div class="card clickable" style="opacity: 0.8;">
                    <h4 class="mb-2">Trip Archive ${i}</h4>
                    <p style="font-size: 0.9rem;">Dec 2023</p>
                 </div>
              `).join('')}
           </div>
        </section>
      </div>
    </main>
  `;
};
