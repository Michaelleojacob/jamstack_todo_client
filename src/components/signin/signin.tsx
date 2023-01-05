const Signin = ({
  toggleDisplaySignup,
}: {
  toggleDisplaySignup: () => void;
}) => {
  return (
    <div>
      <div>Signin</div>
      <button onClick={toggleDisplaySignup}>signup</button>
    </div>
  );
};

export default Signin;
