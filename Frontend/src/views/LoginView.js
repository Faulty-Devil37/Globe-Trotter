export const LoginView = () => {
  return `
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-body); padding: 2rem;">
      <div class="card animate-fade" style="width: 100%; max-width: 450px; padding: 3rem;">
        
        <div class="text-center mb-8">
          <div style="width: 80px; height: 80px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
             <i data-lucide="globe" style="width: 40px; height: 40px; color: white;"></i>
          </div>
          <h2 style="margin-bottom: 0.5rem; color: var(--text-heading);">Welcome Back</h2>
          <p style="color: var(--text-body);">Login to continue your journey</p>
        </div>

        <form id="login-form">
          <div class="form-group mb-4">
            <label>Username</label>
            <input type="text" placeholder="Enter username" required>
          </div>
          <div class="form-group mb-8">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem; border-radius: var(--radius-btn);">
            Log In
          </button>
        </form>
        
        <p class="text-center mt-4" style="font-size: 0.95rem;">
          Don't have an account? <a href="#/signup" style="color: var(--primary-color); font-weight: 600;">Sign Up</a>
        </p>
      </div>
    </div>
  `;
};

export const initLogin = () => {
  const form = document.querySelector('#login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('user', JSON.stringify({ name: 'Admin User', email: 'admin@globe.com' }));
      window.location.hash = '#/';
    });
  }
};
