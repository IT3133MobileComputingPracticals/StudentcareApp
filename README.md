# Student Care App

Student Care App is a simple mobile application built using React Native and Expo. This app is designed to provide personalized information to students after a secure login process. It features bottom navigation for easy access to Profile, Courses, and Subjects tabs, with user-specific data loaded from a centralized database file (`studentdb.js`).

## Features

1. **Login Page**

   - User authentication via username and password.
   - Navigates to the Home screen upon successful login.

2. **Home Page**

   - Displays user-specific information.
   - Contains a header with the app name and a back button.
   - Includes bottom navigation (React Native Paper) for accessing Profile, Courses, and Subjects tabs.

3. **Tabs**

   - **Profile Tab**: Displays detailed user information such as name, email, and other details.
   - **Course Tab**: Lists courses the user is enrolled in.
   - **Subject Tab**: Provides details about subjects related to the user's courses.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: To streamline development and testing.
- **React Native Paper**: For implementing the bottom navigation component.

## File Structure

```
root
├── App.js           # Main entry point of the app
├── components
│   ├── Login.js     # Login screen
│   ├── Home.js      # Home screen with bottom navigation
│   ├── Profile.js   # Profile tab
│   ├── Course.js    # Course tab
│   └── Subject.js   # Subject tab
├── studentdb.js     # Centralized database for user and course information
├── assets           # Static assets (images, icons, etc.)
└── package.json     # Project configuration and dependencies
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/IT3133MobileComputingPracticals/StudentcareApp.git
   cd studentCare
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   expo start
   ```

4. Open the app:

   - Use an emulator or a physical device with the Expo Go app installed.
   - Scan the QR code displayed in the terminal or Expo web interface.

## Usage

1. Launch the app and log in with valid credentials (stored in `studentdb.js`).
2. Navigate through the Profile, Course, and Subject tabs using the bottom navigation.
3. View personalized information based on user data.

## Future Enhancements

- Add more detailed course and subject information.
- Integrate a backend API for dynamic data fetching.
- Implement logout functionality.

## Contributing

Contributions are welcome! If you’d like to contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your branch:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
4. Create a pull request on GitHub.


