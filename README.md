# Django Poll App

### Postgres SQL port mapping in Container
In order for containers in `docker-compose.yaml` to run, you need to name your db host name under \mysite .env to be matching `psql` service name. In this case, it is `psql`