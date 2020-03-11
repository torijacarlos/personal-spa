import React from "react"


const Experience = ({ position, web, company, term, responsibility, tasks, color }) => ( 
    <div className="experience__card">
        <h2>{position}
            <a href={web} target="_blank" rel="noopener noreferrer" className={"company__" + color}> | {company}</a>
        </h2>
        <p className="experience__card__term">{term}</p>
        <p className="experience__card__responsibility">{responsibility}</p>
        <ul>
            {tasks.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    </div>
)

export default Experience