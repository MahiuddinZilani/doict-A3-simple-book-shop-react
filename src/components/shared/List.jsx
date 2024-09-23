import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List = ({ route }) => {
  const { name, path } = route;
  console.log(name, path);
  return (
    <>
      <Link
        to={path}
        className="p-2 cursor-pointer hover:bg-slate-700 hover:text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300"
      >
        {name}
      </Link>
    </>
  );
};

export default List;

List.propTypes = {
  route: PropTypes.object,
};
