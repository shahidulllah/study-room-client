import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-4 lg:mx-24">
            <section className="lg:p-24 bg-gray-800 text-gray-50 my-4 rounded-xl">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 lg:p-16 rounded-md shadow-sm bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-3xl ">Create <br /> an Assignment</p>
                            <p className="text-xs">Credibly create dynamic assignment after long-term high-impact infrastructures. Synergistically provide.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Title</label>
                                <input id="firstname" name="title" type="text" placeholder="Give a title" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Thumbnail Image URL</label>
                                <input id="lastname" name="imageUrl" type="text" placeholder="Image URL" className="w-full input rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Description</label>
                                <input id="email" name="description" type="text" placeholder="Description" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Difficulty Level</label>
                                <select name="difficultyLevel" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 input">
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                                
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Marks</label>
                                <input id="state" type="text" name="mark" placeholder="Marks" className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3 flex flex-col mt-1">
                                <label htmlFor="zip" className="text-sm">Date</label>
                                <ReactDatePicker className="w-full rounded-md focus:ring focus:ring-opacity-75 input text-gray-900 focus:ring-violet-400 border-gray-700" selected={startDate} onChange={(date) => setStartDate(date)} />  
                            </div>
                            <div className="col-span-full">
                                <button className="btn w-full mt-10 bg-slate-300 font-extrabold">Create</button> 
                            </div>
                        </div>
                    </fieldset>
                  
                </form>
            </section>
        </div>
    );
};

export default CreateAssignment;