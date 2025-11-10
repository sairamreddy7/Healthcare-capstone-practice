# Healthcare Capstone Practice

A comprehensive healthcare management system built with React, TypeScript, and Vite. This application provides role-based dashboards for administrators, clinicians, and patients to manage healthcare operations efficiently.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)

## ✨ Features

- **Role-Based Access Control**: Separate dashboards for Admin, Clinician, and Patient roles
- **Authentication System**: Login and signup functionality
- **Patient Management**: Manage patient records, appointments, and medical history
- **User Management**: Admin capabilities for managing system users
- **Appointment Scheduling**: Book and manage medical appointments
- **Billing System**: Track and manage patient billing information
- **Messaging System**: Communication between users
- **Reports & Analytics**: System-wide reporting and analytics
- **Audit Logs**: Track system activities for compliance
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.5
- **State Management**: Zustand 5.0.8
- **Styling**: Tailwind CSS 4.1.16
- **API Mocking**: Mock Service Worker (MSW) 2.12.1
- **Linting**: ESLint 9.36.0

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 16.x or higher (recommended: 18.x or 20.x)
- **npm**: Version 7.x or higher (comes with Node.js)

To check your versions, run:

```bash
node --version
npm --version
```

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/sairamreddy7/Healthcare-capstone-practice.git
cd Healthcare-capstone-practice
```

2. **Install dependencies**

```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

## 🏃 Running the Project

### Development Mode

To run the application in development mode with hot module replacement (HMR):

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or the next available port).

**Note**: The application uses Mock Service Worker (MSW) in development mode to simulate API responses. This means you don't need a backend server to run the application locally.

### Production Build

To build the application for production:

```bash
npm run build
```

This command:
1. Runs TypeScript compiler to check for type errors
2. Builds the application using Vite
3. Outputs optimized files to the `dist` directory

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build on `http://localhost:4173`.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Builds the app for production |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run preview` | Previews the production build locally |

## 📁 Project Structure

```
Healthcare-capstone-practice/
├── public/                  # Static assets
│   └── mockServiceWorker.js # MSW service worker
├── src/
│   ├── assets/             # Images, icons, and other assets
│   ├── components/         # Reusable React components
│   ├── layouts/            # Layout components (Admin, Clinician, Patient)
│   ├── mocks/              # MSW mock API handlers
│   ├── pages/              # Page components
│   ├── stores/             # Zustand state management stores
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 👥 User Roles

The application supports three main user roles:

### 1. Admin
- Access to admin dashboard at `/admin/dashboard`
- User management capabilities
- System settings and configuration
- Audit logs and reports
- Full system oversight

### 2. Clinician
- Access to clinician dashboard at `/clinician/dashboard`
- Patient records management
- Appointment scheduling
- Medical documentation
- Patient communication

### 3. Patient
- Access to patient dashboard at `/patient/dashboard`
- View personal health records
- Schedule appointments
- View billing information
- Communicate with healthcare providers
- Access test results

## 🔐 Authentication

The application includes authentication pages:
- **Login**: `/login`
- **Sign Up**: `/signup`

All dashboard routes are protected and require authentication. Unauthenticated users are redirected to the login page.

## 🤝 Contributing

This is a capstone practice project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is part of a capstone practice exercise.

---

**Happy Coding! 🎉**
