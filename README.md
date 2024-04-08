# Node.js CRUD Application with Express.js and MySQL

This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and MySQL. It allows you to perform basic CRUD operations on a database of employees.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- MySQL
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/BilalSaeedAlam/node-express-mysql-crud.git
```
2. Navigate to the project directory:

```bash
cd nodejs-express-mysql-crud
```

3. Install dependencies:

```bash
npm install
```

4. Set up your MySQL database:
- Create a database named employees.
- Create a table named employee with the following schema:

```bash
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    salary DECIMAL(10, 2)
);
```

5. Configuration
- Open connection.js and update the MySQL database connection settings according to your environment.

6. Usage

```bash
npm start
```
- Access the application in your web browser at http://localhost:3000.

***Features***
- Create: Add a new employee to the database.
- Read: Retrieve and display a list of all employees.
- Update: Modify the details of an existing employee.
- Delete: Remove an employee from the database.

***Credits***
This application is developed by Bilal Ahmed. It is based on the tutorials and resources provided by the Node.js, Express.js, and MySQL communities.

***License***
- This project is licensed under the MIT License - see the LICENSE file for details.

```bash
Feel free to customize it further according to your specific project needs.
```