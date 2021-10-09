import React from 'react';
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';

const TelaA = (props) => {
  return (
    <PassoStack {...props} avancar="TelaB">
      <TextoCentral corFundo="#e53935">Tela A</TextoCentral>
    </PassoStack>
  );
};

export default TelaA;
