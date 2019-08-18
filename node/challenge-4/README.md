# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Executing

First, install the dependecies using the command

```
npm install
```

Then go to the folder `docker` and execute

```bash
docker-compose up 
```

Run the main server in `development` mode using the command

```bash
adonis serve --dev
```

Run the queue listener using the command
```
adonis kue:listen
```
