import { useLoaderData } from "react-router-dom";

const MyAssignment = () => {
    const myAssignments = useLoaderData();
    return (
        <div className="p-4 lg:mx-24 h-screen lg:p-16 ">
            <div className="container p-4 lg:p-12 mx-auto text-blue-400 bg-gray-200 rounded-lg">
                <h2 className="mb-7 text-3xl text-center font-semibold text-purple-500 leading-tight -mt-5">My Submitted Assignments</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-center font-bold text-slate-400">
                                <th className="p-3 text-left">Assignment Title</th>
                                <th className="p-3 text-right">Assignment Marks</th>
                                <th className="p-3">Obtain Marks</th>
                                <th className="p-3">Feedback</th>
                                <th className="p-3 text-right">Assignment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            myAssignments.map(myAssignment =>  <tr key={myAssignment._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                            <td className="p-3 text-left">
                                <p className="text-purple-500 font-semibold">{myAssignment.title}</p>
                            </td>
                            <td className="p-3 text-center">
                                <p>{myAssignment.marks}</p>
                            </td>
                            <td className="p-3 text-center">
                                <p>45</p>
                            </td>
                           
                            <td className="p-3 text-center">
                                <p>You are doing well.</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                    <span>{myAssignment.status}..</span>
                                </span>
                            </td>
                        </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAssignment;