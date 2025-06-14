import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>New Message from Portfolio</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New message from {name} via your portfolio</Preview>
      <Section style={{ padding: "20px", fontFamily: "Roboto, sans-serif" }}>
        <Row>
          <Heading as="h2">New Message from {name}</Heading>
        </Row>
        <Row>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
        </Row>
        <Row>
          <Text>
            <strong>Message:</strong>
          </Text>
        </Row>
        <Row>
          <Text>{message}</Text>
        </Row>
      </Section>
    </Html>
  );
}
