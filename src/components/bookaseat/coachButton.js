import { useState } from 'react';
import Coach from './coach';
export default function CoachButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      className={`${isModalOpen ? 'overflow-hidden bg-opacity-15' : 'bg-opacity-0'} transition-all relative`}
    >
      <Coach isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div
        className={`${isModalOpen ? 'hidden' : 'block'} w-[300px] mx-auto my-10`}
      >
        <button
          onClick={() => openModal()}
          className="w-full bg-green-600 py-2 text-white lg:mx-auto rounded-sm shadow-md items-center justify-center"
        >
          Coach Modal
        </button>
      </div>
    </div>
  );
}
