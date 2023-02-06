import React, {useRef} from 'react';
import './UserForm.css';

function UserForm(props){

    let fnameRef=useRef();
    let lnameRef=useRef();
    let contactRef=useRef();
    let phoneRef=useRef();

   
function onCreateUser (event){
    event.preventDefault();
  let user= {
    firstName: fnameRef.current.value,
    lastName: lnameRef.current.value,
    contact: contactRef.current.value,
    phone: phoneRef.current.value,

    
    
 }
 props.onCreateUser(user);
 //console.log(user);
}


    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3 style={{textAlign: 'center'}}>{props.editMode? 'Update User': 'Create New User'}</h3>
                        
                       
                           <div class="user-form">
                           
                            
                          <form onSubmit={onCreateUser}>
                                <div>
                                    <input type="text" placeholder="First name" ref={fnameRef} defaultValue={props.editMode? props.user.firstName: ''}/>
                                    <input type="text" placeholder="Last name" ref={lnameRef} defaultValue={props.editMode? props.user.lastName: ''}/>
                                </div>
                                <div>
                                    <input type="number" placeholder="Number" ref={phoneRef} defaultValue={props.editMode? props.user.phone: ''} />
                                </div>
                                <div>
                                    <input type="text" placeholder="Type" ref={contactRef} defaultValue={props.editMode? props.user.contact: ''} />
                                </div>

                                <button className='add-user-button'>{props.editMode? 'Update User': 'Create User'}</button>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </>
}

export default UserForm;