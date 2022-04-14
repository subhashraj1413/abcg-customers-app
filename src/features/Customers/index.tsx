import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../core/actionCreators/customersActions";
import CardItem from "../../components/CardItem";

import { CardsGroup } from "../../components/Common";
import SearchBar from "../../components/SearchBar";
import AppLoader from "../../components/AppLoader";



const Customers = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchCustomers({}));
  }, []);

  const {
    loading = false,
    response: customers = null,
 
  } = useSelector((state: any) => state.root.customers);

  const getSearchValue = (value: any) => {
    setSearchInput(value);
  };

  if (loading) {
    return <AppLoader />;
  }

  return (

    <>

      {customers && (<>
        <SearchBar initValue={searchInput} setValue={getSearchValue} />
        <CardsGroup className="cards">
          <CardItem data={customers} searchValue={searchInput} />
        </CardsGroup>
      </>

      )}

    </>


  );
}

export default Customers;