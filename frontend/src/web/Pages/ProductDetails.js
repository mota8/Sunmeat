import React, { useEffect } from 'react'
import Content from '../../components/Content'
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
    const data = useParams();
    useEffect(() => {
        
    }, []);
    console.log(data)
    return (
        <Content> 
            <div className='container'>
                {data.ProductId}

                

            </div>
        </Content>
    )
}
