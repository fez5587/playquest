# PQ Inventory System

## Overview

The `pq_inventory_system` is designed to manage and track inventory for businesses. It provides a comprehensive solution for inventory management, including features such as stock tracking, order management, and reporting. The system aims to streamline inventory processes, reduce errors, and improve overall efficiency.

## Features

- **Stock Management**: Track inventory levels, manage stock entries and exits.
- **Order Management**: Handle customer orders, supplier orders, and order fulfillment.
- **Reporting**: Generate reports on inventory status, sales, and other key metrics.
- **User Management**: Manage user roles and permissions within the system.

## Running Version 3 of the Web Dashboard

### Prerequisites

Before running the web dashboard, ensure you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/pq_inventory_system.git
   cd pq_inventory_system
   ```
2. **Install Dependencies**

Navigate to the web_dashboard_v3 directory and install the necessary dependencies:

    ```cd web_dashboard_v3
    npm install
    ```

3. **Set Up Environment Variables**

Create a .env file in the web_dashboard_v3 directory and add the necessary environment variables. For example:

    ```MONGO_URI=mongodb://localhost:27017/pq_inventory
    PORT=3000
    ```



### Running the Web Dashboard

Ensure MongoDB is running on your machine. You can start it using the following command

```mongod```

1. **Start the Web Dashboard**

In the web_dashboard_v3 directory, start the web dashboard:

```npm start```

### Access the Dashboard

Open your web browser and navigate to http://localhost:3000 to access the web dashboard.

### Contributing
We welcome contributions to the pq_inventory_system. If you would like to contribute, please fork the repository and submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.