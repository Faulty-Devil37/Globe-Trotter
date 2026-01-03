import { Navbar } from '../components/Navbar';

export const CalendarView = () => {
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

        <h2 class="text-center mb-8">Calendar View</h2>

        <div class="card p-0 overflow-hidden" style="max-width: 900px; margin: 0 auto;">
           <!-- Month Header -->
           <div class="flex justify-between items-center p-4" style="background: #F8FAFC; border-bottom: 1px solid var(--border-color);">
              <button class="btn btn-outline p-2"><i data-lucide="arrow-left"></i></button>
              <h3 class="m-0">January 2024</h3>
              <button class="btn btn-outline p-2"><i data-lucide="arrow-right"></i></button>
           </div>

           <!-- Grid -->
           <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center;">
              <!-- Days Header -->
              ${['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(d => `
                 <div style="padding: 1rem; font-weight: 700; color: var(--text-body); font-size: 0.85rem;">${d}</div>
              `).join('')}

              <!-- Calendar Days (Mock Jan 2024 Start) -->
              ${Array(31).fill(0).map((_, i) => {
      const day = i + 1;
      // Mock Events
      let eventHtml = '';
      let cellBg = '';

      // Paris Trip: 5-11
      if (day >= 5 && day <= 11) {
         cellBg = 'background: #F1F5F9;';
         if (day === 5) eventHtml = '<div style="font-size: 0.7rem; font-weight: 700; margin-top: 4px;">PARIS TRIP</div>';
         if (day === 8) eventHtml = '<div style="font-size: 0.7rem; color: var(--text-body);">PARIS 10</div>';
      }

      // Japan Adventure: 16-20
      if (day >= 16 && day <= 20) {
         cellBg = 'background: #E2E8F0;';
         if (day === 16) eventHtml = '<div style="font-size: 0.7rem; font-weight: 700; margin-top: 4px;">JAPAN ADVENTURE</div>';
      }

      // NYC Getaway: 14-16 & 23-28 (Overlapping visually in wireframe but split here for grid logic)
      if (day >= 23 && day <= 28) {
         if (day === 23) eventHtml = '<div style="font-size: 0.7rem; font-weight: 700; margin-top: 4px;">NYC GETAWAY</div>';
      }

      return `
                     <div style="height: 100px; border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); padding: 0.5rem; text-align: left; position: relative; ${cellBg}">
                        <span style="font-size: 0.9rem; font-weight: 600;">${day}</span>
                        ${eventHtml}
                     </div>
                  `;
   }).join('')}
           </div>
        </div>
      </div>
    </main>
  `;
};
