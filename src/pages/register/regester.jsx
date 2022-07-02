import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";

const Regester = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data , setData] = useState("")

  const onsubmite = (data) => {
    setData(data)
  }

  const GenderOptions = [
    {
      value: 1,
      label: "Male",
    },
    {
      value: 2,
      label: "Female",
    },
  ];

  const HobbiesSelect = [
    {
      value: 1,
      label: "swime",
    },
    {
      value: 2,
      label: "draw",
    },
    {
      value: 3,
      label: "ride a bike",
    },
    {
      value: 4,
      label: "crafting",
    },
    {
      value: 5,
      label: "reading",
    },
    {
      value: 6,
      label: "nothing",
    },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="border p-3 w-50" onSubmit={handleSubmit(onsubmite)}>
        <h5 className="text-center mb-4 text-decoration-underline text-secondary">Register</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name = "email" {...register("email" , {required:true})}/>
          {
            (errors.email && errors.email.type === "required") &&
            <p className="text-danger">Please enter your email</p>
          }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <ReactSelect options={GenderOptions} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hobbies</Form.Label>
          <ReactSelect options={HobbiesSelect} isMulti />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name = "password"
          {...register("password" , {required : true , 
          maxLength: 10 , pattern : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})}/>
          {
            (errors.password && errors.password.type === "required") &&
            <p className="text-danger">Please enter your password</p>
          }
          {
            (errors.password && errors.password.type == "maxLength") &&
            <p className="text-danger">Maximum length is 10</p>
          }
          {
             (errors.password && errors.password.type == "pattern") &&
             <p className="text-danger">Password must contain at least one upper-Case , Lower-Case , and number </p>
          }
        </Form.Group>
        <Form.Group className="mb-4" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" name = "confirm password" {...register("confirmPassword" , {required:true})}/>
          {
            data.confirmPassword !== data.password ?
            <p className="text-danger">confirm password not match</p>
            :
            ""
          }
        </Form.Group>
        <Button variant="info" type="submit" className="m-auto w-25 py-2 text-white">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Regester;
