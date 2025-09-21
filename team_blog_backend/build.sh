#!/usr/bin/env bash
# Exit on first error
set -o errexit

# Install Python dependencies
pip install -r team_blog_backend/requirements.txt

# Run Django migrations
python team_blog_backend/manage.py migrate --no_input