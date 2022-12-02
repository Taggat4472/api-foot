import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/foot/ListCard";



import { useSelector } from "react-redux"
import { store } from "../store";

import { getFootLocal } from "../store/actions/FootActions";
// store.dispatch(getFoot());
store.dispatch(getFootLocal());

function HomePage() {
  const listFoot = useSelector(state => state.foot.data)

  return (
    <MainLayout>
      <ListCard list={ listFoot }/>
    </MainLayout>
  );
}

export default HomePage;
