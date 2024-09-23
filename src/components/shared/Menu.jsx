import { useState } from "react";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
import { ROUTES } from "../../routes/routes";
import List from "./List";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const iconStyle =
    "p-3 cursor-pointer hover:bg-slate-600 hover:text-white rounded-3xl relative md:hidden text-2xl";

  return (
    <div>
      <div onClick={() => setOpen(!open)} className={`${iconStyle}`}>
        {open ? <TfiClose /> : <TfiMenuAlt />}
      </div>
      <nav
        className={`${
          open
            ? "flex justify-evenly absolute bg-slate-500 text-white top-16 left-0 w-full"
            : "hidden"
        } md:flex md:flex-row md:static md:bg-slate-300 md:text-black md:space-x-6`}
      >
        {ROUTES.map((route) => (
          <List key={route.id} route={route}></List>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
