# Medicine Shop Automation - Backend

This repository contains the backend code for the Medicine Shop Automation system, developed to handle inventory, user management, and business logic.

## Features

- **RESTful APIs**: Handles authentication, inventory management, and order processing.
- **Role-Based Access Control**: Secures functionalities based on user roles.
- **Inventory Management**: Automates tracking, low-stock alerts, and expiration checks.
- **Vendor Management**: Manages vendor details, payments, and orders.
- **Sales Reporting**: Provides detailed sales, profit, and inventory reports.

## Technologies Used

- **Backend Framework**: Spring Boot
- **Database**: MySQL
- **ORM**: Spring Data JPA
- **Security**: Spring Security for user authentication and authorization
- **Build Tool**: Maven

## Prerequisites

Ensure you have the following installed:
- Java 17 or higher
- Maven 3.8 or higher
- MySQL server

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/medicine-shop-backend.git
   cd medicine-shop-backend
   ```

2. Set up the database:
   - Create a MySQL database named `medicine_shop`.
   - Update `application.properties` with your database credentials.

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/medicine_shop
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. The backend server will be available at:
   ```
   http://localhost:8080
   ```

## Environment Variables

To configure the backend application, the following environment variables should be set:

```env
ALLOWED_ORIGINS="https://your-frontend-domain.com,https://another-frontend.com,http://localhost:3000"
SERVER_PORT="8080"
SERVER_URL="https://your-backend-domain.com"
SPRING_APPLICATION_NAME="medicine-shop"
SPRING_DATASOURCE_DRIVER="com.mysql.cj.jdbc.Driver"
SPRING_DATASOURCE_PASSWORD="your-db-password"
SPRING_DATASOURCE_URL="jdbc:mysql://your-db-host:your-db-port/your-database"
SPRING_DATASOURCE_USERNAME="your-db-username"
SPRING_JPA_DDL_AUTO="update"
SPRING_JPA_DIALECT="org.hibernate.dialect.MySQLDialect"
```

Replace the placeholder values with your actual environment configurations.

## API Endpoints

### Medicines Controller
- `POST /medicine/addmedicine` - Add a single medicine.
- `POST /medicine/addmedicines` - Add multiple medicines.
- `GET /medicine` - Retrieve all medicines.
- `DELETE /medicine/medicinebyid/{id}` - Delete a medicine by ID.
- `PUT /medicine/{id}` - Update a medicine by ID.
- `GET /medicines/low-stock` - Retrieve medicines below a specified stock threshold.

### Customer Controller
- `POST /customer` - Add a new customer.
- `GET /customer` - Retrieve all customers.
- `GET /customer/{id}` - Retrieve a customer by ID.
- `PUT /customer/{id}` - Update customer details by ID.
- `DELETE /customer/{id}` - Delete a customer by ID.
- `POST /customer/verify` - Verify a customer by email and password.

### Orders Controller
- `POST /orders` - Create a new order.
- `GET /orders/{id}` - Retrieve an order by ID.
- `GET /orders` - Retrieve all orders.
- `PUT /orders/{id}` - Update an order by ID.
- `DELETE /orders/{id}` - Delete an order by ID.
- `GET /orders/customer/{customerId}` - Retrieve all orders for a specific customer.

### Sales Controller
- `POST /sale/addsale` - Add a new sale.
- `GET /sales` - Retrieve all sales.
- `GET /sale/{id}` - Retrieve a sale by ID.
- `PUT /sale/{id}` - Update a sale by ID.
- `DELETE /sale/{id}` - Delete a sale by ID.
- `PUT /sale/report/{startDate}/{endDate}` - Generate a sales report for a date range.
- `PUT /sale/profit` - View profit for a date range.
- `GET /sales/medicineReport` - Retrieve a medicine sales report for a date range.

### Vendor Controller
- `POST /vendor/addvendor` - Add a new vendor.
- `GET /vendor` - Retrieve all vendors.
- `PUT /vendor/{id}` - Update a vendor by ID.
- `DELETE /vendor/vendorbyid/{id}` - Delete a vendor by ID.
- `GET /vendor/verify` - Verify a vendor by name and phone number.

### Cart Controller
- `POST /cart/add` - Add items to the cart.
- `POST /cart/checkout/{customerId}` - Checkout cart items for a customer.
- `GET /cart` - Retrieve all carts.
- `GET /cart/{id}` - Retrieve a cart by ID.
- `PUT /cart/{id}` - Update a cart by ID.
- `DELETE /cart/{id}` - Delete a cart by ID.
- `PUT /cart/updateQuantity` - Update quantity for a specific item in the cart.

### Payment Controller
- `GET /payments` - Retrieve all payments.
- `PUT /payment/create-payment` - Create a payment from completed vendor orders.
- `PUT /update-status/{vendorId}` - Update payment status for a vendor.

### Vendor Received Order Controller
- `POST /vendor-order` - Store a single vendor order.
- `GET /vendor-order` - Retrieve all vendor orders.
- `GET /vendor-order/{vendorId}` - Retrieve orders by vendor ID.
- `POST /vendor-order/bulk` - Store multiple vendor orders.
- `PUT /update-pending-orders/{vendorId}` - Update all pending orders for a vendor.

## Project Structure

- **src/main/java**: Contains all Java source files.
  - **controller**: REST controllers for API endpoints.
  - **service**: Business logic layer.
  - **repository**: Data access layer.
- **src/main/resources**: Configuration files like `application.properties`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any enhancements or fixes.

## License

This project is licensed under the MIT License.
