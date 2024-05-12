import { RiPriceTagLine } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ViewAssignment = () => {
    const assignment = useLoaderData();
    const { id } = useParams();
    const detailAssignment = assignment.find(a => a._id == id);
    console.log(detailAssignment)
    return (
        <div className="flex justify-center p-4 lg:p-16">
            <div className="max-w-lg p-5 shadow-md bg-gray-700 text-gray-100 rounded">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img className="rounded-xl" src={detailAssignment.thumbnailImageURL} />
                        <div className="flex items-center text-xs">
                            <span>Date: {detailAssignment.dueDate}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold text-violet-400">{detailAssignment.title}</h3>
                        </a>
                        <p className="leading-snug text-gray-400">{detailAssignment.description}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='mr-2'>Difficulty Level:</span> <span className='font-bold text-blue-400'>{detailAssignment.difficultyLevel}</span>
                        </div>
                        <div>
                            <div className="flex items-center"><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className=' mr-2'>Marks:</span><span className="font-bold text-blue-400">{detailAssignment.marks}</span></div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-12">
                        <Link to='/takeAssignment'> <button type="button" className="flex btn bg-purple-300 items-center justify-center w-full font-extrabold tracking-wide rounded-md  "><span className='text-blue-700'><TbListDetails className='text-xl' /></span> Take Assignment</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ViewAssignment;