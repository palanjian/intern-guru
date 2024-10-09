1. Add (back) login through Google (and perhaps Github?)
2. Email verification for signup
3. Router issues (Home page is causing them, try:)
<Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
