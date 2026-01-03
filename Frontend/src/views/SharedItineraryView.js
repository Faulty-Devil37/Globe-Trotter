import { Navbar } from '../components/Navbar';

export const SharedItineraryView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade" style="max-width: 900px; margin: 0 auto;">
        
        <div class="text-center mb-8">
           <span style="background: #E0F2FE; color: var(--primary-color); padding: 0.5rem 1rem; border-radius: 99px; font-weight: 600; font-size: 0.9rem;">Shared Trip</span>
           <h2 class="mt-4 mb-2">JAPAN ADVENTURE 2024</h2>
           <p style="color: var(--text-body);">Created by <strong>Alex Thompson</strong> • 14 Days</p>
        </div>

        <div class="card mb-8" style="padding: 0; overflow: hidden;">
           <img src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1200&q=80" style="width: 100%; height: 300px; object-fit: cover;">
        </div>

        <div class="grid grid-3 mb-8">
           <div class="card text-center">
              <i data-lucide="map-pin" style="color: var(--accent-color); margin: 0 auto 0.5rem auto;"></i>
              <h4>3 Cities</h4>
              <p style="font-size: 0.9rem; margin: 0;">Tokyo, Kyoto, Osaka</p>
           </div>
           <div class="card text-center">
              <i data-lucide="calendar" style="color: var(--accent-color); margin: 0 auto 0.5rem auto;"></i>
              <h4>April 2024</h4>
              <p style="font-size: 0.9rem; margin: 0;">Spring Season</p>
           </div>
           <div class="card text-center">
              <i data-lucide="users" style="color: var(--accent-color); margin: 0 auto 0.5rem auto;"></i>
              <h4>Solo Trip</h4>
              <p style="font-size: 0.9rem; margin: 0;">Budget Traveler</p>
           </div>
        </div>

        <div class="card text-center">
           <h3 class="mb-4">Like this itinerary?</h3>
           <div class="flex justify-center gap-4">
              <button class="btn btn-primary">Clone to My Account</button>
              <button class="btn btn-outline">Save for Inspiration</button>
           </div>
        </div>
      </div>
    </main>
  `;
};
