import { FaRegBookmark } from "react-icons/fa6";

const Card = ({blog,addBookmark}) => {

    const {img, title, author_img, author_name, hashtags,time} = blog;

    return (
        <div className="space-y-4 border-b-2 border-dashed py-4">
                <div className="md:h-[400px] rounded-lg overflow-hidden">
                    <img className="w-full h-full" src={img} alt="" />
                </div>
                <div className="flex justify-between ">
                    <div className="flex gap-4">
                        <img src={author_img}alt="" />
                        <div>
                            <h2 className="font-bold">{author_name}</h2>
                            <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>                 
                    <div>
                        <p className="flex items-center gap-3 cursor-pointer">{time} min read <span onClick={() => addBookmark(blog)}><FaRegBookmark /></span></p>
                    </div>
                   
                </div>
                <h1 className="text-4xl font-bold">{title}</h1>
                    <div className="flex gap-4 text-[rgba(17,17,17,0.60)] font-bold">
                       {hashtags.map((tag,id) => <span key={id}>#{tag}</span>)}
                    </div>
                    <a href="#" className="text-[#6047EC] underline">Mark as read</a>
         </div>
    );
};

export default Card;