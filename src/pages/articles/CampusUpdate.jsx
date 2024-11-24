import ArticlePage from "../../components/articles/ArticlePage";

import BannerImage from "/banner-campus-update.webp";
import useQuery from "../../api/hooks/useQuery";
import { tesApi } from "../../api/home";
import { useEffect, useRef } from "react";
import Error from "../../components/Error";

const CampusUpdate = () => {
  const refetchCalled = useRef(false);

  const {
    data: dataApi,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(tesApi, { autofetch: false });

  useEffect(() => {
    if (!refetchCalled.current) {
      refetch();
      refetchCalled.current = true;
    }

    console.log(error);
  }, []);

  const handleButtonHome = () => {
    window.location.href = "/";
  }

  const handleButtonRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      {isError ? (
        <Error
          title="404"
          message="Oops! Something went wrong."
          description="We couldn't fetch the data. Please try again or go back to the homepage."
          refresh={handleButtonRefresh}
          backHome={handleButtonHome}
          
        />
      ) : (
        <ArticlePage
          title="Campus Update"
          bannerImage={BannerImage}
          data={dataApi || []}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default CampusUpdate;
