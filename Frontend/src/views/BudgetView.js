import { Navbar } from '../components/Navbar';

export const BudgetView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8">Budget & Costs</h2>
        
        <!-- Summary Cards -->
        <div class="grid grid-3 mb-8">
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Total Budget</span>
              <h3 style="font-size: 2.5rem; color: var(--primary-color); margin: 0.5rem 0;">$5,000</h3>
           </div>
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Spent So Far</span>
              <h3 style="font-size: 2.5rem; color: #EF4444; margin: 0.5rem 0;">$1,250</h3>
           </div>
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Remaining</span>
              <h3 style="font-size: 2.5rem; color: #10B981; margin: 0.5rem 0;">$3,750</h3>
           </div>
        </div>

        <!-- Charts/Lists -->
        <div class="grid grid-2">
           <div class="card">
              <h4 class="mb-4">Expense Breakdown</h4>
              <!-- Mock Chart Circle -->
              <div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--primary-color) 0% 40%, var(--accent-color) 40% 70%, #10B981 70% 100%); margin: 0 auto;"></div>
              <div class="flex justify-center gap-4 mt-6">
                 <div class="flex items-center gap-2"><div style="width: 12px; height: 12px; background: var(--primary-color); border-radius: 2px;"></div> Flights</div>
                 <div class="flex items-center gap-2"><div style="width: 12px; height: 12px; background: var(--accent-color); border-radius: 2px;"></div> Hotels</div>
                 <div class="flex items-center gap-2"><div style="width: 12px; height: 12px; background: #10B981; border-radius: 2px;"></div> Food</div>
              </div>
           </div>
           
           <div class="card">
              <h4 class="mb-4">Recent Transactions</h4>
              <div class="flex flex-column gap-4">
                 <div class="flex justify-between items-center pb-2 border-bottom">
                    <div>
                       <div style="font-weight: 600;">Flight to Paris</div>
                       <div style="font-size: 0.85rem; color: var(--text-body);">United Airlines</div>
                    </div>
                    <div style="font-weight: 600;">$850.00</div>
                 </div>
                 <div class="flex justify-between items-center pb-2 border-bottom">
                    <div>
                       <div style="font-weight: 600;">Hotel Booking</div>
                       <div style="font-size: 0.85rem; color: var(--text-body);">Booking.com</div>
                    </div>
                    <div style="font-weight: 600;">$400.00</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>
  `;
};
