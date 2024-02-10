import React, { useState } from "react";

const AddPlayerForm = (props) => {
    const [value, setCValue] = useState("");
    
    return (
        <form>
            {console.log(value)}
            <input 
                type="text"
                value={value}
                placeholder="Enter a player's Name"
                onChange = {(e) => setCValue(e.target.value)}
            />
            <input 
                type="submit"
                value="Add Player"
            />
        </form>
    );
}

export default AddPlayerForm;