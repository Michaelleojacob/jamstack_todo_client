import LoggedInHeader from "../header/LoggedInHeader";

const MobileLayout = () => {
  return (
    <div>
      <LoggedInHeader active={true} />
      <div>user is logged in and window is mobile size</div>
    </div>
  );
};

export default MobileLayout;
