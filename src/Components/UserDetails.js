import {React, useState} from "react";
import './UserDetails.css';

function UserDetails(props){

  //let [showForm2, setShowForm2] = useState(false);
 /* let showForm1 = () => {
  setShowForm2(!showForm2);
}*/
 /* let showForm2 = () => {
      setShowForm(showForm);
  }*/







    function onEditUserClicked(event, user){
   props.onEditUser(user);
    }

    function onDeleteUserClicked(event, user){
        props.onDeleteUser(user);

    }

 return <div className="user-details"> 
    
 

       
       <table className="users-table">
       <tr>
            <th>Full Name</th>
            <th>Contact</th>
            <th>Phone</th>
            <th></th>
          </tr>

       
          
                {props.users.map((user)=>{
            return<tr>
            <td>{user.firstName +  " " + user.lastName}</td>
            <td>{user.contact}</td>
            <td>{user.phone}</td>
            <td>
                <button className="btn btn-primary" onClick={(event)=>{onEditUserClicked(event, user)}}>Edit</button>
              <button className="btn btn-danger" onClick={(event)=>{onDeleteUserClicked(event, user)}}>Delete </button>
            </td>
          </tr>
        })}
       </table>

       


</div>
}

export default UserDetails;







 /* <button type="button"style={{ 'margin-left':500,'background-color': 'purple', 'color': 'white', 'borderRadius': 3, 'padding': 20}} onClick={showForm1}>Close</button>
    </form>
      )}*/

       /*  <form>
             {!showForm2 && <button type="button"style={{ 'margin-left':500,'background-color': 'purple', 'color': 'white', 'borderRadius': 3, 'padding': 20}}  onClick={showForm1}>View Contacts</button>}
              </form>  
  {showForm2 && ( <form>*/