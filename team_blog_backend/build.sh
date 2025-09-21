echo "Starting migrations..."
python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput
echo "Migrations complete."
echo "Collecting static files..."
python3 manage.py collectstatic --noinput --clear
echo "Static files collected."
