import React from "react";
import { Button } from "../../utils/style/generalStyles";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../utils/data";

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = courses.find((course) => course.id === Number(id));

  return (
    <>
      <Header isSecondary />
      <main>
        <Section title={"Profile"}>Profile page content</Section>
      </main>
    </>
  );
};

export default Profile;
