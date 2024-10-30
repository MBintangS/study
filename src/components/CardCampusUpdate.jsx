import culture from "../assets/culture.webp";


const CardCampusUpdate = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-[300px] h-[150px]">
        <img src={culture} alt="CampusUpdate" className="object-cover w-full h-full rounded-xl" />
      </div>
      <div className="flex flex-col justify-between p-0 md:p-4">
        <h1 className="text-base sm:text-xl font-medium">Acquiring Temporary Medals from FISU World University Games 2021, Indonesian Students Win Two Medals in Wushu Sports</h1>
        <p className="text-sm font-normal">Nov 13, 2023</p>
      </div>
    </div>
  );
};

export default CardCampusUpdate;
