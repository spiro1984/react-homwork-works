import React from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import CourseImg from "../../assets/images/lecture-3.jpg";
import { useNavigate, useParams } from "react-router-dom";

//rafce skeleton bez propova

const Course = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const course = courses.find((course) => course.id === Number(id));

  return (
    <>
      <Header isSecondary></Header>
      <main>
        <Section
          helperText={course.subtitle}
          title={course.title}
          button={
            <Button isOutline handleClick={() => navigate(-1)}>
              Back
            </Button>
          }
        >
          <SingleCourse imgSrc={course.img.src} imgAlt={course.img.alt}>
            {course.content}
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
