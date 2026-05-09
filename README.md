# 🚀 ROOTKEPEER - Rayen Guesmi's Portfolio

![Portfolio Preview](/public/Capture%20d'écran%202025-12-18%20164235.png)

> A modern, responsive, and interactive portfolio website built to showcase my journey as a Computer Engineering Student specializing in Cybersecurity, AI, and Blockchain.

## 📖 About The Project

**Aspire Folio** is a comprehensive personal portfolio designed to highlight professional achievements, technical skills, and creative projects. It goes beyond a simple static site by incorporating interactive elements, detailed project views, and a polished user experience using the latest web technologies.

### ✨ Key Features

*   **🎨 Modern & Responsive UI**: Built with a "glassmorphism" aesthetic, dark mode support, and fully responsive layout for all devices.
*   **📂 Interactive Project Showcase**:
    *   Detailed modals for each project.
    *   Image carousels for project screenshots.
    *   Links to live demos and GitHub repositories.
*   **💼 Professional Experience & Internships**:
    *   Dedicated timeline views for work history.
    *   **Certificate Viewer**: Integrated modal to view internship certificates directly.
    *   Company links and technology tags.
*   **📊 Dynamic Skills Matrix**: A visual representation of technical proficiency across different domains (Cybersecurity, AI, Development).
*   **🎓 Education & Certifications**: structured display of academic background and professional certifications with verification links.
*   **📬 Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery without a backend server.
*   **⚡ High Performance**: Optimized with Vite for lightning-fast loading and smooth transitions.

## 🛠️ Tech Stack

This project leverages a robust ecosystem of modern tools:

### Core
*   **[React 18](https://reactjs.org/)**: The library for web and native user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for better code quality.
*   **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling.

### Styling & UI
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
*   **[shadcn/ui](https://ui.shadcn.com/)**: Re-usable components built using Radix UI and Tailwind CSS.
*   **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.
*   **[Embla Carousel](https://www.embla-carousel.com/)**: Lightweight carousel for project images.

### Functionality
*   **[React Hook Form](https://react-hook-form.com/)** & **[Zod](https://zod.dev/)**: Form handling and schema validation.
*   **[Recharts](https://recharts.org/)**: Composable charting library for the skills matrix.
*   **[EmailJS](https://www.emailjs.com/)**: Client-side email service.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   **Node.js** (v18 or higher)
*   **npm** or **bun**

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/rayenguesmi/My-Portfolio
    cd My-Portfolio
    ```

2.  **Install dependencies**
    ```sh
    npm install
    # or
    bun install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory based on `.env.example`:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_USER_ID=your_public_key
    ```

4.  **Start the Development Server**
    ```sh
    npm run dev
    ```
    Visit `http://localhost:5173` to view the app.

## 📂 Project Structure

```text
src/
├── components/
│   ├── portfolio/          # Core portfolio sections
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── InternshipsSection.tsx  # Includes certificate modal
│   │   ├── SkillsMatrixModal.tsx
│   │   └── ...
│   └── ui/                 # Reusable shadcn/ui components
├── lib/                    # Utilities (cn, etc.)
├── pages/                  # Main page layout
├── App.tsx                 # App entry point
└── main.tsx                # DOM rendering
```

## 📝 Customization

The content is managed within the component files for easy updates:

*   **Projects**: Edit `src/components/portfolio/ProjectsSection.tsx` to add/remove projects.
*   **Internships**: Update `src/components/portfolio/InternshipsSection.tsx` to change work experience and add certificate URLs.
*   **Skills**: Modify `src/components/portfolio/SkillsMatrixModal.tsx` to adjust skill levels and categories.
*   **Personal Info**: Update `src/components/portfolio/HeroSection.tsx` and `ContactSection.tsx`.

## 📦 Deployment

This project is ready to be deployed on platforms like **Vercel** or **Netlify**.

**Build for production:**
```sh
npm run build
```

The output will be in the `dist` folder.

## 📬 Contact

**Rayen Guesmi**

*   📧 Email: [rayen.guesmi@esprit.tn](mailto:rayen.guesmi@esprit.tn)
*   🔗 LinkedIn: [Profile Link](https://linkedin.com/in/rayen-guesmi-3141a1308)
*   🐙 GitHub: [Profile Link](https://github.com/rayenguesmi)

---
*Built with ❤️ by Rayen Guesmi*
