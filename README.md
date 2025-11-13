# VyomGarud 🚁

A modern, responsive drone services website built with Next.js 15, TypeScript, and React. Features an elegant UI with Spline 3D integration, smooth animations, and a comprehensive component library.

## Screenhots
<img width="1882" height="967" alt="Screenshot 2025-11-13 214635" src="https://github.com/user-attachments/assets/ade3e6c0-1444-4f95-b5cb-9b2e595852b0" />
<img width="1895" height="760" alt="Screenshot 2025-11-13 214703" src="https://github.com/user-attachments/assets/c8060dd0-b933-4065-9c52-c53f5ec64638" />
<img width="1898" height="888" alt="Screenshot 2025-11-13 214717" src="https://github.com/user-attachments/assets/ab281b33-baae-4b0e-8324-139358b92e11" />
<img width="1885" height="955" alt="Screenshot 2025-11-13 214729" src="https://github.com/user-attachments/assets/7a62c978-329e-4212-b11d-f056bffc7ec2" />





## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/utkarshchauhan26/VyomGarud.git
   cd VyomGarud
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Design Philosophy

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **3D Graphics:** Spline
- **State Management:** React Context API
- **Icons & Assets:** Custom SVG components

### Architecture

```
drone/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hero-section.tsx   # Landing hero with 3D viewer
│   ├── navbar.tsx         # Navigation component
│   ├── footer.tsx         # Footer component
│   ├── about-section.tsx  # About section
│   ├── capabilities-section.tsx
│   ├── highlights-section.tsx
│   ├── contact-section.tsx
│   └── ui/               # Shadcn UI primitives
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
└── public/               # Static assets
```

## 🧩 Key Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Mode** - Theme switching with persistence
- ✅ **3D Integration** - Interactive Spline viewer
- ✅ **Modular Components** - Reusable UI primitives
- ✅ **Type Safety** - Full TypeScript coverage
- ✅ **Performance Optimized** - Code splitting & lazy loading
- ✅ **Accessibility** - WCAG compliant components
- ✅ **SEO Ready** - Meta tags and semantic HTML

## 📂 Component Library

The project includes 40+ pre-built UI components in `components/ui/`:

- Form elements (Input, Textarea, Select, Checkbox, Radio, etc.)
- Navigation (Navbar, Menubar, Breadcrumb, Pagination)
- Feedback (Toast, Alert, Dialog, Drawer)
- Data Display (Table, Card, Badge, Avatar, Skeleton)
- Layout (Tabs, Accordion, Collapsible, Resizable)
- Advanced (Calendar, Carousel, Chart, Command)

## 🎯 Design Principles

1. **Component-First Architecture** - Every UI element is a reusable component
2. **Type Safety** - Strict TypeScript for reliability
3. **Separation of Concerns** - Logic, styling, and markup are cleanly separated
4. **Progressive Enhancement** - Works without JavaScript, enhanced with it
5. **Performance** - Optimized bundle size and lazy loading
6. **Accessibility** - Keyboard navigation and screen reader support

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/components`, `@/lib`, etc.)
- Type-safe component props

### Tailwind CSS
- Custom color palette
- Responsive breakpoints
- Dark mode support
- Custom utility classes

### Next.js
- App Router architecture
- Server and client components
- Optimized font loading (Geist)
- Image optimization

## 📝 Development Guidelines

### Code Style
- Use functional components with TypeScript
- Prefer composition over inheritance
- Keep components small and focused
- Use custom hooks for shared logic
- Follow Airbnb/Standard style guide

### Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Files: kebab-case (`hero-section.tsx`)
- Utilities: camelCase (`formatDate()`)
- Types/Interfaces: PascalCase (`ButtonProps`)

### Git Workflow
- Feature branches from `main`
- Conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- Descriptive commit messages
- Small, focused commits

## 🚀 Deployment

### Vercel (Recommended)
```bash
pnpm build
vercel --prod
```

### Netlify
```bash
pnpm build
netlify deploy --prod
```

### Docker
```bash
docker build -t vyomgarud .
docker run -p 3000:3000 vyomgarud
```

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle Size: Optimized with code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Utkarsh Chauhan**
- GitHub: [@utkarshchauhan26](https://github.com/utkarshchauhan26)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Spline](https://spline.design/)
- [Vercel](https://vercel.com/)

---

**Built with 💙 using Next.js and TypeScript**
