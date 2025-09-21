#!/usr/bin/env bash
# Exit on first error
set -o errexit

# Install Python dependencies
pip install -r requirements.txt
# Run Django migrations
python manage.py migrate --no_input
