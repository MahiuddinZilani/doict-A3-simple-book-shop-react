# Book Store

[Book Store](https://a3-doict-book-shop.surge.sh/)

Welcome to **BookStore**, a modern and responsive online platform for book enthusiasts. This project is built using **React**, **React Router DOM**, **Tailwind CSS**, and several UI component libraries such as **Meraki UI**, **Mamba UI**, and **Flowbite**. It also integrates **SweetAlert** for notifications, creating an interactive and user-friendly experience. The platform allows users to explore, search for, and purchase books online, offering a seamless interface for book lovers.

## Key Features

- 📚 **Book Catalog**: Displays a collection of books with key details such as title, author, category, and rating.
- 🔎 **Search & Filter**: Users can search and filter books based on categories, tags, and ratings.
- 📦 **Add to Cart & Wishlist**: Users can add books to their shopping cart or wishlist for future purchases.
- 🚀 **Responsive Design**: Mobile-friendly and optimized for performance across devices.
- 🎨 **UI Libraries Integration**: Enhanced with **Meraki UI**, **Mamba UI**, and **Flowbite** for beautiful components.
- 🎉 **Interactive Alerts**: Using **SweetAlert** for user feedback (success/error notifications).

## Technologies & Libraries Used

### React

- **React**: Core framework for building the user interface.
- **React Router DOM**: Implements dynamic routing for pages like `Home`, `About`, `Book Details`, `Cart`, `Blog`, and `FAQ`.

### React Router DOM Features

- **Dynamic Routes**: Created dynamic routes using `useParams` to fetch specific book details.
- **Loader and useLoaderData**: Data fetched from JSON files and APIs, including handling loading states with `loader` functions.

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework for styling the entire application.
- **Meraki UI**: Pre-built responsive components for forms, navigation, modals, and more.
- **Mamba UI**: Additional components such as cards, headers, and footers for a polished look.
- **Flowbite**: Components like buttons, navigation bars, and alert systems to enhance user interactions.

### Alerts & Notifications

- **SweetAlert**: Provides customizable alerts and confirmations for actions like adding items to the cart, removing items, or completing purchases.

## Project Structure

```
/public
  └── /bookShopApi.json                 # Data source for books
/src
  ├── components                        # Reusable components
  │   ├── shared ──
  |   |   ├── List.jsx
  |   |   ├── Menu.jsx
  |   |   └── Navbar.jsx
  |   |
  │   ├── footer ── Footer.jsx           # Footer section
  │   ├── cards ── BookCard.jsx          # Component for displaying book details
  │   ├── banner ── Banner.jsx           # Homepage banner
  |   └── tags ── Tag.jsx
  |
  |
  ├── pages
  │   ├── Home ── Home.jsx                # Homepage with book listings
  │   ├── About ── About.jsx              # About us page
  │   ├── BookDetails ── BookDetails.jsx  # Book detail page (uses params to fetch data)
  │   ├── Blog ── Blog.jsx                # Blog section for news and articles
  │   ├── Faq ── FAQ.jsx                  # Frequently asked questions
  │   └── Error ── ErrorPage.jsx          # Custom error page
  |
  ├── Layout ── Root.jsx                  # Main Layout
  ├── App.js                              # Main app file
  ├── index.js                            # Entry point for React
  ├── router ── Router.jsx                # Entry point for React
  └── routes.js                           # BrowserRouter and route definitions
```

## Installation & Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- Basic knowledge of **React** and **JavaScript**.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/MahiuddinZilani/doict-A3-simple-book-shop-react
   cd bookstore-platform
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The project will be live at `https://a3-doict-book-shop.surge.sh/`.

## Key Attributes of the Project

- **React Components**: Each part of the application, such as Navbar, Footer, and BookCard, is divided into reusable components.
- **Routing with `React Router DOM`**:
  - Implemented nested routes for different sections (Home, About, Blog, etc.).
  - Used `useParams` to dynamically load book details based on the book ID.
  - Error handling with `ErrorPage` component.
- **Data Fetching with `Loader`**: Used React Router's loader functions to fetch data from `bookShopApi.json` and pass it into the component via `useLoaderData`.
- **Responsive Design with Tailwind CSS**: Built mobile-first, responsive layouts to ensure a smooth experience across all devices.
- **Custom Styling with Tailwind**: Adjusted component styles for responsiveness, text alignment, margins, paddings, and color schemes.
- **SweetAlert Integration**: For interactive, beautiful alert messages on actions like adding books to the cart or wishlist.
- **UI Libraries**:
  - **Meraki UI** for beautiful form components, navbars, and modals.
  - **Mamba UI** for cards, headers, and other layout components.
  - **Flowbite** for UI components like buttons and alerts.

## UI Components Breakdown

### Navbar (Tailwind + Flowbite)

The Navbar is sticky and responsive. It remains at the top of the page even when scrolling. It includes links to the homepage, about, blog, and FAQ sections using `NavLink` for active styling.

### Book Details Page

The `BookDetails.jsx` component fetches the book's information from the JSON file using the loader and dynamically displays book-specific details. A user can click a button to add the book to the cart or wishlist, triggering a **SweetAlert** notification.

### Loader & useLoaderData

Data for the application is fetched using the `loader` function in React Router DOM. The loader function retrieves data from a local JSON file (`bookShopApi.json`) and passes it to components using `useLoaderData`.

```jsx
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  // Component logic...
};
```

## Future Enhancements

- Implement **authentication** for users to sign in and track their orders.
- Add **real-time search** and filter features using **Fuse.js** or other fuzzy search libraries.
- Enhance **payment integration** using services like **Stripe** or **PayPal**.

git add .
git commit -m "readme.md is edited"
git push

npm run build
surge dist a3-doict-book-shop.surge.sh
