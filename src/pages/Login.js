import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row,Input,Button  } from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
import {toast} from 'react-toastify'
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login=()=>{

    const location = useLocation();
    const postId = location.state?.postId;

    const navigate=useNavigate()
      
      const[loginDetails,setLoginDetails]=useState({
        username:'',
        password:'',
      })

      const [error,setError]=useState({
        errors:{},
        isError:false
    })

    //hanlde change
    const handleChange=(event,property)=>{
        console.log("handle change");
        //dynamic setting
        setLoginDetails({...loginDetails,[property]:event.target.value})
        
    }

    //reset data
    const resetData=()=>{
        toast.error("Something went wrong!!! ")
        setLoginDetails({
           usename:'',
           password:'',

        })
    }

    //submit form
    const submitForm=(event)=>{
        event.preventDefault()
        console.log(loginDetails);

        //validation
        if(loginDetails.username.trim()==='' || loginDetails.password.trim()==='' ){
            toast.error("Username or Password is required")
            return;
        }
        

        //submit the data to server to generate token

        loginUser(loginDetails).then((data)=>{
            console.log(data);

            //save the data to local storage
            doLogin(data,()=>{
                console.log("login details are saved to local storage")
                //redirect to user dashboard page
               // if(postId) navigate(`/user/post/${postId}`)
               // else navigate("/user/dashboard")
            })
            
         toast.success("Login Success !!  ")
         setLoginDetails({
             username:'',
             password:'',

         })
        }).catch((error)=>{
         console.log(error?.response?.data)
            if(error?.response?.status===400 || error?.response?.status===406){
                toast.error(error.response.data.message)
                }
           else{
             toast.error("error occured")
           }
         //handle the errors in proper way
         setError({
             errors:error,
             isError:true
         })
 
        })
     }

    return(

        <Base>
       <Container style={{marginTop:'80px', marginBottom:'30px'}}>
         <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color="dark" inverse>
                <CardHeader style={{alignSelf:"center"}}>
                <h3>Fill Information to Login!!</h3>
                    </CardHeader>
                <CardBody>
                <Form onSubmit={submitForm}>
                    {/*Name field */}
                    <FormGroup>
                        <Label for="email"></Label>
                        <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    id="email"
                                    onChange={(e)=>handleChange(e,'username')}
                                    value={loginDetails.username}
                                     />
                    </FormGroup>

                    {/*passsword field */}
                    <FormGroup>
                        <Label for="password"></Label>
                        <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    id="password" 
                                    onChange={(e)=>handleChange(e,'password')}
                                    value={loginDetails.password}
                                    />
                    </FormGroup>
                    <Container className="text-center">
                            <Button color="light" outline>Login</Button>
                            <Button onClick={resetData} color="info" className="ms-2" type="reset" outline>Reset</Button>
                        </Container>
                </Form>
                </CardBody>
            </Card>
            </Col>
         </Row>
       </Container>
        </Base>
    );
};

export default Login;