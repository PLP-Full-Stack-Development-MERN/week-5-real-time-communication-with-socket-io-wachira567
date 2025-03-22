# Real-Time Notes Application

## Description

A collaborative note-taking application that allows users to create, edit, and share notes in real-time using WebSockets.

## Features

- Real-time collaboration: Multiple users can edit notes simultaneously.
- User authentication: Secure access to notes.
- Responsive design: Works on various devices and screen sizes.
- Easy note management: Create, edit, and delete notes effortlessly.

## Technologies Used

- React: Frontend library for building user interfaces.
- Node.js: Backend runtime environment for server-side logic.
- Express: Web framework for building APIs.
- Socket.IO: Library for real-time web applications.
- MongoDB: NoSQL database for storing notes, with MongoDB Atlas for cloud hosting.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/washira567/real-time-notes.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Usage

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```
2. Start the frontend application:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Deployed Application

You can access the live application at: [Render Link](https://real-time-notes-backend-6qdj.onrender.com)

## MongoDB Atlas

This application uses MongoDB Atlas for cloud database management. Make sure to set up your MongoDB Atlas account and connect it to the application by updating the connection string in the backend configuration.

## Future Improvements

- Implement user authentication for secure access.
- Add a search feature for notes.
- Enhance the UI with more styling options.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
