#!/bin/bash
# For production only

# create secret key if .env doesn't exist
#if [ ! -f "backend/.env" ]; then
    #python manage.py createsecret
#fi

# collect staticfiles
python manage.py collectstatic --noinput

# migrate database
python manage.py migrate

# run backend with uvicorn
uvicorn backend.asgi:application --host 0.0.0.0