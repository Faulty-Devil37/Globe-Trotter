import { Navbar } from '../components/Navbar';

export const ItineraryView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <div class="flex justify-between items-center mb-8">
           <h2 style="margin: 0;">Eurotrip 2024</h2>
           <div class="flex gap-2">
              <button class="btn btn-outline"><i data-lucide="share-2"></i> Share</button>
              <button class="btn btn-outline"><i data-lucide="download"></i> PDF</button>
              <a href="#/itinerary-build" class="btn btn-primary"><i data-lucide="edit-3"></i> Edit Plan</a>
           </div>
        </div>

        <div class="grid" style="grid-template-columns: 300px 1fr; gap: 2rem;">
           
           <!-- Sidebar -->
           <div class="flex flex-column gap-4">
              <div class="card">
                 <h4 class="mb-4">Trip Overview</h4>
                 <div class="flex justify-between mb-2">
                    <span style="color: var(--text-body);">Duration</span>
                    <span style="font-weight: 600;">12 Days</span>
                 </div>
                 <div class="flex justify-between mb-2">
                    <span style="color: var(--text-body);">Budget</span>
                    <span style="font-weight: 600;">$4,500</span>
                 </div>
                 <div class="flex justify-between">
                    <span style="color: var(--text-body);">Travelers</span>
                    <span style="font-weight: 600;">2 Adults</span>
                 </div>
              </div>

              <div class="card">
                 <h4 class="mb-4">Quick Links</h4>
                 <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li><a href="#" style="color: var(--primary-color);"> flight_confirmation.pdf</a></li>
                    <li><a href="#" style="color: var(--primary-color);"> hotel_booking_paris.pdf</a></li>
                 </ul>
              </div>
           </div>

           <!-- Main Content -->
           <div class="flex flex-column gap-8">
              
              <!-- Day 1 -->
              <section>
                 <div class="flex items-center gap-4 mb-4">
                    <div style="background: var(--primary-color); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 700;">Day 1</div>
                    <h3 style="margin: 0;">Arrival in Paris</h3>
                 </div>
                 
                 <div class="card relative" style="overflow: visible;">
                    <div style="position: absolute; left: 2rem; top: 0; bottom: 0; width: 2px; background: #E2E8F0;"></div>
                    
                    <div class="flex flex-column gap-6" style="position: relative; padding-left: 1rem;">
                       
                       <!-- Item -->
                       <div class="flex gap-4 items-start">
                          <div style="width: 16px; height: 16px; background: var(--accent-color); border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px var(--accent-color); z-index: 1; margin-top: 6px;"></div>
                          <div class="flex-1 card" style="padding: 1.5rem; margin-top: -1rem; margin-left: 1rem;">
                             <div class="flex justify-between mb-2">
                                <h4 style="margin: 0;">Check-in at Hotel Plaza Athénée</h4>
                                <span style="font-size: 0.85rem; color: var(--text-body);">14:00</span>
                             </div>
                             <p style="color: var(--text-body); font-size: 0.95rem;">25 Avenue Montaigne, 75008 Paris</p>
                          </div>
                       </div>

                       <!-- Item -->
                       <div class="flex gap-4 items-start">
                          <div style="width: 16px; height: 16px; background: var(--primary-color); border-radius: 50%; border: 2px solid white; box-shadow: 0 0 0 2px var(--primary-color); z-index: 1; margin-top: 6px;"></div>
                          <div class="flex-1 card" style="padding: 1.5rem; margin-top: -1rem; margin-left: 1rem;">
                             <div class="flex justify-between mb-2">
                                <h4 style="margin: 0;">Seine River Cruise</h4>
                                <span style="font-size: 0.85rem; color: var(--text-body);">18:30</span>
                             </div>
                             <p style="color: var(--text-body); font-size: 0.95rem;">Sunset dinner cruise with Bateaux Parisiens.</p>
                             <div class="flex justify-between items-center mt-4 pt-4 border-top" style="border-top: 1px dashed var(--border-color);">
                                <span style="font-weight: 600; color: #EF4444;">-$120.00</span>
                                <span style="font-size: 0.85rem; color: var(--text-body);">Tickets Pre-booked</span>
                             </div>
                          </div>
                       </div>

                    </div>
                 </div>
              </section>

           </div>

        </div>
      </div>
    </main>
  `;
};
