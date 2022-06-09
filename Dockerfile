# syntax=docker/dockerfile:1
FROM python:3.9-slim-bullseye
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
# install missing dependency
RUN apt-get update && apt-get upgrade -y && apt-get install -y gcc

# copy requirements file
COPY requirements.txt .
RUN echo "$PWD"

# activate venv
RUN  pip install -r requirements.txt
COPY . /code/