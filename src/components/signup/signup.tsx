const Signup = ({
  toggleDisplaySignup,
}: {
  toggleDisplaySignup: () => void;
}) => {
  return (
    <div>
      <div>Signup</div>
      <button onClick={toggleDisplaySignup}>signin</button>
    </div>
  );
};

export default Signup;
