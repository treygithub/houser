import React from 'react';
    //This is a child component to house.js  my Delete Button
    const DeleteBTN = (props) =>{
        return(
            <div>
                <button onClick={() =>props.delete1(props.id)}>Delete</button>
            </div>)
}
export default DeleteBTN;