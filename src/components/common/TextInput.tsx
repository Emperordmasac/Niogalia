import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { BsSearch } from 'react-icons/bs';

//--INTERNAL IMPORTS

export const TextField = ({
  type,
  name,
  htmlFor,
  label,
  value,
  disabled,
  divClass,
  labelClass,
  context,
  ...rest
}: {
  type: string;
  name: string;
  htmlFor: string;
  label?: string;
  value: any;
  error: any;
  focus?: string;
  disabled?: boolean;
  divClass?: string;
  inputClass?: string;
  inputWrapperClass?: string;
  labelClass?: string;
  context?: any;
  [x: string]: any;
}) => (
  <div className={`w-full ${divClass}`}>
    {label && (
      <label
        htmlFor={htmlFor}
        className={`text-[1.1rem] text-black mb-3 font-medium inline-block ${labelClass}`}
      >
        {label}
      </label>
    )}
    <div
      className={`bg-white w-full flex items-center gap-3 ${
        context ? 'pr-3' : 'pr-0'
      }  overflow-hidden  border-[1px]`}
    >
      <Field
        type={type}
        name={name}
        id={htmlFor}
        value={value}
        disabled={disabled ? true : false}
        className="text-[1rem] px-5 py-4 w-full outline-none "
        autoComplete="off"
        {...rest}
      />
      {context && context}
    </div>
    <ErrorMessage
      name={name}
      className="text-[.9rem] text-[#ff0336]"
      component="p"
    />
  </div>
);

export const SearchInput = () => (
  <>
    <div className="w-full border-solid border-black flex items-center mt-10 bg-[#e5e5e5] p-[1rem] gap-[.7rem] rounded-2xl">
      <BsSearch onClick={() => {}} className="cursor-pointer text-[1rem]" />
      <input
        className="w-[90%] border-none outline-none bg-transparent"
        type="text"
        placeholder="Search Products"
      />
    </div>
  </>
);
