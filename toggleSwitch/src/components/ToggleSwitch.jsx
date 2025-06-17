import { useState } from "react";

export const ToggleSwitch = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="text-center mt-32">
      <button
        className={`${open ? "bg-green-600" : "bg-red-600"} p-10`}
        onClick={open ? () => setOpen(false) : () => setOpen(true)}
      >
        {open ? "ON" : "OFF"}
      </button>
    </div>
  );
};
