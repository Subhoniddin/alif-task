import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../store/action/repost";
import Footer from "../Footer/Footer";
import "./Photos.css";
import RePhotos from "./RePhotos";
import { Skeleton, Stack } from "@mui/material";

const Photos = () => {
  const dispatch = useDispatch();
  const { photos, isFetching } = useSelector((state) => state.repos);
  const [currentPhotosPage, setCurrentPhotosPage] = useState(1);
  useEffect(() => {
    dispatch(getPhotos(currentPhotosPage));
  }, [dispatch, currentPhotosPage]);

  return (
    <div className="main_photo">
      {isFetching ? (
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={510} height={260} />
        </Stack>
      ) : (
        photos.map((photo, index) => <RePhotos photo={photo} key={index} />)
      )}

      <div className="pagination">
        <Footer
          onPageChange={(p) => setCurrentPhotosPage(p)}
          currentPage={currentPhotosPage}
        />
      </div>
    </div>
  );
};

export default Photos;
