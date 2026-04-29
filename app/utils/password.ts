export function checkPasswordStrength(password: string) {

    if (password.length < 6) {
        return "weak";
    }
    if (password.length <= 10) {
        return "medium";
    }
    return "strong";
}