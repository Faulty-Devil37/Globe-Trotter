export const RegistrationView = () => {
  return `
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-body); padding: 2rem;">
      <div class="card animate-fade" style="width: 100%; max-width: 900px; padding: 3rem; display: flex; gap: 4rem;">
        
        <!-- Illustration Side -->
        <div style="flex: 1; background: var(--primary-color); border-radius: 12px; padding: 2rem; display: flex; flex-direction: column; justify-content: space-between; color: white;">
           <div>
              <h2 style="color: white; font-size: 2rem; margin-bottom: 1rem;">Join the Adventure</h2>
              <p style="opacity: 0.9;">Create your account to start planning your dream trips.</p>
           </div>
           <div style="background: rgba(255,255,255,0.1); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="globe" style="width: 40px; height: 40px;"></i>
           </div>
        </div>

        <!-- Form Side -->
        <div style="flex: 1.5;">
           <h3 class="mb-8" style="font-size: 1.75rem;">Create Account</h3>
           
           <form id="signup-form" class="flex flex-column gap-4">
              <div class="grid grid-2">
                 <div class="form-group">
                    <label>First Name</label>
                    <input type="text" required>
                 </div>
                 <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" required>
                 </div>
              </div>

              <div class="form-group">
                 <label>Email Address</label>
                 <input type="email" required>
              </div>

              <div class="form-group">
                 <label>Phone</label>
                 <input type="tel">
              </div>

              <div class="grid grid-2">
                 <div class="form-group">
                    <label>City</label>
                    <input type="text">
                 </div>
                 <div class="form-group">
                     <label>Country</label>
                     <input type="text">
                 </div>
              </div>
              
              <div class="mt-4">
                 <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem;">Register</button>
              </div>
           </form>
           
           <p class="mt-4 text-center">
              Already a member? <a href="#/login" style="color: var(--primary-color); font-weight: 600;">Log In</a>
           </p>
        </div>

      </div>
    </div>
  `;
};

export const initRegistration = () => {
  const form = document.querySelector('#signup-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('user', JSON.stringify({ name: 'User', email: 'user@globe.com' }));
      window.location.hash = '#/';
    });
  }
};
