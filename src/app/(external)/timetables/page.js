import Lagos from "@/components/table/lagos";
import Ibadan from "@/components/table/ibadan";
import Ibadan2 from "@/components/table/ibadan2";
import Companion from "@/components/reusables/railCompanion";


export default function Table(){
    return(
       <div className=" space-y-10">
        <Lagos/>
        <Ibadan/>
        <Ibadan2/>
        <Companion/>
     
       </div>
        
    )
}