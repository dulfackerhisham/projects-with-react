import { useState } from "react";

export const ToggleSwitch = () => {
  const [open, setOpen] = useState(true);

  const offBtn = open ? "ON" : "OFF";

  return (
    <div className="text-center mt-32 border-2">
      <button
        className={`${open ? "bg-green-600" : "bg-red-600"} p-10 cursor-pointer text-lg font-bold text-blue-800`}
        // onClick={open ? () => setOpen(false) : () => setOpen(true)}
        onClick={() => setOpen(!open)} //logical not operator
      >
        {offBtn}
      </button>
    </div>
  );
};
