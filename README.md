# *Sparkle*

![Sparkle Preview](./preview.png)

Welcome to **Sparkle**, a full-featured e-commerce website developed using the MERN (MongoDB, Express, React, Node.js) stack. This platform provides a smooth and interactive shopping experience with a modern design, secure authentication, and responsive layout.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Axios, context-based auth state.
- **Backend**: Node.js, Express, Nodemon for dev reloads, Multer for uploads, Firebase Storage for product media, Cloudinary-ready middleware.
- **Database**: MongoDB via Mongoose ODM.
- **Authentication**: Stateless JWT tokens issued in `server.js` for login/signup.
- **Tooling**: dotenv for secrets, cors for cross-origin access, zod/express-validator for data safety.

## Technology Responsibilities

- **React 18** drives all UI views (pages, components) and manages state via custom contexts for auth/session data.
- **Vite** provides the dev server, module bundling, hot reload, and production builds consumed by deployment targets.
- **Tailwind CSS** powers the design system, enabling utility-first styling for responsive layouts without bespoke CSS files.
- **Axios** centralizes HTTP calls in `src/api.js`, attaching the configured base URL so every component hits the same REST endpoints.
- **Express** defines REST routes, middleware chains, and error handling while mounting feature routers under `/api/*`.
- **Mongoose** models (`Product`, `Trend`, etc.) enforce schema rules and provide query helpers for MongoDB collections.
- **MongoDB Atlas/local Mongo** stores catalog entities, user accounts, and any metadata required by the storefront.
- **Multer + Firebase Admin SDK** intercept multipart form uploads, stream image buffers to Firebase Storage, and return CDN-ready URLs.
- **JSON Web Tokens (jsonwebtoken)** secure login/signup flows by issuing expiring tokens that the frontend uses on protected requests.
- **cors & dotenv** handle cross-origin access and environment hydration so the same codebase runs locally and on hosting providers.

## Features

- **User Authentication & Authorization**: Secure sign-in with JWT, ensuring privacy and access control.
- **Product Management**: CRUD operations for managing products and user profiles.
- **Secure Password Handling**: Secure password hashing for user accounts.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Environment Variables**: Configured through `.env` for secure data handling.

## Local Setup

> Prerequisites: Node.js 18+, npm 9+, MongoDB connection string (Atlas or local), and a Firebase service account JSON if you plan on uploading product images.

1. **Clone and enter the repo**
    ```bash
    git clone https://github.com/yugalkaushik/sparkle.git
    cd sparkle
    ```

2. **Install dependencies**
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. **Create environment files**
    - `backend/.env`
      ```env
      PORT=5100
      MONGO_URI=mongodb+srv://...
      JWT_SECRET=super_secret
      NODE_ENV=development
      FIREBASE_ADMIN_SDK_KEY="{\"type\":\"service_account\",...}"
      KEEP_ALIVE_URL=https://your-deployment.onrender.com/health
      KEEP_ALIVE_INTERVAL_MS=840000
      ```
    - `frontend/.env`
      ```env
      VITE_API_BASE_URL=http://localhost:5100/api
      ```

4. **Start the backend (Terminal #1)**
    ```bash
    cd backend
    npm start
    ```
    This runs `nodemon server.js`, connects to MongoDB, exposes REST API routes under `/api`, and begins self-pinging `/health` when `KEEP_ALIVE_URL` is set.

5. **Start the frontend (Terminal #2)**
    ```bash
    cd frontend
    npm run dev
    ```
    Vite serves the UI on `http://localhost:5173` (default) and proxies API calls to the backend using `frontend/src/api.js`.

6. **Build for production (optional)**
    ```bash
    cd frontend && npm run build
    ```

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

## Frontend ↔ Backend Integration

- The frontend centralizes API access through `frontend/src/api.js`, which instantiates Axios with `VITE_API_BASE_URL` (defaults to `http://localhost:5100/api`).
- Every page/component (Home, Men, Admin, etc.) consumes REST endpoints such as `/api/products`, `/api/trend`, `/api/login`.
- Auth tokens returned by the backend are stored client-side (via context) and included on protected calls.
- File uploads use multipart requests handled by Multer, forwarded to Firebase Storage when the service account key is configured.

## API Surface Overview

- `GET /health` → Simple uptime probe leveraged by keep-alive jobs.
- `POST /api/login` / `POST /api/signup` → Issue short-lived JWTs.
- `GET /api/products`, `/api/trend`, `/api/discover`, etc. → Read-only catalog data consumed by the storefront.
- `POST /api/products/add` → Admin-only endpoint supporting up to 10 images per product with Firebase Storage.

All routes follow standard REST semantics (JSON payloads, HTTP status codes). CORS is configured for open origins so the Vite dev server and hosted frontend can call the API without extra setup.


- Integrating the Vite/React frontend with Express required consistent environment handling; a dedicated Axios client reads `VITE_API_BASE_URL`, while CORS remains permissive so both localhost and Render deployments communicate effortlessly.
- The keep-alive service added to `server.js` self-pings the `/health` route whenever `KEEP_ALIVE_URL` is defined, preventing Render’s free tier from idling at the cost of higher outbound requests (configurable via `KEEP_ALIVE_INTERVAL_MS`).
- JWT authentication uses stateless tokens issued on login/signup and stored in the frontend auth context, enabling protected API calls without server-side sessions and simplifying horizontal scaling.
- Product media uploads pass through Multer, stream into Firebase Storage with unique UUID prefixes, and return public URLs stored on each product document for instant CDN delivery.
- Express-validator/zod-style guardrails run inside route handlers before MongoDB writes, ensuring payloads are sanitized and preventing schema drift in Mongoose models.
- Environment separation keeps secrets in `.env` files per package; Vite exposes only `VITE_*` variables while the backend relies on `dotenv` to hydrate runtime config for MongoDB, JWT, Firebase, and keep-alive behavior.
- Catalog endpoints are optimized via lean Mongoose queries and selective field projection, minimizing payload sizes for the home page sections such as Trends and Discover.
- The architecture remains cloud-ready: stateless APIs plus MongoDB Atlas and Firebase Storage allow simple scaling by adding more Node instances behind a load balancer while leveraging CDNs for static assets and images.

## Interview Introduction

"Sparkle is a production-ready MERN commerce experience that I engineered from the ground up: React/Vite with Tailwind delivers the storefront, Express and MongoDB expose modular REST APIs, and Firebase Storage handles media pipelines. I emphasize operational polish—JWT-protected flows and environment-aware configurations—so the same codebase moves seamlessly from local development to cloud deployment."

