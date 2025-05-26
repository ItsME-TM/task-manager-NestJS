# 📝 Task Manager

A **full-stack task management application** built with **NestJS** (backend), **React** (frontend), and **PostgreSQL** (database).  
Easily sign up, log in, and manage your tasks securely with JWT-based authentication.

---

## 🚀 Features

- **User Authentication:** Secure signup & login with JWT tokens.
- **Task Management:**  
    - Create, edit, delete, and toggle task completion.
    - Filter tasks by status: _All_, _Completed_, _Pending_.
- **Protected Routes:** Only authenticated users can manage tasks.
- **Responsive UI:** Clean, modern design with Material-UI.
- **API Documentation:** Explore backend API with Swagger UI.

---

## 🛠️ Tech Stack

### Backend

- **NestJS:** Progressive Node.js framework
- **TypeORM:** ORM for PostgreSQL
- **PostgreSQL:** Relational database
- **JWT & Passport:** Secure authentication
- **Bcrypt:** Password hashing
- **Swagger:** API docs (`/api` endpoint)

### Frontend

- **React:** UI library
- **Material-UI:** Modern React components
- **Axios:** HTTP client with JWT interceptors
- **Formik & Yup:** Form handling & validation
- **React Router:** Client-side routing

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 16.x)
- [PostgreSQL](https://www.postgresql.org/) (>= 12.x)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/ItsME-TM/task-manager-NestJS.git
cd task-manager-NestJS
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/task_manager?schema=public
JWT_SECRET=your-secret-key
PORT=3000
```
> Replace `<username>` and `<password>` with your PostgreSQL credentials.  
> Use a secure `JWT_SECRET` (e.g., a random string).

Run the backend and frontend same time :

```bash
npm run start
```

Run the backend server:

```bash
npm run start:dev
```

- Backend runs at: [http://localhost:3000](http://localhost:3000)
- Swagger API docs: [http://localhost:3000/api](http://localhost:3000/api)

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/` (optional):

```env
REACT_APP_API_URL=http://localhost:3000
```

Run the frontend:

```bash
npm start
```

- Frontend runs at: [http://localhost:8000](http://localhost:8000)

---

## 💡 Usage

1. **Sign Up:** Register at `/register` with a username and password.
2. **Log In:** Access `/login` to enter the task manager.
3. **Manage Tasks:**
     - View all tasks at `/tasks`
     - Add new tasks with the floating **+** button
     - Edit/delete tasks using icons on each card
     - Filter tasks: _All_, _Completed_, _Pending_
4. **Logout:** Click the logout button in the header.

> For API testing, use [Swagger](http://localhost:3000/api) or tools like Postman with JWT tokens.

---

## 📁 Project Structure

```
task-manager-NestJS/
├── backend/               # NestJS backend
│   ├── src/
│   │   ├── auth/         # Authentication (JWT, login, signup)
│   │   ├── tasks/        # Task management (CRUD)
│   │   ├── users/        # User management
│   │   └── main.ts       # Entry point
│   └── .env              # Backend environment variables
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/     # Login/Register components
│   │   │   ├── layout/   # Header/Footer
│   │   │   └── tasks/    # TaskList, TaskItem, TaskForm, TaskFilter
│   │   ├── contexts/     # AuthContext for JWT
│   │   └── services/     # API client (Axios)
│   └── .env              # Frontend environment variables
└── README.md             # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:

1. **Fork** the repository
2. **Create a branch:**  
     `git checkout -b feature/your-feature`
3. **Commit your changes:**  
     `git commit -m "Add your feature"`
4. **Push to GitHub:**  
     `git push origin feature/your-feature`
5. **Open a Pull Request**

Please report bugs or suggest features via [GitHub Issues](https://github.com/ItsME-TM/task-manager-NestJS/issues).

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Inspired by [NestJS documentation](https://docs.nestjs.com/) and task management tutorials.
- Thanks to the NestJS and React communities for their excellent resources.
- Built as a learning project to master full-stack development with NestJS and React.

---
