import "./style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label htmlFor="">{label}</label>}

      <input
        type=""
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
