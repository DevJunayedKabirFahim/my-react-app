# React Project Design Pattern

/src
│
├── /assets/            # Images, fonts, icons, etc.
│
├── /components/        # Reusable UI components (buttons, inputs, cards, etc.)
│   └── Button/
│       ├── Button.jsx
│       ├── Button.test.js
│       └── Button.module.css
│
├── /features/          # Feature-specific components & logic
│   └── auth/
│       ├── Login.jsx
│       ├── authSlice.js      # Redux slice or zustand logic
│       └── authAPI.js        # API calls for authentication
│
├── /hooks/             # Custom React hooks
│   └── useAuth.js
│
├── /layouts/           # Layout components like Navbar, Sidebar, Footer
│
├── /pages/             # Route-based pages
│   └── Home.jsx
│   └── About.jsx
│
├── /routes/            # All routing configuration
│   └── AppRouter.jsx
│
├── /services/          # API service logic (axios/fetch abstraction)
│   └── userService.js
│
├── /store/             # Global state (Context, Redux, Zustand)
│   └── index.js
│
├── /utils/             # Helper functions (formatters, validators, etc.)
│
├── /constants/         # Static values (roles, config, regex, etc.)
│
├── App.jsx             # Root component
└── main.jsx            # Entry point



