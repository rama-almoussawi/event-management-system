# Event Hub — Event Management System

A responsive **ReactJS** web application that enables users to discover upcoming tech events, filter by category, and reserve seats online with instant bilingual (**English / French**) support.

**Course:** CSCI426 – Advanced Web Programming (Project Phase 1, Fall 2026–2027)  
**Institution:** Lebanese International University (LIU) — Department of Computer Science and Information Technology  
**Authors:** Rasha Raad & Rama Al Moussawi   
**Repository:** [https://github.com/rama-almoussawi/event-management-system](https://github.com/rama-almoussawi/event-management-system)

---

## Overview

**Event Hub** replaces scattered event announcements with a unified, responsive interface designed for attendees looking to explore events and book seats online. Built with React, React Router, and Bootstrap, this Phase 1 frontend release provides multi-page client-side routing, dynamic event selection via `localStorage`, and instant language switching across all views using React Context.

> **Note:** Authentication (Login) and ticket registration confirmations are simulated on the client side in Phase 1.

---

## Key Features

* **Event Catalogue & Live Search:** Browse upcoming events and filter dynamically by event title or category (`Tech`, `Workshops`, `AI`, `Coding`, `Conference`).
* **Event Details & Seat Availability:** View event banners, dates, venues, and remaining seat counts on each event card.
* **Dynamic Registration Page (`/register`):** Selecting an event persists its `id` in `localStorage` and loads its details alongside a booking form (full name, email, number of tickets) with instant confirmation feedback.
* **Bilingual Interface (`EN` / `FR`):** Toggle the entire application between English and French in real time without page reloads via `LanguageContext`.
* **Responsive Design:** Adapts seamlessly from multi-column desktop grids to single-column mobile layouts using Bootstrap and custom CSS media queries.
* **Persistent Navigation & Footer:** Shared `NavBar` across all routes and a `Footer` displaying contact phone, email, and address details.

---

## Site Map & Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero banner, search bar, quick category chips (`Tech`, `Workshops`, `AI`, `Coding`), and upcoming events preview |
| `/about` | **About** | Platform mission, *How It Works* overview (`Discover` → `Register`), and a carousel of past tech events |
| `/events` | **Events** | Full searchable event catalogue with category dropdown filtering |
| `/register` | **Register** | Dynamic registration page displaying the user's selected event and ticket booking form |
| `/contact` | **Contact** | Contact information (address, phone, email), social links, and an interactive inquiry form |
| `/login` | **Login** | Simulated email and password authentication form |

---

## Project Structure

```text
src/
├── Assets/                  # Event card and banner images (AI & Data Science, Cybersecurity, Robotics, etc.)
├── Components/              # Reusable UI components (NavBar, Footer)
├── context/
│   └── LanguageContext.js   # Global React Context managing active EN / FR language state
├── Data/
│   └── events.json          # Local JSON dataset containing event titles, categories, dates, venues, and seats
├── pages/                   # Page-level components (Home, About, Events, Contact, Login, Register)
├── styles/                  # Dedicated CSS stylesheets for individual pages and the footer
├── App.js                   # Root component configuring LanguageProvider, Router, and all 6 routes
└── index.js                 # Application entry point
