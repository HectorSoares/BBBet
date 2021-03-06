
export default interface BetResults {
    week?: string,
    active?: boolean,
    leader?: Array<number>,
    angel?: Array<number>,
    bigPhone?: Array<number>,
    angelImmunized?: Array<number>
    firstIndicated?: Array<number>,
    secondIndicated?: Array<number>,
    thirdIndicated?: Array<number>,
    fourthIndicated?: Array<number>,
    fifthIndicated?: Array<number>,
    backForth?: Array<number>,
    eliminatedParticipant?: Array<number>,
    eliminationPercentage?: number,
    thirdPlacePercentage?: number,
    secondPlacePercentage?: number
}