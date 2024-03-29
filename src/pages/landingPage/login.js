import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  handleInputChange,
  renderElements,
} from "../../servicecalls/appServices";
import _ from "lodash";
import { authContent } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [constraints, setConstraints] = useState({});
  const [errors, setErrors] = useState({});
  const layoutElements = [
    {
      label: "Name",
      placeholder: "First Name",
      name: "name",
      type: 1,
      required: true,
      //   constraints: [
      //     {
      //       label: "pattern",
      //       value: 1,
      //     },
      //   ],
    },
    {
      label: "Email",
      placeholder: "Email",
      name: "email",
      type: 1,
      required: true,
      //   constraints: [
      //     {
      //       label: "pattern",
      //       value: 5,
      //     },
      //   ],
    },
    {
      label: "Role",
      name: "role",
      placeholder: "Please select User type",
      required: true,
      type: 2,
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Users",
          value: "users",
        },
      ],
    },
  ];
  const handleChange = (e) => {
    handleInputChange(e, values, setValues);
  };

  const submitForm = () => {
    console.log("Submit Form--->", values);
    dispatch(authContent("userAuth", true));
    dispatch(
      authContent("userData", values, "", "/user-portal/user-list", navigate)
    );
  };
  return (
    <>
      {layoutElements?.map((d, i) => (
        <div key={i}>
          {renderElements({
            ...d,
            handleChange,
            values,
            errors,
            hideLabel: true,
          })}
        </div>
      ))}
      <button className="" onClick={submitForm}>
        Sign up
      </button>
    </>
  );
};

export default Login;
