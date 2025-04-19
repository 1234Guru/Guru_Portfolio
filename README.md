# Guru Mukesh - Portfolio Website

This is a professional portfolio website for Guru Mukesh, a Front End Web Developer. The website showcases skills, experience, projects, and provides contact information.

## Features

- Responsive design that works on all devices
- Dark/light mode toggle
- Interactive project showcase
- Skills visualization with proficiency indicators
- Contact form with validation
- Smooth scrolling navigation

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Scroll for smooth scrolling
- Lucide React for icons

## Getting Started

1. Clone the repository
```
git clone https://github.com/your-username/mukesh-portfolio.git
```

2. Navigate to the project directory
```
cd mukesh-portfolio
```

3. Install dependencies
```
npm install
```

4. Run the development server
```
npm run dev
```

5. Build for production
```
npm run build
```

## Deployment to GitHub Pages

1. Add homepage to package.json
```json
"homepage": "https://your-username.github.io/mukesh-portfolio"
```

2. Install gh-pages package
```
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy to GitHub Pages
```
npm run deploy
```

## Project Structure

- `/src/components/` - React components
- `/src/assets/` - Static assets
- `/public/` - Public assets

## License

MIT