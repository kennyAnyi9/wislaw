import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
  margin: "auto",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
  source: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
  name,
  phone,
  source,
}) => {
  return (
    <Html>
      <Head />
      <Preview>IMHO Contact Form</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Section style={logo}>
              <Img
                src={`https://media.licdn.com/dms/image/D4E0BAQGMPgi_g3l6xQ/company-logo_200_200/0/1665328381658?e=1724889600&v=beta&t=FSyZ6Po5eYuxZH6ltiQD_6hvS4QUApRivFhuCr7UM4w`}
              />
            </Section>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Team WISLAW ,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  You have a new message from the WISLAW website contact form
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Referal: </b>
                  {source}
                </Text>

                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 |Wilsaw Support Education and Support fund, Nsuta,Tarkwa,
            GHANA | www.wislawedufund.org
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// import {
//   Body,
//   Button,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Tailwind,
//   Text,
// } from "@react-email/components";

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   message,
//   email,
//   name,
//   phone,
//   source,
// }) => {
//   return (
//     <Html>
//       <Head />
//       <Preview>New Message</Preview>
//       <Tailwind>
//         <Body className="bg-white my-auto mx-auto font-sans">
//           <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
//             <Section className="mt-[32px]">
//               <Img
//                 src={`https://assets.vercel.com/image/upload/front/assets/design/components/triangle.gif`}
//                 width="100"
//                 height="50"
//                 alt="Vercel"
//                 className="my-0 mx-auto"
//               />
//             </Section>
//             <Heading className="text-black text-sm font-normal text-center p-0 my-[30px] mx-0">
//               Message from <strong>{email}</strong>
//             </Heading>

//             <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
//             <Text className="text-[#666666] text-lg leading-[24px] px-5">
//               {message}
//             </Text>
//             <Text className="text-[#666666] text-lg leading-[24px] px-5">
//               Name: {name}
//               <br />
//               Phone:{phone} <br />
//               Referal: {source}
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };
