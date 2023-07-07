import React, { useState } from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { message } from "antd";

//-INTERNAL IMPORTS
import { TextField } from "@/src/components/common/TextInput";
import { loginFn } from "@/src/services/queries/auth";
import { loggedIn } from "@/src/redux/userSlice";
import { useToggle } from "@/src/utils/hooks";

//--TYPE DRFINITIOSN
type credentials = {
  user: [] | any;
};

export const LoginForm = () => {
  //--STATE COMPONENTS
  const [isloading, setLoading] = useState(false);
  const [showPassword, togglePassword] = useToggle(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const router = useRouter();

  const auth = getAuth();
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
    setLoading(true);
    setLoginInfo({ email: values?.email, password: values?.password });
    console.log(loginInfo);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential: credentials) => {
        let user = userCredential.user;
        let authToken = user.accessToken;
        console.log("user->", user);
        loginFn(authToken)
          .then((res) => {
            dispatch(
              loggedIn({
                name: res.data.name,
                email: res.data.email,
                role: res.data.role,
                token: authToken,
                _id: res.data._id,
              })
            );
            message.success("Login Succesful ✔ ");
            setLoading(false);
            router.push("/");
          })
          .catch((err) => {
            message.error(`${err}`);
            console.log("backend_error->", err);
            setLoading(false);
          });
      })
      .catch((error) => {
        message.error(`${error}`);
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
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
            error={errors?.password && touched?.password}
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
            {isloading ? "Loading.." : "Sign In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
