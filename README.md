# Full_Stack_Dashboard_Task
A full-stack dashboard application with user authentication. Users can login and access dashboard based on token. The app supports light/dark themes and english/hindi languages.

Overview:
	Authentication (Login, Logout, Protected Dashboard)
	Theme management (Light/Dark mode)
	Language localization (English and Hindi)
	Cookie-based session handling
	Protected routes and middleware
	Modern UI with Tailwind CSS and PrimeReact components
	
Functionalities:
	Login:
		User enters email and password on /login.
		/api/login route verifies credentials (admin@example.com + password123).
		If valid, it generates a base64 token and sets it as a cookie.
	Auth Check:
		/api/auth route reads the cookie to see if the user is logged in.
		Returns the user object if logged in, otherwise returns null.
	Logout:
		/api/logout route clears the cookie by making age 0.
	Protected Dashboard:
		/dashboard/page.tsx is protected using ProtectedDashboard.tsx and middleware.
		If a user is not logged in, they are redirected to /login.
		
Theming:
	Tracks theme state (light / dark) and persists it in localStorage.
	Provides a toggleTheme() function.
	The theme is applied using CSS variables and .dark class in globals.css.
	Users can switch themes via Header or ThemeLanguageSwitcher.
	
Language Localization
	Implemented via LanguageContext.tsx:
	Supports English (en) and Hindi (hi).
	Stores selected language in localStorage.
	Provides a t(key) function to translate strings.
	All pages and components use useLang() to render text dynamically.

Pages:
	Dashboard:
		Checks auth via /api/auth.
		Shows Loading... while verifying user.
		Redirects to /login if not authenticated.
		Logout button implemented after successful login
	Login:
		Uses simple required fields for email & password.
		Shows translated error messages if credentials are invalid.
		Logged-in users are automatically redirected to /dashboard.
		
Styling:
	Tailwind CSS: For modern responsive styling.
	PrimeReact: Used for UI components like buttons and sidebar.
	Dark/Light mode handled with CSS variables and Tailwind dark: classes.
	Layout: Root layout (layout.tsx) wraps all pages with Providers for theme and language.
	

Flow Summary:
	User visits /login.
	Enters dummy credentials and sets cookie.
	Middleware and  ProtectedDashboard ensures only logged-in users see /dashboard.
	User can toggle theme and switch languages dynamically.
	Logout clears the cookie and redirects to /login.


credentials to test application:
email: admin@example.com
password: password123
