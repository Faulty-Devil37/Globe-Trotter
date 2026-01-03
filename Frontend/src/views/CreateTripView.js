import { Navbar } from '../components/Navbar';

export const CreateTripView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade" style="max-width: 800px; margin: 0 auto;">
        
        <div class="text-center mb-8">
           <h2 style="font-size: 2.5rem; color: var(--text-heading);">Start a New Adventure</h2>
           <p style="color: var(--text-body); font-size: 1.1rem;">Where will your journey take you next?</p>
        </div>

        <div class="card" style="padding: 3rem; margin-bottom: 3rem;">
           <form id="create-trip-form" class="flex flex-column gap-4">
              
              <div class="form-group mb-4">
                 <label>Name your Trip</label>
                 <input type="text" id="trip-name" placeholder="e.g. Summer Vacation 2024" required autofocus>
              </div>

              <div class="form-group mb-4">
                 <label>Select Destination</label>
                 <div style="position: relative;">
                    <i data-lucide="map-pin" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-body);"></i>
                    <input type="text" id="destination" placeholder="Where to?" required style="padding-left: 3rem;">
                 </div>
              </div>

              <div class="grid grid-2 mb-8">
                 <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" id="start-date" required>
                 </div>
                 <div class="form-group">
                    <label>End Date</label>
                    <input type="date" id="end-date" required>
                 </div>
              </div>

              <div class="text-right">
                 <button type="submit" class="btn btn-primary" style="padding: 1rem 3rem; font-size: 1.1rem;">
                    Create & Build Itinerary <i data-lucide="arrow-right"></i>
                 </button>
              </div>

           </form>
        </div>

        <section>
           <h3 class="mb-4">Trending Destinations</h3>
           <div id="create-suggestions-container" class="grid grid-3">
              <div class="card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
                 <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;">
                 <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 700; font-size: 1.1rem;">Bali</span>
                 </div>
              </div>
              <div class="card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
                 <img src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;">
                 <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 700; font-size: 1.1rem;">Paris</span>
                 </div>
              </div>
              <div class="card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
                 <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=400" style="width: 100%; height: 100%; object-fit: cover;">
                 <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                    <span style="color: white; font-weight: 700; font-size: 1.1rem;">Venice</span>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </main>
  `;
};

export const initCreateTrip = () => {
  const form = document.querySelector('#create-trip-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user.id) {
        alert("Please login first, My King!");
        window.location.hash = '#/login';
        return;
      }

      const tripData = {
        user_id: user.id,
        trip_name: document.querySelector('#trip-name').value,
        start_date: document.querySelector('#start-date').value,
        end_date: document.querySelector('#end-date').value
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/trips/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tripData)
        });

        if (response.ok) {
          const result = await response.json();
          localStorage.setItem('current_trip_id', result.id);
          // Moving to itinerary view after successful creation
          window.location.hash = '#/itinerary-view'; 
        } else {
          alert("The database refused the journey! Check fields.");
        }
      } catch (err) {
        console.error("Connection failed:", err);
        alert("Backend is offline!");
      }
    });
  }
};