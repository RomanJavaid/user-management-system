# User Management System


# Project Introduction
This is a Node.js based User Management System with authentication and security features. It allows users to register and login securely with multiple layers of protection against common web vulnerabilities

---

# Features
- User Registration & Login system
- Secure authentication using JWT
- Password hashing using bcrypt
- Protected routes using middleware
- Input Validation using validator
- Security Headers using Helmet
- Rate Limiting for login protection
- API Key secured endpoints
- CSRF Protection using csurf middleware
- Dockerized application for containerized deployment

---

# Security Implemented
- Secure password hashing using bcrypt
- JWT-based authentication system
- Route protection using authentication middleware
- Input validation to prevent malicious data
- Security headers implemented using Helmet (CSP, HSTS, etc.)
- CORS configured for controlled access
- Rate limiting for brute-force attack prevention
- XSS protection using xss-clean middleware
- API key based protection for secured routes
- Separation of public UI routes and protected API routes
- CSRF protection implemented using csurf middleware (user routes)

---

# Security Testing & Validation
- Performed vulnerability assessments using OWASP ZAP for OWASP Top 10 risks
- Conducted penetration testing using Burp Suite and SQLMap
- Tested SQL Injection, XSS, CSRF, and NoSQL injection attack scenarios
- Verified authentication flow, JWT handling, and session integrity under attack simulation
- Validated CSRF token enforcement by modifying and removing tokens via Burp Suite
- Observed rate limiting behavior during brute-force and repeated login attempts
- Performed web server and system-level security scans using Nikto and Lynis
- Verified dependency security using npm audit

# Security Enhancements
- Implemented API security hardening using API keys, rate limiting, and CORS policies
- Configured CSP (Content Security Policy), HSTS, and secure HTTP headers
- Configured intrusion detection and brute-force monitoring using Fail2Ban
- Strengthened authentication and session security mechanisms
- Applied CSRF protection with controlled route-level enforcement
- Containerized application using Docker and validated image security through scanning
- Identified and mitigated security issues found during automated and manual testing

# Docker Implementation & Security
- Docker Desktop installed and configured with WSL integration
- Application containerized successfully using Docker
- Docker image built and deployed in isolated environment
- Performed Docker vulnerability scanning
- Identified security issues in base image and dependencies
- Evaluated deployment readiness from security perspective

---

# Tools
- Node.js, npm
- Git, GitHub
- PowerShell
- WSL (Ubuntu environment)
- Burp Suite
- OWASP ZAP
- Nikto
- Lynis
- npm audit
- Docker, Docker Desktop

# Tech Stack
- Node.js, Express.js
- MongoDB Atlas
- EJS
- JWT
- bcrypt
- Helmet, Winston
- express-rate-limit
- xss-clean, cors

---

# Cyber Security Internship Project
