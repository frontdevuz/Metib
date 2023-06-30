import "./form.scss";
import Logo from "../../assets/images/png/metib__main.png";
function Form({ handle_close }) {
  return (
    <div className="login">
      <div className="login__form">
        <img
          className="login__logo"
          src={Logo}
          alt="logo"
          width={180}
          height={80}
        />
        <h3 className="login__title">Saytga kirish</h3>
        <input
          className="login__input"
          type="text"
          placeholder="Telefon Raqam"
        />
        <input className="login__input" type="password" placeholder="Parol" />
        <button className="login__btn" onClick={handle_close}>
          Kirish
        </button>
      </div>
    </div>
  );
}

export default Form;
