import React from "react";
import { styled } from "@styles/styled";
import { Text, Button, Stack, Spacer } from "@components/common";
import { FORM_WIDTH } from "../constants";

const initialValues = {
  attending: "",
  name: "",
  phone: "",
  email: "",
  diet: "",
  description: "",
  other: "",
};

export default function SignupForm() {
  const [isOpen, setOpen] = React.useState(true);
  const [formValues, setFormValues] = React.useState(initialValues);

  function handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormValues((p) => ({ ...p, [name]: value } as any));
  }

  return (
    <Wrapper>
      {isOpen ? (
        <FormWrapper>
          <Form autoComplete="on">
            <Stack spacing="medium" align="start">
              <Text variant="title3" color="white">
                Pääsetkö mukaan?
              </Text>

              <Spacer size="large" />

              <Stack axis="x" spacing="large">
                <RadioLabel>
                  <Text variant="body" color="white">
                    Kyllä
                  </Text>

                  <RadioInput
                    name="attending"
                    type="radio"
                    value="yes"
                    checked={formValues.attending === "yes"}
                    onChange={handleInputChange}
                  />

                  <RadioMark checked={formValues.attending === "yes"} />
                </RadioLabel>

                <RadioLabel>
                  <Text variant="body" color="white">
                    Ei
                  </Text>

                  <RadioInput
                    name="attending"
                    type="radio"
                    value="no"
                    checked={formValues.attending === "no"}
                    onChange={handleInputChange}
                  />

                  <RadioMark checked={formValues.attending === "no"} />
                </RadioLabel>
              </Stack>

              <Label>
                <Text variant="body" color="white">
                  Nimi (pakollinen)
                </Text>

                <Input
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Label>

              <Label>
                <Text variant="body" color="white">
                  Puhelinnumero
                </Text>

                <Input
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </Label>

              <Label>
                <Text variant="body" color="white">
                  Sähköposti
                </Text>

                <Input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </Label>

              <Label>
                <Text variant="body" color="white">
                  Ilmoitan samalla myös
                </Text>

                <TextArea
                  rows={4}
                  name="description"
                  placeholder={`Kirjoita tähän kaikki kutsussa mainitut perheenjäsenesi tai kumppanisi, jotka haluat ilmoittaa samalla. Esim. "Sampo, Kari, ja Johanna."`}
                  value={formValues.description}
                  onChange={handleInputChange}
                />
              </Label>

              <Label>
                <Text variant="body" color="white">
                  Muuta
                </Text>

                <TextArea
                  rows={2}
                  name="other"
                  value={formValues.other}
                  onChange={handleInputChange}
                />
              </Label>

              <Spacer size="xlarge" />

              <Button
                type="submit"
                variant="outlineLight"
                css={{
                  alignSelf: "center",
                  minWidth: "200px",
                }}
              >
                Lähetä
              </Button>
            </Stack>
          </Form>
        </FormWrapper>
      ) : (
        <Button onClick={() => setOpen(true)}>Ilmoittaudu</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
});

const FormWrapper = styled("div", {
  width: "100%",
  backgroundColor: "$secondary",
  paddingTop: "$xlarge",
  paddingBottom: "$xxlarge",
  boxShadow: "inset 0px 0px 24px rgba(0,0,0,0.1)",
});

const Form = styled("form", {
  maxWidth: `${FORM_WIDTH}px`,
  margingHorizontal: "auto",
});

const RadioLabel = styled("label", {
  position: "relative",
  display: "flex",
  paddingLeft: "40px",
});

const RadioMark = styled("span", {
  position: "absolute",
  display: "inline-block",
  top: "0px",
  left: "0px",
  height: "24px",
  width: "24px",
  borderRadius: "50%",

  "&::after": {
    content: `""`,
    position: "absolute",
    opacity: 0,
    left: "50%",
    top: "50%",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "$white",
    transform: "translate(-50%, -50%)",
  },

  variants: {
    checked: {
      false: {
        backgroundColor: "$white",
      },
      true: {
        backgroundColor: "$primary",
        "&::after": {
          opacity: 1,
        },
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const RadioInput = styled("input", {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "100%",
  margin: "0px",
  opacity: "0",
  zIndex: 1,
  cursor: "pointer",
});

const Label = styled("label", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});

const Input = styled("input", {
  backgroundColor: "$white",
  width: "100%",
  marginTop: "$xsmall",
  padding: "$normal",
  outline: "none",
  borderRadius: "2px",
  typography: "$body",

  "&:focus": {
    boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.1)",
  },
});

const TextArea = styled("textarea", {
  backgroundColor: "$white",
  width: "100%",
  marginTop: "$xsmall",
  padding: "$normal",
  outline: "none",
  borderRadius: "2px",
  typography: "$body",
  resize: "vertical",

  "&::placeholder": {
    typography: "$body",
    color: "$gray",
  },

  "&:focus": {
    boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.1)",
  },
});
