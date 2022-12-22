#!/bin/bash
# For production only

# create secret key
python manage.py createsecret

# migrate database
python manage.py migrate

# run backend with uvicorn
uvicorn backend.asgi:application --host 0.0.0.0