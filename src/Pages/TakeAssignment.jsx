import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthProvider";

const TakeAssignment = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user.email;
    const [pdfLink, setPdfLink] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        //send submited assignment to server
        fetch(`${import.meta.env.VITE_API_URL}/submited`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ pdfLink, notes, userEmail, status: 'pending' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submited!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    setPdfLink('');
                    setNotes('');
                }
            })
    }

    return (
        <div className="flex justify-center p-5 lg:p-20 w-full bg-blue-200">
            <form className="bg-blue-300 p-4 lg:p-12 card" onSubmit={handleSubmit}>
            <div>
                <h1 className="text-center -mt-7 pb-9 text-3xl font-semibold">Submit Your Assignment</h1>
            </div>
                <label htmlFor="pdfLink">PDF/Doc Link:</label> <br />
                <input
                    className="input w-full"
                    placeholder="Upload Your Assignment Link"
                    type="text"
                    id="pdfLink"
                    value={pdfLink}
                    onChange={(e) => setPdfLink(e.target.value)}
                />
                <br />
                <label htmlFor="notes">Quick Notes:</label><br />
                <textarea
                    placeholder="Include Your Notes here.."
                    className="textarea mb-4"
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
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