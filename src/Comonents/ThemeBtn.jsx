import { useContext } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import ThemeContext from "../Providers/Theme/ThemeContext";
const ThemeBtn = () => {
  const { dark, dispatch } = useContext(ThemeContext);

  const changeTheme = (e) => {
    e.preventDefault()
    dispatch({
      type: "CHANGE_THEME",
    });
  };

  return (
    <button
      className={ dark ? "btn btn-warning text-light" : "btn btn-dark"}
      id="theme-btn"
      onClick={(e)=>changeTheme(e)}
    >
      {dark ? <MdSunny /> : <BsFillMoonFill />}
    </button>
  );
};

export default ThemeBtn;
