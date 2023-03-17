import React from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          contactPurpose: "",
          number: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Please enter your First Name"),
          lastName: Yup.string().required("Please enter your Last Name"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Please enter your email"),
          contactPurpose: Yup.string()
            .oneOf(["abc", "def", "xyz"], "Please select a valid designation")
            .required("Please select a designation"),
          number: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters")
            .matches("[0-9]{10}", "Phone number only contains numbers")
            .required("Please enter your phone number"),
          message: Yup.string().required("Please enter your message"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="p-4 w-full">
          <div className="flex flex-row gap-4 my-4">
            <div className="w-1/2">
              <label className="font-semibold text-gray-500">First Name</label>
              <Field
                name="firstName"
                type="text"
                className="border border-solid h-12 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
                placeholder="First Name"
              />{" "}
              <div className="text-red-500 text-sm font-semibold">
                <ErrorMessage name="firstName" />{" "}
              </div>
            </div>
            <div className="w-1/2">
              <label className="font-semibold text-gray-500">Last Name</label>
              <Field
                name="lastName"
                type="text"
                className="border border-solid h-12 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
                placeholder="Last Name"
              />{" "}
              <div className="text-red-500 text-sm font-semibold">
                <ErrorMessage name="lastName" />{" "}
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <label className="font-semibold text-gray-500">Email</label>
            <Field
              name="email"
              type="text"
              className="border border-solid h-12 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
              placeholder="Email"
            />{" "}
            <div className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="email" />{" "}
            </div>
          </div>
          <div className="w-full mt-4">
            <label className="font-semibold text-gray-500">Phone Number</label>
            <Field
              name="number"
              type="number"
              className="border border-solid h-12 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
              placeholder="Phone Number"
            />{" "}
            <div className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="number" />{" "}
            </div>
            <div className="w-full mt-4">
              <label className="font-semibold text-gray-500">
                Purpose of Contact
              </label>
              <Field
                name="contactPurpose"
                as="select"
                className="border text-gray-500 border-solid h-12 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
              >
                {" "}
                <option value="investor">Investment</option>
                <option value="abc">General Enquiry</option>
                <option value="def">Farmer</option>
                <option value="xyz">Career</option>
              </Field>
            </div>
            <div className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="contactPurpose" />{" "}
            </div>
            <div className="w-full mt-4">
              <label className="font-semibold text-gray-500">Message</label>
              <Field
                name="message"
                as="textarea"
                className="border border-solid h-32 pl-3 border-2 border-gray-300 rounded-lg w-full outline-none"
                placeholder=""
              />{" "}
            </div>
            <div className="text-red-500 text-sm font-semibold">
              <ErrorMessage name="message" />{" "}
            </div>
          </div>
          <div className="my-4 w-full rounded-full mx-auto">
            <button
              type="submit"
              className=" py-2 rounded-full px-3 bg-blue-500 text-white text-lg w-full rounded-full font-medium"
            >
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
