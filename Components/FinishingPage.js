import React from 'react';
import { Helmet } from "react-helmet";  
import styles from "../styles/Home.module.css"


const FinishingPage = () => {
    return (
    <>  
        <Helmet> 
            <body style={"height : 100vh; background-color: hsl(217, 100%, 97%);"}></body>
        </Helmet>  
        <div className={styles.finish} style={{textAlign:"center"}}>
            <img  className="m-3" src="./images/icon-thank-you.svg" alt="thanks"></img>
            <h1 className="m-3" >Thank You!</h1>
            <p>Thanks for confirming your subscription!. We hope you have fun 
                using our plaftform. If you ever need support feel free 
                to email us at support@loremgaming.com</p>    
        </div>
    </> 
    );
}

export default FinishingPage;
