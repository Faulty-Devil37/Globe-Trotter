import { Navbar } from '../components/Navbar';

export const SettingsView = () => {
  return `
    ${Navbar()}
    <main class="container">
      <div class="animate-fade" style="max-width: 800px; margin: 0 auto;">
        <h2 class="mb-8">Account Settings</h2>
        
        <div class="flex flex-column gap-6">
           <div class="card">
              <h4 class="mb-4">Preferences</h4>
              <div class="form-group mb-4">
                 <label>Language</label>
                 <select>
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                 </select>
              </div>
              <div class="form-group">
                 <label>Currency</label>
                 <select>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>JPY (¥)</option>
                 </select>
              </div>
           </div>

           <div class="card">
              <h4 class="mb-4">Privacy</h4>
              <div class="flex justify-between items-center mb-4">
                 <span>Make Profile Public</span>
                 <input type="checkbox" checked style="width: 20px; height: 20px;">
              </div>
              <div class="flex justify-between items-center">
                 <span>Allow Search Engines</span>
                 <input type="checkbox" style="width: 20px; height: 20px;">
              </div>
           </div>

           <div class="text-right">
              <button class="btn btn-primary">Save Changes</button>
           </div>
        </div>

      </div>
    </main>
  `;
};
