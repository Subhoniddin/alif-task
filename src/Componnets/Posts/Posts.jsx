import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { getReposte } from "../store/action/repost";
import Repos from "./Repos";
import { Skeleton, Stack } from "@mui/material";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isFetching } = useSelector((state) => state.repos);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    dispatch(getReposte(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="main_posts">
      {isFetching ? (
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={510} height={318} />
        </Stack>
      ) : (
        posts.map((repo, index) => <Repos key={index} repo={repo} />)
      )}
      <Footer
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Posts;
