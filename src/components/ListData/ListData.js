import React, { useEffect, useState } from 'react';

const ListData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{

        fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
        .then(res => res.json())
        .then(data => setData(data.clients))
    },[])

    
    
    return (
        <>
        
        <div className='table-responsive'>
            <div>
                <table className='table align-items-center'>
                <thead className="thead-light">
            <tr>
                <th scope="col" className="sort" data-sort="name">NAME</th>
                <th scope="col" className="sort" data-sort="company">COMPANY</th>
              
            </tr>
        </thead>
        <tbody>
            {
                data.map(singleData =>
                    <tr>
                   
                    <td className="name">
                        {singleData?.name}
                    </td>
                    <td>
                       
                       {singleData?.company}
                      
                    </td>
                   
                    
                   
                </tr>
                )
            }
        </tbody>


                </table>
            </div>
          
        </div>
        </>
    );
};

export default ListData;