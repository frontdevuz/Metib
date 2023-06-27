import "./buttoncontainer.scss"
function Buttoncontainer({ children, className }) {
    return <div className={"button__main " + className}>{children}</div>;
  }
  export default Buttoncontainer;
