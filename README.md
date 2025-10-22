#  Team Blog Application

This repository contains both the **frontend** (React + Vite) and **backend** (Django + Django REST Framework) of the Team Blog application.

---

##  Frontend – Team Blog (React + Vite)

###  Overview
The frontend is built using **React** and **Vite**, styled with **Tailwind CSS**, and provides a responsive UI for viewing team members, blog posts, and about content.

---

###  Prerequisites
To run the frontend locally, ensure you have the following installed:

- Node.js (version 14.x or later)
- npm (comes with Node.js) or Yarn
- Git (for cloning the repository)

---

###  Installation
1.  **Clone the Repository**
    Clone the project from GitHub and navigate to the frontend directory:
    ```bash
    git clone [https://github.com/Gertrude-9/Group_BSE24-2.git](https://github.com/Gertrude-9/Group_BSE24-2.git)
    cd team_blog_frontend
    ```
2.  **Install Dependencies**
    Run the following command to install the required Node.js packages:
    ```bash
    npm install
    ```
3.  **Start the Development Server**
    Launch the app with:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser to view the application.

---

###  Project Structure
team_blog_frontend/
├── node_modules/         # Dependency files (auto-generated)
├── public/               # Static assets
├── src/                  # Source code
├── .gitignore            # Git ignore file
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Lock file for dependencies
├── postcss.config.cjs    # PostCSS configuration
├── README.md             # This file
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration

---

###  Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.

---

###  Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and bundling.
- **Tailwind CSS**: For styling with utility classes.
- **ESLint**: For code linting (configured via `eslint.config.js`).

---


## Backend – Team Blog (Django + Django REST Framework)

###  Overview
This is the backend for the Team Blog application, built using **Django** and **Django REST Framework**. It provides API endpoints for managing team members, blog posts, and about content, with support for media file uploads (e.g., avatars).

---

###  Prerequisites

To run the backend locally, ensure you have the following installed:

- Python (version 3.8 or later)
- `pip` (Python package manager)
- `virtualenv` (for creating isolated Python environments)
- Git (for cloning the repository)
- A text editor or IDE (e.g., VS Code, PyCharm)
- A database (SQLite is used by default)

---

###  Installation

1.  **Clone the Repository**
    Clone the project from GitHub and navigate to the backend directory:
    ```bash
    git clone [https://github.com/Gertrude-9/Group_BSE24-2.git](https://github.com/Gertrude-9/Group_BSE24-2.git)
    cd team_blog_backend
    ```
2.  **Set Up Virtual Environment**
    Create and activate a virtual environment to isolate dependencies:
    ```bash
    python -m venv venv
    ```
    Activate it:
    - On Windows: `venv\Scripts\activate`
    - On Linux/macOS: `source venv/bin/activate`
3.  **Install Dependencies**
    Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
4.  **Apply Database Migrations**
    Sync the database schema with your models:
    ```bash
    python manage.py migrate
    ```
5.  **Configure Settings**
    - **CORS Configuration**: The frontend (`http://localhost:5173`) needs to communicate with the backend. Ensure your `blog_project/settings.py` includes `corsheaders` in `INSTALLED_APPS` and `MIDDLEWARE`, and that `CORS_ALLOWED_ORIGINS` is configured correctly:
    ```python
    # settings.py
    INSTALLED_APPS = [
        # ...
        'corsheaders',
    ]

    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware',
        # ...
    ]

    CORS_ALLOWED_ORIGINS = [
        'http://localhost:5173',
    ]
    ```
    - **Media Files**: For development, ensure your `blog_project/settings.py` is configured to serve static files with `DEBUG=True`.

6.  **Create a Superuser (Optional)**
    To access the Django admin interface:
    ```bash
    python manage.py createsuperuser
    ```
7.  **Run the Development Server**
    Start the Django server:
    ```bash
    python manage.py runserver
    ```
    Open `http://127.0.0.1:8000` in your browser to verify the server is running.

---

###  Project Structure
team_blog_backend/
├── blog_app/             # Django app containing models, views, and URLs
├── blog_project/         # Django project settings and configuration
│   ├── init.py
│   ├── settings.py       # Project settings (e.g., CORS, media)
│   ├── urls.py           # URL routing
│   └── wsgi.py
├── db.sqlite3            # SQLite database file
├── manage.py             # Django management script
├── media/                # Media files (e.g., avatars)
├── venv/                 # Virtual environment (auto-generated)
└── requirements.txt      # Python dependencies

---

###  API Endpoints

The backend provides the following API endpoints:

- `http://127.0.0.1:8000/api/team-members/`: List and manage team members.
- `http://127.0.0.1:8000/api/blog-posts/`: List and manage blog posts.
- `http://127.0.0.1:8000/api/about/`: Manage about content.

---

###  Backend Integration
The backend serves API requests for the React + Vite frontend running at `http://localhost:5173`. Ensure both servers are active and that CORS is configured correctly to allow cross-origin requests.
