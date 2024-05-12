import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const assignment = useLoaderData();
    console.log(assignment)
    const {_id,title, thumbnailImageURL, description, difficultyLevel, marks, dueDate} = assignment;

    const navigate = useNavigate();
    const location = useLocation();

    const [startDate, setStartDate] = useState(new Date());
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const thumbnailImageURL = form.imageUrl.value;
        const description = form.description.value;
        const difficultyLevel = form.difficultyLevel.value;
        const marks = form.mark.value;
        const dueDate = form.date.value;
        const assignment = {title, thumbnailImageURL, description, difficultyLevel, marks, dueDate};
        console.log(assignment);

         //Update data 
         fetch(`${import.meta.env.VITE_API_URL}/assignments/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    navigate(location?.state ? location.state : '/assignments');
                }
            })
    }
    return (
        <div className="p-4 lg:mx-24">
            <section className="lg:p-12 text-gray-50 mb-8">
                <form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-2 gap-6 p-6 lg:p-16 rounded-md shadow-sm bg-gray-600">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-4xl ">Update Assignment</p>
                            {/* <p className="text-xs">Credibly create dynamic assignment after long-term high-impact infrastructures. Synergistically provide.</p> */}
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Title</label>
                                <input id="firstname" name="title" defaultValue={title} type="text" placeholder="Give a title" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Thumbnail Image URL</label>
                                <input id="lastname" name="imageUrl" defaultValue={thumbnailImageURL} type="text" placeholder="Image URL" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Description</label>
                                <input id="email" name="description" defaultValue={description} type="text" placeholder="Description" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Difficulty Level</label>
                                <select name="difficultyLevel" defaultValue={difficultyLevel} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 input">
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>

                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Marks</label>
                                <input id="state" type="text" name="mark" defaultValue={marks} placeholder="Marks" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col mt-1">
                                <label htmlFor="zip" className="text-sm">Date</label>
                                <ReactDatePicker className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" name="date" defaultValue={dueDate} selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="col-span-full">
                                <button type="submit" className="btn w-full mt-10 bg-slate-300 font-extrabold">Update</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default Update;