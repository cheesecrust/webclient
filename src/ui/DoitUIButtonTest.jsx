
import React from 'react';
import Button from './doit-ui/Button';
import Text from './doit-ui/Text';

const App = () => {
  return (
    <div style={{ paddingLeft: 10 }}>
      <h6>
        <Button>전송하기</Button>
        <Text>기본 버튼</Text>
      </h6>
      <h6>
        <Button xlarge>전송하기</Button>
        <Text>xlarge 버튼</Text>
      </h6>
      <h6>
        <Button large>전송하기</Button>
        <Text>large 버튼</Text>
      </h6>
      <h6>
        <Button small>전송하기</Button>
        <Text>small 버튼</Text>
      </h6>
      <h6>
        <Button xsmall>전송하기</Button>
        <Text>xsmall 버튼</Text>
      </h6>
      <h6>
        <Button primary>전송하기</Button>
        <Text>primary 버튼</Text>
      </h6>
      <h6>
        <Button secondary>전송하기</Button>
        <Text>secondary 버튼</Text>
      </h6>
      <h6>
        <Button primary large>전송하기</Button>
        <Text>primary large 버튼</Text>
      </h6>
    </div>      
  );
}

export default App;
