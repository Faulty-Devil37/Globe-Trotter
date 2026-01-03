import { Navbar } from '../components/Navbar';

export const AdminView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8">Admin Dashboard</h2>

        <div class="grid grid-4 mb-8">
           <div class="card">
              <span style="color: var(--text-body); font-size: 0.9rem;">Total Users</span>
              <h3 style="font-size: 2rem; color: var(--text-heading);">12,450</h3>
              <span style="color: #10B981; font-size: 0.85rem;">+12% this month</span>
           </div>
           <div class="card">
              <span style="color: var(--text-body); font-size: 0.9rem;">Active Trips</span>
              <h3 style="font-size: 2rem; color: var(--text-heading);">854</h3>
              <span style="color: #10B981; font-size: 0.85rem;">+5% this week</span>
           </div>
           <div class="card">
              <span style="color: var(--text-body); font-size: 0.9rem;">Revenue</span>
              <h3 style="font-size: 2rem; color: var(--text-heading);">$45K</h3>
              <span style="color: var(--text-body); font-size: 0.85rem;">Stable</span>
           </div>
           <div class="card">
              <span style="color: var(--text-body); font-size: 0.9rem;">New Signups</span>
              <h3 style="font-size: 2rem; color: var(--text-heading);">120</h3>
              <span style="color: #10B981; font-size: 0.85rem;">Today</span>
           </div>
        </div>

        <div class="grid grid-2">
           <div class="card">
              <h4 class="mb-4">Popular Activites</h4>
              <div class="flex flex-column gap-4">
                 <div class="flex justify-between items-center">
                    <span>Eiffel Tower Tour</span>
                    <div style="background: #E0F2FE; color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.85rem;">High Demand</div>
                 </div>
                 <div class="flex justify-between items-center">
                    <span>Colosseum Skip-Line</span>
                    <div style="background: #E0F2FE; color: var(--primary-color); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.85rem;">Trending</div>
                 </div>
              </div>
           </div>

           <div class="card">
              <h4 class="mb-4">User Trends</h4>
              <div style="height: 200px; display: flex; items-align: flex-end; justify-content: space-between; padding-top: 2rem;">
                  ${[40, 60, 45, 80, 55, 90, 70].map(h => `
                     <div style="width: 10%; background: var(--primary-color); height: ${h}%; border-radius: 4px 4px 0 0; opacity: 0.8;"></div>
                  `).join('')}
              </div>
           </div>
        </div>
      </div>
    </main>
  `;
};
