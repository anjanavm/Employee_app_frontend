
import Header from './Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [data,setData]=useState([])

    const fetchDataFromApi= ()=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then(

        (response)=>{

            console.log(response.data)

            setData(response.data)
            console.log('mapped')
        }

        )

    }


    useEffect( ()=>{
        fetchDataFromApi()
    },[] )
  return (
    <div>
        <Header/>

      <div className="container">
        <div className="row">
            <div className="col">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
  {data.map((value,index)=>{
    return <tr>
      <th scope="row">{value.id}</th>
      <td>{value.name}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.address.street}</td>
    </tr>
        }
        )}
        

  </tbody>
</table>

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard