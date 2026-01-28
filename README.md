# Shri Mahakaleshwar Mandir Website

Official website for Shri Mahakaleshwar Mandir, located in Subash Nagar Shopping Center, Jaipur, Rajasthan.

## 🕉️ About

A beautiful, responsive React website dedicated to Lord Shiva and other divine deities. The website provides information about temple timings, events, rituals, and more.

## ✨ Features

- **Home Page**: Welcome section with quick temple information
- **About**: Detailed temple history and mission
- **Deities**: Information about all six divine deities
- **Timings**: Complete darshan and aarti schedule
- **Events**: Upcoming festivals and regular celebrations
- **Rituals**: Temple services and puja offerings
- **Gallery**: Photo gallery with Google Maps integration
- **Contact**: Contact form and location details

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Beautiful icons
- **Lora Font** - Elegant typography

## 📁 Project Structure

```
temple-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Deities.jsx
│   │   ├── Timings.jsx
│   │   ├── Events.jsx
│   │   ├── Rituals.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data files
│   │   ├── deities.js
│   │   ├── events.js
│   │   ├── navigation.js
│   │   ├── rituals.js
│   │   └── timings.js
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the project

2. Navigate to the project directory:
```bash
cd temple-website
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Build for Production

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🎨 Customization

### Adding New Events

Edit `src/data/events.js` to add or modify events:
```javascript
export const upcomingEvents = [
  { 
    name: 'Event Name', 
    date: 'Date', 
    description: 'Description' 
  },
  // Add more events...
];
```

### Updating Timings

Modify `src/data/timings.js` for timing changes:
```javascript
export const timings = [
  { 
    day: 'Day Range', 
    morning: 'Morning Timings', 
    evening: 'Evening Timings' 
  },
];
```

### Adding Rituals

Update `src/data/rituals.js` for new rituals or services:
```javascript
export const rituals = [
  { 
    name: 'Ritual Name', 
    time: 'Timing', 
    description: 'Description' 
  },
];
```

### Changing Colors

The color scheme uses Tailwind's orange and red gradients. To customize:
- Edit `tailwind.config.js` for global theme changes
- Modify gradient classes in components (e.g., `from-orange-600 to-red-600`)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Import your GitHub repository
2. Vercel will auto-detect Vite
3. Deploy with default settings

## 📄 License

This project is created for Shri Mahakaleshwar Mandir, Jaipur.

## 🙏 Contact

For any queries or updates, please visit the temple at:

**Shri Mahakaleshwar Mandir**  
Subash Nagar Shopping Center  
Jaipur, Rajasthan, India

---

**ॐ नमः शिवाय**
