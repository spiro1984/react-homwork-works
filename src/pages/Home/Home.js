import React from "react";
import Button from "../../components/Button/Button";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import Testimonial from "../../components/Testimonial/Testimonial";
import { courses, testimonials } from "../../utils/data";
import TestimonialImg from "../../assets/images/testimonial.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          helperText={"Learn Something New"}
          title={"Open new possibilities"}
          button={
            <Button isOutline handleClick={() => navigate("/courses")}>
              More Course
            </Button>
          }
        >
          <Grid>
            {courses.slice(0, 4).map((course) => (
              <CourseCard
                key={course.id}
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                title={course.title}
                subtitle={course.subtitle}
              />
            ))}
          </Grid>
        </Section>
        <Section isSecondary>
          <Testimonial imgSrc={TestimonialImg} imgAlt="Testimonial">
            At the academy, I learned how to apply technology in practice.
            Frontend education was demanding, it required a lot of time. Upon
            completion, I got my first job as a developer.
          </Testimonial>
        </Section>
      </main>
    </>
  );
};

export default Home;
