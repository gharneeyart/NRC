
import { useModal } from "@/context/modalContext"
import Modal from "./modal"
export default function ModalButton() {
    const { openModal } = useModal();
    return (
        <div className={`transition-all relative` }>
            <Modal/>
            <div className={`w-[300px] mx-auto my-10`}>
            <button onClick={openModal} className="w-full bg-green-600 py-2 text-white lg:mx-auto rounded-sm shadow-md items-center justify-center">Open Modal</button>
            </div>
          
        </div>

    )
    
}