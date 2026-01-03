import { Navbar } from '../components/Navbar';

export const CommunityView = () => {
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

        <h2 class="text-center mb-8">Community tab</h2>

        <div class="flex flex-column gap-6 max-w-800 mx-auto">
           ${['Genuine', 'Vikram', 'Traveler', 'Explorer'].map((name, i) => `
             <div class="card flex gap-4 items-center" style="padding: 1.5rem;">
                <div class="flex flex-column items-center gap-2">
                   <div style="width: 60px; height: 60px; border-radius: 50%; border: 2px solid white; box-shadow: var(--shadow-sm); overflow: hidden;">
                      <img src="https://images.unsplash.com/photo-${1500000000000 + i}?w=100&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                   </div>
                   <span style="font-weight: 700; font-size: 0.9rem; background: var(--primary-color); color: white; padding: 0 0.5rem; border-radius: 4px;">${name}</span>
                </div>
                <div class="flex-1" style="height: 100px; border: 2px solid #E2E8F0; border-radius: 12px; background: #F8FAFC;"></div>
             </div>
           `).join('')}
        </div>
      </div>
    </main>
  `;
};
