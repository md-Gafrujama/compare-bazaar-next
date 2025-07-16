# Compare Bazaar

## Project Overview

Compare Bazaar is a modern web application built with Next.js and React that helps businesses make smarter buying decisions by comparing quotes from top vendors. The platform leverages AI-powered price comparisons and real-time analysis to provide users with transparent, data-driven insights, enabling them to save time, money, and stress during their procurement process.

The application focuses on various business software categories such as CRM, email marketing, project management, payroll systems, and more. It offers verified reviews, real prices, and trusted recommendations to help users find the best-fit solutions for their needs and budget.

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: UI library for building interactive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide-react**: Icon library used for UI icons.
- **Google Fonts (Quicksand)**: Custom font integration.
- **Web3Forms API**: For handling email subscription form submissions.

---

## Project Structure

```
src/
  app/
    layout.js            # Root layout component wrapping all pages
    page.jsx             # Main landing page component
    [Category]/          # Subdirectories for business categories (e.g., Sales, Marketing, Technology-main)
      page.jsx           # Category-specific pages
  components/
    Navbar.jsx           # Responsive navigation bar with dropdowns
    WideDiv.jsx          # Footer section with company info and navigation links
    Footer.jsx           # Simple copyright footer
    CookieConsent.jsx    # Cookie consent banner component
    [Other components]   # Various reusable UI components
public/
  images/                # Static images and assets used throughout the app
  favicon.ico            # Favicons and icons
styles/
  Home.css               # Styles specific to the home page
  Navbar.css             # Styles specific to the navigation bar
  globals.css            # Global styles applied across the app
```

---

## Key Components and Concepts

### Root Layout (`src/app/layout.js`)

- Sets up the global HTML structure and includes the Google Quicksand font.
- Includes the `Navbar`, main content area (`children`), `WideDiv` footer section, and `Footer`.
- Defines metadata such as page title, description, and favicons.

### Navigation Bar (`src/components/Navbar.jsx`)

- Responsive navigation with dropdown menus on desktop and collapsible menus on mobile.
- Main navigation categories: Home, Marketing, Technology, Sales, Resources, Contact Us.
- Dropdowns contain links to subcategories and specific software comparison pages.
- Handles scroll effects and active state management for user-friendly navigation.

### Main Landing Page (`src/app/page.jsx`)

- Hero section highlighting AI-powered price comparison benefits.
- Email subscription form integrated with Web3Forms API.
- Dynamic 3D interface card showcasing real-time vendor analysis.
- Sections for "Best tools to run your business" and "Brands We Work With" featuring client logos.
- Uses Tailwind CSS for styling and lucide-react icons for visual elements.

### Footer Section (`src/components/WideDiv.jsx` and `Footer.jsx`)

- `WideDiv` provides a comprehensive footer with:
  - Company mission statement and branding.
  - Navigation links categorized under "What We Cover," "Our Company," "Legal," and "Social."
- `Footer` displays copyright information.

---

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server with `npm run dev` or `yarn dev`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Additional Notes

- The project uses client-side React components for interactive features such as navigation and subscription forms.
- The app is designed to be responsive and accessible across devices.
- Images and assets are stored in the `public/images` directory for easy reference.
- The project structure follows Next.js conventions for routing and layout.

---

Thank you for exploring Compare Bazaar! If you have any questions or want to contribute, please feel free to reach out.
