# SkillUp — API

## Prerequisites

Node >=16, npm >=8, Docker, Docker-Compose should be installed in the system.

### Install npm dependencies

```bash
yarn install
```

### Environment variables

Fill in `.env` file using `.env.example` as an example.

### If you want to use apollo studio for testing API you can signup and create new graph, and then you can get creds and adding their to .env file to work with apollo studio

`APOLLO_KEY=...`
`APOLLO_GRAPH_ID=...`
`APOLLO_GRAPH_VARIANT=...`
`APOLLO_SCHEMA_REPORTING=...`

## Database instructions

### Run database via Docker-Compose

```bash
docker-compose up -d
```

### Check this URL in your .env.example it's needed correct for connecting migrations library to database

`DATABASE_URL=postgres://test:test@localhost:5432/test`

### Run migrations

```bash
yarn run migrations:up
```

### Fill database with seeds

```bash
yarn run seeds:up
```

## Running server Locally

### Build and Production mode

```bash
yarn run start:prod
```

### Development mode

```bash
yarn run start:dev
```

### We have 3 roles and 3 default users with their creds:

1. ADMIN:

   - First name: `Donald`
   - Last name: `Knuth`
   - Email: `k.simpson@mail.com`
   - Non Hashed Password: `sdpo!~[dvjfo32epfoj23`

2. TEACHER:

   - First name: `Kyle`
   - Last name: `Simpson`
   - Email: `d.knuth@mail.com`
   - Non Hashed Password: `knuth302don`

3. STUDENT:

   - First name: `John`
   - Last name: `Doe`
   - Email: `j.doe@mail.com`
   - Non Hashed Password: `johndoe123`

## License

[MIT licensed](LICENSE).
