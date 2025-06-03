
# Anim8 Web Page

Welcome to the Anim8 website repository. This project powers the digital presence of **Anim8**, a visionary company reimagining manufacturing through conscious systems, intelligent integration, and technological awakening.

Our site showcases Anim8’s philosophy, services, and products — and acts as the digital front door for a growing ecosystem of collaborators, clients, and future partners.

---

## 🧠 Project Purpose

This site is designed to:

- Present Anim8’s mission, philosophy, and team
- Capture inbound interest via email forms
- Serve as a foundation for future tools (e.g. diagnostics, lead portals, microsites)

The site is built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router** (v6.4+ Data Router API).

---

## 🗂 Folder Structure & Logic
src/
├── assets/ # Static files like logos, textures, and future exports
├── components/ # All UI building blocks, grouped semantically
│ ├── layout/ # Layouts like NavBar, Footer, RootLayout
│ ├── Pages/ # Page-level component wrappers (TeamPage, HomePage)
│ └── ui/ # Reusable presentational components (buttons, cards, inputs)
├── context/ # Global app context (theme, auth, etc)
├── router/ # Centralized route logic using React Router (6.4+)
│ └── layouts/ # Layouts used inside routes (e.g., RootLayout with <Outlet />)
├── styles/ # Global and custom styles (index.css, variables)
├── types/ # Global TypeScript type declarations
├── utils/ # Utility functions (formatters, validators, etc)


---

## 🧾 Coding Standards

- **File naming:** `PascalCase` for components, `camelCase` for files & functions
- **Styling:** Tailwind CSS + global theme variables in `styles/index.css`
- **Routing:** React Router v6.4+ using `createBrowserRouter` and `createRoutesFromElements`
- **State Management:** Local state + React Context where needed (no Redux)
- **Component Split:**  
  - Logic-heavy pages go in `Pages/`  
  - Pure UI units go in `ui/`  
  - Cross-cutting wrappers (e.g. NavBar) go in `layout/`

---

## 📌 Commands

```bash
# Install dependencies
yarn install

# Start dev server
yarn run dev

# Build for production
yarn run build
