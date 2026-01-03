import { Navbar } from '../components/Navbar';

export const AdminView = () => {
   return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
         <!-- Wireframe Header -->
         <div class="card mb-8">
           <div class="flex gap-4 items-center">
             <div class="flex-1">
               <input type="text" placeholder="Search bar..." style="border: none; background: #F8FAFC; padding: 0.5rem 1rem;">
             </div>
             <div class="flex gap-2">
                <button class="btn btn-outline" style="padding: 0.5rem 1rem;">Group by</button>
                <button class="btn btn-outline" style="padding: 0.5rem 1rem;">Filter</button>
                <button class="btn btn-outline" style="padding: 0.5rem 1rem;">Sort by...</button>
             </div>
           </div>
        </div>

        <!-- Tabs -->
        <div class="flex gap-4 mb-8 overflow-auto">
           <button class="btn btn-outline" style="border-radius: 99px; min-width: 120px;">Manage Users</button>
           <button class="btn btn-outline" style="border-radius: 99px; min-width: 120px;">Popular Cities</button>
           <button class="btn btn-outline" style="border-radius: 99px; min-width: 120px;">Popular Activities</button>
           <button class="btn btn-primary" style="border-radius: 99px; min-width: 150px;">User Trends and Analytics</button>
        </div>

        <!-- Main Dashboard Card -->
        <div class="card" style="min-height: 600px; background: #F1F5F9; padding: 2rem;">
           
           <div class="grid grid-2 gap-8 h-full">
              <!-- Top Left: Stats List -->
              <div class="flex flex-column gap-4 justify-center">
                 ${[1, 2, 3, 4].map(() => `
                    <div style="height: 20px; background: #CBD5E1; border-radius: 4px; width: 60%;"></div>
                 `).join('')}
              </div>

              <!-- Top Right: Pie Chart Mock -->
              <div class="flex justify-center items-center">
                 <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(#3B82F6 0% 75%, #22C55E 75% 100%);"></div>
              </div>

              <!-- Middle: Line Chart Mock -->
              <div style="grid-column: span 2; padding: 2rem 0;">
                 <div style="height: 200px; display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; border-left: 2px solid #94A3B8; border-bottom: 2px solid #94A3B8; padding: 1rem;">
                    <!-- Line Mock (SVG) -->
                    <svg viewBox="0 0 100 20" style="width: 100%; height: 100%; overflow: visible;">
                       <polyline points="0,20 20,15 40,10 60,12 80,5 100,8" fill="none" stroke="#EF4444" stroke-width="2" marker-mid="url(#dot)" />
                       <circle cx="0" cy="20" r="2" fill="#EF4444" />
                       <circle cx="20" cy="15" r="2" fill="#EF4444" />
                       <circle cx="40" cy="10" r="2" fill="#EF4444" />
                       <circle cx="60" cy="12" r="2" fill="#EF4444" />
                       <circle cx="80" cy="5" r="2" fill="#EF4444" />
                       <circle cx="100" cy="8" r="2" fill="#EF4444" />
                    </svg>
                 </div>
              </div>

              <!-- Bottom Left: Bar Chart -->
              <div class="flex items-end gap-2 justify-center" style="height: 150px;">
                 <div style="width: 30px; height: 60%; background: #FB923C; border-radius: 4px;"></div>
                 <div style="width: 30px; height: 80%; background: #FB923C; border-radius: 4px;"></div>
                 <div style="width: 30px; height: 100%; background: #FB923C; border-radius: 4px;"></div>
              </div>

              <!-- Bottom Right: Text Blocks -->
              <div class="flex flex-column gap-2 justify-center">
                 <div style="height: 40px; background: #64748B; border-radius: 4px; width: 100%; margin-bottom: 1rem;"></div>
                 <div style="height: 10px; background: #CBD5E1; border-radius: 4px; width: 100%;"></div>
                 <div style="height: 10px; background: #CBD5E1; border-radius: 4px; width: 100%;"></div>
                 <div style="height: 10px; background: #CBD5E1; border-radius: 4px; width: 80%;"></div>
              </div>

           </div>
        </div>

      </div>
    </main>
  `;
};
