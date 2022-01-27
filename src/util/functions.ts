import Bet from "../domain/model/manager/Bet";
import Week from "../domain/model/manager/Week";

export const returnActiveWeek: any = (weeks: Week[] | undefined) => weeks?.find((w) => w.active);

export const returnActiveBet: any = (week: Week | undefined) =>  week?.bets?.find((b) => b.active);