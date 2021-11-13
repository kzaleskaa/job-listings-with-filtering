import Container from "./Container";

import classes from "./Card.module.css";

const Card = (props) => {
  const skills = [
    props.job.role,
    props.job.level,
    ...props.job.languages,
    ...props.job.tools,
  ];
  return (
    <li key={props.job.id}>
      <Container
        classes={`${classes.card} ${
          props.job.featured && classes.borderFeatured
        }`}
      >
        <img
          className={classes.logo}
          src={`${props.job.logo}`}
          alt={props.job.company}
        />
        <div className={classes[`card-content`]}>
          <div className={`${classes.information} flex-row`}>
            <h2>{props.job.company}</h2>
            {props.job.new && (
              <div className={classes.special}>
                <p className={`${classes.new}`}>new!</p>
              </div>
            )}
            {props.job.featured && (
              <p className={`${classes.featured} ${classes.special}`}>
                featured
              </p>
            )}
          </div>
          <p className={classes.position}>{props.job.position}</p>
          <div className={`${classes.about} flex-row`}>
            <p>{props.job.postedAt}</p>
            <span></span>
            <p>{props.job.contract}</p>
            <span></span>
            <p>{props.job.location}</p>
          </div>
        </div>
        <ul className={`${classes.skills} flex-row`}>
          {skills.map((skill) => (
            <li key={skill}>
              <button onClick={props.clickHandler}>
                {skill}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </li>
  );
};

export default Card;
