import Bet from "./Bet";

export default interface Week {
    week: string,
    active: boolean,
    last: boolean,
    bets: Array<Bet>
}