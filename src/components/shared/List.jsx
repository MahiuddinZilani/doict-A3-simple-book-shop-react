import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const List = ({ route }) => {
  const { name, path } = route;
  console.log(name, path);
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "px-4 py-2 font-medium cursor-pointer bg-slate-700 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300"
            : "px-4 py-2 font-medium cursor-pointer rounded-lg hover:scale-125 hover:shadow-lg transition-transform duration-300"
        }
      >
        {name}
      </NavLink>
    </>
  );
};

export default List;

List.propTypes = {
  route: PropTypes.object,
};
