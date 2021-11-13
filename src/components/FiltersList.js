import classes from "./FiltersList.module.css";

import Container from "./Container";

const FiltersList = (props) => {
  return (
    <Container classes={`${classes["filter-list"]} flex-row`}>
      <ul className="flex-row">
        {props.arrayOfFilters.length > 0 &&
          props.arrayOfFilters.map((filter, index) => (
            <li className={classes.filterBtn} key={filter}>
              <p>{filter}</p>
              <button
                aria-label="Delete filter"
                key={index}
                onClick={() => props.deleteHandler(index)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
      <button
        className={classes.clear}
        aria-label="Clear all filters"
        onClick={props.clearAllFiltersHandler}
      >
        Clear
      </button>
    </Container>
  );
};
export default FiltersList;
