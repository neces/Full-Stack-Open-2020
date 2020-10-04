import React from 'react'

const Country = ({ searchDisplay }) => {
    
return (
  <div>
    <li>{searchDisplay.name}</li>
  </div>
)

//     if (searchDisplay.length === 1) {
//         console.log('10+')
//         return (
//             <div>a</div>
//         )
//     }

//     else if (searchDisplay.length <= 10) {
//         console.log('10-')
//         return (
//             <div>b</div>
//         )
//     }

//     else (searchDisplay.length > 10); {
//         return (
//             <div>c</div>
//         )
//     }
  }

export default Country