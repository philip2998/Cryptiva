const MainButton = ({ text, disabled }) => {
  return (
    <button
      className={`main-button border-none rounded-3 cursor-pointer fw-bold py-3 px-4 ${
        disabled ? 'opacity-75' : ''
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default MainButton;
