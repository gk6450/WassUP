import React, { useEffect, useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {

  const contextMenuRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (event.target.id !== "open-context") {
  //       if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
  //         setContextMenu(false);
  //       }
  //     }
  //   };
  //   document.addEventListener("click", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick)
  //   }
  // }, [contextMenuRef, setContextMenu]);

  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
    callback();
  };


  return (
    <div className={`fixed py-2 z-[100] bg-dropdown-background shadow-xl`}
      ref={contextMenuRef}
      style={{
        top: coordinates.y,
        left: coordinates.x
      }}>
      <ul>
        {
          options.map(({ name, callback }) => (
            <li key={name}
              onClick={(e) => handleClick(e, callback)}
              className="px-5 py-2 cursor-pointer hover:bg-background-default-hover">
              <span className="text-white">{name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ContextMenu;
