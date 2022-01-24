export default interface Bet {
   active?: boolean,
   leader: number,
   angel: number,
   bigPhone: number,
   firstIndicated?: Array<number>,
   secondIndicated?: Array<number>,
   thirdIndicated?: Array<number>,
   fourthIndicated?: Array<number>,
   fifthIndicated?: Array<number>,
   eliminatedParticipant?: number,
   eliminationPercentage?: number   
}