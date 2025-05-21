# Padma Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS to showcase your skills, projects, and experience.

## Features

- **Responsive Design:** Looks great on all devices.
- **Animated Hero Section:** Eye-catching introduction with smooth transitions.
- **About, Projects, Experience, Testimonials, and Contact Sections:** Clearly organized to highlight your strengths.
- **Marquee & Blur Effects:** Subtle UI enhancements for a modern feel.
- **Sticky Navbar:** Easy navigation throughout the site.
- **Framer Motion Animations:** Smooth, interactive UI elements.
- **Dark Mode Ready:** Easily customizable for dark/light themes.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/padma-portfolio.git
   cd padma-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
src/
  components/        # Reusable React components
    About.jsx
    BlurBackground.jsx
    Contacts.jsx
    Experience.jsx
    Hero.jsx
    Marquee.jsx
    Navbar.jsx
    Projects.jsx
    Testimonial.jsx
  App.jsx            # Main app component
  index.js           # Entry point
  index.css          # Global styles (Tailwind CSS)
public/
  assets/            # Images and static files
```

## Customization

- **Update your information:**  
  Edit the content in each section/component to reflect your own skills, projects, and experience.
- **Change theme/colors:**  
  Modify `tailwind.config.js` or `index.css` for custom colors and fonts.
- **Add new sections:**  
  Create new components in `src/components/` and import them in `App.jsx`.

## Deployment

You can deploy this portfolio easily on platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [GitHub Pages](https://pages.github.com/).

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Padma**