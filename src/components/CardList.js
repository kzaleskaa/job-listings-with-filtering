import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

import Card from "./Card";
import FiltersList from "./FiltersList";

import classes from "./CardList.module.css";

const CardList = (props) => {
  const [arrayOfFilters, setArrayOfFilters] = useState([]);
  let filteredOfferts = props.jobs;

  const checker = (array, target) => target.every((v) => array.includes(v));

  if (arrayOfFilters.length !== 0) {
    filteredOfferts = props.jobs.filter((job1) => {
      return checker(
        [job1.role, job1.level, ...job1.languages, ...job1.tools],
        arrayOfFilters
      );
    });
  }

  const chooseFilterHandler = (e) => {
    if (![...arrayOfFilters.map((item) => item)].includes(e.target.innerText)) {
      setArrayOfFilters((prevArrayOfFilters) => [
        ...prevArrayOfFilters,
        e.target.innerText,
      ]);
    }
  };

  const deleteFilterHandler = (key) => {
    setArrayOfFilters((prevArrayOfFilters) =>
      prevArrayOfFilters.filter((item, index) => key !== index)
    );
  };

  const clearAllFiltersHandler = () => {
    setArrayOfFilters([]);
  };

  return (
    <Fragment>
      {arrayOfFilters.length > 0 && (
        <FiltersList
          arrayOfFilters={arrayOfFilters}
          deleteHandler={deleteFilterHandler}
          clearAllFiltersHandler={clearAllFiltersHandler}
        />
      )}
      <ul className={classes[`offerts-list`]}>
        {filteredOfferts.map((job) => (
          <Card job={job} key={job.id} clickHandler={chooseFilterHandler} />
        ))}
      </ul>
    </Fragment>
  );
};

export default CardList;
