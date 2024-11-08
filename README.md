# *Sparkle*

![Sparkle Preview](./preview.png)

Welcome to **Sparkle**, a full-featured e-commerce website developed using the MERN (MongoDB, Express, React, Node.js) stack. This platform provides a smooth and interactive shopping experience with a modern design, secure authentication, and responsive layout.

## Overview

Sparkle is built with the following technologies:

- **Frontend**: React with Tailwind CSS for a responsive and modern user interface.
- **Backend**: Node.js and Express for robust API handling and server-side operations.
- **Database**: MongoDB for efficient data storage and retrieval.
- **Authentication**: JWT-based user authentication for secure access.
- **Environment Configuration**: `dotenv` to manage sensitive data securely.

## Features

- **User Authentication & Authorization**: Secure sign-in with JWT, ensuring privacy and access control.
- **Product Management**: CRUD operations for managing products and user profiles.
- **Secure Password Handling**: Secure password hashing for user accounts.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Environment Variables**: Configured through `.env` for secure data handling.

## Installation

To run Sparkle locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yugalkaushik/sparkle.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd sparkle
    ```

3. **Install dependencies for both frontend and backend:**

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the `backend` directory and add required variables such as `MONGODB_URI`, `JWT_SECRET`, etc.
   - Update the frontend and backend hosts accordingly.

5. **Run the Backend Server:**

    ```bash
    npm run server
    ```

6. **Start the Frontend Development Server:**

    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

