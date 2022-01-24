import Bet from "./Bet";

export default interface Week {
    week: string,
    active: boolean,
    bets: Array<Bet>
}