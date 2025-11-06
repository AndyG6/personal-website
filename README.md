# Personal Website

A modern, dark-themed personal website built with React, TypeScript, and Tailwind CSS. This design combines the layout and structure of Michael DeMarco's website with the dark color scheme and minimalist aesthetic of Nathan Tran's portfolio.

## 🎨 Design Features

- **Dark Theme**: Inspired by Nathan Tran's sleek dark design (#0A0A0A background)
- **Orange Accent**: Michael DeMarco's vibrant orange (#FF8C42) for highlights
- **Typography**: 
  - Inter for headings
  - Open Sans for body text
  - Font Awesome 6 for icons
- **Smooth Animations**: Framer Motion for elegant transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for modern icons
- **Font Awesome 6** for additional icons

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Customization

1. **Personal Information**: Update your name, bio, and contact info in the components
2. **Work Experience**: Edit `src/components/Projects.tsx` to add your work history
3. **Education**: Modify `src/components/About.tsx` with your education details
4. **Social Links**: Update links in `src/components/Navbar.tsx`, `Contact.tsx`, and `Footer.tsx`
5. **Colors**: Customize the color scheme in `tailwind.config.js`

### Font Awesome Pro (Optional)

To use Font Awesome 6 Pro icons:
1. Get your kit from [fontawesome.com/kits](https://fontawesome.com/kits)
2. Replace the CDN link in `index.html` with your kit script
3. Uncomment the Font Awesome Pro script tag

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation with dark theme
│   ├── Hero.tsx        # Landing section with large background text
│   ├── About.tsx       # Education and activities
│   ├── Projects.tsx    # Work experience and hackathons
│   ├── Contact.tsx     # Social links
│   └── Footer.tsx      # Footer with copyright
├── App.tsx             # Main app component
├── index.css           # Global styles and Tailwind
└── main.tsx            # App entry point
```

## 🎨 Color Palette

- **Primary Orange**: `#FF8C42`
- **Dark Background**: `#0A0A0A`
- **Dark Lighter**: `#1A1A1A`
- **Dark Card**: `#141414`
- **Gray Text**: `#B0B0B0`
- **Gray Border**: `#2A2A2A`

## 📝 License

MIT License - feel free to use this template for your own personal website!

---

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
