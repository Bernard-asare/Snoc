# Snoc Logistics and Cargo Management Application

A high-performance logistics application built for **Snoc Logistics and Cargo** to manage global cargo operations from China to Ghana.

## Local Setup & Development (Offline Requirements)

To run this project on your local machine, follow these steps:

### 1. Prerequisites
- **Node.js**: Version 20.x or higher (Next.js 15 requirement).
- **Package Manager**: NPM (comes with Node).
- **Firebase Project**: You must have an active project at [console.firebase.google.com](https://console.firebase.google.com/).
- **Google AI API Key**: Required for Genkit AI features (TTS and Document Generation). Get it at [aistudio.google.com](https://aistudio.google.com/).

### 2. Installation
1. **Download and Extract** the project source.
2. **Install Dependencies**:
   ```bash
   npm install
   ```

### 3. Environment Configuration
Create a `.env.local` file in the root directory. Copy the contents of `.env.example` and replace the placeholders with your actual Firebase and Google AI keys.

### 4. Running the Application
To start the full development environment:

- **Frontend (Next.js)**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:9002](http://localhost:9002) in your browser.

- **AI Developer UI (Genkit)**:
  ```bash
  npm run genkit:dev
  ```
  Open [http://localhost:4000](http://localhost:4000) to test AI flows.

### 5. Important Operational Flows
- **Client Onboarding**: Access is gated. A client can only log in once their first invoice is marked as "Paid" in the admin dashboard.
- **Automated Dispatch**: Marking an invoice as paid will trigger a console simulation of the credential dispatch (Email/SMS) containing the client's Tracking Passcode.
- **AI Docs**: Use the AI Documentation hub to generate customs papers based on shipment data.

## Features
- **Real-time Tracking**: Public and Private tracking portals.
- **Role-based Access**: Admin (Staff) and Client (Consignee) dashboards.
- **Financial Hub**: Invoice generation and revenue reporting.
- **QR Terminal**: Scanner for warehouse cargo intake.
- **AI Voice**: Automated status updates via Gemini TTS.

## Project Structure
```
snoc/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   │   ├── firebase.ts      # Firebase configuration
│   │   ├── auth.ts          # Authentication logic
│   │   └── types.ts         # TypeScript types
│   ├── pages/               # API routes
│   └── styles/              # Global styles
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── .env.local              # Local environment variables (DO NOT COMMIT)
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server (port 9002)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run genkit:dev` - Start Genkit AI developer UI (port 4000)

## Environment Variables

Required Firebase and Google AI credentials must be set in `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
FIREBASE_ADMIN_SDK_KEY
NEXT_PUBLIC_GOOGLE_AI_API_KEY
```

## Deployment

This application is ready to be deployed on:
- **Vercel** (Recommended for Next.js)
- **Firebase Hosting**
- **Any Node.js hosting provider**

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

## Support

For issues or questions, please contact the development team.
