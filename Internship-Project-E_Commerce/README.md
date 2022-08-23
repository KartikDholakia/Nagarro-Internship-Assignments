# E_Commerce - Nagarro Internship Project


## Tech Stack used:
- Frontend: HTML, CSS, ReactJS
- Backend: NodeJS | ExpressJS, Web API, Body Parser, File Upload, JWT
- MongoDB Database

## To run the Project locally:

- The first thing to do is to clone the repository:
    ```
    $ git clone https://github.com/KartikDholakia/Nagarro-Internship-Assignments.git
    $ cd Nagarro-Internship-Assignments/E_Commerce
    ```

- Create .env File
  - Duplicate .env.example in backend folder and rename it to .env

- Setup MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/E_Commerce


- Run Backend
    ```
    $ cd backend
    $ npm install
    $ npm start
    ```

- Run Frontend
    ```
    # open new terminal
    $ cd frontend
    $ npm install
    $ npm start
    ```

- Seed Users and Products
  - Run this on browser: http://localhost:5000/api/seed
  - It returns admin email and password and 6 sample products

- Admin Login
  - Run http://localhost:3000/signin
  - Enter admin email and password and click signin
