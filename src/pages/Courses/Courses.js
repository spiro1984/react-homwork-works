import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses as data } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(data);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    const courseTitle = e.target.value.toLowerCase();
    console.log(courseTitle);

    const filteredCourses = data.filter((course) =>
      course.title.toLowerCase().includes(courseTitle)
    );
    setCourses(filteredCourses);
  };

  return (
    <>
      <Header className={"Header"} isSecondary />
      <main>
        <Section
          title={"All courses"}
          button={
            <SearchBar
              placeholder={"Search courses"}
              handleSearch={handleSearch}
            />
          }
        >
          {courses ? (
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
          ) : (
            <Loader />
          )}
        </Section>
      </main>
    </>
  );
};

export default Courses;
