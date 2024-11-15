import { useLocation, useNavigate } from "react-router-dom";

const ArticleCard = ({ img, caption, date, navigateTo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (id) => {
    if (location.pathname.includes("news")) {
      navigate(`/news/${id}`);
    } else if (location.pathname.includes("upcoming-event")) {
      navigate(`/upcoming-events/${id}`);
    } else if (location.pathname.includes("campus-update")) {
      navigate(`/campus-update/${id}`);
    }
  };

  return (

    // Interface 2

    // <div
    //   className="w-full bg-white rounded-xl cursor-pointer shadow-lg  my-4 space-y-6 hover:-translate-y-0.5 transition-all"
    //   onClick={() => handleNavigate(navigateTo)}
    // >
    //   <div className="flex flex-col sm:flex-row w-full ">
    //     <div className="sm:max-w-[250px] min-w-[200px] w-full mx-auto">
    //       <img
    //         src={img}
    //         alt="CampusUpdate"
    //         className="object-cover w-full h-full rounded-t-lg sm:rounded-s-lg sm:rounded-tr-none"
    //       />
    //     </div>
    //     <div className="flex flex-col justify-between gap-4 p-3 sm:p-4">
    //       <h1 className="text-base md:text-lg font-medium ">{caption}</h1>
    //       <p className="text-xs sm:text-sm font-normal">{date}</p>
    //     </div>
    //   </div>
    // </div>

    // Interface 1
    <div
      className="w-full rounded-xl cursor-pointer transition-all "
      onClick={() => handleNavigate(navigateTo)}
    >
      <div className="flex w-full gap-3">
        <div className="min-w-[100px] h-[100px] sm:min-w-[200px] sm:min-h-[150px] mx-auto">
          <img
            src={img}
            alt="CampusUpdate"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between p-0 md:p-4">
          <h1 className="text-sm sm:text-base lg:text-xl font-medium hover:underline line-clamp-3 sm:line-clamp-none">{caption}</h1>
          <p className="text-xs sm:text-sm font-normal">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
