import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import Text from './Text';

const { Provider, Consumer } = React.createContext({});

export { Consumer };

const ModalProvider = ( props ) => {
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

    return (
      <Provider
        value={{
          openModal: handleOpen,
          closeModal: handleClose,
        }}
      >
        {children}
        {showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제 하시겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </Provider>
    );
}

export default ModalProvider;
