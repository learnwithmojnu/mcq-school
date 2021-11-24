import React from 'react';
import AddQuestion from '../AddQuestion/AddQuestion';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ManageQuestion from '../ManageQuestion/ManageQuestion';

const Admin = () => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-4">
                    <AdminSidebar/>
                </div>
                <div className="col-md-8">
                    <form action="https://aqueous-peak-84384.herokuapp.com/AddQuestion" method="post">
                        <input type="text" name="question" id="question" placeholder="product name" className="form-control"/>
                        <br/>
                        <input type="text" name="correct_answer" id="correct_answer" placeholder="correct_answer" className="form-control"/>
                        <br/>
                        <input type="text" name="incorrect_answers" id="incorrect_answers" placeholder="incorrect_answers link" className="form-control"/>
                        <br/>
                        <input type="text" name="incorrect_answers" id="incorrect_answers" placeholder="incorrect_answers" className="form-control"/>
                        <br/>
                        <input type="text" name="category" id="category" placeholder="BCS/SP/HP1" className="form-control"/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Add Question</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;