# User Management System


# Project Introduction
This is a Node.js based User Management System with authentication and security features. It allows users to register and login securely with multiple layers of protection against common web vulnerabilities.

---

# Features
- User Registration & Login
- Password hashing using bcrypt
- JWT Authentication
- Protected Routes (Middleware)
- Input Validation using validator
- Security Headers using Helmet
- Logging using Winston
- Logout functionality
- Rate Limiting for login protection
- API Key secured endpoints (API layer security)

---

# Security Implemented
- Passwords are securely hashed using bcrypt
- JWT used for authentication
- Route protection using authentication middleware
- Input validation to prevent invalid data
- Security headers added via Helmet (CSP & HSTS)
- Cross-Origin Resource Sharing (CORS) configured
- Rate limiting implemented to prevent brute-force login attempts
- XSS protection using xss-clean middleware
- API Key Authentication for protected API endpoints
- Separation of UI routes and secured API routes

---

# Tech Stack
- Node.js
- Express.js
- MongoDB
- EJS
- JWT
- bcrypt
- Helmet
- Winston
- express-rate-limit
- xss-clean
- cors

---

# Cyber Security Internship Project
