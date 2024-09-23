const Link = ({ route }) => {
  const { name, path } = route;
  //   console.log(name, path);
  return (
    <>
      <span className="p-2 cursor-pointer hover:bg-slate-700 hover:text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300">
        {name}
      </span>
    </>
  );
};

export default Link;
