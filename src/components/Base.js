import CustomNavBar from "./CustomNavBar";

const Base=({title="Welcome to our website",children})=>{
    return(
         <>
          <CustomNavBar/>
            {children}
            
         </>
    );
};

export default Base;