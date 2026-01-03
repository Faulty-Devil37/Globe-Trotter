import './style.css';
import { LoginView, initLogin } from './views/LoginView';
import { RegistrationView, initRegistration } from './views/SignupView';
import { DashboardView, initDashboard } from './views/DashboardView';
import { CreateTripView, initCreateTrip } from './views/CreateTripView';
import { BuildItineraryView, initBuildItinerary } from './views/BuildItineraryView';
import { MyTripsView } from './views/MyTripsView';
import { ItineraryView } from './views/ItineraryView';
import { ProfileView } from './views/ProfileView';
import { CitySearchView, ActivitySearchView } from './views/SearchView';
import { CommunityView } from './views/CommunityView';
import { CalendarView } from './views/CalendarView';
import { AdminView } from './views/AdminView';
import { SharedItineraryView } from './views/SharedItineraryView';
import { SettingsView } from './views/SettingsView';
import { initNavbar } from './components/Navbar';

const routes = {
  '/': DashboardView,
  '/login': LoginView,
  '/signup': RegistrationView,
  '/create-trip': CreateTripView,
  '/itinerary-build': BuildItineraryView,
  '/my-trips': MyTripsView,
  '/itinerary-view': ItineraryView,
  '/profile': ProfileView,
  '/search-city': CitySearchView,
  '/search-activity': ActivitySearchView,
  '/community': CommunityView,
  '/calendar': CalendarView,
  '/admin': AdminView,
  '/shared': SharedItineraryView,
  '/settings': SettingsView
};

const initMap = {
  '/': initDashboard,
  '/login': initLogin,
  '/signup': initRegistration,
  '/create-trip': initCreateTrip,
  '/itinerary-build': initBuildItinerary
};

const render = () => {
  const hash = window.location.hash.slice(1) || '/';
  let route = hash.split('?')[0];

  if (route === '/search') route = '/search-city';

  const view = routes[route] || DashboardView;
  const app = document.querySelector('#app');

  // Guard for rendering
  if (!app) return;

  app.innerHTML = view();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Page-specific initialization
  if (initMap[route]) {
    initMap[route]();
  }

  // Global components initialization
  initNavbar();

  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', render);
window.addEventListener('load', render);

// Auth check and redirection
const checkAuth = () => {
  const user = localStorage.getItem('user');
  const hash = window.location.hash.slice(1);
  const publicRoutes = ['/login', '/signup'];

  if (!user && !publicRoutes.includes(hash)) {
    // If you want to force login:
    // window.location.hash = '#/login';
  }
};

window.addEventListener('load', checkAuth);
window.addEventListener('hashchange', checkAuth);
