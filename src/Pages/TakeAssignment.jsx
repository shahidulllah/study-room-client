import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const TakeAssignment = () => {
    const {user} = useContext(AuthContext);

    const assignment = useLoaderData();
    const { id } = useParams();
    const takeAssignment = assignment.find(a => a._id == id);
    const navigate = useNavigate();

    const handleTakeAssignment = e => {
        if(user.email)
        e.preventDefault();
        const form = e.target;
        const assignmentLink = form.pdfLink.value;
        const notes = form.notes.value;
        const title = takeAssignment.title;
        const marks = takeAssignment.marks;
        const status = "Pending";
        const userEmail = user.email;

        const takeAssign = {title, marks, userEmail, status, assignmentLink, notes};

        //send submited assignment to server
        fetch(`${import.meta.env.VITE_API_URL}/submited`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(takeAssign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submited Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                   navigate('/assignments')
                }
            })
    }

    return (
        <div className="flex justify-center p-5 lg:p-20 w-full bg-blue-200">
            <form className="bg-blue-300 p-4 lg:p-12 card" onSubmit={handleTakeAssignment}>
            <div>
                <h1 className="text-center -mt-7 pb-9 text-3xl font-semibold">Submit Your Assignment</h1>
            </div>
                <label htmlFor="pdfLink">PDF/Doc Link:</label> <br />
                <input
                    className="input w-full"
                    placeholder="Upload Your Assignment Link"
                    type="text"
                    id="pdfLink"
                    name='pdfLink'
                    required
                />
                <br />
                <label htmlFor="notes">Quick Notes:</label><br />
                <textarea
                    placeholder="Include Your Notes here.."
                    className="textarea mb-4"
                    id="notes"
                    name="notes"
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit" className="btn">Submit Assignment</button>
            </form>
        </div>
    );
};

export default TakeAssignment;