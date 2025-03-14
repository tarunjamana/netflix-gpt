export const checkValidData = (fullName, email, password) => {
    // Email validation - checks for proper email format
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    // Password validation:
    // - At least 8 characters
    // - Must contain at least 1 uppercase letter
    // - Must contain at least 1 lowercase letter
    // - Must contain at least 1 number
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // Name validation:
    // - Must start with uppercase
    // - Can contain letters, spaces, hyphens, and apostrophes
    // - Minimum 2 characters
    const isFullNameValid = /^[A-Z][a-zA-Z\s'-]{1,}$/.test(fullName);

    // For Sign In form
    if (fullName === "SignIn Form") {
        if (!email) return "Email is required";
        if (!password) return "Password is required";
        if (!isEmailValid) return "Please enter a valid email address";
        if (!isPasswordValid) return "Password must be at least 8 characters with uppercase, lowercase, and numbers";
        return null;
    }

    // For Sign Up form
    if (!fullName) return "Full name is required";
    if (!email) return "Email is required";
    if (!password) return "Password is required";
    if (!isFullNameValid) return "Please enter a valid name starting with a capital letter";
    if (!isEmailValid) return "Please enter a valid email address";
    if (!isPasswordValid) return "Password must be at least 8 characters with uppercase, lowercase, and numbers";

    return null;
};