# Login Application (React + Node.js)

A simple full-stack login application built with **React (Frontend)** and **Node.js with Express (Backend)**.
The app allows users to log in with a username and password, validates credentials through an API, and redirects to a welcome page on successful login.

---

## 🚀 Features

* Login page with username and password fields
* Backend API for login validation
* Redirect to a Welcome page after successful login
* Error message for invalid credentials
* Username is remembered for future logins using **localStorage**
* Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* Axios
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* CORS
* dotenv

---

## 📂 Project Structure

```
Login
├── backend
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── frontend
    ├── public
    ├── src
    │   ├── pages
    │   │   ├── Login.js
    │   │   └── Welcome.js
    │   │
    │   ├── services
    │   │   └── api.js
    │   │
    │   ├── App.js
    │   └── index.js
    │
    ├── package.json
    └── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/SriCharan55/Login.git
```

```
cd Login
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Run the backend server:

```
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

Open a new terminal.

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔑 Test Login Credentials

Use the following credentials to log in:

```
Username: admin
Password: admin
```

If the credentials are correct, the user will be redirected to the **Welcome Page**.

If incorrect credentials are entered, an **error message** will appear.

---

## 🌐 API Endpoint

### Login API

```
POST /login
```

Request body example:

```
{
  "username": "admin",
  "password": "admin"
}
```

Response:

```
{
  "message": "Login successful"
}
```

---

## 🧠 How Username Remembering Works

After successful login:

```
localStorage.setItem("username", username);
```

When the login page loads again:

```
localStorage.getItem("username");
```

The saved username automatically fills the login field.

---

## 📦 Deployment

The backend can be deployed using platforms like **Render**, and the frontend can be deployed using **Vercel** or **Netlify**.

---

## 📹 Project Demo

You can include a screen recording link here explaining the project and its functionality.

---

## 👨‍💻 Author

**Sri Charan**

GitHub:
https://github.com/SriCharan55
