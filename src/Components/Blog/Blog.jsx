
const Blog = ({ blog }) => {
    const { title, coverpic, writer_name, publications, published_date, story_in_short } = (blog)
    return (
        <div className="flex flex-col md:flex-row justify-center items-center shadow-xl">
            <div className="flex-1 p-4 ">
                <img
                    src={coverpic} className="rounded-2xl" />
            </div>
            <div className="flex-1 p-5 space-y-4">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p><span className="font-bold">written by</span> :{writer_name}</p>
                <p className="text-lg text-justify">{story_in_short}</p>
                <p><span className="font-bold">Publications</span> :{publications}</p>
                <p><span className="font-bold">Published Date</span> : {published_date}</p>
                <div className="space-x-5">
                    <button className="btn  bg-[#23BE0A] text-white">Read Now</button>
                    <button className="btn bg-[#59C6D2] text-white">Read Next</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;