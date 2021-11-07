import React,{useState} from 'react'
import { Button, Checkbox, Form , Message,Loader} from 'semantic-ui-react';
import styled from 'styled-components';
import { auth, createUserWithEmailAndPassword } from "../Firebase-config";
import { Link } from "react-router-dom";
  const Box = styled.div`
    width: 450px;
    height:320px;
    background:#fff;
    border-radius:20px;
    padding:20px 50px;
    margin:0 auto;
    text-align:center;
    
  `;
  const Heading = styled.h1`
    font-size:32px;
    color:#000;
    text-align:center;
  `;

  const Mybutton = styled.button`
    padding:15px 50px;
    color:#fff;
    font-size:16px;
    background:#84C7AE;
    border:0;
    border-radius:15px;
  `;
  const Already = styled.p`
    font-size:12px;
    color:#000;
    margin-top:10px;
  `;
const Registration = () => {

    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [loading,setloading] = useState(false)
    let [errormsg,seterrormsg] = useState("")
    let [accmsg,setaccmsg] = useState("")

    let handleSubmit = (e) =>{
      e.preventDefault();
      setloading(true)
      createUserWithEmailAndPassword(auth, email, password)
           .then((user) => {
                setemail("")
                setpassword("")
                seterrormsg("")
                setloading(false)
                setaccmsg("Account Creation Successful")
           })
           .catch((error) => {
           
           const errorMessage = error.message;
           seterrormsg(errorMessage)
           setloading(false)
           });
 }
     return (
              <Box>
               <Form onSubmit={handleSubmit}>
                 <Heading>Create an account</Heading>

                <Form.Field>
                  
                  <input type="email" placeholder='Email Address' onChange={(e) => {setemail(e.target.value)}} value={email}/>
                </Form.Field>
                <Form.Field>
                  
                  <input type="password" placeholder='Password' onChange={(e) => {setpassword(e.target.value)}} value={password}/>
                </Form.Field>
                
                <Mybutton type='submit'>{loading ? <Loader active inline /> : "Create Account"}</Mybutton>
              </Form>
                <Already>Already have an account? <Link to="/">Sign in</Link></Already>

                {errormsg != "" ? <Message negative>
                    <Message.Header>{errormsg}</Message.Header>
                    
                    </Message> : ""}

                    {accmsg != "" ? <Message positive>
                    <Message.Header>{accmsg}</Message.Header>
                    
                    </Message> : ""}
              </Box>
     )
}

export default Registration
