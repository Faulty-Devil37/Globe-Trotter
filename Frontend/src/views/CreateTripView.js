import { Navbar } from '../components/Navbar';

export const CreateTripView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade" style="max-width: 800px; margin: 0 auto;">
        
        <!-- Header -->
        <div class="text-center mb-8">
           <h2 style="font-size: 2.5rem; color: var(--text-heading);">Start a New Adventure</h2>
           <p style="color: var(--text-body); font-size: 1.1rem;">Where will your journey take you next?</p>
        </div>

        <!-- Form Card -->
        <div class="card" style="padding: 3rem; margin-bottom: 3rem;">
           <form id="create-trip-form" class="flex flex-column gap-4">
              
              <div class="form-group mb-4">
                 <label>Name your Trip</label>
                 <input type="text" placeholder="e.g. Summer Vacation 2024" required autofocus>
              </div>

              <div class="form-group mb-4">
                 <label>Select Destination</label>
                 <div style="position: relative;">
                    <i data-lucide="map-pin" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-body);"></i>
                    <input type="text" placeholder="Where to?" required style="padding-left: 3rem;">
                 </div>
              </div>

              <div class="grid grid-2 mb-8">
                 <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" required>
                 </div>
                 <div class="form-group">
                    <label>End Date</label>
                    <input type="date">
                 </div>
              </div>

              <div class="text-right">
                 <button type="submit" class="btn btn-primary" style="padding: 1rem 3rem; font-size: 1.1rem;">
                    Create & Build Itinerary <i data-lucide="arrow-right"></i>
                 </button>
              </div>

           </form>
        </div>

        <!-- Suggestions Section -->
        <section>
           <h3 class="mb-4">Trending Destinations</h3>
           <div class="grid grid-3">
              ${[1, 2, 3].map(i => `
                <div class="card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
                   <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&h=300&fit=crop" style="width: 100%; height: 100%; object-fit: cover;">
                   <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                      <span style="color: white; font-weight: 700; font-size: 1.1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">Suggestion ${i}</span>
                   </div>
                </div>
              `).join('')}
           </div>
        </section>

      </div>
    </main>
  `;
};

export const initCreateTrip = () => {
  const form = document.querySelector('#create-trip-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.hash = '#/itinerary-build';
    });
  }
};
