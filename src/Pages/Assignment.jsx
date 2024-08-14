import { useContext, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { PiUserList } from "react-icons/pi";
import { RiDeleteBin6Line, RiPriceTagLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/AuthProvider";


const Assignment = () => {
    const { user } = useContext(AuthContext)
    const assignments = useLoaderData();


    const [displayAssign, setDisplayAssign] = useState(assignments);

    const handleFilter = e => {

        console.log(e)
        if (e === "All") {
            setDisplayAssign(assignments);

        }

        else if (e === "Easy") {
            const easyAssignment = assignments.filter(a => a.difficultyLevel === "Easy");
            setDisplayAssign(easyAssignment);
        }
        else if (e === "Medium") {
            const mediumAssignment = assignments.filter(a => a.difficultyLevel === "Medium");
            setDisplayAssign(mediumAssignment);
        }
        else if (e === "Hard") {
            const hardAssignment = assignments.filter(a => a.difficultyLevel === "Hard");
            setDisplayAssign(hardAssignment);
        }
    }


    const handleDelete = (id, userEmail) => {
        if ( userEmail !== user.email) {
            Swal.fire({
                icon: "error",
                title: "Sorrrry...",
                text: "You can't delete this!",
                footer: '<p className="text-red-600">This is not your assignment. <br/> You can only delete the assignment which is created by you.</p>'
            });
        }
      else { Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/assignments/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "Your Item has been seccessfully deleted.",
                                icon: "success"
                            });

                            const remaining = assignments.filter(a => a._id !== id);
                            setDisplayAssign(remaining);
                        }
                    })
            }
        });}
    }
    return (
        <div className="p-4 lg:mx-24">
            <div className="flex flex-col items-center justify-center  pb-10 space-y-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Assignments</h1>
                <p className="text-center lg:w-5/12 text-gray-500">Most interesting part to have the fresh mind by keeping our product. Doing assignment is the way to live and refresh your mind.</p>
            </div>
            {/* Filter */}
            <div className="flex justify-center">
                <div className="flex justify-center w-6/12 divide-x rounded bg-violet-400 text-gray-800 divide-gray-700">
                    <button type="button" className="px-4 lg:px-8 lg:py-3 font-semibold text-lg flex items-center gap-3"><PiUserList className="text-2xl hidden" /> Filtered Assignments</button>
                    <button type="button" title="Toggle dropdown" className="p-3">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" bg-violet-400 m-1"><IoIosArrowDown className="text-2xl" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-violet-300 rounded-lg w-32">
                                <li onClick={() => handleFilter("All")}><a>All</a></li>
                                <li onClick={() => handleFilter("Easy")}><a>Easy</a></li>
                                <li onClick={() => handleFilter("Medium")}><a>Medium</a></li>
                                <li onClick={() => handleFilter("Hard")}><a>Hard</a></li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-12">
                {
                    displayAssign.map(assignment =>
                        <div key={assignment._id} className="rounded-2xl shadow-2xl border-2 ">
                            <img src={assignment.thumbnailImageURL} alt="" className="object-cover object-center w-full rounded-t-md h-80" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracking-wide text-purple-900 font-serif">{assignment.title}</h2>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Marks:</span> <span className='font-extrabold'>{assignment.marks}</span></div>
                                        <div>
                                            <Link to={`/update/${assignment._id}`}> <button className="p-2 bg-gray-200 rounded-xl hover:bg-gray-300" title="Update Assignment"><GrEdit className="text-lg" /></button></Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'><FaRegStar className='mr-2'></FaRegStar><span className='font-bold mr-2'>DiffiltyLevel:</span> <span className='font-extrabold'>{assignment.difficultyLevel}</span></div>
                                        <div>
                                            <button onClick={() => handleDelete(assignment._id, assignment.userEmail)} className="p-2 bg-gray-200 rounded-xl hover:bg-gray-300" title="Delete Assignment"><RiDeleteBin6Line className="text-lg" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link to={`/viewAssignment/${assignment._id}`}> <button type="button" className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md  "><span className='text-blue-400'><TbListDetails className='text-xl' /></span> View Assignment</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Assignment;