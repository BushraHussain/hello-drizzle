## Setup Vercel postgres database
https://github.com/BushraHussain/hello-postgres

## Setup Drizzle
1. `npm install drizzle-orm`
2. `npm install -D drizzle-kit`
3. `npm install pg`
4. `npm i -D @types/pg`

## Create postgres DB in vercel storage & create table
`CREATE TABLE tasks(
id serial PRIMARY KEY,
taskName varchar(255),
isDone BOOLEAN,
createdAT TIMESTAMP
);`


