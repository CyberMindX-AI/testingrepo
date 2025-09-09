// This file provides frontend-only authentication simulation using localStorage.
// TODO: Replace with real backend API integration
// TODO: Implement /api/auth/login, /api/auth/signup, /api/auth/logout endpoints
// TODO: Add JWT token management and secure session handling
// TODO: Implement password hashing with bcrypt or similar
// TODO: Add email verification and password reset functionality

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  profilePicture?: string
}

// Simulate a database of users in memory for the current session.
// In a real application, this would be a persistent database (e.g., PostgreSQL, MongoDB).
const users: User[] = []

/**
 * Simulates user registration.
 * In a real app, this would send user data to a backend /signup endpoint.
 */
export const signup = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
): { success: boolean; message: string } => {
  if (users.some((user) => user.email === email)) {
    return { success: false, message: "User with this email already exists." }
  }
  const newUser: User = { id: `user-${Date.now()}`, email, firstName, lastName }
  users.push(newUser)
  // In a real app, you'd hash the password and store it securely in the database.
  // Here, we just simulate user creation and store password directly for demo purposes (NOT secure for production).
  localStorage.setItem(`user_${newUser.id}`, JSON.stringify(newUser))
  localStorage.setItem(`password_${newUser.id}`, password)
  return { success: true, message: "Signup successful! Please log in." }
}

/**
 * Simulates user login.
 * In a real app, this would send credentials to a backend /login endpoint
 * and receive a session token (e.g., JWT) upon success.
 */
export const login = (email: string, password: string): { success: boolean; message: string; user?: User } => {
  const user = users.find((u) => u.email === email)
  if (!user) {
    return { success: false, message: "User not found." }
  }
  const storedPassword = localStorage.getItem(`password_${user.id}`)
  if (storedPassword === password) {
    // In a real app, a session token would be stored (e.g., in http-only cookies).
    localStorage.setItem("currentUserEmail", email) // Store current user's email for session simulation
    localStorage.setItem("isLoggedIn", "true") // Add login persistence flag
    return { success: true, message: "Login successful!", user }
  }
  return { success: false, message: "Invalid credentials." }
}

/**
 * Simulates user logout.
 * In a real app, this would invalidate the session on the backend and clear local tokens.
 */
export const logout = (): void => {
  localStorage.removeItem("currentUserEmail")
  localStorage.removeItem("isLoggedIn")
}

/**
 * Retrieves the current logged-in user's data.
 * In a real app, this might involve validating a session token with the backend.
 */
export const getCurrentUser = (): User | null => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  if (!isLoggedIn) return null
  
  const email = localStorage.getItem("currentUserEmail")
  if (email) {
    const user = users.find((u) => u.email === email)
    if (user) {
      // Retrieve full user data from localStorage if available (simulating fetching from DB)
      const storedUser = localStorage.getItem(`user_${user.id}`)
      return storedUser ? JSON.parse(storedUser) : user
    }
  }
  return null
}

/**
 * Simulates updating current user's profile.
 * In a real app, this would send updated data to a backend /user/profile endpoint.
 */
export const updateCurrentUser = (updatedUser: Partial<User>): { success: boolean; message: string; user?: User } => {
  const currentUser = getCurrentUser()
  if (!currentUser) {
    return { success: false, message: "No user logged in." }
  }

  const userIndex = users.findIndex((u) => u.id === currentUser.id)
  if (userIndex === -1) {
    return { success: false, message: "User not found in simulated database." }
  }

  const newUserData = { ...currentUser, ...updatedUser }
  users[userIndex] = newUserData
  localStorage.setItem(`user_${newUserData.id}`, JSON.stringify(newUserData))
  return { success: true, message: "Profile updated successfully!", user: newUserData }
}

/**
 * Simulates updating user's password.
 * In a real app, this would send old and new passwords to a backend /user/password endpoint.
 */
export const updatePassword = (
  email: string,
  oldPassword: string,
  newPassword: string,
): { success: boolean; message: string } => {
  const user = users.find((u) => u.email === email)
  if (!user) {
    return { success: false, message: "User not found." }
  }
  const storedPassword = localStorage.getItem(`password_${user.id}`)
  if (storedPassword === oldPassword) {
    localStorage.setItem(`password_${user.id}`, newPassword) // Update simulated password
    return { success: true, message: "Password updated successfully!" }
  }
  return { success: false, message: "Current password incorrect." }
}
