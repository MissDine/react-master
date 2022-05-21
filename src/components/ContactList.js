import React from "react";

const ContactList = (props) =>{
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return(
            <div>
                <div>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
            </div>
        )
    }
    )
    return(
        <div>{renderContactList}</div>
  
    )

}
export default  ContactList;