# Sammed Doshi - Professional Portfolio

This is a modern, responsive portfolio website designed for a Senior Software Engineer. It showcases professional experience, projects, skills, and blog posts with a sleek UI and interactive elements.

## Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Interactive 3D Background**: Built with Three.js and React Three Fiber for an engaging visual experience.
- **Dynamic Project Showcase**: Displays projects with links to GitHub repositories and live demos.
- **Blog Integration**: Automatically fetches and displays the latest technology-related articles from Medium using RSS to JSON conversion.
- **Animations**: Smooth transitions and scroll animations using Framer Motion.
- **Interactive Elements**: Includes a "Snow Effect" toggle and hover states for better user engagement.
- **Contact Form**: Integrated contact form UI with validation.

## Tech Stack

- **Frontend Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Icons**: Lucide React

## Project Structure

The project is organized to separate concerns and make content updates easy:

- `components/`: Contains all React components (Hero, About, Projects, Blog, etc.).
- `constants.ts`: The central "database" for the site. Edit this file to update your personal info, experience, projects, and skills without touching the UI code.
- `types.ts`: TypeScript definitions for the data models.
- `App.tsx`: The main layout component assembling the sections.

## Customization Guide

To personalize this portfolio for your own use:

1.  **Update Personal Data**:
    Navigate to `constants.ts` and update the following exports:
    - `SOCIAL_LINKS`: Your LinkedIn, GitHub, and Email.
    - `ABOUT_TEXT`: Your professional summary.
    - `EXPERIENCES`: Your work history.
    - `PROJECTS`: Your portfolio items.
    - `SKILLS`: Your technical skills categorization.

2.  **Update Blog Source**:
    In `components/Blog.tsx`, locate the `fetch` call inside the `useEffect` hook and replace `@sammeddoshi` with your Medium username:
    ```typescript
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your_username')
    ```

3.  **Configure Contact Form**:
    In `components/Contact.tsx`, update the `fetch` URL in the `handleSubmit` function to point to your form handling service (e.g., Formspree, Getform, or your own backend).

## License

MIT License
