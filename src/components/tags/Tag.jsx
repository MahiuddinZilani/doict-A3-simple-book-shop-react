import PropTypes from "prop-types";

const Tag = ({ tag }) => {
  return (
    <div>
      <p className="bg-slate-700 px-2 py-1 rounded-lg text-white">{tag}</p>
    </div>
  );
};

export default Tag;

Tag.propTypes = {
  tag: PropTypes.string,
};
