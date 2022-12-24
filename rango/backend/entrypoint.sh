#!/bin/bash
# For production only

# create secret key if .env doesn't exist
if [ ! -f ".env" ]; then
    python manage.py createsecret
fi

# migrate database
python manage.py migrate

# run backend with uvicorn
uvicorn backend.asgi:application --host 0.0.0.0