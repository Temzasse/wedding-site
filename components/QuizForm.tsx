import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@styles/styled";
import { Text, Stack } from "@components/common";

type Answer = null | "Teemu" | "Milka";

type Question = {
  fi: string;
  en: string;
  value: null | "Teemu" | "Milka";
  answered: boolean;
  gradient: any;
};

export default function QuizForm() {
  const [questions, setQuestions] = React.useState(QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [name, setName] = React.useState("");
  const [completed, setCompleted] = React.useState(() => {
    try {
      return !!JSON.parse(localStorage.getItem("quiz-completed"));
    } catch (error) {
      return false;
    }
  });

  const allAnswered =
    currentQuestion === questions.length - 1 &&
    !questions.some((q) => !q.answered);

  function answerQuestion(answer: Answer) {
    setQuestions((p) => {
      const values = [...p];

      values[currentQuestion] = {
        ...values[currentQuestion],
        value: answer,
      };

      return values;
    });

    setCurrentQuestion((p) => Math.min(p + 1, questions.length - 1));

    requestAnimationFrame(() => {
      setQuestions((p) => {
        const values = [...p];

        values[currentQuestion] = {
          ...values[currentQuestion],
          answered: true,
        };

        return values;
      });
    });
  }

  function redo() {
    setCurrentQuestion(0);
    setQuestions(QUESTIONS);
  }

  function submit() {
    // TODO: submit to server
    setCompleted(true);
    localStorage.setItem("quiz-completed", JSON.stringify(true));
    document.querySelector("#quiz").scrollIntoView({ behavior: "smooth" });
  }

  if (completed) {
    return (
      <Wrapper>
        <Stack axis="y" spacing="normal">
          <Text variant="title3">Vastaukset lähetetty!</Text>
          <div>
            <Stack axis="y" spacing="small">
              <Text variant="body">Kiitos vastauksistasi! 🎉</Text>
              <Text variant="bodySmall" color="gray">
                Thank you for your submission!
              </Text>
            </Stack>
          </div>
        </Stack>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Stack axis="y" spacing="large">
        <CardStack>
          <Card>
            <CardContent style={GRADIENTS[10]}>
              <Stack axis="y" spacing="small">
                <Text
                  variant="title2"
                  color="white"
                  style={{ lineHeight: 1.2 }}
                >
                  🤩 Valmista!
                </Text>

                <Text variant="body" color="white">
                  Voit vielä halutessasi muuttaa vastauksiasi ennen
                  lähettämistä.
                </Text>

                <span>&middot;&nbsp;&middot;&nbsp;&middot;</span>

                <Text variant="bodySmall" color="white">
                  All done! Please redo the quiz to change your answers or
                  submit your current answers.
                </Text>
              </Stack>
            </CardContent>
          </Card>

          <AnimatePresence>
            {[...questions]
              .reverse()
              .filter((q) => !q.answered)
              .map((question) => (
                <Card
                  key={question.fi}
                  exit={{
                    y: -32,
                    x: question.value === "Milka" ? -100 : 100,
                    rotate: question.value === "Milka" ? -20 : 20,
                    opacity: 0,
                  }}
                  transition={{
                    opacity: { delay: 0.3 },
                    duration: 0.4,
                  }}
                >
                  <CardContent style={question.gradient}>
                    <Stack axis="y" spacing="small">
                      <Text
                        variant={{ "@initial": "title2", "@xs": "title3" }}
                        color="white"
                        style={{ lineHeight: 1.2 }}
                      >
                        {question.fi}
                      </Text>

                      <Text variant="body" color="white">
                        {question.en}
                      </Text>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
          </AnimatePresence>
        </CardStack>

        <Dots>
          <Stack axis="x" spacing="xsmall">
            {questions.map((question) => (
              <Dot
                key={question.fi}
                variant={
                  question.value === null
                    ? "undetermined"
                    : (question.value.toLowerCase() as "teemu" | "milka")
                }
              />
            ))}
          </Stack>
        </Dots>

        <div>
          {allAnswered ? (
            <Stack axis="y" spacing="large" align="center" justify="center">
              <Action>
                <ActionButton onClick={redo}>
                  🔄 Muuta vastauksia <span>(redo)</span>
                </ActionButton>
              </Action>

              <div>
                <Stack
                  axis="y"
                  spacing="normal"
                  align="center"
                  justify="center"
                >
                  <Label>
                    <Stack axis="x" spacing="xxsmall" align="center">
                      <Text variant="body">Syötä nimesi</Text>
                      <Text variant="body" color="gray">
                        (name):
                      </Text>
                    </Stack>

                    <Input
                      name="email"
                      type="email"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Label>

                  <Action>
                    <ActionButton onClick={submit} disabled={!name}>
                      👍 Lähetä vastaukset <span>(submit)</span>
                    </ActionButton>
                  </Action>
                </Stack>
              </div>
            </Stack>
          ) : (
            <Stack axis="x" spacing="small" align="center" justify="center">
              <Action>
                <ActionButton onClick={() => answerQuestion("Milka")}>
                  💜 Milka
                </ActionButton>
              </Action>

              <Action>
                <ActionButton onClick={() => answerQuestion("Teemu")}>
                  💙 Teemu
                </ActionButton>
              </Action>
            </Stack>
          )}
        </div>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
});

const CardStack = styled("div", {
  position: "relative",
  minHeight: "400px",

  "&:before, &:after": {
    content: "''",
    display: "block",
    absoluteFill: true,
    border: "1px solid",
    borderColor: "$grayLight",
    backgroundColor: "$white",
    borderRadius: "calc($medium - 2px)",
  },

  "&:before": {
    zIndex: 2,
    transform: "scale(0.97) translateY(3%) rotate(-0.3deg)",
    boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
  },
  "&:after": {
    zIndex: 1,
    transform: "scale(0.94) translateY(6%) rotate(0.3deg)",
    boxShadow: "0px 1px 4px rgba(0,0,0,0.07)",
  },
});

const Card = styled(motion.div, {
  absoluteFill: true,
  zIndex: 3,
  borderRadius: "$medium",
  padding: "12px",
  textShadow: "0px 1px 1px rgba(0,0,0,0.1)",
  backgroundColor: "$white",
  transform: "rotate(0.3deg)",

  "&:last-child": {
    boxShadow: "0px 1px 4px rgba(0,0,0,0.15)",
  },
});

const CardContent = styled("div", {
  padding: "$large",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "$white",
  borderRadius: "calc($medium - 4px)",
  transform: "rotate(-0.3deg)",
  height: "100%",
  userSelect: "none",
});

const Action = styled("div", {
  padding: "12px",
  backgroundColor: "$grayLighter",
  borderRadius: "$full",
});

const ActionButton = styled("button", {
  width: "100%",
  backgroundColor: "$white",
  paddingVertical: "$medium",
  paddingHorizontal: "$large",
  borderRadius: "$full",
  boxShadow: "0px 1px 4px rgba(0,0,0,0.05)",
  typography: "$body",

  "& > span": {
    color: "$gray",
  },

  "&:active": {
    transform: "translateY(2px) scale(0.99)",
  },

  "&:disabled": {
    opacity: 0.7,
  },

  "@xs": {
    typography: "$bodySmall",
    paddingVertical: "$normal",
    paddingHorizontal: "$medium",
  },
});

const Dots = styled("div", {
  alignSelf: "center",
});

const Dot = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  variants: {
    variant: {
      undetermined: {
        backgroundColor: "$grayLight",
      },
      teemu: {
        backgroundColor: "$quizTeemu",
      },
      milka: {
        backgroundColor: "$quizMilka",
      },
    },
  },
});

const Label = styled("label", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "300px",
});

const Input = styled("input", {
  backgroundColor: "$grayLighter",
  width: "100%",
  marginTop: "$xsmall",
  padding: "$small",
  outline: "none !important",
  borderRadius: "$normal",
  border: "1px solid",
  borderColor: "$grayLight",
  typography: "$body",

  "&:focus": {
    boxShadow: "0px 0px 0px 4px rgba(0,0,0,0.1)",
  },
});

// Constants -------------------------------------------------------------------

const GRADIENTS = [
  {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
  {
    backgroundColor: "#D9AFD9",
    backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
  },
  {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    backgroundColor: "#FF9A8B",
    backgroundImage:
      "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
  },
  {
    backgroundColor: "#FA8BFF",
    backgroundImage:
      "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
  },
  {
    backgroundColor: "#FBDA61",
    backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
  },
  {
    backgroundColor: "#21D4FD",
    backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
  },
  {
    backgroundColor: "#3EECAC",
    backgroundImage: "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)",
  },
  {
    backgroundColor: "#f79590",
    backgroundImage: "linear-gradient(19deg, #f79590 0%, #DDD6F3 100%)",
  },
  {
    backgroundColor: "#74EBD5",
    backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
  },
  {
    backgroundColor: "#F4D03F",
    backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
  },
];

const QUESTIONS: Question[] = [
  {
    answered: false,
    en: "Which one is funnier?",
    fi: "Kumpi on hauskempi?",
    value: null,
    gradient: GRADIENTS[0],
  },
  {
    answered: false,
    en: "Which one asked first to a date?",
    fi: "Kumpi pyysi ensin treffeille?",
    value: null,
    gradient: GRADIENTS[1],
  },
  {
    answered: false,
    en: "Which one is more XXXXXX?",
    fi: "Kumpi on XXXXXX?",
    value: null,
    gradient: GRADIENTS[2],
  },
  {
    answered: false,
    en: "Which one is a better cook?",
    fi: "Kumpi on parempi kokki?",
    value: null,
    gradient: GRADIENTS[3],
  },
  {
    answered: false,
    en: "Which one is more stubborn?",
    fi: "Kumpi on itsepäisempi?",
    value: null,
    gradient: GRADIENTS[4],
  },
  {
    answered: false,
    en: "Which one is more messy?",
    fi: "Kumpi on sotkuisempi?",
    value: null,
    gradient: GRADIENTS[5],
  },
  {
    answered: false,
    en: "Which one is more stylish?",
    fi: "Kumpi on tyylikkäämpi?",
    value: null,
    gradient: GRADIENTS[6],
  },
  {
    answered: false,
    en: "Which one sleeps longer?",
    fi: "Kumpi nukkuu pidempään?",
    value: null,
    gradient: GRADIENTS[7],
  },
  {
    answered: false,
    en: "Which one is a better driver?",
    fi: "Kumpi on parempi kuski?",
    value: null,
    gradient: GRADIENTS[8],
  },
  {
    answered: false,
    en: "Which one likes coffee more?",
    fi: "Kumpi tykkää enemmän kahvista?",
    value: null,
    gradient: GRADIENTS[9],
  },
];
