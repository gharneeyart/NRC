// 'use client';
// import { createContext, useState, useContext } from 'react';

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
//       <div
//         className={
//           isModalOpen
//             ? ' bg-black w-full bg-opacity-50 -z-30 h-full transition-opacity duration-300'
//             : 'bg-opacity-100'
//         }
//       >
//         {children}
//       </div>
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => useContext(ModalContext);

'use client';
import { createContext, useState, useContext } from 'react';
import LogoutModal from '@/components/modal/logOutModal';
import ResetPasswordModal from '@/components/modal/changePasswordModal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    type: null, // 'logout' or 'resetPassword'
    props: {} // additional props for the modal
  });

  const openModal = (type, props = {}) => {
    setModal({ isOpen: true, type, props });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: null, props: {} });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {modal.type === 'logout' && <LogoutModal {...modal.props} onClose={closeModal} />}
          {modal.type === 'resetPassword' && <ResetPasswordModal {...modal.props} onClose={closeModal} />}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
