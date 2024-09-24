import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section className="bg-slate-300 sticky top-0 left-0 w-full shadow-lg z-50">
      <header className="container mx-auto flex items-center justify-between relative">
        {/* logo */}
        <Link to="/">
          <div className="flex justify-center items-center gap-4">
            <img
              src="../images/book logo.png"
              alt="book store logo"
              className="w-16"
            />
            <h1 className="hidden md:contents">Book Store</h1>
          </div>
        </Link>

        {/* menu */}
        <Menu></Menu>

        {/* buy or signIn */}
        <div className="space-x-2">
          <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300">
            Sign In
          </button>
          <button className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300">
            Buy Book
          </button>
        </div>
      </header>
    </section>
  );
};

export default Navbar;

{
  /* <div className="fixed top-0 left-0 w-full shadow-lg"></div> */
}
