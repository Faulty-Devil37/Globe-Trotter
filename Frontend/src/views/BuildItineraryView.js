import { Navbar } from '../components/Navbar';

export const BuildItineraryView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        
        <!-- Header Row -->
        <div class="flex justify-between items-center mb-8">
           <div>
              <h2 class="mb-2" style="font-size: 2rem;">Itinerary Builder</h2>
              <p style="color: var(--text-body);">Craft your day-by-day travel plan</p>
           </div>
           <div class="flex gap-2">
              <button id="add-stop-btn" class="btn btn-accent">
                 <i data-lucide="plus"></i> Add Stop
              </button>
              <a href="#/itinerary-view" class="btn btn-primary">
                 Finish Plan <i data-lucide="check"></i>
              </a>
           </div>
        </div>

        <!-- Instructions -->
        <div class="card mb-8" style="background: #FFF7ED; border: 1px solid #FFEDD5;">
           <div class="flex gap-4">
              <i data-lucide="info" style="color: var(--accent-color); margin-top: 0.25rem;"></i>
              <div>
                 <h4 style="color: #9A3412; margin-bottom: 0.5rem; font-size: 1rem;">Builder Guide</h4>
                 <p style="color: #9A3412; margin: 0; font-size: 0.95rem;">Add stops to define your route. For each stop, you can set dates and add planned activities. Use arrows to reorder stops.</p>
              </div>
           </div>
        </div>

        <div id="stops-container" class="flex flex-column gap-4 mb-8">
           <!-- Initial Stop -->
           <div class="stop-item card animate-fade">
              
              <!-- Stop Header -->
              <div class="flex justify-between items-start mb-4 pb-4 border-bottom">
                 <div class="grid grid-3 flex-1 gap-4">
                    <div>
                       <label>Destination</label>
                       <div style="position: relative;">
                          <i data-lucide="map-pin" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); width: 18px; color: var(--text-body);"></i>
                          <input type="text" placeholder="City" style="padding-left: 2.5rem;">
                       </div>
                    </div>
                    <div>
                       <label>Arrival</label>
                       <input type="date">
                    </div>
                    <div>
                       <label>Departure</label>
                       <input type="date">
                    </div>
                 </div>
                 
                 <div class="flex items-center gap-2 ml-4 pt-4">
                    <button class="btn btn-outline move-up-btn" style="padding: 0.5rem;" title="Move Up"><i data-lucide="arrow-up" style="width: 18px;"></i></button>
                    <button class="btn btn-outline move-down-btn" style="padding: 0.5rem;" title="Move Down"><i data-lucide="arrow-down" style="width: 18px;"></i></button>
                    <button class="btn btn-outline remove-stop-btn" style="padding: 0.5rem; border-color: #EF4444; color: #EF4444;" title="Remove"><i data-lucide="trash-2" style="width: 18px;"></i></button>
                 </div>
              </div>

              <!-- Stop Details -->
              <div style="background: var(--bg-body); padding: 1.5rem; border-radius: 8px;">
                 <h4 class="mb-4 flex items-center gap-2" style="font-size: 1rem; color: var(--text-body);">
                    <i data-lucide="list"></i> Planned Activities
                 </h4>
                 
                 <div class="activity-list flex flex-column gap-2 mb-4">
                    <div class="flex gap-2 items-center">
                       <input type="text" placeholder="e.g. Visit Museum..." style="flex: 1; background: white;">
                       <button class="btn btn-primary" style="padding: 0.6rem;"><i data-lucide="plus" style="width: 18px;"></i></button>
                    </div>
                 </div>
              </div>
              
           </div>
        </div>

        <!-- Empty State / Add CTA -->
        <div id="add-stop-placeholder" class="card items-center justify-center text-center clickable" style="border: 2px dashed var(--border-color); background: transparent; padding: 4rem; cursor: pointer;">
           <div style="width: 60px; height: 60px; background: #E0F2FE; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
             <i data-lucide="plus" style="color: var(--primary-color); width: 32px; height: 32px;"></i>
           </div>
           <h3 style="color: var(--text-heading); margin-bottom: 0.5rem;">Add Destination</h3>
           <p style="color: var(--text-body);">Click to add the next stop in your journey</p>
        </div>

      </div>
    </main>
  `;
};

export const initBuildItinerary = () => {
  const addBtn = document.getElementById('add-stop-btn');
  const placeholder = document.getElementById('add-stop-placeholder');
  const container = document.getElementById('stops-container');

  const createStop = () => {
    const div = document.createElement('div');
    div.className = 'stop-item card animate-fade';
    div.innerHTML = `
      <div class="flex justify-between items-start mb-4 pb-4 border-bottom">
         <div class="grid grid-3 flex-1 gap-4">
            <div>
               <label>Destination</label>
               <div style="position: relative;">
                  <i data-lucide="map-pin" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); width: 18px; color: var(--text-body);"></i>
                  <input type="text" placeholder="City" style="padding-left: 2.5rem;">
               </div>
            </div>
            <div>
               <label>Arrival</label>
               <input type="date">
            </div>
            <div>
               <label>Departure</label>
               <input type="date">
            </div>
         </div>
         
         <div class="flex items-center gap-2 ml-4 pt-4">
            <button class="btn btn-outline move-up-btn" style="padding: 0.5rem;" title="Move Up"><i data-lucide="arrow-up" style="width: 18px;"></i></button>
            <button class="btn btn-outline move-down-btn" style="padding: 0.5rem;" title="Move Down"><i data-lucide="arrow-down" style="width: 18px;"></i></button>
            <button class="btn btn-outline remove-stop-btn" style="padding: 0.5rem; border-color: #EF4444; color: #EF4444;" title="Remove"><i data-lucide="trash-2" style="width: 18px;"></i></button>
         </div>
      </div>

      <div style="background: var(--bg-body); padding: 1.5rem; border-radius: 8px;">
         <h4 class="mb-4 flex items-center gap-2" style="font-size: 1rem; color: var(--text-body);">
            <i data-lucide="list"></i> Planned Activities
         </h4>
         
         <div class="activity-list flex flex-column gap-2 mb-4">
            <div class="flex gap-2 items-center">
               <input type="text" placeholder="Details..." style="flex: 1; background: white;">
               <button class="btn btn-primary" style="padding: 0.6rem;"><i data-lucide="plus" style="width: 18px;"></i></button>
            </div>
         </div>
      </div>
    `;
    container.appendChild(div);
    if (window.lucide) window.lucide.createIcons();

    // Re-attach listeners
    div.querySelector('.remove-stop-btn').onclick = () => div.remove();
    div.querySelector('.move-up-btn').onclick = () => { if (div.previousElementSibling) container.insertBefore(div, div.previousElementSibling); };
    div.querySelector('.move-down-btn').onclick = () => { if (div.nextElementSibling) container.insertBefore(div.nextElementSibling, div); };
  };

  if (addBtn) addBtn.onclick = createStop;
  if (placeholder) placeholder.onclick = createStop;

  // Init existing static item logic (if any)
  document.querySelectorAll('.stop-item').forEach(div => {
    div.querySelector('.remove-stop-btn').onclick = () => div.remove();
    // ... basic logic ...
  });
};
