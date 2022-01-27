import Bet from "../domain/model/manager/Bet";
import Week from "../domain/model/manager/Week";

export const returnActiveWeek: any = (weeks: Week[] | undefined) => weeks?.find((w) => w.active);

export const returnActiveBet: any = (week: Week | undefined) =>  week?.bets?.find((b) => b.active);

export const returnDescriptionBet = (week?: Week) => {
      switch(week?.bets?.length){
        case 0: return 'Primeira';
        case 1: return 'Segunda';
        case 2: return 'Terceira';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        default: return ''
      }
    }