# CRUD

Website performing CRUD operations using React, Express and MySQL

Pre Requisites:
- `Node` - v9.5.0
- `npm` - v18.15.0
- `mysql` - v8.0.36

## Application Setup:

- ### MySQL:

Once MySQL is configured in your local, create Database, Table, and few recordsets for testing purpose
```console
create database crud;
use crud;

CREATE TABLE student (
    ID int NOT NULL,
    Name varchar(20) NOT NULL,
    Email varchar(50),
    PRIMARY KEY (ID)
);

INSERT INTO student (ID, Name, Email)
VALUES (1, 'Tom Erichsen', 'tom_erichsen@gmail.com'), (2, 'Vin Diesel', 'vin_diesel@gmail.com'), (3, 'Dwayne Johnson', 'dwayne_rock@gmail.com');
```

### Backend

- Move to backend Directory

- Create a `.env` file and add the below contents. Modify the values as per your local setup.

```console
DB_HOST=localhost
DB_USER=root
DB_PORT=3306
DB_PASSWORD=password
DB_DATABASE=crud
```

- backend will be hosted on port http://localhost:8081
**NOTE**: port can be changed by modifying line #67 in `server.js`

- Install the dependencies: `npm install`

- Start the server: `npm start`
  Shell session will be occupied by this command
  Can be stopped by closing the shell session
  To run it in background: `npm run start&` 
  **NOTE**: You need to manually kill the process (sudo kill -9 process_id) to stop the server


### Frontend

- Move to frontend Directory

- Create a `.env` file and add the below contents.
```console
REACT_APP_BACKEND_HOST="localhost"
REACT_APP_BACKEND_PORT="8081" 
```
**NOTE** If backend port is changed then set `REACT_APP_BACKEND_PORT` to the new port value

- Install the dependencies: `npm install`

- Start the server: `npm start`

## Additional Information

Docker images are available in DockerHub

frontend: https://hub.docker.com/repository/docker/vigneshwar10/crud-frontend/
backend: https://hub.docker.com/repository/docker/vigneshwar10/crud-backend/

Source video reference: https://youtu.be/CUsCMKXpBGE?si=BTfJtnd5Bi67Fj_K