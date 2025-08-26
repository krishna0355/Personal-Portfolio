# 🌌 Krishna Agarwal – Personal Portfolio

🔗 **Live Demo:** https://krishna-agarwal-ko99.onrender.com


A modern, responsive **personal portfolio website** built with React, Bootstrap, and custom CSS animations.  
It showcases my skills, projects, resume, and includes a fully functional **contact form** integrated with **Brevo (SendinBlue)** for sending emails.

<img width="1888" height="903" alt="Screenshot 2025-08-27 021729" src="https://github.com/user-attachments/assets/b2b99f29-4f69-4fd6-ae59-961fb14c87e0" />

<img width="1897" height="883" alt="Screenshot 2025-08-27 021757" src="https://github.com/user-attachments/assets/837d8dda-681f-4cdc-a817-d559e2920a34" />

<img width="1894" height="890" alt="Screenshot 2025-08-27 021826" src="https://github.com/user-attachments/assets/9d7e9aab-a8a3-4adc-aa9e-7f458c874092" />

---

## ✨ Features

- 🎨 **Modern UI/UX** – clean layout, smooth animations, responsive design
- 🌓 **Dark Theme Inspired** – starry night background with attractive gradients
- 📜 **Resume Section** – quick access to my downloadable resume
- 🛠️ **Projects Showcase** – carousel/grid of my best projects
- 📧 **Contact Form** – send messages directly to my email via Brevo API
- 📱 **Responsive** – works seamlessly across desktop, tablet, and mobile
- 🌐 **Deployed on Vercel** – fast & free deployment with CI/CD from GitHub

---

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - React-Bootstrap
  - Animate.css
  - Custom CSS (glassmorphism & gradients)

- **Backend (API):**
  - Node.js (Express converted to Vercel Serverless Functions)
  - Brevo (SendinBlue) Transactional Email API

- **Deployment:**
  - Vercel

---

## 📂 Project Structure
```plaintext
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, icons, fonts
│ ├── components/ # React components (Navbar, Footer, Projects, Contact, etc.)
│ ├── App.js # Main app entry
│ ├── index.js # ReactDOM render
├── api/
│ └── contact.js # Serverless function for contact form
├── package.json
├── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/krishna0355/portfolio.git
cd portfolio

2. Install dependencies
npm install

3. Run locally
npm start
```

The app runs on http://localhost:3000

📡 Backend (Contact Form)

The contact form uses a Vercel Serverless Function (api/contact.js) with Brevo.

Setup environment variables

## Create a .env file in your root:

- **BREVO_API_KEY=your_brevo_api_key**
- **EMAIL_TO=your_email@example.com**

## 🌍 Deployment (Vercel)

Push code to GitHub

- **Go to Vercel**
, import the repo

Add environment variables (BREVO_API_KEY, EMAIL_TO) in Vercel dashboard

Deploy 🚀


## 📬 Contact Me:

📧 Email: krishnakumaragarwal99@gmail.com

💼 LinkedIn: Krishna Agarwal

💻 GitHub: krishna0355

## ⭐ Acknowledgements

React

Bootstrap

Animate.css

Brevo (SendinBlue)

Vercel

## 🖤 If you like this project, don’t forget to star ⭐ the repo!

---
