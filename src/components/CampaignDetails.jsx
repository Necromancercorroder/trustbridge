export function CampaignDetails({ campaign }) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
                <p className="mt-2 text-gray-600">{campaign.location}</p>
              </div>
              <div className="bg-primary-50 rounded-md px-4 py-2">
                <p className="text-sm text-primary-700">
                  {campaign.category}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>${campaign.currentAmount} of ${campaign.targetAmount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary-500 h-2.5 rounded-full" 
                  style={{ width: `${campaign.progress}%` }}
                ></div>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>{campaign.progress}% Complete</span>
                <span>{campaign.currentVolunteers} Volunteers</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About this campaign</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {campaign.description}
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors">
                Donate Now
              </button>
              <button className="flex-1 bg-white text-primary-600 px-6 py-3 rounded-md font-medium border-2 border-primary-500 hover:bg-primary-50 transition-colors">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}