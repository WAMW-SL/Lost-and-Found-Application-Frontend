import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { SignInReq } from "../../service/AuthProcess/Auth";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router";

interface SignIn {
  email: string;
  password: string;

}

export const SignIn = () => {

const [ signIn, setSignIn] = useState<SignIn>({
    email: "",
    password: ""
})

const { login} = useAuth();
const navigate = useNavigate()

const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=>{
   setSignIn({...signIn,[e.target.name]: e.target.value});
 }

 const handleReset = () =>{
  setSignIn({
    email:"",
    password:"",
  })
 }

const handleOnSubmit = async (e:React.ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(JSON.stringify(signIn))
    const token = await SignInReq(signIn)
    login(token)
    handleReset();
    navigate("/item")
}
  return (
    <>
      <div className="mx-auto w-50 mt-5">
        <h1>Login Portal</h1>
        <Form onSubmit={handleOnSubmit}>

        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="email"
            value={signIn.email}
            onChange={handleOnChange}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" 
           label="Password"
            className="mb-3">
          <Form.Control
            type="password"
            name="password"
            value={signIn.password}
            onChange={handleOnChange}
          />
        </FloatingLabel>
        <Button variant="success" type="submit">SignIn</Button>
        <Button variant="danger" onClick={handleReset} className="mx-2">Reset</Button>
        </Form>
      </div>
    </>
  );
};