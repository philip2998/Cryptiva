const Textarea = ({ type, placeholder }) => {
  return (
    <div className="col-12 col-sm-6 col-md-12 mb-3">
      <textarea
        style={{ color: 'white' }}
        className="form-control lh-base py-4 pe-5 mb-4 rounded-3"
        type={type}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
