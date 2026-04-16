# Smart Diabetic Foot Monitoring System

A modern healthcare web application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS for monitoring diabetic patients' foot temperature.

## Features

- **Splash Screen**: Animated welcome screen with app branding
- **Authentication**: Login with email and password
- **Patient Details**: Register patient information (name, age)
- **Connection Screen**: Loading animation while syncing with NodeMCU
- **Dashboard**: Real-time temperature monitoring with circular display
- **Temperature Alerts**: Automatic alerts when temperature exceeds 37.5°C
- **History Tracking**: View past temperature readings
- **Bottom Navigation**: Easy navigation between main features
- **Mobile-Friendly**: Responsive design optimized for all devices
- **Elderly-Friendly**: Large fonts and clear UI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Built-in Next.js API Routes

## Project Structure

```
smart-footcare/
├── src/
│   ├── app/
│   │   ├── (auth)/login/
│   │   ├── (patient)/
│   │   │   ├── details/
│   │   │   ├── connection/
│   │   │   ├── dashboard/
│   │   │   ├── monitor/
│   │   │   ├── history/
│   │   │   ├── alert/
│   │   │   └── share/
│   │   ├── api/temp/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── features/
│   ├── lib/
│   └── styles/
├── public/
└── package.json
```

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### GET /api/temp
Returns the current temperature reading.

**Response:**
```json
{
  "temperature": 36.5
}
```

### POST /api/temp
Sets the temperature to 39°C (simulating danger alert).

**Response:**
```json
{
  "temperature": 39,
  "message": "Temperature set to 39°C"
}
```

## User Flow

1. **Splash Screen** → `GET /` - App branding and entry point
2. **Login** → `GET /login` - Email password authentication
3. **Patient Details** → `GET /details` - Collect patient information
4. **Connection** → `GET /connection` - Loading screen with auto-redirect
5. **Dashboard** → `GET /dashboard` - Main monitoring interface
6. **Alert** → `GET /alert` - Triggered when temp > 37.5°C
7. **History** → `GET /history` - View past readings
8. **Monitor** → `GET /monitor` - Advanced monitoring view
9. **Share** → `GET /share` - Share data with caregivers

## Temperature Logic

- **Green (Normal)**: ≤ 37.5°C
- **Red (Abnormal)**: > 37.5°C

## Features Details

### Temperature Monitoring
- Real-time updates every 2 seconds
- Circular temperature display with status indicator
- Color-coded visual feedback

### Bottom Navigation
- Home (Dashboard)
- Monitor (Advanced view)
- History (Past readings)
- Share (Data sharing)

### Elderly-Friendly Design
- Large readable fonts (18px+)
- High contrast colors
- Simple navigation
- Clear call-to-action buttons

## Browser Support

- Chrome/Edge: Recommended
- Firefox: Supported
- Safari: Supported
- Mobile browsers: Fully responsive

## Notes

- Temperature data is stored as a global variable in the API route
- Default temperature: 36.5°C
- Simulating danger sets temperature to 39°C
- All pages are mobile-optimized with touch-friendly UI

## Development

The application uses:
- TypeScript for type safety
- Tailwind CSS for responsive design
- Next.js App Router for routing
- Built-in API routes for backend

## License

MIT
