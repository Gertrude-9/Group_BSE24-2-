#!/usr/bin/env bash
# Exit on first error
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --no-input

# Run Django migrations
python manage.py migrate --no-input

# Load data from the fixture file
python manage.py loaddata --encoding=latin-1 blog_app_data.json





