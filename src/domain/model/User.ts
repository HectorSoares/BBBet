export default interface User {
    id: string;
    lastName: string;
    totalPoints: number;
    email: string;
    firstName: string;
    bets: any;
    admin: boolean;
    useLastName: boolean;
}