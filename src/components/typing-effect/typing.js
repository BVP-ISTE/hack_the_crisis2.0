import React from "react";
import Typed from 'react-typed';
import "./typing.css"



export default function MytypedComponent(){
    return (
        <div className="typing-div">
         {/* <span>&lt;&quot;</span> */}
         <h1>
            <Typed
                strings={[
                '24 hours of creation',
                'Win awesome prizes'
                
                ]}
                typeSpeed={80}
                loop
            />
         </h1>

          {/* <span>&quot;/&gt;</span> */}
            

        
        </div>
    );
}