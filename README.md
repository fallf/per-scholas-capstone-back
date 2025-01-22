# Monthly Reset - Backend

Welcome to the **Monthly Reset** backend, a Node.js-powered API designed to manage user financial plans, goals, habits, and reset activities. This backend is built using **Express.js**, connected to MongoDB via **Mongoose**, and includes features such as authentication and data management.

## Table of Contents

- [About the Project](#about-the-project)
- [Run Links](#run-links)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

---

## About the Project

The Monthly Reset backend provides API endpoints to support the frontend, offering features such as user authentication, financial budget tracking, goal setting, habit tracking, and monthly reset functionalities.

---

## Run Links

- **API Base URL**: [http://localhost:5022](http://localhost:5022)

---

## Features

- User authentication with JWT
- Secure password hashing using bcrypt
- CRUD operations for budget, goals, habits, and reset data
- Global error handling for robust API responses
- Middleware integration for CORS and logging

---

## Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT), bcrypt
- **Middleware**: CORS, Morgan
- **Environment Management**: dotenv

---

## Setup Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:

   ```env
   PORT=5022
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the server:**

   ```sh
   npm start
   ```

5. The backend will be available at [http://localhost:5022](http://localhost:5022)

---

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate user

### Budget Routes

- `GET /api/budget/seed` - Seed budget data
- `GET /api/budget` - Get budget entries

### Goals Routes

- `GET /api/goal/seed` - Seed goal data
- `GET /api/goal` - Get user goals
- `POST /api/goal` - Add a new goal
- `PUT /api/goal/:id` - Update a goal
- `DELETE /api/goal/:id` - Delete a goal

### Habits Routes

- `GET /api/habit/seed` - Seed habit data
- `GET /api/habit` - Get habit data
- `POST /api/habit` - Add new habit
- `GET /api/habit/:id` - Get a habit by ID
- `PUT /api/habit/:id` - Update a habit
- `DELETE /api/habit/:id` - Delete a habit

### Reset Routes

- `GET /api/reset/seed` - Seed reset data
- `GET /api/reset` - Get reset data
- `POST /api/reset` - Create a reset entry
- `PUT /api/reset/:id` - Update a reset entry
- `DELETE /api/reset/:id` - Delete a reset entry

---

## Error Handling

- All unhandled routes will be redirected to the homepage.
- Global error handler returns a 500 error message in case of server issues.

---

## License

This project is licensed under the [ISC License](LICENSE).

---

Happy coding! 🎉
