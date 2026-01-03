import { Navbar } from '../components/Navbar';

export const CommunityView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-4">Community Feed</h2>
        
        <!-- Filter Row -->
        <div class="flex gap-4 mb-8">
           <button class="btn btn-primary" style="border-radius: 99px;">Trending</button>
           <button class="btn btn-outline" style="border-radius: 99px; background: white;">Newest</button>
           <button class="btn btn-outline" style="border-radius: 99px; background: white;">Top Rated</button>
        </div>

        <div class="grid grid-2">
           <!-- Post -->
           ${[1, 2, 3, 4].map(i => `
             <div class="card">
                <div class="flex items-center gap-4 mb-4">
                   <div style="width: 50px; height: 50px; background: #eee; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <i data-lucide="user" style="color: #999;"></i>
                   </div>
                   <div>
                      <h4 style="margin: 0; font-size: 1rem;">User Name ${i}</h4>
                      <span style="font-size: 0.85rem; color: var(--text-body);">2 hours ago • Paris, France</span>
                   </div>
                </div>
                <div style="height: 200px; background: #f0f0f0; border-radius: 8px; margin-bottom: 1rem; overflow: hidden;">
                   <img src="https://images.unsplash.com/photo-1499856871940-a09627c6d7db?w=600&q=80" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <p style="color: var(--text-heading); margin-bottom: 1rem;">Just finished an amazing 3-day trip to Paris! Here are my top recommendations for cafes near the Eiffel Tower. 🥐☕️</p>
                <div class="flex gap-4">
                   <button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;"><i data-lucide="heart" style="width: 16px;"></i> Like</button>
                   <button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;"><i data-lucide="message-square" style="width: 16px;"></i> Comment</button>
                </div>
             </div>
           `).join('')}
        
           <!-- Side Note -->
           <div class="card" style="height: fit-content; border: 1px solid var(--primary-color);">
              <h4 style="color: var(--primary-color); margin-bottom: 0.5rem;">Community Note</h4>
              <p style="font-size: 0.95rem; color: var(--text-body);">
                Share your own experiences to help fellow travelers! Earn badges for top-rated guides.
              </p>
              <button class="btn btn-primary mt-4" style="width: 100%;">Create Post</button>
           </div>
        </div>

      </div>
    </main>
  `;
};
