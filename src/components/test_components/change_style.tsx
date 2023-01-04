// const ChangeStyle = ({ theme }: { theme: boolean }) => {
//   return (
//     <div>
//       <div>from ChangeStyle</div>
//       <div>{theme ? "light" : "dark"}</div>
//     </div>
//   );
// };

import { useContext } from "react";
import { ThemeContext } from "../themeContext/themeContext";

const ChangeStyle = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <div>from ChangeStyle</div>
      <div>{isDarkMode ? "dark" : "light"}</div>
    </div>
  );
};

export default ChangeStyle;
