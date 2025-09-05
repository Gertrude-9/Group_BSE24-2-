# Team Blog Frontend 

# Overview:
This is the frontend for the Team Blog application, built using React and Vite. It provides a user interface for viewing team members, blog posts, and about content, with a focus on a responsive design using Tailwind CSS.

# Prerequisites:
Node.js (version 14.x or later)
npm (comes with Node.js) or yarn
Git (for cloning the repository)

# Installation:
1. Clone the Repository
   git clone https://github.com/Gertrude-9/Group_BSE24-2.git
   cd team_blog_frontend
2. Install Dependencies Run the following command to install the required Node.js packages
   npm install
3. Start the Development ServerLaunch the app with
   npm run dev
Open http://localhost:5173 in your browser to view the application.

# Project Structure
team_blog_frontend/
├── node_modules/         # Dependency files (auto-generated)
├── public/              # Static assets
├── src/                 # Source code
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML file
├── package.json         # Node.js dependencies and scripts
├── package-lock.json    # Lock file for dependencies
├── postcss.config.cjs   # PostCSS configuration
├── README.md            # This file
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration

# Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.

# Technologies Used
React: For building the user interface.
Vite: For fast development and bundling.
Tailwind CSS: For styling with utility classes.
ESLint: For code linting (configured via eslint.config.js).

# Team Blog Backend

# Overview:
This is the backend for the Team Blog application, built using Django and Django REST Framework. It provides API endpoints for managing team members, blog posts, and about content, with support for media file uploads (e.g., avatars)

# Prerequisites:
1. Python: Version 3.8 or later (check with python --version).
2. pip: Python package manager (usually included with Python).
3. Virtualenv: For creating isolated Python environments (install with pip install virtualenv if not present).
4. Git: For cloning the repository (install from https://git-scm.com/downloads).
5. Database: SQLite is used by default (included as db.sqlite3). For production, consider PostgreSQL.
6. Text Editor/IDE: e.g., VS Code, PyCharm, or any preferred editor.

# Installation:
1. Clone the Repository
   Clone the project from GitHub:
   git clone https://github.com/Gertrude-9/bse_ci_cd.git
   cd team_blog_backend
2. Set Up Virtual Environment
   Create and activate a virtual environment to isolate dependencies:
   python -m venv venv
   
   Activate it:
   On Windows:venv\Scripts\activate
   On Linux: source venv\bin\activate
3. Apply Database Migrations
   Sync the database schema with your models:
   python manage.py migrate
4. Configure Settings
   CORS Configuration: Ensure the frontend (http://localhost:5173) can communicate with the backend. Verify blog_project/settings.py includes:INSTALLED_APPS = [
    # ... other apps ...
    'corsheaders',
   ]

   MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # ... other middleware ...
   ]

   CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
   ]

# Media Files: 
Media files (e.g., avatars) are stored in the media/ directory. For development, ensure DEBUG=True and the following are in blog_project/settings.py:
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# URL Configuration:
Verify blog_project/urls.py includes media serving (for development):
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # ... your URL patterns ...
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

5. Create a Superuser (Optional)
   To access the Django admin interface:
   python manage.py createsuperuser
   Follow the prompts to set a username, email, and password.

6. Run the Development Server
   Start the Django server:
   python manage.py runserver
   Open http://127.0.0.1:8000 in your browser to verify the server is running, or use it as the API base URL for the frontend.

# Project Structure
team_blog_backend/
├── blog_app/            # Django app containing models, views, and URLs
├── blog_project/        # Django project settings and configuration
│   ├── __init__.py
│   ├── settings.py      # Project settings (e.g., CORS, media)
│   ├── urls.py          # URL routing
│   └── wsgi.py
├── db.sqlite3           # SQLite database file
├── manage.py            # Django management script
├── media/               # Media files (e.g., avatars uploaded via admin)
├── venv/                # Virtual environment (auto-generated)

# API Endpoints
http://127.0.0.1:8000/api/team-members/ - List and manage team members.
http://127.0.0.1:8000/api/blog-posts/ - List and manage blog posts.
http://127.0.0.1:8000/api/about/ - Manage about content.
(Add more endpoints as defined in your urls.py and views.py.)

# Backend Integration
The backend serves API requests for the React + Vite frontend running at http://localhost:5173. Ensure the server is active and CORS is configured as described above to allow cross-origin requests.


   
   
   
