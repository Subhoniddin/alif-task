import { useDispatch, useSelector } from "react-redux";
import ReUser from "./ReUser";
import "./Users.css";
import { useEffect } from "react";
import { getUser } from "../store/action/repost";
import { Skeleton, Stack } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  const { users, isFetching } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="main_posts">
      {isFetching ?
       (
        <Stack spacing={1}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={510} height={318} />
        </Stack>
      ) : (
        users.map((repo, index) => <ReUser key={index} repo={repo} />)
      )}
    </div>
  );
};

export default Users;
