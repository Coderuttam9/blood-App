import React, { useState } from "react";

const useFrom = (initialState) => {
  const [input, setInput] = useState(initialState);
  //   handle input chage
  const handleIputchange = (e) => {
    setInput((prevSstate) => ({
      ...prevSstate,
      [e.target.name]: e.target.value,
    }));
  };

  //   form reset
  const restForm = () => {
    setInput(initialState);
  };

  return { input, handleIputchange, restForm };
};

export default useFrom;
