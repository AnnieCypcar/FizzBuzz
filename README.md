# FizzBuzz

FizzBuzz provides an interface for fizz and buzz given a numerical input.

### Local Develop
After installing nodejs, install the dependency packages and start the server. The server will recompile and restart with every file change while in the development mode.

1. [Install nodejs LTS (v16.17.0)](https://nodejs.org/en/download/) or upgrade your current version
2. npm install
3. npm run start-dev


### Testing
Run both unit and integration tests by running
```
npm run test
```

### Linting
Run eslint autofix
```
npm run lint:fix
```

### Serving with Docker
To run the service with Docker, follow [the steps](https://docs.docker.com/get-docker/) to install docker locally. Then build the image with the following which exposes the localhost port.
```
docker compose up
```

# FizzBuzz Web

From the /web directory, follow the README.md instructions to run the React application.
