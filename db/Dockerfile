FROM postgres:14.1-alpine

# add sudo utility
RUN apk add --no-cache sudo 
EXPOSE 5432
RUN chmod 666 /var/lib/postgresql
RUN sudo mkdir -p /usr/local/var/postgres && chmod 775 /usr/local/var/postgres
RUN sudo chown postgres /usr/local/var/postgres

# use a dump file to generate a db
COPY polls.sql .
RUN export PGDATA=/var/lib/postgresql/data
RUN sudo -u postgres initdb -D /var/lib/postgresql/data
RUN sudo -u postgres pg_ctl start -D /var/lib/postgresql/data

# gather environ vars
COPY .env .
CMD source .env 
CMD ["postgres"]