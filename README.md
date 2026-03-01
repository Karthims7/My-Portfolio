# Karthi S - Infrastructure Support & Cloud/DevOps Engineer Portfolio

A modern, high-performance personal portfolio website built with a bespoke "DevOps / Control Panel" aesthetic. It emphasizes dark mode typography, pipeline timelines, and containerized layouts to reflect an identity rooted in deep Cloud infrastructure, Linux administration, and SRE best practices.

## 🚀 Live Preview
*(Add your live hosting link here once deployed, e.g., `https://karthims7.github.io/My-Portfolio/`)*

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://react.dev/) – Component-based UI.
- **Build Tool**: [Vite](https://vitejs.dev/) – Extremely fast Hot Module Replacement (HMR) and optimized static asset compilation.
- **Styling**: Vanilla CSS3 (`index.css`) – Utilizing CSS variables for robust Light/Dark theme switching, Flexbox/Grid for responsive layouts, and custom keyframe animations.
- **Icons**: [Lucide React](https://lucide.dev/) – Clean, lightweight SVG icons carefully colored to match the brand.
- **Containerization**: [Docker](https://www.docker.com/) – Multi-stage builds utilizing lightweight Alpine Linux distributions (Node for compiling, Nginx for secure serving).

## 🎨 Theme & Aesthetic

- **Color Palette**: Dark (`#0a0a0a`) background with Neon accents (Cyan `#00f0ff`, Green `#39ff14`, Purple `#b026ff`).
- **Brand Color**: Saffron/Yellow (`#facc15`), used heavily in Light Mode and for the signature DevOps infinity logo.
- **Typography**: `Fira Code` / `JetBrains Mono` for all technical elements (Headers, Code blocks) alongside `Inter` for highly legible body text.
- **Visual Metaphors**: 
  - The hero section simulates a bash `init_profile.sh` startup sequence.
  - The Experience section is styled as a connected CI/CD pipeline branch.
  - The Skills section displays technical competencies mapped as `docker ps -a` containers.

## 💻 Local Development

To run this project locally on your machine:

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Steps
1. **Clone the repository:**
   ```bash
   git clone git@github.com:Karthims7/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *The application will be available at `http://localhost:5173/`*

## 🐳 Docker Deployment

This application is fully containerized with a highly optimized two-stage build, resulting in a tiny, secure Nginx footprint ready for Kubernetes, AWS ECS, or simple VPS deployment.

### Prerequisites
- Docker Engine / Docker Desktop

### Build and Run

1. **Build the Docker Image:**
   ```bash
   docker build -t portfolio-app .
   ```

2. **Run the Container:**
   ```bash
   docker run -d -p 8080:80 --name my-portfolio portfolio-app
   ```

3. **Verify:**
   Open your browser and navigate to `http://localhost:8080/`.

---
*Built with React & Vanilla CSS.*
*$ exit*
