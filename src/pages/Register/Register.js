import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { Formik } from "formik";
import {
  FormRow,
  Form,
  Field,
  ErrorMessage,
} from "../../utils/style/generalStyles";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { upload } from "@testing-library/user-event/dist/upload";

const Register = () => {
  return (
    <>
      <Header isSecondary />
      <main>
        <Section title="Register">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordRepeat: "",
              githubUsername: "",
              zeplinUsername: "",
              activeFacultyYear: "",
              isAdmin: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string().email("Invalid email adress").required(),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log(values);
                actions.resetForm({
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  passwordRepeat: "",
                  githubUsername: "",
                  zeplinUsername: "",
                  activeFacultyYear: "",
                  isAdmin: false,
                });
                actions.setSubmitting(false);
              }, 2000);
            }}
          >
            {(formik) => (
              <Form>
                <FormRow>
                  <Field
                    type="text"
                    name="firstName"
                    disabled={formik.isSubmitting}
                    placeholder="First name..."
                  />
                  <ErrorMessage component="div" name="firstName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="text"
                    name="lastName"
                    disabled={formik.isSubmitting}
                    placeholder="Last name..."
                  />
                  <ErrorMessage component="div" name="lastName" />
                </FormRow>
                <FormRow>
                  <Field
                    type="email"
                    name="email"
                    disabled={formik.isSubmitting}
                    placeholder="Email..."
                  />
                  <ErrorMessage component="div" name="email" />
                </FormRow>
                <FormRow>
                  <Field
                    type="password"
                    name="password"
                    disabled={formik.isSubmitting}
                    placeholder="Password..."
                  />
                  <ErrorMessage component="div" name="email" />
                </FormRow>
                <FormRow>
                  <Field
                    type="password"
                    name="passwordRepeat"
                    disabled={formik.isSubmitting}
                    placeholder=" repeatPassword..."
                  />
                  <ErrorMessage component="div" name="password" />
                </FormRow>
                <FormRow>
                  <Button type="submit" isSecondary>
                    Register
                  </Button>
                </FormRow>
              </Form>
            )}
          </Formik>
        </Section>
      </main>
    </>
  );
};

export default Register;
