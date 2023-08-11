import React from 'react';
import Navbotton from './Navbotton';
const Content1 = ({ children }) => {
    // window.scrollTo(0,0)
    return (
        <div>
            <Navbotton />
            {children}
        </div>

    )
}
export default Content1;