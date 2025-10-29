# AI Agent Instructions - Social Impact Platform

## Project Overview
This is a React-based social impact platform using Vite, Firebase, and TailwindCSS. The platform enables NGOs to create campaigns, collect donations, and manage volunteers.

## Key Technologies & Architecture
- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS for consistent styling
- **Backend**: Firebase (Authentication & Firestore)
- **Data Visualization**: Chart.js, Recharts
- **Maps**: Leaflet/React-Leaflet
- **Routing**: React Router DOM
- **Date Handling**: date-fns
- **Icons**: Lucide React

## Critical Workflows

### Development
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run ESLint
```

### Database Structure
Key collections in Firestore:
- `campaigns`: Campaign details with target amounts and volunteer requirements
- `donations`: Tracks donation transactions
- `volunteers`: Manages volunteer registrations

See `FIREBASE_SETUP.md` for detailed schema definitions.

## Project-Specific Conventions

### Firebase Integration
- All Firebase configuration lives in `src/firebase.js`
- Authentication uses Google Sign-in only
- Real-time updates are used for data synchronization
- Collection access requires authentication

### Component Patterns
- Use functional components with hooks
- Implement real-time data subscriptions for Firebase collections
- Handle loading and error states consistently

### Data Flow
1. User authentication via Firebase Auth
2. Real-time data sync with Firestore collections
3. Client-side state management with React hooks
4. Map/chart visualizations using Leaflet and Chart.js

## Integration Points
- Google Authentication (Firebase)
- Firestore Database
- Maps integration via Leaflet
- Font loading from Google Fonts

## Development Guidelines
- Use TailwindCSS classes for styling
- Implement proper Firebase security rules
- Handle real-time data subscriptions cleanup
- Follow Firebase best practices for data structuring

See `FIREBASE_SETUP.md` for troubleshooting and detailed setup instructions.