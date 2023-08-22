import React from "react";

function Register() {
  return (
    <React.Fragment>
      <form className="register">
        <label htmlFor="text">Telefon raqamingiz</label>
        <input type="text" id="text" required />
        <label htmlFor="parol">Parol kiriting</label>
        <input type="password" id="parol" required />
      </form>
    </React.Fragment>
  );
}

export default Register;
