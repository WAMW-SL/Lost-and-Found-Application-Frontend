import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { SignUpReq } from "../../service/AuthProcess/Auth";

interface SignUp {
    // userId: string;
    userName:string
    email: string;
    password: string;
    role?: Role;
  }

  enum Role {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    USER = "USER"
  }

export const SignUp = () => {  

const [ signUp, setSignUp] = useState<SignUp>({
    // userId: "",
    userName:"",
    email: "",
    password: "",
    role: undefined
})

const handleReset = () =>{
    setSignUp({
        userName:"",
        email: "",
        password: "",
        role: undefined
    })
   }

const handleOnChange = (e :React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=>{
    setSignUp({...signUp,[e.target.name]: e.target.value});
 }

const handleOnSubmit = async() =>{
    console.log(JSON.stringify(signUp))
    await SignUpReq(signUp)
    handleReset();
} 

  return (
    <>
      <div className="mx-auto w-50 mt-5">
        <h1>SignUp Portal</h1>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="User Name"
            className="mb-3"
          >
            <Form.Control type="text" name="userName" value={signUp.userName} onChange={handleOnChange}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" name="email" value={signUp.email} onChange={handleOnChange} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" name="password" value={signUp.password} onChange={handleOnChange} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingRole" label="Role" className="mb-3">
            <Form.Select 
            name="role"
            value={signUp.role || ""}
            onChange={handleOnChange}
            >
              <option value="">Select Role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="STAFF">STAFF</option>
              <option value="USER">USER</option>
            </Form.Select>
          </FloatingLabel>
        </Form>

        <Button variant="success" onClick={handleOnSubmit}>SignIn</Button>
        <Button variant="danger"  className="mx-2">
          Reset
        </Button>
      </div>
    </>
  );
};