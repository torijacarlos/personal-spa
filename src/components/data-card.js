import React from "react"


const DataCard = ({ title, values }) => ( 
    <div className="data__card">
        <h2>{title}</h2>
        <hr></hr>
        <ul>
            {values.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
    </div>
)

export default DataCard