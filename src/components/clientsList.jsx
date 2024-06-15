import { useState } from "react";
import "../css/clientlist.css";
import Header from "./header";
import { useEffect } from "react";
import fetchClients from "../libs/getClients";

function ClientsList() {
  let [userTables , setUserTables] =  useState([])

  useEffect(()=>{
    fetchClients().then(res=>{
      setUserTables(res)
    }).catch(err=>{
      alert('An unexcpected error occured')
      location.reload()
    })
  } , [])
  return (
    <>
      <Header isAdmin={true} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="client_list">
       <p className="title">
        Client List Table
       </p>
        <table>
          <tr>
            <td>Investor Name</td>
            <td>Investor Position</td>
            <td>Investor Email</td>
            <td>Investors Phone number</td>
          </tr>
          {userTables.map && userTables.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data?.investor_name}</td>
                <td>{data?.investor_position}</td>
                <td>{data?.investor_email}</td>
                <td>{data?.investor_phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ClientsList;
