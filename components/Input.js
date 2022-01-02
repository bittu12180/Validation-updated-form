import React from "react";


 const Input=(props)=>{
  const { name,type,lable,onChange, placeholder, onBlur } = props;
  return (
  <>
    {lable}
    <input type={type} name={name} onChange = {onChange} placeholder={placeholder} 
    onBlur={onBlur}/>
    </>
  )
};
export const Message=(props)=>{
  const { name ,type , lable }=props;
  return (
    <>
    {lable}
    <input type={type} name={name} />
    </>

  );
}
export default Input;
