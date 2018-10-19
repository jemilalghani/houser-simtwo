import React from 'react';

export default function House(props){
    return(
        <div className="houses">
            <div>
                <h3>{props.name}</h3>
                <h4>{props.address}</h4>
                <h4>{props.city} {props.state} {props.zip}</h4>
                <button onClick={()=>props.delete(props.house_id)}>Delete</button>
            </div>
        </div>
    )
}