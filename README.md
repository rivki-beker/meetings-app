# Business Management Website

This project is designed for managing a small business, such as a consultancy or salon. It includes two main components:

1. **Backend**: A Node.js server for managing business data and appointments.
2. **Frontend**: A React application built with Vite for the client-side interface.

## Project Structure

The repository contains:

- `reactProjectServer/` - Node.js backend project
- `meetings-project/` - React + Vite client-side project

## Backend (Node.js)

The backend handles API requests related to business data and appointments.

### Setup

1. Navigate to the `reactProjectServer` directory:
   ```bash
   cd reactProjectServer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### API Endpoints

- `POST /login` - Authenticate a user.
- `GET /business` - Get business details.
- `POST /business` - Update business details.
- `GET /services` - Retrieve services.
- `POST /services` - Add a new service.
- `GET /appointments` - Retrieve appointments.
- `POST /appointments` - Schedule a new appointment.

## Frontend (React + Vite)

The client-side application allows users to interact with business data and schedule appointments.

### Setup

1. Navigate to the `meetings-project` directory:
   ```bash
   cd meetings-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and bundling.
- **MobX**: For state management.
- **Material-UI (MUI)**: For styling and UI components.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests.

### Features

#### Admin Interface

- **Login**: Authenticate with username (`admin`) and password (`123456`).
- **Business Details**: View and edit business information.
- **Service Management**: Add and manage services.
- **Appointment Schedule**: View and manage appointments with color-coded urgency indicators.

#### Customer Interface

- **Service List**: View available services.
- **Appointment Scheduling**: Select a service, provide personal details, and book an appointment with real-time availability checks.

### Key Files

- **App.jsx**: The main component handling routing.
- **Home.jsx**: The main user interface for customers.
- **AddMeeting.jsx**: A form for customers to book appointments.
- **AdminHome.jsx**: The main interface for business owners.
- **BusinessDetails.jsx**: Component for displaying and editing business details.
- **ServicesList.jsx**: A component that lists available services.
- **businessData.js**: Stores business information.
- **meetingsData.js**: Handles meeting-related data operations.
- **servicesData.js**: Manages the list of services.

## Usage

- **Business Owner**: Access the admin interface at `/admin`, log in with the credentials, and manage your business details and appointments.
- **Customers**: Access the customer interface at the homepage, view services, and book appointments.