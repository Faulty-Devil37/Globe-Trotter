import { Navbar } from '../components/Navbar';

export const ItineraryView = () => {
   const tripName = localStorage.getItem('current_trip_name') || "Your Adventure";
   return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <div class="flex justify-between items-center mb-8">
           <div>
              <h1 id="itinerary-title" class="text-gradient" style="margin-bottom: 0.5rem;">${tripName}</h1>
              <p style="color: var(--text-body);">Detailed daily plan breakdown</p>
           </div>
           
           <div class="card p-2 flex gap-2" style="border-radius: 99px; box-shadow: var(--shadow-sm);">
              <div class="flex-1" style="min-width: 300px;">
                <input type="text" placeholder="Search activities..." style="border: none; background: transparent; padding: 0.5rem 1rem; width: 100%;">
              </div>
              <button class="btn btn-outline" style="border-radius: 99px; padding: 0.5rem 1rem;">Filter</button>
              <button class="btn btn-primary" style="border-radius: 99px; padding: 0.5rem 1rem;">Export</button>
           </div>
        </div>

        <div id="itinerary-content">
            <p style="text-align: center; padding: 3rem; color: var(--text-body);">Gathering your travel logs...</p>
        </div>
      </div>
    </main>
  `;
};

export const initItinerary = async () => {
  const container = document.querySelector('#itinerary-content');
  const tripId = localStorage.getItem('current_trip_id');
  
  if (!container || !tripId) return;

  try {
    // Fetch real breakdown from your FastAPI logic
    const response = await fetch(`http://127.0.0.1:8000/trip-breakdown/${tripId}`);
    const data = await response.json();

    if (data.status === "error") {
        container.innerHTML = `<p style="color:red; text-align:center;">${data.message}</p>`;
        return;
    }

    // Build the dynamic rows
    container.innerHTML = `
        <div class="itinerary-grid mb-4 px-4 hidden-mobile" style="opacity: 0.6; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">
           <div class="text-center" style="font-weight: 700;">Day</div>
           <div class="text-center" style="font-weight: 700;">Activity Flow</div>
           <div class="text-center" style="font-weight: 700;">Estimated Cost</div>
        </div>
        
        ${data.days.map(day => `
            <div class="itinerary-grid mb-8 card p-6" style="align-items: stretch; position: relative; overflow: visible;">
               <div class="flex flex-column items-center">
                  <div class="flex items-center justify-center" style="width: 80px; height: 80px; background: var(--primary-gradient); color: white; border-radius: 16px; font-weight: 800; font-size: 1.2rem; box-shadow: var(--shadow-md);">
                    Day ${day.day_number}
                  </div>
                  <div style="height: 100%; border-left: 2px dashed var(--border-color); margin-top: 1rem;"></div>
               </div>
               
               <div class="flex flex-column gap-6">
                  ${day.activities.map((act, index) => `
                    <div class="flex flex-column items-center">
                       <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid var(--primary-color);">
                          <div>
                             <h4 style="margin: 0; font-size: 1.1rem;">${act.name}</h4>
                             <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">${act.city} • ${act.duration_hours} Hours</p>
                          </div>
                          <i data-lucide="map-pin" style="color: var(--primary-color);"></i>
                       </div>
                       ${index < day.activities.length - 1 ? '<i data-lucide="arrow-down" style="color: var(--text-body); margin-top: 0.5rem;"></i>' : ''}
                    </div>
                  `).join('')}
               </div>
               
               <div class="flex flex-column gap-6 pt-4">
                  ${day.activities.map(act => `
                    <div class="flex items-center justify-center h-full" style="height: 80px;">
                       <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">
                        $${act.cost.toFixed(2)}
                       </span>
                    </div>
                  `).join('')}
               </div>
            </div>
        `).join('')}
    `;

    // Refresh Lucide icons for the new dynamic elements
    if (window.lucide) window.lucide.createIcons();

  } catch (err) {
    console.error("Itinerary fetch failed:", err);
    container.innerHTML = `<p style="text-align:center; color:red;">The Backend fortress has fallen! Check your console.</p>`;
  }
};