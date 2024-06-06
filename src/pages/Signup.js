        

import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row,Button, FormFeedback } from "reactstrap";
import Base from "../components/Base";

import { useEffect, useState } from "react"
import { configure } from "@testing-library/react";
import { signUp } from "../services/user-service";
import {toast} from 'react-toastify'


const Signup=()=>{
    // for declaring responsive fields to store data that user will enter
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        about:'',
    })
    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    useEffect(()=>{
        console.log(data);
    },[data])

     //hanlde change
    const handleChange=(event,property)=>{
        console.log("handle change");
        //dynamic setting
        setData({...data,[property]:event.target.value})
        
    }

    //reset data
    const resetData=()=>{
        toast.error("Something went wrong!!! ")
        setData({
            name:'',
            email:'',
            password:'',
            about:'',
        })
    }

    //submit form
    const submitForm=(event)=>{
       event.preventDefault()
       if(error.isError){
        toast.error("Form data is invalid , correct all details then submit !! ")
        setError({...error,isError:false})
        return;
       }
       console.log(data);

       //data validate

       //call server api for sending data

       signUp(data).then((resp)=>{
        console.log(resp);
        console.log("success log")
        toast.success("User is Registered Successfully!! user id : "+resp.id)
        setData({
            name:'',
            email:'',
            password:'',
            about:'',
        })
       }).catch((error)=>{
        console.log(error);
        console.log("error log")
        //handle the errors in proper way
        setError({
            errors:error,
            isError:true
        })

       })
    }

    return(

        <Base>
        <Container style={{marginTop:'50px', marginBottom:'20px'}}>
            <Row className="mt-4">
                <Col sm={{size:6,offset:3}}>
                <Card color="dark" inverse>
                    
                   <CardHeader style={{alignSelf:"center"}}>
                   <h3>Fill Information to Register!!</h3>
                   </CardHeader>
                   <CardBody>
                    {/*creating Form */}
                   <Form onSubmit={submitForm} >
                         {/* name field */}
                        <FormGroup>
                        <Label for ="name">Enter Name</Label>
                        <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    id="name"
                                    onChange={(e)=>handleChange(e,'name')}
                                    value={data.name}
                                   invalid={error.errors?.response?.data?.name? true:false } 
                                     />
                                     <FormFeedback>
                                    {error.errors?.response?.data?.name}
                                </FormFeedback>
                        </FormGroup>
                         {/* email field */}
                         <FormGroup>
                        <Label for ="email">Enter Email</Label>
                        <Input
                                    type="email"
                                    placeholder="Enter Here"
                                    id="email" 
                                    onChange={(e)=>handleChange(e,'email')}
                                    value={data.email}
                                    invalid={error.errors?.response?.data?.email? true:false } 
                                     />
                                     <FormFeedback>
                                    {error.errors?.response?.data?.email}
                                </FormFeedback>
                                    
                        </FormGroup>
                        {/* password field */}
                        <FormGroup>
                        <Label for ="password">Enter Password</Label>
                        <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    id="password" 
                                   onChange={(e)=>handleChange(e,'password')}  
                                   value={data.value} 
                                   invalid={error.errors?.response?.data?.password? true:false } 
                                   />
                                   <FormFeedback>
                                  {error.errors?.response?.data?.password}
                              </FormFeedback>
                        </FormGroup>
                        {/* about field */}
                        <FormGroup>
                        <Label for ="about">Enter About</Label>
                        <Input
                                    type="textarea"
                                    placeholder="Enter Here"
                                    id="about" 
                                    onChange={(e)=>handleChange(e,'about')}
                                    value={data.value}
                                    invalid={error.errors?.response?.data?.about? true:false } 
                                    />
                                    <FormFeedback>
                                   {error.errors?.response?.data?.about}
                               </FormFeedback>
                        </FormGroup>

                        <Container className="text-center">
                                <Button color="light" outline>Register</Button>
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

export default Signup;