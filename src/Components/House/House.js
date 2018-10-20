import React from 'react';
import './House.css';
import InputBox from '../InputBox';

export default function House(props){
    return(
        <div className="houses">
                <div className="textInfo">
                    <div>
                        <h3>{props.name}</h3>
                    </div>
                    <h4>{props.address}</h4>
                    <h4>{props.city} {props.state} {props.zip}</h4>

                    <p>{props.mortgage}</p> <p>{props.rent}</p>
                </div>
                <img src={props.image} width='120' />

                <div >
                    <button className="buttony" onClick={()=>props.delete(props.house_id)}>Delete</button>
                </div>
        </div>
    )
}