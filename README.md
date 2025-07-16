#  MedicalShop Automation System

A streamlined **full-stack web application** for managing medical store operations—inventory, billing, supplier management, and user access—powered by **React.js**, **Spring Boot**, and **MySQL**.

---

##  Key Features

- **User Authentication**  
  Role-based login (admin/staff) with secure access control  
- **Inventory Management**  
  Add, edit, delete medicine items with stock and expiry tracking  
- **Supplier Module**  
  Manage suppliers, view/add supplier details  
- **Billing System**  
  Create bills, calculate totals, generate invoices  
- **Search & Filtering**  
  Find medicines by name, category, or supplier  
- **Responsive UI**  
  Built with React, featuring dynamic components, routing, and form validation  
- **RESTful API**  
  Spring Boot backend exposing endpoints for CRUD operations on core entities  
- **Database Integration**  
  MySQL used for persistence; full CRUD via JPA repositories  
- **SDLC Best Practices**  
  Modular architecture, layered design, exception handling, and version control via Git

---

##  Technology Stack

| Layer           | Technology            |
|------------------|------------------------|
| Frontend         | React.js, JavaScript, CSS |
| Backend          | Spring Boot, Java, REST |
| Database         | MySQL |
| Tools           | Maven, Postman (API testing), Git (version control) |

---

##  Getting Started

### Prerequisites

- Java 11+ (or above)  
- Maven 3.x  
- Node.js 14+ and npm  
- MySQL server

### Backend Setup

1. Clone the repo:  
   `git clone https://github.com/TEJASRI-44/medicalshop-automation.git`
2. Navigate into backend directory:  
   `cd medicalshop-automation/backend`
3. Configure your `application.properties` with your MySQL credentials and database.
4. Build and run the server:  
   `mvn clean install && mvn spring-boot:run`
5. Backend runs at: `http://localhost:8080/api/`

### Frontend Setup

1. Navigate to the frontend folder:  
   `cd ../frontend`
2. Install dependencies:  
   `npm install`
3. Start the frontend server:  
   `npm start`
4. Access the UI at: `http://localhost:3000/`

---

##  API Endpoints

| Endpoint                  | Method | Description                          |
|--------------------------|--------|--------------------------------------|
| `/api/auth/login`        | POST   | Login and receive JWT token          |
| `/api/medicines`         | GET    | Get list of all medicines            |
| `/api/medicines`         | POST   | Add new medicine                     |
| `/api/medicines/{id}`    | PUT    | Update medicine details              |
| `/api/medicines/{id}`    | DELETE | Remove a medicine entry              |
| `/api/suppliers`         | GET/POST/PUT/DELETE | CRUD for suppliers |
| `/api/bills`             | GET/POST | Create/View billing records       |



---

##  Future Enhancements

- Implement end-to-end JWT authentication flow  
- Add automated invoice PDF generation  
- Enhance billing UI with filters and pagination  
- Introduce React Context or Redux for state management  
- Add unit/integration tests in backend and frontend  
- Dockerize the application for seamless deployment

---

##  Contributor

- **Tejasri** – [tejasri-44](https://github.com/TEJASRI-44) – Full‑stack developer

---

##  License

This project is open-sourced under the MIT License. See `LICENSE` for details.
