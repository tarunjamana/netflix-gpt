# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Netflix GPT
- Created react using vite react template
- configured tailwind into our app
- configured jest into our app using vitest
- also installed  "@testing-library/jest-dom" and "@testing-library/react
- Routing
- Header
- Login Form
- Sign Up form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploy app to production
- Create SignUp User account
- Implement SignIn user Api
- Created redux store with user slice
- Implemented Signout
- Update Profile
- BugFix - Sign up user displayName and profile picture update
- BugFix - If the user is not logged in  Redirect / browse to login Page and vice versa
- unsubscribe to the onAuthStatusChanged callback
- Add hardcoded values to the constant files
- Register for TMDB, create app , get api access token
- get data from TMDB now playing movies list api
- Custom hook for nowPlaying movies and getMovieVideos
- Create Movie Slice
- update store with movies data
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video and make it autoplay and mute
- Secondary Component
- Movies List
- Movies Card
- custom hooks to retrieve data for popular, upcoming and top rated movies
- display all movie lists in the  secondary component





# Features
- Login/Singup 
   - Sign/signup form 
   - redirect to browse page
- Browse(after auth )
  - Header
  - Hero Movie
      - trailer in the background
      - Title and description
      - Movie Suggestions
        - MovieLists * N
- Netflix Gpt
   - Search Bar
   - Movie suggestions 
