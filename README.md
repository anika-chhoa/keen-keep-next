# KeenKeeper — Keep Your Friendships Alive
A modern and responsive web application designed to help you maintain meaningful connections with your friends by tracking interactions, setting goals, and visualizing your communication patterns.

## Project Overview
KeenKeeper helps users to:
- Track interactions with friends (Call, Text, Video)
- Maintain relationship goals
- View interaction history in a timeline
- Analyze communication patterns through visual charts

## Key Features
**Friend Management**
- View all friends in a responsive grid layout
- Detailed profile page with bio, tags, and contact info
  
**Quick Check-In System**
- Log Call, Text, or Video interactions instantly
- Real-time timeline updates with toast notifications

**Timeline Page**
- View all interaction history
- Search by friend name
- Sort by Newest / Oldest
- Filter by interaction type (Call, Text, Video)

**Friendship Analytics**
- Interactive Pie Chart using Recharts
- Visual breakdown of communication types

### Additional Features
- Search timeline entries by friend name
- Sort timeline by Newest / Oldest (millisecond precision)
- Smart data handling using ISO timestamps for accurate sorting
- No Data UI states for better user experience
-Fully responsive for all devices

## Technologies Used
1. Next.js (Frontend framework)
2. App Router (Routing and navigation)
3. Tailwind CSS (Styling and responsiveness)
4. Recharts (Data visualization)
5. React Toastify (Notifications)

## Project Structure
**Components**  
Reusable UI elements like Navbar, Footer, and Friend Cards.
**Pages**  
Home, Friend Details, Timeline, and Analytics (Stats).
**Data**  
Centralized JSON file for realistic friend profiles and interaction history.

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/anika-chhoa/keen-keep-next.git

# Navigate to project directory
cd keenkeeper

# Install dependencies
npm install

# Run development server
npm run dev
```

## **Deployment**

Deployed on: Vercel 
Live Link: https://keen-keep-next.vercel.app/
GitHub: https://github.com/anika-chhoa/keen-keep-next.git


## **Author**

Anika Mizan 
Email: chhoa.anika07@gmail.com 


## **Final Note**

KeenKeeper is not just a project — it's a thoughtful tool to help maintain real human connections in a busy digital world.
