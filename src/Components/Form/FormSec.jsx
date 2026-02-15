"use client";
import Image from "next/image";
import s from "./FormSec.module.scss";
import FrameUndSec from "../../img/frame_und_sec.png";
import Location from "../../img/form/location.png";
import PhoneBook from "../../img/form/phonebook.png";
import Email from "../../img/form/email.png";
import Man from "../../img/form/man.png";
import { Field, Formik, Form } from "formik";
export const FormSec = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        alert("Error sending message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };
  return (
    <div id="contact" className={s.form_sec}>
      <Image src={FrameUndSec} alt="SEO marketing illustration" priority />
      <ul className={s.form_sec_list}>
        <li>
          <Image src={Location} alt="Location" width={48} height={52} />
          <h4>Address</h4>
          <p>
            Express Chambers II Spaces Works, Level 5, Royapettah, Chennai –
            600014
          </p>
        </li>
        <li>
          <Image src={PhoneBook} alt="PhoneBook" width={48} height={52} />
          <h4>Phone</h4>
          <div>
            <p>Enquiry: 1800-123-4567</p>
            <p>Order: 2400-480-894</p>
          </div>
        </li>
        <li>
          <Image src={Email} alt="Email" width={48} height={52} />
          <h4>Email</h4>
          <div>
            <p>help@brandexponent.com</p>
            <p>support@brandexponent.com</p>
          </div>
        </li>
      </ul>

      <div className={s.form_sec_main}>
        <Image src={Man} alt="Man" width={496} height={709} />
        <div>
          <h3>Enquiry Form</h3>
          <p>
            Dont be shy, Just tell us about yourself and we’ll figure out the
            best option for you and your project. Dont like Filling up forms ?
            Mail us then <span>company@email.com</span>
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              service: "",
              compName: "",
              phone: "",
              industry: "",
              message: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className={s.form}>
              <div className={s.grid}>
                <Field name="name" placeholder="Name" />
                <Field name="email" type="email" placeholder="Email" />
                <Field name="service" placeholder="Service looking for" />
                <Field name="compName" placeholder="Company Name" />
                <Field name="phone" placeholder="Phone" />
                <Field name="industry" placeholder="Industry" />
              </div>

              <Field
                as="textarea"
                name="message"
                placeholder="Your message"
                className={s.textarea}
              />

              <button type="submit" className={s.submit}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
