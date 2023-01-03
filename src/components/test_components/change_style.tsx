const ChangeStyle = ({ theme }: { theme: boolean }) => {
  return (
    <div>
      <div>from ChangeStyle</div>
      <div>{theme ? "light" : "dark"}</div>
    </div>
  );
};

export default ChangeStyle;
