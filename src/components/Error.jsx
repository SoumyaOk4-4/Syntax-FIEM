function Error() {
    return (
      <>
        <h1>404 - Not Found</h1>
        <br /><br /><br /><br /><br /><br /><br />
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee><span style={{color:"gray", fontSize:"3rem", fontFamily:"Font2"}}>Nothing to see here!🤷‍♂️</span></marquee>
        <br /><br /><br /><br /><br /><br /><br />
        <h1><a href="/" style={{color:"gray", fontSize:"2rem", fontFamily:"Font2"}}>👉 Return to Home Page 👈</a></h1>
      </>
    );
  }
  
  export default Error;
  