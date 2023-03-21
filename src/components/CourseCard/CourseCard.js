import React from "react";
import PropTypes from "prop-types";
import "./CourseCard.scss";

const CourseCard = ({ title, subtitle, imgSrc, imgAlt }) => {
  return (
    <article className="CourseCard">
      <a href="#">
        <figure className="CourseCard-Figure">
          <img src={imgSrc} alt={imgAlt} className="CourseCard-Image" />
        </figure>
        <h3 className="CourseCard-Title">{title}</h3>
        <p className="CourseCard-Subtitle">{subtitle}</p>
      </a>
    </article>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default CourseCard;
