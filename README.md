# Checkout Items 🛒

A sleek, responsive product checkout interface built with **React** and **Vite**. This project demonstrates a clean UI for managing shopping cart items, optimized for fast performance and seamless deployment.

🚀 **[Live Demo](https://abdulrahman-ka.github.io/checkout-items/)**

---

## ✨ Features

- **Product Listing:** Dynamic display of checkout items with price and details.
- **Responsive UI:** Optimized for mobile, tablet, and desktop screens.
- **Vite-Powered:** Lightning-fast development and optimized production builds.
- **GitHub Pages Ready:** Configured for seamless deployment to subfolder environments.

## 🛠 Tech Stack

| Technology       | Purpose                  |
| :--------------- | :----------------------- |
| **React**        | UI Library               |
| **Vite**         | Build Tool & Dev Server  |
| **CSS3**         | Custom Styling & Layouts |
| **GitHub Pages** | Hosting                  |

---

## 📂 Project Structure

```text
├── public/
│   └── assets/          # Static files (images, icons)
├── src/
│   ├── components/      # Reusable UI parts
│   ├── App.jsx          # Main application logic
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Scripts and dependencies
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Abdulrahman-Ka/checkout-items.git
cd checkout-items
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development mode

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🔧 Deployment & Build Fixes

If you are deploying this project to **GitHub Pages**, ensure your `vite.config.js` includes the `base` property to prevent broken image links and 404s:

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/checkout-items/", // Matches your repository name
});
```

### Handling Images in Build Mode

When using images inside `public/assets/`:

- **Correct Path:** `<img src="/assets/image-name.png" />`
- **Avoid:** Do not include `public` in the string path. Vite automatically moves contents of `public` to the root of the `dist` folder during build.

---

## 👤 Author

**Abdulrahman-Ka**

- GitHub: [@Abdulrahman-Ka](https://github.com/Abdulrahman-Ka)

---

_Developed as part of a frontend practice series._
