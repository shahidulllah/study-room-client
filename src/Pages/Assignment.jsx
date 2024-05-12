import { FaRegStar } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { PiUserList } from "react-icons/pi";
import { RiDeleteBin6Line, RiPriceTagLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";


const Assignment = () => {
    const assignments = useLoaderData();
    console.log(assignments);

    return (
        <div className="p-4 lg:mx-24">
            <div className="flex flex-col items-center justify-center  pb-10 space-y-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-center">Assignments</h1>
                <p className="text-center lg:w-5/12 text-gray-500">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
            </div>
            {/* Filter */}
            <div className="flex justify-center">
                <div className="flex justify-center w-6/12 divide-x rounded bg-violet-400 text-gray-800 divide-gray-700">
                    <button type="button" className="px-8 py-3 font-semibold text-lg flex items-center gap-3"><PiUserList className="text-2xl" /> Filtered Assignments</button>
                    <button type="button" title="Toggle dropdown" className="p-3">
                        <select name="filter" className="bg-violet-400 border-none" id="">
                            <option value="All">All</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {
                    assignments.map(assignment =>
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
                                            <button className="p-2 bg-gray-200 rounded-xl hover:bg-gray-300" title="Update Assignment"><GrEdit className="text-lg" /></button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'><FaRegStar className='mr-2'></FaRegStar><span className='font-bold mr-2'>DiffiltyLevel:</span> <span className='font-extrabold'>{assignment.difficultyLevel}</span></div>
                                        <div>
                                            <button className="p-2 bg-gray-200 rounded-xl hover:bg-gray-300" title="Delete Assignment"><RiDeleteBin6Line className="text-lg" /></button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='flex justify-between'>
                                    <div className='flex items-center'><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Marks:</span> <span className='font-extrabold'>{assignment.marks}</span></div>
                                    <div className='flex items-center'><FaRegStar className='mr-2'></FaRegStar><span className='font-bold mr-2'>DiffiltyLevel:</span> <span className='font-extrabold'>{assignment.difficultyLevel}</span></div>
                                </div> */}
                                <div>
                                    <Link to={`/viewDetails/${assignment._id}`}> <button type="button" className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md  "><span className='text-blue-400'><TbListDetails className='text-xl' /></span> View Assignment</button></Link>
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