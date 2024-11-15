import React, { useEffect, useState } from 'react'

function Github() {

    useEffect(() => {

        const [data, setData] = useState ([])

        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
        setData(data)   
        })
    }, []);


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>  
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt='Git Picture' width={300}></img>
    </div>
  )
}


export default Github
