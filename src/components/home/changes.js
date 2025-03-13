import Card from "../reusables/cards/changesCard"
import Ticket from "../reusables/cards/e-tickettingCard"
export default function Changes() {
    return(
       <div className="grid grid-cols-1 mt-[3.25rem] mb-[4.55rem] lg:mt-[4.506rem] lg:mb-[9.434rem] gap-[1.691rem] lg:gap-[3.016rem] lg:grid-cols-2 container w-11/12 mx-auto">
        <Card/>
        <Ticket/>
       </div> 
    )
}