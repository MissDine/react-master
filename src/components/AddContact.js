import React from "react";

const AddContact = () =>{
    state = {
        email: "",
        name : "",
    }
    return(
        <div>
            <h2>Please add Contact</h2>
            <form>
                <div>
                <label>Name</label>
                <input type = "text" name = "Name:" placeholder="Please enter your name" onChange ={(e) =>}/>
                </div>
                <div>
                <label>Email</label>
                <input type = "text" name = "Email:" placeholder="Please enter your email"/>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="button">Submit</button>
            </form>
        </div>
    )
}

export default  AddContact;