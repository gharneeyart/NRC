import Lagos from "@/components/table/lagos";
import Ibadan from "@/components/table/ibadan";
import Ibadan2 from "@/components/table/ibadan2";

export default function Table(){
    return(
       <div className="w-11/12 container mx-auto space-y-10">
        <Lagos/>
        <Ibadan/>
        <Ibadan2/>
       </div>
        
    )
}