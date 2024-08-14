import { useContext } from "react";
import {  Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import Swal from "sweetalert2";



const PendingAssignment = () => {
    const { user } = useContext(AuthContext);
    const userName = user.displayName;
    const submitedAssignments = useLoaderData();
    console.log(submitedAssignments);

    const handleGiveMark = (id) => {
        
            Swal.fire({
                icon: "error",
                title: "Sorrrry...",
                text: "You can't give mark!",
                footer: '<p className="text-red-600">This is your assignment. <br/>So, You can only give mark the assignment which is not created by you.</p>'
            });
        }
    return (
        <div className="lg:mx-24 p-4 lg:p-12">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead className="bg-gray-700">
                        <tr className="text-center font-bold text-slate-400">
                            <th className="p-3 text-left">Assignment Title</th>
                            <th className="p-3">Assignment Marks</th>
                            <th className="p-3">Examinee Name</th>
                            <th className="p-3 text-right">Checking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitedAssignments.map(submitedAssignment => <tr key={submitedAssignment._id} className="border-b text-blue-800 border-opacity-20 border-gray-700 bg-gray-300">
                                <td className="p-3 text-left">
                                    <p className="text-purple-500 font-semibold">{submitedAssignment.title}</p>
                                </td>
                                <td className="p-3 text-center font-bold">
                                    <p>{submitedAssignment.marks}</p>
                                </td>
                                <td className="p-3 text-center">
                                    <p>{userName}</p>
                                </td>
                                {/* <td onClick={() => handleGiveMark(submitedAssignment._id, submitedAssignment.userEmail)} className="p-3 text-right">
                                   <Link to={`/giveMarks/${submitedAssignment._id}`}> <span className="px-3 py-2 font-semibold rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300 hover:-tracking-wide cursor-pointer">
                                        <span className="">Give Mark</span>
                                    </span></Link>
                                </td> */}

                                <td className="p-3 text-right">
                                    {submitedAssignment.userEmail === user.email ? (
                                        <button onClick={() => handleGiveMark(submitedAssignment._id)} className="px-3 py-2 font-semibold rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300 hover:-tracking-wide cursor-pointer">
                                          My Assignment
                                        </button>
                                    ) : (
                                        <Link to={`/giveMarks/${submitedAssignment._id}`} className="px-3 py-2 font-semibold rounded-md bg-violet-400 text-gray-900 hover:bg-violet-300 hover:-tracking-wide cursor-pointer">
                                            Give Mark
                                        </Link>
                                    )}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;