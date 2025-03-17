import React from 'react';

const Chabot = () => {
  return (
    <div>
      {/* <h1>Streamlit Integration</h1> */}
      <iframe
        title="Streamlit App"
        width="100%"
        height="800px"
        src="http://localhost:8502"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Chabot;
