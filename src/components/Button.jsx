import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type = "button" }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
};

export default Button;
