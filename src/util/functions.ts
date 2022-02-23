import Bet from "../domain/model/manager/Bet";
import Week from "../domain/model/manager/Week";

export const returnActiveWeek: any = (weeks: Week[] | undefined) => weeks?.find((w: Week) => w.active);

export const returnActiveBet: any = (week: Week | undefined) => week?.bets?.find((b: Bet) => b.active);

export const returnLastBet: any = (week: Week | undefined) => week?.bets?.find((b: Bet) => b.last);

export const detectMob: any = () => window.innerWidth <= 600;

export const returnDescriptionBet = (week?: Week) => {
  switch (week?.bets?.length) {
    case 0: return "Primeira";
    case 1: return "Segunda";
    case 2: return "Terceira";
    case 3: return "Quarta";
    case 4: return "Quinta";
    default: return ""
  }
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if ((b[orderBy] || 0) < (a[orderBy] || 0)) {
    return -1;
  }
  if ((b[orderBy] || 0) > (a[orderBy] || 0)) {
    return 1;
  }
  return 0;
}

export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
    a: { [key in Key]: any },
    b: { [key in Key]: any },
  ) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: any[], comparator: (a: T, b: T) => number) {
  console.log("Array = ", array);
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}