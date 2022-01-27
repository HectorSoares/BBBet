export default interface User {
    id: string;
    lastName: string;
    totalPoints: number;
    email: string;
    firstName: string;
    bets: object;
    admin: boolean;
}