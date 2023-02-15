import React, { useState } from "react";
import FormModal from "../components/FormModal"
import AddCamp from "../components/AdminComponents/AddCamp"
import Auth from '../utils/auth'
const AdminPage = () => {
    return (
        <div>
            {Auth.isAdmin() ? (
                <div>
                    <AddCamp />
                </div>) : ""}
        </div>
    )
}

export default AdminPage