import axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserView() {

    const [user, setUser] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {

        axios.get("http://localhost:5000/user/").then((res) => {
            console.log(res.data);
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, []);


    return (

        <div className="container">

            <div className="search">

                <div className=" col-lg-3 mt-2 mb-2 mr-1">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="search here"
                        name="searchTerm"

                        onChange={(e) => {

                            setsearchTerm(e.target.value);

                        }}


                    />

                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>District</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.filter(val => { 

                            if (searchTerm === "") {

                                return val;

                            } else if (

                                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.age.toLowerCase().includes(searchTerm.toLowerCase())

                            ) {

                                return val;

                            }

                        })
                        .map((val, key) => {
                            return (
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.district}</td>
                                    <td>{val.description}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>

    );
}