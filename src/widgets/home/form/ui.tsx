import React, { useState } from "react";
import { Button, Title } from "shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Arrow from "shared/assets/icons/arrow-right";

interface FormData {
  first_name: string;
  surname: string;
  email: string;
  company: string;
  message: string;
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    surname: "",
    email: "",
    company: "",
    message: "",
  });

  const [error, setError] = useState<string>("");

  const validateForm = () => {
    if (
      !formData.first_name ||
      !formData.surname ||
      !formData.email ||
      !formData.company ||
      !formData.message
    ) {
      return "All fields are required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Invalid email format";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch(
        "https://ridml-o-backend.vercel.app/api/email/contact-ridm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormData({
        first_name: "",
        surname: "",
        email: "",
        company: "",
        message: "",
      });
      setError("");
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      id="form"
      className={classNames(styles.container)}
      data-section={"light"}
    >
      <div className={styles.left__container}>
        <div className={styles.content}>
          <Title variant="h2">Get in touch!</Title>
          <p>
            Reach out to our team and subscribe to our email list to gain access
            to the latest updates about our work.
          </p>
        </div>
      </div>
      <div className={styles.form__container}>
        <form onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="secondary"
            className={styles.button}
            icon={<Arrow />}
            horizontal={true}
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};
