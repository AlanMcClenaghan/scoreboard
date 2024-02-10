import React, { useState } from "react";

const AddPlayerForm = (props) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPlayer(value);
        setValue("");
    }
    
    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            {console.log(value)}
            <input 
                type="text"
                value={value}
                placeholder="Enter a player's Name"
                onChange = {(e) => setValue(e.target.value)}
            />
            <input 
                type="submit"
                value="Add Player"
            />
        </form>
    );
}

export default AddPlayerForm;