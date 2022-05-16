import React, { useState } from 'react';
import Button from './Button';
import Text from './Text';
import Modal from './Modal';

const ButtonWithModal = ( props ) => {
  const [state, setState] = useState({ showModal: false });
    return (
      <React.Fragment>
        <Button onPress={() => setState({ showModal: true })}>삭제</Button>
        {state.showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제 하시겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </React.Fragment>
    );
}

export default ButtonWithModal;
