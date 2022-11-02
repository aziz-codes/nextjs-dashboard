import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../context/contextProvider";
const Modal = () => {
  const { open, setOpen } = useStateContext();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <div
        className="absolute left-0 right-0 bottom-0
     top-0 m-auto z-50 bg-white shadow-2xl border max-w-sm max-h-96"
      >
        <div className="flex flex-col text-black ">
          <div className="flex justify-end items-end p-1">
            <XCircleIcon
              className="h-5 w-5 cursor-pointer"
              onClick={() => setOpen(false)}
              title="close"
            />
          </div>
          <div className="m-1">Modal Content goes here.</div>
        </div>
      </div>
    </Backdrop>
  );
};

export default Modal;
