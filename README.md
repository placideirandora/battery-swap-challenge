# BATTERY SWAP CHALLENGE

Battery Swap for e-Station.

## SOFTWARE TECHNOLOGIES

- **Node.js** - Javascript Runtime Environment
- **Express.js** - Minimal Web Server
- **Winston** - Universal Logger

## API ENDPOINTS

| METHOD | ROUTE                    | DESCRIPTION                  | ACCESS |
| ------ | ------------------------ | ---------------------------- | ------ |
| POST   | api/v1/driver            | Create Driver Account        | Public |
| GET    | api/v1/driver            | Retrieve All Drivers         | Public |
| GET    | api/v1/driver/{id}       | Retrieve Single Driver       | Public |
| POST   | api/v1/battery           | Create Battery               | Public |
| GET    | api/v1/battery           | Retrieve All Batteries       | Public |
| GET    | api/v1/battery/{id}      | Retrieve Single Battery      | Public |
| POST   | api/v1/battery-swap      | Create Battery Swap          | Public |
| GET    | api/v1/battery-swap      | Retrieve All Battery Swaps   | Public |
| GET    | api/v1/battery-swap/{id} | Retrieve Single Battery Swap | Public |

## GETTING STARTED

### CLONE THE PROJECT

- **SSH**: git@github.com:placideirandora/battery-swap-challenge.git
- **HTTP**: https://github.com/placideirandora/battery-swap-challenge.git

### SETUP THE SERVER

You will have to download and install Postgres, Node.js, and Yarn.

- Start Postgres
- Create a Database called `battery-swaps`
- Navigate to the Project Folder: `cd battery-swap-challenge`
- Create a `.env` file and specify the following environment variables: `NODE_ENV=development`
  `DATABASE_URL=postgres://{database user name}:{database user password}@localhost:5432/battery-swaps`
- Install Dependencies: `yarn install`
- Run Migrations: `yarn db:migrate`
- Start the Server: `yarn dev`
- You should now consume the first endpoint for creating a driver: `http://localhost:3000/api/v1/driver`
- Refer to the above-mentioned endpoints to determine available endpoints. You will know which fields to provide via validations
