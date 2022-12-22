#!/bin/bash
# For production only

# create secret key
python manage.py createsecret

# migrate database
python manage.py migrate

# run rango with uvicorn
uvicorn rango.asgi:application --host 0.0.0.0