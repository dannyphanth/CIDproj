# CIDproj — Crash Case Management System

An internal web application built for **Collision and Injury Dynamics, Inc.** to replace manual Excel-based workflows with a structured, searchable crash case database.

**Live App:** https://ci-dproj-njrbh8ygz-dannyphanth.vercel.app/

---

## Overview

CIDproj allows analysts to create, search, filter, and review vehicle crash cases. Each case stores detailed per-vehicle data including CDC (Collision Deformation Classification) codes, Delta-V measurements, and VIN-decoded vehicle specs pulled directly from the NHTSA API.

Before this tool, case data was tracked manually in Excel. CIDproj centralized that data into a MongoDB database with a full REST API, cutting down on manual entry and making cases searchable by dozens of parameters.

---

## Features

- **Case Management** — Create, view, update, and delete crash cases with multi-vehicle support
- **Advanced Filtering** — Filter cases by crash date, vehicle make/model/year, body class, damage location, Delta-V range, PDOF range, and barrier equivalent speed (BES)
- **VIN Decoding** — Automatically fetches vehicle body class from the NHTSA vPIC API on case submission
- **CDC Data** — Stores full Collision Deformation Classification data per vehicle including force direction, deformation location, and damage distribution
- **Delta-V Data** — Tracks impact severity metrics including total Delta-V, longitudinal/lateral components, energy absorption, and estimated severity ranking

---

## Tech Stack

**Frontend**
- React 18, React Router v6
- Tailwind CSS, Bootstrap, Styled Components
- Axios, React Select, RC Slider

**Backend**
- Node.js, Express.js
- MongoDB Atlas, Mongoose
- Deployed on Vercel

**External APIs**
- NHTSA vPIC API (VIN decoding)

---

## Project Structure

```
CIDproj/
├── frontend/
│   └── src/
│       ├── Components/       # Reusable UI components
│       │   ├── AddCaseForm/  # Multi-step case creation form
│       │   ├── CaseInfoContent/  # CDC, Delta-V, specs displays
│       │   ├── FilterSearchForm/ # Advanced filter UI
│       │   └── ListSearchForm/   # Search results table
│       └── Views/            # Page-level components
└── server/
    ├── controllers/          # Route handler logic
    ├── models/               # Mongoose schemas
    └── routes/               # Express route definitions
```

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas URI

### Installation

```bash
# Clone the repo
git clone https://github.com/dannyphanth/CIDproj.git

# Install server dependencies
cd server
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Variables

In `/server`, create a `config.env` file:

```
ATLAS_URI=your_mongodb_connection_string
PORT=5000
```

### Running Locally

```bash
# Start the backend
cd server
node server.js

# Start the frontend
cd frontend
npm start
```

Frontend runs on `http://localhost:3000`, backend on `http://localhost:5000`.
