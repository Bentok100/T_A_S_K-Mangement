# 🔗 Live Link

> 🌐 **Live Demo:** [https://task-management-panscience-innovations-wcv6.onrender.com](https://task-management-panscience-innovations-wcv6.onrender.com)
---
# 📫 Postman Workspace

> 🧪 API Collection (Public Workspace):  
[https://web.postman.co/workspace/4c12e23d-bb68-401b-8c94-d56e3addfc0c](https://web.postman.co/workspace/4c12e23d-bb68-401b-8c94-d56e3addfc0c)

---
# 🧪 Test Credentials

### 👑 Admin Login
- **Email:** anuragrawat92946@gmail.com  
- **Password:** Anurag92@

### 🙋 User Login
- **Email:** anuragrawat7776@gmail.com  
- **Password:** Anurag

---
# ✅ Task Management System — PanScience Innovations

[![Deployment](https://img.shields.io/badge/Deployed-Render-green)](https://task-management-panscience-innovations-wcv6.onrender.com/)
[![Tech: MERN](https://img.shields.io/badge/Tech-MERN-blueviolet)](https://github.com/AnuragRawat92/Task-Management-PanScience-Innovations)

A secure, role-based Task Management System built using the **MERN stack**, designed to streamline task assignment, tracking, and performance review for Admins and Users. Features include user and task CRUD operations, feedback workflows, performance charts, document attachments, and Docker-based deployment.

### 🔗 Live Demo  
[🌐 Live App](https://task-management-panscience-innovations-wcv6.onrender.com/)  
[📂 GitHub Repo](https://github.com/AnuragRawat92/Task-Management-PanScience-Innovations/tree/main)  
[📫 Postman Workspace](https://web.postman.co/workspace/4c12e23d-bb68-401b-8c94-d56e3addfc0c)

---

## ✨ Features

### 🔐 Authentication & Authorization
- JWT-based login/registration
- Secure role-based routing for Admins and Users
- Password hashing with bcrypt

### 👑 Admin Dashboard
- Assign, update, and delete tasks
- Review submitted tasks (accept/reject with feedback)
- Monitor user performance via charts
- Perform user CRUD operations
- View task analytics and history

### 🙋 User Dashboard
- View and manage personal tasks
- Start, submit, and rework on tasks
- Track status and admin feedback
- Edit own profile and password

### 📊 Analytics
- Visual task and performance analytics using Chart.js

### 📁 Attachments
- Upload up to 3 PDF documents per task
- View/download attachments from task details

---

## 🧰 Tech Stack

| Layer             | Tech                                             |
|------------------|--------------------------------------------------|
| **Frontend**     | React, React Router, Bootstrap, Chart.js         |
| **Backend**      | Node.js, Express.js                              |
| **Database**     | MongoDB (Mongoose ORM)                           |
| **Auth**         | JWT, bcrypt                                      |
| **State Mgmt**   | React Context API                                |
| **File Upload**  | Multer (local storage)                           |
| **Visualization**| Chart.js, MDB React                              |
| **Testing**      | Postman collection                               |
| **DevOps**       | Docker, Docker Compose, Render for deployment    |

---

## 🔁 Task Workflow

1. **Admin assigns a task** to a user
2. **User sees the task**, marks it as In Progress
3. **User submits task** → Admin reviews and either **approves or rejects**
4. **Rejected tasks** can be **reworked** and resubmitted by the user

---

## 🐳 Docker Setup

Ensure [Docker](https://docs.docker.com/get-docker/) is installed.

### 🧪 Run Locally with Docker


git clone https://github.com/AnuragRawat92/Task-Management-PanScience-Innovations.git
cd Task-Management-PanScience-Innovations
docker-compose up --build
Frontend → http://localhost:5173
Backend → http://localhost:5000

📂 Folder Structure
bash
Copy
Edit
Task-Management-PanScience-Innovations/
├── client/                # React frontend
├── server/                # Node.js/Express backend
├── docker-compose.yml     # Docker config
└── README.md
📬 API & Docs
Postman Collection: Postman Workspace

Full CRUD for Users and Tasks

File upload routes for PDF attachments

Secure role-based APIs

✅ Requirements Covered
 JWT Authentication

 User/Task CRUD

 Admin/Role-based access

 Attachments & File handling

 Performance dashboard

 Docker containerization

 Postman-tested API

 Responsive Bootstrap UI

 MongoDB (Dockerized)

 Live deployment on Render

🧪 Testing
All routes tested via Postman

Basic manual integration testing

API documentation included

Automated tests using Jest/Mocha can be added for future enhancement.

🧠 Design Decisions
Used React Context for state management to keep the setup lightweight

Chart.js for easy and effective visual analytics

Multer with local storage for quick file upload prototyping

Kept the architecture modular for ease of extension

📌 Future Improvements
Add WebSocket for real-time task updates

Add automated tests (Jest or Cypress)

Migrate file storage to AWS S3

Add email notifications for task status updates

Implement audit logs for admin actions
---

# 👤 Contact

- **Name:** Anurag Rawat  
- **Email:** 📧 anuragrawat92946@gmail.com  
- **College:** 🏫 IET Lucknow
