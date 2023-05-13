import "./styles.css";

const Button = ({ op, id }) => {
  return (
    <>
      <button className="btn" id={id}>
        {op}
      </button>
    </>
  );
};

export default Button;
