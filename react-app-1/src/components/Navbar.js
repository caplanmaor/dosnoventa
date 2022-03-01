function Navbar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://dosnoventabikes.com/wp-content/uploads/2020/09/logo.svg"
      ></img>
      <h4>SHOP</h4>
      <h4>STORIES</h4>
      <h4>COMPANY</h4>
      <div className="nav-personal">
        <h3>ACCOUNT</h3>
        <h3>CART</h3>
      </div>
      <div className="nav-seperator"></div>
    </div>
  );
}

export default Navbar;
