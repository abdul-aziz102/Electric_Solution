# ElectricPro - Advanced Electrician Website

A modern, professional electrician services website built with React, featuring a comprehensive documentation system and AI-powered assistant.

## 🚀 Features

### Pages
- **Home** - Full-featured landing page with hero section, services showcase, testimonials, FAQ, and contact preview
- **Services** - Detailed service offerings across 6 categories (Residential, Commercial, Emergency, Solar, Smart Home, Industrial)
- **Projects** - Portfolio showcase with project details and categories
- **About** - Company story, mission, vision, values, and achievements
- **Contact** - Complete contact form with business hours and location info
- **Docs** - Comprehensive documentation system with 15 chapters

### Documentation System
15 comprehensive chapters covering electrical topics from basic to advanced:
1. Introduction to Electrician Profession
2. Types of Electricians
3. Basic Electrical Concepts (Voltage, Current, Resistance, Ohm's Law)
4. Electrical Safety Rules
5. Electrical Tools and Equipment
6. Wiring Systems (Residential & Commercial)
7. Circuit Breakers & Distribution Panels
8. Installation Process Step-by-Step
9. Fault Finding & Troubleshooting
10. Solar Panel System Installation
11. Generator Installation
12. Smart Home Electrical Systems
13. Advanced Industrial Systems
14. Maintenance & Inspection Procedures
15. Career Path & Certifications

Each chapter includes:
- Clear introduction
- Detailed sections with step-by-step explanations
- Key points summary
- Safety notes
- Practical examples

### AI Documentation Assistant
- **Floating button** on Docs page for easy access
- **Multi-language support**: English, Urdu (اردو), Hindi (हिंदी), Spanish, French, Arabic
- **Intelligent explanations**: Simplifies technical electrical concepts
- **Real-world examples**: Provides practical context
- **Interactive chat interface**: Smooth animations and modern design

## 🛠️ Tech Stack

- **React 18.3.1** - Modern UI library
- **React Router DOM 6.22.0** - Client-side routing
- **Framer Motion 11.0.5** - Smooth animations and transitions
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite 5.1.4** - Fast build tool and dev server
- **OpenAI API** - Powers the AI assistant

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser and navigate to:
```
http://localhost:5173
```

## 🎨 Design Features

- **Dark Theme** - Modern dark color scheme with gradient accents
- **Glassmorphism** - Frosted glass effects on navbar and cards
- **Smooth Animations** - Page transitions, hover effects, and micro-interactions
- **Responsive Design** - Fully responsive across all devices
- **Gradient Effects** - Blue to purple gradients throughout
- **Neon Glow Effects** - Hover glow on interactive elements

## 🔧 Project Structure

```
Electrition-web/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Navigation component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Services.jsx        # Services page
│   │   ├── Projects.jsx        # Projects portfolio
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact form
│   │   └── Docs.jsx            # Documentation with AI assistant
│   ├── data/
│   │   └── docsContent.js      # Documentation chapters content
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🤖 AI Assistant Configuration

The AI assistant uses OpenAI's API. To use it:

1. The API key is already configured in `src/pages/Docs.jsx`
2. Click the floating chat button on the Docs page
3. Select your preferred language
4. Paste any technical sentence or ask questions
5. Get simplified explanations in your chosen language

## 🎯 Key Features Implemented

### Navbar
- Sticky positioning with blur effect on scroll
- Animated underline hover effects
- Responsive mobile menu
- "Get Free Quote" CTA button

### Home Page Sections
1. Hero section with animated background
2. Services showcase (6 animated cards)
3. Why Choose Us section
4. Work Process Timeline
5. Featured Projects Grid
6. Client Testimonials
7. FAQ Accordion
8. Call to Action Banner
9. Contact Preview Form

### Documentation Features
- Sidebar navigation with smooth transitions
- Active chapter highlighting
- Scroll animations
- Color-coded sections (Key Points, Safety Notes, Practical Examples)
- Professional layout with proper spacing

### AI Assistant Features
- Floating button with pulse animation
- Modal with smooth open/close transitions
- Language selector dropdown
- Chat interface with message bubbles
- Loading indicator
- Error handling

## 🚀 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- Background: Gray-950 (#0a0a0f)
- Primary: Blue-500 to Purple-600 gradient
- Text: White and Gray shades
- Accents: Blue, Purple, Green, Orange, Red

## ⚡ Performance Optimizations

- Code splitting with React Router
- Lazy loading of components
- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- Fast development with Vite

## 📄 License

This project is built for professional electrician services.

## 🤝 Support

For any issues or questions, please contact the development team.

---

Built with ⚡ by Professional Developers
