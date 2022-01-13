import React, { useState } from "react";
import PropTypes from "prop-types"

export const AddCategory = ({ setCategories}) => {
  const [InputValue, setInputVlaue] = useState("");
  const handleInputChange = (e) => {
    setInputVlaue(e.target.value);
  };
  // const handleInputEnter=(e)=>{
  //     e.charCode===13?console.log('presionaste Enter'):console.log(e.charCode)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputValue.trim().length>2) {
      setCategories((cats) => [...cats, InputValue]);
      setInputVlaue('')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} value={InputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}

