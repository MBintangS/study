import { useNavigate } from "react-router-dom";

const ArticleCard = ({ img, caption, date, navigateTo = "/" }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full bg-white rounded-xl cursor-pointer shadow-md p-6 my-4 space-y-6 hover:-translate-y-1 transition-all"
      onClick={() => navigate(`${navigateTo}`)}
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-[300px] h-[150px]">
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
