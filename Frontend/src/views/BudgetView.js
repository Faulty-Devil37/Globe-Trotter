import { Navbar } from '../components/Navbar';

export const BudgetView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8">Budget & Costs</h2>
        
        <div id="budget-summary" class="grid grid-3 mb-8">
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Estimated Trip Cost</span>
              <h3 id="total-cost" style="font-size: 2.5rem; color: var(--primary-color); margin: 0.5rem 0;">$0</h3>
           </div>
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Activities Count</span>
              <h3 id="activity-count" style="font-size: 2.5rem; color: #EF4444; margin: 0.5rem 0;">0</h3>
           </div>
           <div class="card text-center">
              <span style="color: var(--text-body); font-size: 0.9rem;">Daily Average</span>
              <h3 id="daily-average" style="font-size: 2.5rem; color: #10B981; margin: 0.5rem 0;">$0</h3>
           </div>
        </div>

        <div class="grid grid-2">
           <div class="card">
              <h4 class="mb-4">Expense Breakdown</h4>
              <div id="budget-chart" style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--primary-color) 0% 100%); margin: 0 auto;"></div>
              <div class="flex justify-center gap-4 mt-6">
                 <div class="flex items-center gap-2"><div style="width: 12px; height: 12px; background: var(--primary-color); border-radius: 2px;"></div> Activities</div>
              </div>
           </div>
           
           <div class="card">
              <h4 class="mb-4">Itemized Costs</h4>
              <div id="transaction-list" class="flex flex-column gap-4">
                 <p style="color: var(--text-body);">Calculating expenses...</p>
              </div>
           </div>
        </div>
      </div>
    </main>
  `;
};

export const initBudget = async () => {
  const tripId = localStorage.getItem('current_trip_id');
  if (!tripId) return;

  try {
    const response = await fetch(`http://127.0.0.1:8000/trip-breakdown/${tripId}`);
    const data = await response.json();

    if (data.status !== "error") {
      // 1. Update Summary Cards
      document.querySelector('#total-cost').innerText = `$${data.total_trip_cost.toFixed(2)}`;
      
      const allActivities = data.days.flatMap(day => day.activities);
      document.querySelector('#activity-count').innerText = allActivities.length;
      
      const avg = data.days.length > 0 ? data.total_trip_cost / data.days.length : 0;
      document.querySelector('#daily-average').innerText = `$${avg.toFixed(2)}`;

      // 2. Update Transaction List
      const listContainer = document.querySelector('#transaction-list');
      listContainer.innerHTML = allActivities.map(act => `
        <div class="flex justify-between items-center pb-2 border-bottom">
           <div>
              <div style="font-weight: 600;">${act.name}</div>
              <div style="font-size: 0.85rem; color: var(--text-body);">${act.city}</div>
           </div>
           <div style="font-weight: 600;">$${act.cost.toFixed(2)}</div>
        </div>
      `).join('');
    }
  } catch (err) {
    console.error("Budget fetch failed:", err);
  }
};