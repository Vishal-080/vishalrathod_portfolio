import React from "react";
import {
  ContactContainer,
  ContactForm,
  InputInput1,
  InputInput2,
  A,
  Column,
  P,
  LinksCont,
} from "./Styles";
import emailjs from "emailjs-com";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // FaHackerrank,
  FaMedium,
  FaLocationArrow
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const footerData = [
  {
    id: 0,
    title: "Mobile",
    display: "+91-7987487606",
    link: "tel:+917987487606",
    icon: <FaPhone className="commonIconsFooter" />,
  },
  {
    id: 1,
    title: "Email",
    display: "vrathod591@gmail.com",
    link: "mailto:vrathod591@gmail.com",
    icon: <SiGmail className="commonIconsFooter" />,
  },
  {
    id: 2,
    title: "Github",
    display: "Github",
    link: "https://github.com/Vishal-080",
    icon: <FaGithub className="commonIconsFooter" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/vishalrathod01/",
    icon: <FaLinkedin className="commonIconsFooter" />,
  },
  {
    id: 4,
    title: "Twitter",
    display: "Twitter",
    link: "https://twitter.com/Vishal_Rathod01",
    icon: <FaTwitter className="commonIconsFooter" />,
  },
  {
    id: 5,
    title: "Medium",
    display: "Medium",
    link: "https://medium.com/@vrathod591",
    icon: <FaMedium className="commonIconsFooter" />,
  },
  {
    id: 6,
    title: "Address",
    // display: "Bangalore, India",
    display: "Location : Bangalore, India",
    link: "Bangalore, India",
    icon: <FaLocationArrow className="commonIconsFooter" />
  },
  // {
  //   id: 6,
  //   title: "HackerRank",
  //   display: "HackerRank",
  //   link: "https://hackerrank.com/vrathod591",
  //  {
  //    id: 6,
  //    title: "Address",
  //    display: "Location : Indore, India",
  //    link: "Indore, India",
  // }
  //   icon: <FaHackerrank className="commonIconsFooter" />,
  // },
];

const Contact = () => {
  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");
  console.log(process.env.REACT_APP_SERVICE_ID);
  console.log(process.env);
  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          success();
        },
        (error) => {
          console.log(error.text);
          failure();
        }
      );
    e.target.reset();
  };
  return (
    <Container className="contact">
      <Common>
        <H1>Contact</H1>
      </Common>
      <ContactContainer>
        <Column>
          <ContactForm onSubmit={handleSend}>
            <InputInput1 required name="name" type="text" placeholder="Name" />
            <InputInput1
              required
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputInput2
              required
              name="message"
              placeholder="Message"
            ></InputInput2>
            <A value="Send">SEND</A>
            <ToastContainer />
          </ContactForm>
        </Column>
        <Column>
          <LinksCont>
            {footerData.map((item) => (
              <div title={item.title} style={{ display: "flex" }}>
                <div>
                  {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                  {item.icon}
                  {/* </a> */}
                </div>
                <div style={{ marginTop: "-5px" }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <P>{item.display}</P>
                  </a>
                </div>
              </div>
            ))}
          </LinksCont>
        </Column>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
