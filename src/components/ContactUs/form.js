import React, { useState } from "react";
import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { json } from "react-router-dom";

const ContactForm = () => {
  // const [body, setBody] = useState("")

  const [submittedData, setSubmittedData] = useState(null)
  // console.log('>>>>>>>>>>>>>>', submittedData)
  const submitHandler = (body) => {

    const emailBody =
      ` <html>
        <head>
          <style>
            table {
              border-collapse: collapse;
      }
            table, th, td {
              border: 1px solid black;
      }
            th, td {
              padding: 8px;
            text-align: left;
      }
          </style>
        </head>
        <body>
          <h2>Submitted Form Data</h2>
          <table>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>First Name  :-</td>
              <td>${body.firstName}</td>
            </tr>
            <tr>
              <td>Last Name :-</td>
              <td>${body.lastName}</td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>${body.email}</td>
            </tr>
            <tr>
              <td>Phone Number :-</td>
              <td>${body.number}</td>
            </tr>
            <tr>
              <td>Purpose of Contact :-</td>
              <td>${body.contactPurpose}</td>
            </tr>
            <tr>
              <td>Message :-</td>
              <td>${body.message}</td>
            </tr>
          </table>
        </body>
      </html>`
    // const email = body?.email
    // console.log(body?.email, email)

    const config = {
      Username: "AKIAXG74PM34KKYMR76N",
      Password: "BMeZ6UWhZDJw/Mr5fnzFnxcMFUmRpNSOEctrS/LooDla",
      Host: "smtp.elasticemail.com",
      Port: 587,
      To: 'rahul@salamkisan.com',
      // From: `${body?.email}`,
      From: 'shruti.p-ext@idigicloudtech.in',

      Subject: "This is the subject",
      Body: emailBody
    }

    if (window.Email) {
      window.Email.send(config).then((data) => {
        setSubmittedData(body)
        alert("email sent")

        console.log(data, 'esdrftgyhujikewrftghyjuk')
      })
    } 
  }

  const [submitted, isSubmitted] = useState(false)
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


            .required("Please enter your email"),
          contactPurpose: Yup.string()
            .oneOf(["investor", "General Enquiry", "Farmer", "Career"], "Please select a valid designation")
            .required("Please select a designation"),
          number: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters")
            .matches("[0-9]{10}", "Phone number only contains numbers")
            .required("Please enter your phone number"),
          message: Yup.string().required("Please enter your message"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log("swertyui", values)
            submitHandler(values)
            // setBody(values)

            isSubmitted(true)
            // alert(JSON.stringify(values, null, 2));
            resetForm();
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
              type="email"
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
                <option value="">Select Purpose</option>
                <option value="investor">Investment</option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Farmer">Farmer</option>
                <option value="Career">Career</option>
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
