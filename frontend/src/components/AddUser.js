import React, { useState } from 'react';
import axios from 'axios';

export default function AddUser() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [district, setDistrict] = useState("");
    const [description, setDescription] = useState("");

    function AddUsers(e) {

        e.preventDefault();

        const addUser = {
            name, age, district, description
        }

        axios.post("http://localhost:5000/user/insert", addUser).then(() => {
            alert("Insert Successfully");
        }).catch((err) => {
            alert(err);
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <form onSubmit={AddUsers} className="mt-5">
                    <h1>Add New User</h1>
                        <div class="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"
                                onChange={
                                    (e) => {
                                        setName(e.target.value);
                                    }
                                } />
                        </div>
                        <div className="mb-3">
                            <label for="age" className="form-label">Age</label>
                            <input type="text" className="form-control" id="age" onChange={
                                (e) => {
                                    setAge(e.target.value);
                                }
                            } />
                        </div>
                        <div className="mb-3">
                            <label for="district" className="form-label">District</label>
                            <input type="text" className="form-control" id="district" onChange={
                                (e) => {
                                    setDistrict(e.target.value);
                                }
                            } />
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" onChange={
                                (e) => {
                                    setDescription(e.target.value);
                                }
                            } />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );

}