'use client';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import SuccessLogo from "../../images/Success Icon.png";
import { IoIosClose } from "react-icons/io";

export function SuccessModal({ isOpen, onClose, message = "Thank you for your message! We'll get back to you soon." }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] lg:w-[45%] xl:w-[35%] px-10 py-12 rounded-lg">
      
        <div className="flex flex-col items-center justify-center gap-4">
          <Image 
            src={SuccessLogo} 
            className="w-[80px]" 
            alt="success" 
            width={80}
            height={80}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-bold text-xl">Success!</h2>
            <p className="text-center font-thin">
              {message}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}