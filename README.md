🌟 ZyrahWear — Modern E-Commerce Platform
ZyrahWear is a full-stack MERN (MongoDB, Express.js, React, Node.js) based e-commerce platform designed for trendy apparel shopping.
It features a user-friendly UI, secure backend, and seamless shopping experience — from browsing products to completing payments.

📌 Features
🖥️ Frontend (React + Tailwind CSS)
Responsive UI for all devices (mobile, tablet, desktop)

Product listing & details with images and pricing

Shopping cart with add, remove, and update quantity functionality

User authentication (Signup/Login)

Order history for registered users

⚙️ Backend (Node.js + Express + MongoDB)
Secure REST API for products, cart, orders, and users

JWT authentication & authorization

Payment integration with Razorpay (or any gateway used)

MongoDB database for storing users, products, and orders

🛠️ Tech Stack
Frontend:React.js, Tailwind CSS, Context API / ShopContext

Backend:Node.js, Express.js, MongoDB + MongooseJWT Authentication

Razorpay API (Payments)

Folder Structure:
ZyrahWear/
│── backend/            # Backend (Node.js + Express API)
│   ├── models/         # Mongoose Models
│   ├── routes/         # API Routes
│   ├── controllers/    # Request Handlers
│   └── server.js       # App entry point
│
│── frontend/           # Frontend (React.js)
│   ├── src/components/ # UI Components
│   ├── src/pages/      # Pages
│   ├── src/context/    # Context API for state management
│   └── App.js          # Main React App
│
└── README.md

1️⃣ Install dependencies

cd backend
npm install

cd frontend
npm install

cd admin
npm install


2️⃣ Set up environment variables
Create a .env file inside backend and add:
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

3️⃣ Run the project
Backend
cd backend
npm start

Frontend
cd frontend
npm run dev

Admin
cd admin
npm run dev

🚀 Live Demo: https://zyrahwear-frontend.vercel.app
