export default function isValidEmail(email) {
    const validator = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    return validator.test(email);
}