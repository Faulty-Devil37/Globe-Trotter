import { Navbar } from '../components/Navbar';

export const CalendarView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4">Trip Timeline</h2>
        
        <div class="card mb-8">
           <div class="flex justify-between items-center mb-6">
              <h3 style="margin: 0;">January 2024</h3>
              <div class="flex gap-2">
                 <button class="btn btn-outline" style="padding: 0.5rem;"><i data-lucide="chevron-left"></i></button>
                 <button class="btn btn-outline" style="padding: 0.5rem;"><i data-lucide="chevron-right"></i></button>
              </div>
           </div>

           <!-- Calendar Grid Mockup (7 cols) -->
           <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1rem; text-align: center;">
              ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => `<div style="font-weight: 600; color: var(--text-body); margin-bottom: 1rem;">${d}</div>`).join('')}
              
              ${Array(31).fill(0).map((_, i) => {
    const day = i + 1;
    // Simulating a trip span
    let tripHighlight = '';
    if (day >= 10 && day <= 15) tripHighlight = 'background: rgba(0, 86, 210, 0.1); color: var(--primary-color); border-radius: 4px;';

    return `
                  <div style="min-height: 100px; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.5rem; text-align: left; ${tripHighlight}">
                     <span style="font-weight: 600; font-size: 0.9rem;">${day}</span>
                     ${day === 10 ? '<div style="font-size: 0.75rem; background: var(--primary-color); color: white; padding: 2px 6px; border-radius: 4px; margin-top: 4px;">Paris Trip</div>' : ''}
                  </div>
                  `;
  }).join('')}
           </div>
        </div>
      </div>
    </main>
  `;
};
