export const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  // Get current path to determine active state. Default to #/
  const currentPath = window.location.hash || '#/';

  // Helper to check active state
  const isActive = (path) => currentPath === path ? 'active' : '';

  return `
    <nav>
      <div class="container" style="height: 100%; display: flex; justify-content: space-between; align-items: center;">
        <!-- Logo -->
        <a href="#/" style="display: flex; align-items: center; gap: 0.75rem;">
          <div style="background: var(--primary-color); padding: 0.5rem; border-radius: 8px; display: flex;">
            <i data-lucide="globe" style="color: white; width: 24px; height: 24px;"></i>
          </div>
          <span style="font-size: 1.5rem; font-weight: 700; color: var(--text-heading);">Globe<span style="color: var(--primary-color);">Trotter</span></span>
        </a>

        <!-- Navigation Links -->
        <div class="nav-links flex items-center gap-2" style="margin-left: 3rem;">
          <a href="#/" class="nav-link ${isActive('#/') || isActive('')}">Dashboard</a>
          <a href="#/create-trip" class="nav-link ${isActive('#/create-trip')}">Plan Trip</a>
          <a href="#/itinerary-build" class="nav-link ${isActive('#/itinerary-build')}">Builder</a>
          <a href="#/itinerary-view" class="nav-link ${isActive('#/itinerary-view')}">Itinerary</a>
          <a href="#/community" class="nav-link ${isActive('#/community')}">Community</a>
          <a href="#/calendar" class="nav-link ${isActive('#/calendar')}">Calendar</a>
          <a href="#/my-trips" class="nav-link ${isActive('#/my-trips')}">Trips</a>
          <a href="#/profile" class="nav-link ${isActive('#/profile')}">Profile</a>
        </div>

        <!-- Auth Actions -->
        <div>
          ${user ? `
            <div class="flex items-center gap-4">
              <a href="#/profile" class="flex items-center gap-2" style="padding: 0.5rem 1rem; background: var(--bg-body); border-radius: 99px; border: 1px solid var(--border-color);">
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--primary-color); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 600;">
                  ${user.name[0]}
                </div>
                <span style="font-weight: 600; color: var(--text-heading); font-size: 0.9rem;">${user.name.split(' ')[0]}</span>
              </a>
              <button id="logout-btn" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.85rem; border-color: #EF4444; color: #EF4444;">
                Log Out
              </button>
            </div>
          ` : `
            <a href="#/login" class="btn btn-primary">Log In</a>
          `}
        </div>
      </div>
    </nav>
    <style>
      @media (max-width: 900px) {
        .nav-links { display: none; } /* Simplified mobile nav for now */
      }
    </style>
  `;
};

export const initNavbar = () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.removeItem('user');
      window.location.hash = '#/login';
      window.location.reload();
    };
  }
};
