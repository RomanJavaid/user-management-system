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
- Secure password hashing using bcrypt
- JWT-based authentication system
- Route protection using authentication middleware
- Input validation to prevent invalid and malicious data
- Security headers implemented using Helmet (CSP, HSTS, etc.)
- CORS configured to control cross-origin access
- Rate limiting implemented to prevent brute-force attacks
- XSS protection using xss-clean middleware
- API key based protection for secured routes
- Separation of public UI routes and protected API routes

---

# Security Testing & Validation
The application was tested for common web security vulnerabilities using industry-standard security tools.

- Captured and analyzed HTTP requests using Burp Suite.
- Performed automated security testing for injection vulnerabilities.
- Verified login and authentication endpoints under attack simulation.
- Observed application behavior under rate limiting conditions.
- Confirmed secure handling of user inputs and authentication flow.

## Result:
No critical vulnerabilities were found. The application successfully passed basic security validation tests and demonstrates secure handling of authentication and user input.

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
