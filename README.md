# Aryandi Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Eye-catching gradient backgrounds and smooth animations
- **Mobile-First**: Fully responsive design optimized for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Elements**: Smooth hover effects and scroll animations
- **Performance Optimized**: Fast loading with Next.js optimization
- **SEO Ready**: Static generation for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aryandi.git
cd aryandi
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/aryandi`

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── About/          # About section
│   ├── Skills/         # Skills section
│   ├── Projects/       # Projects showcase
│   ├── Contact/        # Contact form
│   └── Footer/         # Footer
├── screens/            # Page components
│   └── Home/           # Home page
├── types/              # TypeScript type definitions
└── utils/              # Utility functions and constants
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/utils/constants.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  avatar: "/images/your-photo.png",
  contact: {
    email: "your.email@example.com",
    phone: "+62 812-3456-7890",
    location: "Your Location",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    website: "https://yourwebsite.com"
  }
};
```

### Projects
Add your projects in the `projects` array in `src/utils/constants.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Title",
    description: "Project description...",
    image: "/images/project-image.png",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
];
```

### Skills
Update your skills in the `skills` array in `src/utils/constants.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  // ... more skills
];
```

## 🎯 Sections

- **Hero**: Introduction with your photo and main CTA
- **About**: Personal story and experience timeline
- **Skills**: Technical skills with progress bars
- **Projects**: Portfolio showcase with project details
- **Contact**: Contact form and social links

## 📱 Mobile Features

- Responsive sidebar navigation
- Touch-optimized interactions
- Mobile-first design approach
- Smooth animations and transitions

## 🎨 Styling

The project uses Tailwind CSS with custom animations and gradients. Key design elements:

- **Colors**: Blue to purple gradient theme
- **Typography**: Modern, readable fonts
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Subtle depth and elevation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- **Email**: aryandi@example.com
- **LinkedIn**: [linkedin.com/in/aryandi](https://linkedin.com/in/aryandi)
- **GitHub**: [github.com/aryandi](https://github.com/aryandi)

---

Made with ❤️ by Aryandi