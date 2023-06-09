const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="col-12 col-sm-6 col-md-12 mb-3">
      <input
        style={{ color: 'white' }}
        className="form-control lh-base py-3 px-3 rounded-3 mb-4"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
