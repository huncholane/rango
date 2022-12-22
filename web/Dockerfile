FROM node:18 as frontend
WORKDIR /web/frontend
COPY ./frontend/package.json .
RUN npm install
COPY . /web
RUN npm run build

FROM python:3
WORKDIR /web
COPY ./rango/requirements.txt .
RUN pip install -r requirements.txt
COPY ./rango .
COPY --from=frontend /web/rango/rango/static /web/assets
COPY --from=frontend /web/rango/rango/templates /web/templates

CMD ["/bin/bash", "entrypoint.sh"]
