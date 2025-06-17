import { useState } from "react";

export const ToggleSwitch = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="text-center mt-32 border-2">
      <button
        className={`${open ? "bg-green-600" : "bg-red-600"} p-10 cursor-pointer`}
        // onClick={open ? () => setOpen(false) : () => setOpen(true)}
        onClick={() => setOpen(!open)} //logical not operator
      >
        {open ? "ON" : "OFF"}
      </button>
    </div>
  );
};
