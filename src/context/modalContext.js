'use client'
import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
        <div className= {isModalOpen? " bg-black w-full bg-opacity-50 opacity-50 h-full transition-opacity duration-300" : "opacity-100"}>
            {children}
        </div>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
