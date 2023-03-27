#Prerequisites:
- [Docker](https://docs.docker.com/install/)
- nodejs
- npm

# Build
`docker pull postgres`

`docker run --name baupal-postgres -e POSTGRES_USER=baupal -e POSTGRES_PASSWORD=BaupalPassword! -e POSTGRES_DB=baupal -p 5432:5432 -d postgres` 
