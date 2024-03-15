

const Bookmark = ({bookBlogs}) => {
  
    return (
        <div className="mt-4">
            <div className="flex justify-center items-center border-[1px] rounded-lg p-4 bg-[rgba(96,71,236,0.10)]">
                <h1 className="text-[#6047EC] font-bold ">Spent time on read : {bookBlogs?.reduce((prev,curent)=>{
                     return    prev+curent.time;
                },0)} min</h1>
            </div>
            <div className="mt-4 bg-[rgba(17,17,17,0.05)] p-2 rounded-lg">
                <h1 className="font-bold py-2">Bookmarked Blogs : {bookBlogs.length}</h1>       
                {bookBlogs.map((blog,id) => {
                 return (
                    <div key={id} className="h-[70px] p-2 bg-white font-bold text-[#111] rounded-lg mt-4">
                          <h1>{blog.title}</h1>
                    </div>
                 )   
                })}
            </div>
        </div>
    );
};

export default Bookmark;