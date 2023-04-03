import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form } from "formik";
import { object, string } from "yup";

//--INTERNAL IMPORTS
import { useToggle } from "@/src/utils/hooks";
import { goTop } from "@/src/utils/helpers";
import { TextField } from "@/src/components/common/TextInput";
import NavBar from "@/src/components/navigation/NavBar";

const Login = (): JSX.Element => {
    const [showPassword, togglePassword] = useToggle(false);
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = object().shape({
        email: string().email("Email is invalid").required("Email is required"),
        password: string()
            .min(8, "Password must not be less than 8 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values: any) => {
        setLoginInfo({ email: values?.email, password: values?.password });
        console.log("loginInfo-->", loginInfo);
        goTop();
    };

    return (
        <>
            <NavBar />
            <div className="bg-white py-[12rem] container page_padding grid grid-cols-2 gap-10 items-center md1000:grid-cols-1">
                {/* Sign in Section */}
                <div className=" py-[5rem] flex justify-center">
                    {/* form */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, isValid, dirty }) => (
                            <Form
                                className="flex flex-col py-20 px-10 bg-[#f8f8f8] w-[30rem] min450:w-full  shadow-xl relative"
                                autoComplete="off"
                            >
                                <TextField
                                    type="text"
                                    name="email"
                                    htmlFor="email"
                                    label="Email Address"
                                    value={values?.email}
                                    error={errors?.email && touched?.email}
                                    placeholder="name@gmail.com"
                                />
                                <TextField
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    htmlFor="password"
                                    label="Password"
                                    value={values?.password}
                                    error={
                                        errors?.password && touched?.password
                                    }
                                    placeholder="Password"
                                    divClass="mt-8"
                                    context={
                                        <span
                                            className="text-[.7rem] text-black cursor-pointer "
                                            onClick={togglePassword}
                                        >
                                            <i className="z-[99] fa-sharp fa-solid fa-eye-slash"></i>
                                        </span>
                                    }
                                />

                                <button
                                    type="submit"
                                    className="bg-[#007a7a] text-white py-4 font-medium text-[1.2rem] w-full mt-10 rounded-full"
                                >
                                    Sign In
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                {/* sign up section */}
                <div className="page_padding flex flex-col text-center items-center py-20 px-10">
                    <h2 className="font-bold text-[2.6rem] text-black md1000:text-[1.7rem]">
                        New Customers
                    </h2>
                    <p className=" text-black text-[15px]">
                        Register with Niogalia today
                    </p>
                    <button className="bg-black text-white font-medium text-[1.2rem] px-40 py-4 rounded-full mt-10 md1000:px-10 ">
                        Register Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
