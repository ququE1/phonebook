import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
//import App from './App';


export default function Posts(user) {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    let [showForm, setShowForm] = useState(false);
        
        
    let showForm1 = () => {
        setShowForm(!showForm);
    }
    




    useEffect(() => {
        axios.get(`http://localhost:3000/users`)
        .then((response) => {
            setAPIData(response.data);
        })

       
    }, []); 

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((user) => {
                return Object.values(user).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div>
        <form>
        {!showForm && <button type="button"style={{ 'margin-top': 20, 'marginLeft':500,'background-color': 'purple', 'color': 'white', 'borderRadius': 3, 'padding': 20}}  onClick={showForm1}>Search Contacts</button>}
        </form>  
        {showForm && (<form>

        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={16} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((user) => {
                        return (

                             <Card>
                                <Card.Content>
                                    <h4>{user.firstName}</h4>
                                    <h4>{user.lastName}</h4>
                                    <h4>{user.phone}</h4>
                                    <h4>{user.contact}</h4>


                                    <Card.Description>{}</Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((users)=>{
                        return (
                            <Card>
                                <Card.Content>
                                    <h4>{user.firstName}</h4>
                                    <h4>{user.lastName}</h4>
                                    <h4>{user.phone}</h4>
                                    <h4>{user.contact}</h4>

                                    <Card.Description>{}</Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
        <button type="button"style={{ 'margin-top': 10,'margin-left':500,'background-color': 'purple', 'color': 'white', 'borderRadius': 3, 'padding': 20}} onClick={showForm1}>Close</button>
        </form>)}

        
        </div>)}
    
    
                
