import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/top/ListCard";



import { useSelector } from "react-redux"
import { store } from "../store";

import {  getTopscorerLocal } from "../store/actions/TopAction";
// store.dispatch(getTopscorerLocal());
store.dispatch(getTopscorerLocal());

function HomePage() {
  const listtop = useSelector(state => state.top.data)

  return (
    <MainLayout>
      <ListCard list={ listtop }/>
    </MainLayout>
  );
}

export default HomePage;
