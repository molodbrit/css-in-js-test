import React from 'react';

import AppCss from './css/App';
import AppStyled from './styled-components/App';

let TYPE = 'css'; // 'styled'

function App() {
  return (
    <div className="App">
      {TYPE === 'css' && <AppCss />}
      {TYPE === 'styled' && <AppStyled />}
    </div>
  );
}

export default App;
