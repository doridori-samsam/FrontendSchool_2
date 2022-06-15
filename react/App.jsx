import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
let thumbsup = like >=1 ? '👍': '';
  function handleClickLike() {
      setLike(like + 1)
      console.log(like);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like:{like} {thumbsup}</button>
      </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;