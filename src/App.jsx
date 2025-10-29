import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { mockCampaigns } from './mockData';
import { Login } from './components/Login';
import { DonationForm } from './components/DonationForm';
import { CampaignDetails } from './components/CampaignDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-2xl font-bold text-primary-600">Social Impact Platform</Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/campaigns" className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Campaigns
                  </Link>
                  <Link to="/volunteer" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Volunteer
                  </Link>
                  <Link to="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    About
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <Link to="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Sign in
                </Link>
                <Link to="/start-campaign" className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600">
                  Start a Campaign
                </Link>
              </div>
            </div>
          </nav>
        </header>

      <main>
        <Routes>
          <Route path="/" element={
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <div className="px-4 py-6 sm:px-0 mb-8">
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg shadow-xl p-8 text-white">
                  <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
                  <p className="text-lg mb-6">Join our community of changemakers and help create positive impact around the world.</p>
                  <Link to="/campaigns" className="inline-block bg-white text-primary-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Campaigns Grid */}
              <div className="px-4 sm:px-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Campaigns</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {mockCampaigns.map(campaign => (
                    <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img 
                        src={campaign.image} 
                        alt={campaign.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                        <p className="text-gray-600 mb-4">{campaign.description}</p>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{campaign.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-500 h-2 rounded-full" 
                              style={{ width: `${campaign.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">{campaign.location}</span>
                          <Link 
                            to={`/campaigns/${campaign.id}`} 
                            className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-600 transition-colors"
                          >
                            Support
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/campaigns/:id" element={
            <CampaignDetails campaign={mockCampaigns[0]} />
          } />
          <Route path="/donate/:campaignId" element={<DonationForm />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App