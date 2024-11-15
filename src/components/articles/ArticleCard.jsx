import { useLocation, useNavigate } from "react-router-dom";

const ArticleCard = ({ img, caption, date, navigateTo }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (id) => {
    if (location.pathname.includes("news")) {
      navigate(`/news/${id}`);
    } else if (location.pathname.includes("upcoming-event")) {
      navigate(`/upcoming-events/${id}`);
    } else if (location.pathname.includes("campus-update")) {
      navigate(`/campus-update/${id}`);
    }
  }

  return (
    <div
      className="w-full bg-white rounded-xl cursor-pointer shadow-md p-4 my-4 space-y-6 hover:-translate-y-1 transition-all"
      onClick={() => handleNavigate(navigateTo)}
    >
      <div className="flex flex-col md:flex-row w-full gap-3">
        <div className="max-w-[300px] min-w-[200px] h-[150px] mx-auto">
          <img
            src={img}
            alt="CampusUpdate"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between p-0 md:p-4">
          <h1 className="text-base sm:text-xl font-medium">{caption}</h1>
          <p className="text-sm font-normal">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
