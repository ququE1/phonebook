import React, {useState, useEffect} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import Loader from "./Components/Loader";
import axios from 'axios';
import Posts from "./Components/Search";
import image from "./images/phone.webp";
import image1 from "./images/kangan.webp";
let url="./images/phone.webp";

function App() {
  let[showForm, setShowForm] = useState(false);
  let [users, setUsers]=useState([]);
 let [loading, setLoading]= useState(false);
  let[errorMessage, setErrorMessage]=useState(null);
  let [editMode, setEditMode]=useState(false);
  let [userToEdit, setUser]=useState(null);
  //let [showForm2, setShowForm2] = useState(false);
  
  let [showForm1, setShowForm1]=useState(false);
  let showForm3 = () => {
  setShowForm1(!showForm1);
}



   useEffect(()=>{
      fetchUsers();
    }, []);


  function addUserHandler(){
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }



function onCreateUser(user){
  if(!editMode){
fetch('http://localhost:3000/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  }
}).then((response)=>{console.log(response)})
fetchUsers();
 }
 else{
  console.log(user)
  console.log(userToEdit);
 /*axios.put(`http://localhost:3000/users/${userToEdit.id}`, user)
 .then((response)=>{
  console.log(response);
 }).catch((error)=>{
 setErrorMessage(error.message);
 })*/
 //const idx =userToEdit.id;
 //axios.put(`http://localhost:3000/users/1`, user)


 fetch(`http://localhost:3000/users/${userToEdit.id}`, {
  method: 'PUT',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  }
 }).then((response)=>{console.log(response)})

/*axios.put(`http://localhost:3000/users/${userToEdit.id}`, user)
.then((response)=>{
console.log(response);
})
.catch((error)=>{
setErrorMessage(error.message)
})*/

fetchUsers();
  setShowForm(false);
}
fetchUsers();
  setShowForm(false);

}



function fetchUsers(){
  setLoading(true);
  setErrorMessage(null);
 fetch('http://localhost:3000/users',).then((response)=>{
 //handlin erros  
 if(!response.ok){
    throw new Error("Something went wrong");
  }
    return response.json();
 }).then((data)=>{
  let userData=[];
for(let key in data){
 userData.push({...data[key]})
}
console.log(userData);
 setUsers(userData);
 setLoading(false);
 })
 //handling errors 
 .catch((error)=>{
  setErrorMessage(error.message);
  setLoading(false);
 })
}
//usin get request to display user data with axios
/*function fetchUsers(){
 axios.get('http://localhost:3000/users',).then((response)=>{
    return response.data;
 }).then((data)=>{
  let userData=[];
for(let key in data){
 userData.push({...data[key], id: key})
}
console.log(userData);
 setUsers(userData);

 })
} */



function onEditUser(user){
  setEditMode(true);
  setUser(user);
  setShowForm(true);
console.log(user);
}



function onDeleteUser(user){
  let del= window.confirm(`Do you really want to delete the record of ${user.firstName + " "+ user.lastName}`);
 if(del){
axios.delete(`http://localhost:3000/users/${user.id}`)
.then((response)=>{
console.log(response);
fetchUsers();
}).catch((error)=>{
  setErrorMessage(error.message);
});
 }
  //console.log(user);

}





  return (
      <div>
        <div className='page-header'>

      
       


         

        {/*  <div style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:200,width:150, alignItems: 'left', alignItems: 'top'
    }}>
  </div>*/}
    <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
    {showForm1 && <form><button style={{marginTop: 5}}className='btn btn-normal' onClick={fetchUsers}>Get Users</button> </form> }
     
      {!showForm1 && ( <div>
     <div> 
       {!loading && !errorMessage && <UserDetails users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser}></UserDetails>} </div>
       <div><button className='btn btn-normal' onClick={()=>(setShowForm1(!showForm1))}>Close Users</button></div>
      </div> )}
      
       <Posts></Posts>

      
       
      
       {errorMessage && <h3 style={{textAlign: 'center'}}>{errorMessage}</h3>}
       {loading && <Loader>Loading ...</Loader>}
        {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToEdit}></UserForm>}
      </div>
      </div>
  );
}

export default App;



 