import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  source: string;
  email: string;
  message?: string;
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
      <Preview>New Message</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://assets.vercel.com/image/upload/front/assets/design/components/triangle.gif`}
                width="100"
                height="50"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-sm font-normal text-center p-0 my-[30px] mx-0">
              Message from <strong>{email}</strong>
            </Heading>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-lg leading-[24px] px-5">
              {message}
            </Text>
            <Text className="text-[#666666] text-lg leading-[24px] px-5">
              Name: {name}
              <br />
              Phone:{phone} <br />
              Referal: {source}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
