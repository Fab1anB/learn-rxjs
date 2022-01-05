export function calculateAge(dateOfBirth: Date): number {
    const timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
}