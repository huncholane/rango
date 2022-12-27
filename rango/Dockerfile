FROM node:18 as frontend
WORKDIR /rango/frontend
COPY ./frontend/package.json .
RUN npm install
COPY . /rango
RUN npm run build

FROM python:3
WORKDIR /rango
RUN python -m pip install --upgrade pip
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt
COPY ./backend .
COPY --from=frontend /rango/backend/backend/static /rango/backend/static
COPY --from=frontend /rango/backend/backend/templates /rango/backend/templates

CMD ["sh", "entrypoint.sh"]
