import { Navbar } from '../components/Navbar';

export const MyTripsView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade">
        <h2 class="mb-8" style="font-size: 2rem;">My Trips</h2>

        <div class="card flex gap-4 mb-8 items-center" style="padding: 1.5rem;">
           <div class="flex-1 flex items-center gap-2 px-4" style="background: var(--bg-body); padding: 0.75rem 1rem; border-radius: 99px;">
             <i data-lucide="search" style="color: var(--text-body);"></i>
             <input type="text" id="trip-search" placeholder="Search my journeys..." style="border: none; background: transparent; padding: 0; box-shadow: none; width: 100%;">
           </div>
           <div class="flex gap-2">
              <button class="btn btn-outline" style="border-radius: 99px;">All</button>
              <button class="btn btn-outline" style="border-radius: 99px;">Planned</button>
           </div>
        </div>

        <div id="trips-list-container">
            <p style="text-align: center; padding: 3rem; color: var(--text-body);">Consulting the royal maps...</p>
        </div>
      </div>
    </main>
  `;
};

export const initMyTrips = async () => {
  const container = document.querySelector('#trips-list-container');
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (!container || !user) return;

  try {
    // Fetch all trips for this specific King (User)
    const response = await fetch(`http://127.0.0.1:8000/users/${user.id}/trips`);
    const trips = await response.json();

    if (trips.length === 0) {
      container.innerHTML = `
        <div class="card text-center" style="padding: 4rem;">
            <h3>No adventures yet?</h3>
            <p style="margin-bottom: 2rem;">The world is vast and waiting for your command.</p>
            <a href="#/create-trip" class="btn btn-primary">Start Your First Trip</a>
        </div>`;
      return;
    }

    // Sort trips (Most recent first)
    const sortedTrips = trips.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    const currentTrip = sortedTrips[0];
    const upcomingTrips = sortedTrips.slice(1);

    container.innerHTML = `
        <section>
           <h3 class="mb-4 text-primary">Ongoing Adventures</h3>
           <div class="card" style="padding: 0; overflow: hidden; display: flex; flex-direction: row; height: 300px; box-shadow: var(--shadow-hover);">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" style="width: 40%; object-fit: cover;">
              <div style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center; width: 60%;">
                 <div style="text-transform: uppercase; letter-spacing: 1px; color: var(--accent-color); font-weight: 700; font-size: 0.85rem; margin-bottom: 0.5rem;">Current Trip</div>
                 <h2 style="margin-bottom: 1rem; font-size: 2.25rem;">${currentTrip.trip_name}</h2>
                 <p style="color: var(--text-body); margin-bottom: 2rem; max-width: 500px;">
                    Starts on ${new Date(currentTrip.start_date).toLocaleDateString()}
                 </p>
                 <button class="btn btn-primary view-trip-btn" data-id="${currentTrip.id}" data-name="${currentTrip.trip_name}" style="align-self: flex-start;">View Itinerary</button>
              </div>
           </div>
        </section>

        <section style="margin-top: 4rem;">
           <h3 class="mb-4">All Journeys</h3>
           <div class="grid grid-2">
              ${upcomingTrips.map(trip => `
                <div class="card" style="padding: 0; overflow: hidden; position: relative; height: 250px;">
                   <div style="padding: 2.5rem; height: 100%; display: flex; flex-direction: column; justify-content: center;">
                      <h3 style="font-size: 1.75rem;">${trip.trip_name}</h3>
                      <p style="font-size: 1rem; color: var(--text-body);">${new Date(trip.start_date).toLocaleDateString()}</p>
                      <button class="btn btn-outline mt-4 view-trip-btn" data-id="${trip.id}" data-name="${trip.trip_name}" style="align-self: flex-start;">View Details</button>
                   </div>
                </div>
              `).join('')}
           </div>
        </section>
    `;

    // Add click events to buttons to set the current trip in context
    document.querySelectorAll('.view-trip-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            localStorage.setItem('current_trip_id', e.target.dataset.id);
            localStorage.setItem('current_trip_name', e.target.dataset.name);
            window.location.hash = '#/itinerary-view';
        });
    });

  } catch (err) {
    console.error("Failed to fetch trips:", err);
    container.innerHTML = `<p style="color:red; text-align:center;">The database archives are locked. Is the Backend running?</p>`;
  }
};