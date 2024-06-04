import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
   fetch('https://github.com/nitinpandey09')
   .then(response => response.json)
   .then(data => {
    console.log(data);
    setData(data)
   })
    } ,[])
  return (
    <div className='bg-red-200 text-xl text-center m-4 '>
     MY GITHUB REPO : 4
     <img src="https://avatars.githubusercontent.com/u/110042139?v=4" alt="Git picture"  width={300}/>
    </div>
  )
}

export default Github
