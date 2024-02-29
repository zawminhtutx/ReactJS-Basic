import './App.css';
import React, {useState,useEffect} from 'react';
import Users from './components/user/Users';
import AddUser from './components/user/AddUser';

function App() {
  let [users,setUsers]=useState([]);
  let [showForm,setShowForm]= useState(false);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
      .then(res=>res.json())
      .then(users=>{
        let rawUsers= users.results;
        let filteredUsers = rawUsers.map(usr=>{
          return {
            uuid:usr.login.uuid,
            name:`${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone: usr.phone,
            cell: usr.cell,
            image: usr.picture.thumbnail,
          }
        });
        console.log(filteredUsers);
        setUsers(filteredUsers);
      })
      .catch(err=>console.log(err));
  },[]);
 const removeUserHandler =(uuid)=>{
   let remainUsers = users.filter(usr => usr.uuid !== uuid);
   setUsers(remainUsers);
 }
 const showFormHandler =()=>{
    setShowForm(!showForm);
 }
 const addUserHandler=(user)=>{
  let newUsers =[user,...users];
  setUsers(newUsers);
  setShowForm(!showForm);
 }
  return (
    <div className='container my-5'>
      <div>
        <h1 className='text-center my-5 text-info'>Our Employee</h1>
        <button className='btn btn-primary  btn-sm my-5' onClick={showFormHandler}>Add Users</button>
        {
          showForm && <AddUser addUser={addUserHandler}/>
        }
        {
          users.map(usr=> <Users key={usr.uuid} data={usr} remove={removeUserHandler}/>)
        }
      </div>
    </div>
  );
}

export default App;
