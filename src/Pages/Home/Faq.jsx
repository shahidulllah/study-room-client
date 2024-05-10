

const Faq = () => {
    return (
        <div className="">
            <section className=" p-4 lg:p-16 lg:w-9/12">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl ">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-400 ">Curious about Study Room? Ask us anything about our company and groups and get honest, factual responses. If you have questions not answered on our website, please email us, and we’ll get you the answers you’re looking for.</p>
                    <div className="space-y-4 ">
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How do students register for Study Groups?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400"> All registration is processed through an online registration system. Registration typically opens the second week of the term during fall and winter, and significantly earlier for spring and summer. Registration remains open throughout the term, although students are encouraged to register early as many groups meet the maximum member limit (15 students) soon after registration opens. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How many members are in a Study Group?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Each group has a different ideal size. Most groups are between 8 and 20 members, with 12 to 15 being the sweet spot.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">If I join a group, what is the commitment?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">If you choose to join a group, your financial commitment is quarter to quarter. Make your assignment and take your feedback.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;