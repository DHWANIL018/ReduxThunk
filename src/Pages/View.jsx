// Shree Ganeshay namah

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, viewuser } from "../Redux/userslice";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import {MdOutlineUpdate } from 'react-icons/md'


// import { viewuser } from '../Redux/userslice'
function View() {
  const dispatch = useDispatch();
  const [serach,setSearch] = useState('')
  const { userlist } = useSelector((state) => state.user);
  console.log(userlist);

    function trash(id){
        dispatch(deleteuser(id))
    }


  useEffect(() => {
    dispatch(viewuser());
  }, [dispatch]);

  const filterdata = userlist
  .filter(user=>{
    const searched = serach.toUpperCase()
    const userdsearch = user.movieName.toUpperCase()
    return userdsearch.includes(searched)
  })

  return (

    

    <div>

        <div className="container">
            <div className=" col-lg-4">

            <input type="text"  className=" form-control" onChange={(e)=>setSearch(e.target.value)} placeholder="Enter Movie Name"/>
            </div>
        </div>

      <table className="table table-striped table-dark container my-4  ">
        <thead>
          <tr>
            <th scope="">Number</th>
            <th scope="">movieName</th>
            <th scope="">Director</th>
            <th scope="">HeroName</th>
            <th scope="">ActressName</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {filterdata.map((user,ind) => {
            return (
              <tr key={ind}>
                <td>{ind+1}</td>
                <td>{user.movieName}</td>
                <td>{user.movieDirector}</td>
                <td>{user.movieActor}</td>
                <td>{user.movieActress}</td>
                <td><button className=" btn btn-danger" onClick={()=>trash(user.id)}><MdDelete/></button></td>
                <td><NavLink className="btn btn-warning " to={`/update/${user.id}`}><MdOutlineUpdate/></NavLink></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default View;
