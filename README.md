# XDi - Customer Centric Digital Solutions

A modern, animated landing page for XDi, a digital agency specializing in UI/UX design, web development, and digital strategy solutions.

## 🚀 Features

- **Modern Landing Page**: Beautiful, animated website with glass-morphism design
- **Responsive Design**: Optimized for all devices and screen sizes
- **Contact Form**: Integrated contact form with Supabase backend
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Professional UI**: Built with shadcn-ui components and Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn-ui
- **Animations**: Framer Motion
- **Backend**: Supabase (contact form storage)
- **Icons**: Lucide React
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd pixel-perfect-polish-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn-ui components
│   ├── HeroSection.tsx  # Landing page hero
│   ├── ServicesSection.tsx
│   ├── WhyUsSection.tsx
│   ├── CaseStudiesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
├── integrations/        # External service integrations
│   └── supabase/        # Supabase configuration
└── App.tsx             # Main application component
```

## 🎨 Design Features

- **Glass-morphism Effects**: Modern glass-like UI elements
- **Gradient Animations**: Smooth color transitions and hover effects
- **Typography**: Space Grotesk for headings, Inter for body text
- **Color Scheme**: Professional dark/light theme support
- **Interactive Elements**: Hover animations and micro-interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- etc.

## 📝 Contact Form

The contact form stores messages in a Supabase database with the following structure:

```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

## 🎯 Services Offered

1. **UI/UX Design**
   - User Research
   - Wireframing & Prototyping
   - Usability Testing

2. **Web Development**
   - Responsive Design
   - Performance Optimization
   - E-commerce Solutions

3. **Digital Strategy**
   - Market Analysis
   - Growth Strategy
   - ROI Optimization

## 📄 License

© 2026 XDi. All rights reserved.
