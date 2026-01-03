import { Navbar } from '../components/Navbar';

export const CitySearchView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4">Explore Destinations</h2>
        
        <!-- Search Controls -->
        <div class="card mb-8">
           <div class="flex gap-4">
              <div class="flex-1">
                 <label>Search Cities</label>
                 <div style="position: relative;">
                    <i data-lucide="search" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-body);"></i>
                    <input type="text" placeholder="London, Tokyo, New York..." style="padding-left: 3rem;">
                 </div>
              </div>
              <div style="width: 200px;">
                 <label>Region</label>
                 <select>
                    <option>All Regions</option>
                    <option>Europe</option>
                    <option>Asia</option>
                 </select>
              </div>
              <div style="align-self: flex-end;">
                 <button class="btn btn-primary" style="height: 46px;">Search</button>
              </div>
           </div>
        </div>

        <!-- Results -->
        <div class="grid grid-4">
           ${[1, 2, 3, 4, 5, 6, 7, 8].map(i => `
              <div class="card clickable" style="padding: 0; overflow: hidden;">
                 <div style="height: 200px; background: #eee;">
                    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                 </div>
                 <div style="padding: 1.5rem;">
                    <div class="flex justify-between items-center mb-2">
                       <h4 style="margin: 0;">City Name ${i}</h4>
                       <span style="font-size: 0.85rem; padding: 0.25rem 0.5rem; background: var(--bg-body); border-radius: 4px;">4.8 ★</span>
                    </div>
                    <p style="color: var(--text-body); font-size: 0.9rem; margin-bottom: 1rem;">Popular for culture and food.</p>
                    <button class="btn btn-outline" style="width: 100%; font-size: 0.9rem;">View Details</button>
                 </div>
              </div>
           `).join('')}
        </div>
      </div>
    </main>
  `;
};

export const ActivitySearchView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4">Find Activities</h2>
        
        <!-- Search Controls -->
        <div class="card mb-8">
           <div class="flex gap-4">
              <div class="flex-1">
                 <label>Search Activities</label>
                 <div style="position: relative;">
                    <i data-lucide="compass" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-body);"></i>
                    <input type="text" placeholder="Hiking, Museums, Food Tours..." style="padding-left: 3rem;">
                 </div>
              </div>
              <div style="width: 200px;">
                 <label>Type</label>
                 <select>
                    <option>All Types</option>
                    <option>Outdoor</option>
                    <option>Cultural</option>
                 </select>
              </div>
              <div style="align-self: flex-end;">
                 <button class="btn btn-primary" style="height: 46px;">Search</button>
              </div>
           </div>
        </div>

        <!-- Results -->
        <div class="grid grid-3">
           ${[1, 2, 3, 4, 5, 6].map(i => `
              <div class="card" style="flex-direction: row; padding: 0; overflow: hidden; align-items: stretch;">
                 <div style="width: 40%; background: #eee;">
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                 </div>
                 <div style="width: 60%; padding: 1.5rem; display: flex; flex-direction: column; justify-content: center;">
                    <h4 style="margin-bottom: 0.5rem;">Activity ${i}</h4>
                    <p style="font-size: 0.9rem; color: var(--text-body); margin-bottom: 1rem;">Duration: 2 hours</p>
                    <button class="btn btn-outline" style="align-self: flex-start; font-size: 0.85rem;">Add to Plan</button>
                 </div>
              </div>
           `).join('')}
        </div>
      </div>
    </main>
  `;
};
