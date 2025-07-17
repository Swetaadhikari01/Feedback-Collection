# Feedback-Collection 
📁 client/ (Frontend):-

1. public/index.html: HTML template for React.

src/
2. components/
    (a) FeedbackForm.jsx: Public feedback form with validation.
    (b) AdminLogin.jsx: Static login for admin (hardcoded credentials).
    (c) FeedbackList.jsx: Displays feedback entries with search.

3. pages/
    (a)HomePage.jsx: Renders the feedback form and link to admin login.
    (b)AdminPage.jsx: Renders feedback list for logged-in admin.
    (c)App.jsx: React Router setup.

4. api.js: Axios instance for making requests to backend.

5. index.js: Entry point for React app.

📁 server/ (Backend)
1. models/Feedback.js: Mongoose schema for feedback documents.

2. routes/feedback.js: Express routes for POST/GET feedback entries.

3. server.js: Main Express server file; connects MongoDB, configures middleware, mounts routes.

4. package.json: Backend npm config.
