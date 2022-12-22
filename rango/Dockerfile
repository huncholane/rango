FROM node:18 as frontend
WORKDIR /rango/frontend
COPY ./frontend/package.json .
RUN npm install
COPY . /rango
RUN npm run build

FROM python:3
WORKDIR /rango
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt
COPY ./backend .
COPY --from=frontend /rango/backend/backend/static /rango/assets
COPY --from=frontend /rango/backend/backend/templates /rango/templates

CMD ["/bin/bash", "entrypoint.sh"]
