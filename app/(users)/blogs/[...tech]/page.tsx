import React from 'react'

function Tech(pros:any) {
    console.log(pros)
    const tech = pros.params.tech
    return (
<>
        <h1>Tech </h1>
        {
            tech.map((tech:any)=>{
                return(
                    <div key={tech}>{tech}</div>
                )
            })
        }
        </>
    )
}

export default Tech