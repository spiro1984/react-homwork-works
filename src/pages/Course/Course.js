import React from "react";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import { courses } from "../../utils/data";
import CourseCard from "../../components/CourseCard/CourseCard";
import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import CourseImg from "../../assets/images/lecture-3.jpg";

//rafce skeleton bez propova

const Course = () => {
  return (
    <>
      <Header isSecondary></Header>
      <main>
        <Section
          helperText="+120 minutes"
          title="3. Version Control Systems"
          button={<Button isOutline>Back</Button>}
        >
          <SingleCourse imgSrc={CourseImg} imgAlt="Course name">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, at
            nostrum provident placeat, iste voluptate neque commodi sed fugiat
            praesentium est. Nam similique in, veniam, ipsa consequuntur
            distinctio doloremque expedita accusantium totam earum velit
            voluptatum quas iure temporibus tenetur accusamus molestiae
            veritatis culpa? Alias quam iure, deleniti explicabo corporis at,
            iusto architecto quisquam sed, eaque dolorum et perferendis unde
            reiciendis sint veniam ab odio ut maiores magnam blanditiis commodi
            dolor. Quas ipsam vel in commodi est recusandae eos temporibus modi
            velit. Minus consectetur eveniet praesentium fugiat velit labore
            obcaecati facere eius adipisci eum. Omnis soluta quia, laboriosam
            magnam nesciunt molestias.
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
