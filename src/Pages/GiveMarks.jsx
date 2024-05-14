import { useLoaderData, useParams } from "react-router-dom";


const GiveMarks = () => {
    const assignment = useLoaderData();
    const { id } = useParams();
    const markingAssignment = assignment.find(a => a._id == id);
    // const navigate = useNavigate();
   

    const handleGiveMark = e => {
        e.preventDefault()
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        const giveMark = { mark, feedback };
        console.log(giveMark);
    }

    return (
        <div className="flex justify-center items-center py-12">
            <div className="card bg-base-300 shadow-xl p-16">
                <div className="card-body">
                    <div className="space-y-3">
                        <h2 className="card-title"><span className="text-blue-300 rounded-xl bg-purple-900 px-3">Assignment Link:- </span><a href="#" className="hover:text-blue-600 border-b-blue-500 border-2">{markingAssignment.assignmentLink}</a></h2>
                        <p><span className="text-blue-400 rounded-xl bg-purple-900 px-3 "> Notes:</span>  {markingAssignment.notes} </p>
                    </div>

                    <form onSubmit={handleGiveMark} className="bg-gray-200 pt-10">
                        <div className="flex flex-col items-center space-y-3">
                            <div className="lg:w-6/12">
                                <label htmlFor="">Give Marks:</label> <br />
                                <input type="text" className="input w-full" name="mark" placeholder="Give your marks here.." required/>
                            </div>
                            <div>
                                <label htmlFor="">Feedback:</label><br />
                                <textarea type="text" className="textarea" name="feedback" cols='70' rows='3' placeholder="Give your feedback" required/>
                            </div>
                            <div className="w-full pt-5">
                                <input type="submit" className="btn w-full bg-purple-300 border-none" placeholder="Give your marks here.." />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GiveMarks;