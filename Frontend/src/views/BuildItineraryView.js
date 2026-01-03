import { Navbar } from '../components/Navbar';

export const BuildItineraryView = () => {
   return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4 text-gradient">Build Your Itinerary</h2>
        <p class="mb-8" style="color: var(--text-body);">Plan your trip in sections. Add travel details, hotels, or activities.</p>

        <!-- Sections Container -->
        <div id="sections-container" class="flex flex-column gap-6 mb-8">
          <!-- Section 1 (Static Mock for now, JS will duplicate this) -->
          <div class="card section-item">
            <h4 class="mb-4" style="color: var(--text-heading);">Section 1:</h4>
            
            <div class="form-group mb-4">
               <label>Description / Activity</label>
               <textarea rows="3" placeholder="All the necessary information about this section (e.g. Travel, Hotel, Activity)..."></textarea>
            </div>

            <div class="grid grid-2">
               <div class="form-group">
                  <label>Date Range</label>
                  <input type="text" placeholder="xxx to yyy">
               </div>
               <div class="form-group">
                  <label>Budget of this section</label>
                  <input type="text" placeholder="$0.00">
               </div>
            </div>
          </div>

          <div class="card section-item">
            <h4 class="mb-4" style="color: var(--text-heading);">Section 2:</h4>
            
            <div class="form-group mb-4">
               <label>Description / Activity</label>
               <textarea rows="3" placeholder="All the necessary information about this section (e.g. Travel, Hotel, Activity)..."></textarea>
            </div>

            <div class="grid grid-2">
               <div class="form-group">
                  <label>Date Range</label>
                  <input type="text" placeholder="xxx to yyy">
               </div>
               <div class="form-group">
                  <label>Budget of this section</label>
                  <input type="text" placeholder="$0.00">
               </div>
            </div>
          </div>
        </div>

        <!-- Add Button -->
        <button id="add-section-btn" class="btn btn-outline w-full" style="border-style: dashed; padding: 1.5rem; font-size: 1.1rem;">
           <i data-lucide="plus"></i> Add another Section
        </button>

      </div>
    </main>
  `;
};

export const initBuildItinerary = () => {
   const container = document.getElementById('sections-container');
   const addBtn = document.getElementById('add-section-btn');

   if (addBtn && container) {
      addBtn.addEventListener('click', () => {
         const count = container.querySelectorAll('.section-item').length + 1;
         const div = document.createElement('div');
         div.className = 'card section-item animate-fade';
         div.innerHTML = `
        <h4 class="mb-4" style="color: var(--text-heading);">Section ${count}:</h4>
        <div class="form-group mb-4">
             <label>Description / Activity</label>
             <textarea rows="3" placeholder="All the necessary information about this section..."></textarea>
        </div>
        <div class="grid grid-2">
           <div class="form-group">
              <label>Date Range</label>
              <input type="text" placeholder="xxx to yyy">
           </div>
           <div class="form-group">
              <label>Budget of this section</label>
              <input type="text" placeholder="$0.00">
           </div>
        </div>
      `;
         container.appendChild(div);
      });
   }
};
