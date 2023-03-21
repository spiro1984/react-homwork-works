import React from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";

//rafce skeleton bez propova

const Courses = () => {
  return (
    <>
      <Header className={"Header"} isSecondary></Header>
      <main>
        <Section title={"All courses"}>
          <Grid>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                title={course.title}
                subtitle={course.subtitle}
                url={course.id}
              />
            ))}
          </Grid>
        </Section>
      </main>
    </>
  );
};

export default Courses;
