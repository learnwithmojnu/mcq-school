import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
            <Link to="/AddQuestion">
                <h4>Add Question</h4>
            </Link>
            <Link to="/MangeQuestion">
                <h4>Manage Question</h4>
            </Link>
        </div>
    );
};

export default AdminSidebar;