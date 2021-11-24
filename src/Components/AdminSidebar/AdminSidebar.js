import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            <Link to="/add-product">
                <h4>Add Question</h4>
            </Link>
            <Link to="/manage-product">
                <h4>Manage Question</h4>
            </Link>
        </div>
    );
};

export default AdminSidebar;