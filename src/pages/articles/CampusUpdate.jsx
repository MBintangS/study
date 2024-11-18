import ArticlePage from "../../components/articles/ArticlePage";

import BannerImage from "/banner-campus-update.webp";
import useQuery from "../../api/hooks/useQuery";
import { tesApi } from "../../api/home";
import { useEffect, useRef } from "react";

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
  }, []);
  

  return (
    <>
    {isLoading ? "..." : isError ? error : (
      <ArticlePage
        title="Campus Update"
        bannerImage={BannerImage}
        data={dataApi}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    )}
    </>
  );
};

export default CampusUpdate;
