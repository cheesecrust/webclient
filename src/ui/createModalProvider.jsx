import React, { useState } from 'react';
import Modal from './Modal';
import { Provider } from './ModalContext';

export default function createModalProvider(ContentMap = {}) {
  return ( props ) => {
    const [state, setState] = useState({ showModal: false });
    const [contentId, setContentId] = useState();
    const [modalProps, setModalProps] = useState({});

    const handleOpen = (contentId, modalProps) => {
      setContentId(contentId);
      setModalProps(modalProps);
      setState({ showModal: true });
    }

    const handleClose = () => {
      setState({ showModal: false });
    }

      const { children } = props;
      const { showModal } = state;
      const ModalContent = ContentMap[contentId];
  
      return (
        <Provider
          value={{
            openModal: handleOpen,
            closeModal: handleClose,
          }}
        >
          {children}
          {showModal && ModalContent && (
            <Modal>
              <ModalContent {...modalProps} />
            </Modal>
          )}
        </Provider>
      );
  };  
}
