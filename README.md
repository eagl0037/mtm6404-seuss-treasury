# Seuss Treasury

A React web application built with Vite and React Router that displays Dr. Seuss books and quotes using the Seussology API.

---

## Project Overview

Seuss Treasury is a simple book and quotes app that dynamically fetches data from the Seussology API. Users can browse a list of Dr. Seuss books, view detailed information about each book, and read random quotes from the books.

---

## Features

- Browse a list of Dr. Seuss books with cover images.
- View detailed information about each book, including title, cover, and description.
- Read 10 random quotes from Dr. Seuss books.
- Smooth client-side routing with React Router.
- Responsive design and accessible UI.

---

## Technologies Used

- React 18
- Vite
- React Router v7
- JavaScript (ES6+)
- CSS Modules

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone this repository

```bash
git clone https://github.com/eagl0037/mtm6404-seuss-treasury.git
Navigate to the project directory


cd mtm6404-seuss-treasury
Install dependencies


npm install
Start the development server


npm run dev
Open your browser and go to

http://localhost:5173
Project Structure

/src
  /assets           # Images and static assets
  /pages            # React components for pages (Books, BookDetails, Quotes)
  App.jsx           # Main app component with routes
  main.jsx          # Entry point
  App.css           # App styles
  index.css         # Global styles
index.html          # HTML template
package.json        # Project config and dependencies
vite.config.js      # Vite config
API
Data is fetched from the Seussology API:

GET /api/books — list of books

GET /api/books/:id — details for one book

GET /api/quotes/random/10 — 10 random quotes

Author
Natasha Eagles

License
This project was created for educational purposes as part of the Algonquin College MTM6404 Web Applications course.

Acknowledgements
Dr. Seuss and the Seussology API team

React and Vite communities
