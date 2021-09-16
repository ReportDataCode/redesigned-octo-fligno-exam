import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
           <div class="card">
               <h5 class="card-header">
                   Laravel + React.JS - CRUD
                   </h5>
                   <div class="card-body">
                       
                       <Link to="/add" class="btn btn-primary">Go somewhere</Link>
                       <div className="table-responsive">
                           <table className="table table-striped mt-4">
                               <thead>
                                    <tr>
                                        <th>ID.</th>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                        <td>1</td>
                                        <td>Shardless</td>
                                        <td>andrewcustomerhelper@gmail.com</td> 
                                        <td> 
                                            12345678pogi
                                        </td>
                                        <td>
                                            <a href="#" class="btn btn-warning">Edit</a>
                                            <a href="#" class="btn btn-danger">Delete</a>
                                        </td>
                                   </tr>

                               </tbody>

                           </table>

                       </div>
                       </div>
                       </div>
                       </div>
    );
};

export default Home;

