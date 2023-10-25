# Spotify Match Backend

This repository houses the backend infrastructure for the Spotify Match project. The backend is built using Node.js, Express, and PostgreSQL to provide a robust RESTful API for the front-end application.

The API is hosted using Elastic Beanstalk on Amazon Web Services (AWS).

## Getting Started

1. Clone the repository:
   ```bash
   git clone thttps://github.com/cajowils/Spotify-Match.git
   cd Spotify-Match/node-api-postgres
   ```
   
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the server
    ```bash
    npm start
    ```
## Testing
Unit tests are located in the tests folder. To run the tests, follow these steps:

### Run Tests:

```bash
npm test
```
### Exit Test Suite:

If the test suite gets into an infinite loop due to the HTTP server, press `ctrl + c` to exit.
