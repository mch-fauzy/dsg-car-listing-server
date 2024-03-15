# Digital Solusi Grup Car Listing Server

## Getting Started

To get started with the API, follow the steps below:

1. Clone this repository:

   ```
   git clone https://github.com/mch-fauzy/dsg-car-listing-server.git
   ```

2. Navigate to the project directory:
   ```
   cd dsg-car-listing-server
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
3. Edit the database configuration in `.env.development` with your PostgreSQL credentials and configure the setting in `./infras/postgresql.js`.
5. Run the SQL file from `migrations` into your PostgreSQL database using a tool like pgAdmin's or dbeaver.
6. Start the server:
   ```
   npm run dev
   ```

The API will be available at [http://localhost:3000](http://localhost:3000).