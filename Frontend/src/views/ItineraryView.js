import { Navbar } from '../components/Navbar';

export const ItineraryView = () => {
   return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <!-- Header & Controls -->
        <div class="flex justify-between items-center mb-8">
           <div>
              <h1 class="text-gradient" style="margin-bottom: 0.5rem;">Trip to Paris & Kyoto</h1>
              <p style="color: var(--text-body);">Detailed daily plan breakdown</p>
           </div>
           
           <div class="card p-2 flex gap-2" style="border-radius: 99px; box-shadow: var(--shadow-sm);">
              <div class="flex-1" style="min-width: 300px;">
                <input type="text" placeholder="Search activities..." style="border: none; background: transparent; padding: 0.5rem 1rem; width: 100%;">
              </div>
              <button class="btn btn-outline" style="border-radius: 99px; padding: 0.5rem 1rem;">Filter</button>
              <button class="btn btn-primary" style="border-radius: 99px; padding: 0.5rem 1rem;">Sort</button>
           </div>
        </div>

        <!-- Grid Header -->
        <div class="itinerary-grid mb-4 px-4 hidden-mobile" style="opacity: 0.6; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">
           <div class="text-center" style="font-weight: 700;">Day</div>
           <div class="text-center" style="font-weight: 700;">Activity Flow</div>
           <div class="text-center" style="font-weight: 700;">Estimated Cost</div>
        </div>

        <!-- Day 1 Row -->
        <div class="itinerary-grid mb-8 card p-6" style="align-items: stretch; position: relative; overflow: visible;">
           <!-- Day Label -->
           <div class="flex flex-column items-center">
              <div class="flex items-center justify-center" style="width: 80px; height: 80px; background: var(--primary-gradient); color: white; border-radius: 16px; font-weight: 800; font-size: 1.2rem; box-shadow: var(--shadow-md);">
                Day 1
              </div>
              <div style="height: 100%; border-left: 2px dashed var(--border-color); margin-top: 1rem;"></div>
           </div>
           
           <!-- Activities Flow -->
           <div class="flex flex-column gap-6">
              <!-- Item 1 -->
              <div class="flex flex-column items-center">
                 <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid var(--accent-color);">
                    <div>
                       <h4 style="margin: 0; font-size: 1.1rem;">Morning Hike to Viewpoint</h4>
                       <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Nature • 2.5 Hours</p>
                    </div>
                    <i data-lucide="mountain" style="color: var(--accent-color);"></i>
                 </div>
                 <i data-lucide="arrow-down" style="color: var(--text-body); margin-top: 0.5rem;"></i>
              </div>

              <!-- Item 2 -->
              <div class="flex flex-column items-center">
                 <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid var(--primary-color);">
                    <div>
                       <h4 style="margin: 0; font-size: 1.1rem;">Lunch at City Center</h4>
                       <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Food & Dining • 1.5 Hours</p>
                    </div>
                    <i data-lucide="utensils" style="color: var(--primary-color);"></i>
                 </div>
                 <i data-lucide="arrow-down" style="color: var(--text-body); margin-top: 0.5rem;"></i>
              </div>

              <!-- Item 3 -->
              <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid #10B981;">
                 <div>
                    <h4 style="margin: 0; font-size: 1.1rem;">National Museum Tour</h4>
                    <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Culture • 3 Hours</p>
                 </div>
                 <i data-lucide="landmark" style="color: #10B981;"></i>
              </div>
           </div>
           
           <!-- Expenses -->
           <div class="flex flex-column gap-6 pt-4">
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: var(--text-body); background: #F1F5F9; padding: 0.5rem 1rem; border-radius: 99px;">Free</span>
              </div>
              <div class="flex items-center justify-center p-4"></div> <!-- Spacer for arrow -->
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">$45.00</span>
              </div>
              <div class="flex items-center justify-center p-4"></div>
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">$20.00</span>
              </div>
           </div>
        </div>

        <!-- Day 2 Row -->
        <div class="itinerary-grid mb-8 card p-6" style="align-items: stretch; position: relative;">
           <!-- Day Label -->
           <div class="flex flex-column items-center">
              <div class="flex items-center justify-center" style="width: 80px; height: 80px; background: var(--primary-gradient); color: white; border-radius: 16px; font-weight: 800; font-size: 1.2rem; box-shadow: var(--shadow-md);">
                Day 2
              </div>
           </div>
           
           <!-- Activities Flow -->
           <div class="flex flex-column gap-6">
              <!-- Item 1 -->
              <div class="flex flex-column items-center">
                 <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid var(--primary-color);">
                    <div>
                       <h4 style="margin: 0; font-size: 1.1rem;">Travel to Kyoto</h4>
                       <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Transport • 2 Hours</p>
                    </div>
                    <i data-lucide="train" style="color: var(--primary-color);"></i>
                 </div>
                 <i data-lucide="arrow-down" style="color: var(--text-body); margin-top: 0.5rem;"></i>
              </div>

              <!-- Item 2 -->
              <div class="flex flex-column items-center">
                 <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid var(--accent-color);">
                    <div>
                       <h4 style="margin: 0; font-size: 1.1rem;">Check-in Ryokan</h4>
                       <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Accommodation</p>
                    </div>
                    <i data-lucide="bed" style="color: var(--accent-color);"></i>
                 </div>
                 <i data-lucide="arrow-down" style="color: var(--text-body); margin-top: 0.5rem;"></i>
              </div>

              <!-- Item 3 -->
              <div class="card w-full p-4 flex justify-between items-center" style="border-left: 4px solid #8B5CF6;">
                 <div>
                    <h4 style="margin: 0; font-size: 1.1rem;">Night Market & Food Tour</h4>
                    <p style="font-size: 0.9rem; color: var(--text-body); margin: 0;">Food • 3 Hours</p>
                 </div>
                 <i data-lucide="moon" style="color: #8B5CF6;"></i>
              </div>
           </div>
           
           <!-- Expenses -->
           <div class="flex flex-column gap-6 pt-4">
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">$120.00</span>
              </div>
              <div class="flex items-center justify-center p-4"></div>
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">$200.00</span>
              </div>
              <div class="flex items-center justify-center p-4"></div>
              <div class="flex items-center justify-center h-full" style="height: 80px;">
                 <span style="font-weight: 700; color: #EF4444; background: #FEF2F2; padding: 0.5rem 1rem; border-radius: 99px;">$50.00</span>
              </div>
           </div>
        </div>

      </div>
    </main>
  `;
};
