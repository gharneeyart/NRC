import Lagos from "@/components/table/lagos";
import Ibadan from "@/components/table/ibadan";
import Ibadan2 from "@/components/table/ibadan2";
import Lagos2 from "@/components/table/lagos2";
import Companion from "@/components/reusables/railCompanion";


export default function Table(){
    return(
       <div className="w-11/12 container mx-auto pt-40">
        <Lagos/>
        <Ibadan/>
        <Lagos2/>
        <Ibadan2/>
        <Companion/>
     
       </div>
        
    )
}
