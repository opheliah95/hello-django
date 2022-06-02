FROM postgres:14.1-alpine

# add sudo utility
RUN apk add sudo &&\
    apk add openrc
EXPOSE 5432

# use a dump file to generate a db
COPY polls.sql .
RUN export PGDATA=/var/lib/postgresql/data

# gather environ vars
COPY .env .
CMD source .env 

# we already have a postgres user and postgres group so don't need to create any
USER postgres
RUN chmod 775 /var/lib/postgresql/data


RUN initdb -D /var/lib/postgresql/data &&\
    echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf &&\
    echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf &&\
    pg_ctl start &&\
    psql -lqt | grep polls || createdb polls &&\
    psql -c "ALTER USER postgres WITH ENCRYPTED PASSWORD '${POSTGRES_PASSWORD}';"


CMD ["postgres"]