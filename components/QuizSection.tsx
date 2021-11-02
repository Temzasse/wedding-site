import React from "react";
import { Text, Stack, Section, LeafDecoration } from "@components/common";

import QuizForm from "./QuizForm";

export default function QuizSection() {
  const [quizVisible, setQuizVisible] = React.useState(false);

  React.useEffect(() => {
    function hashHandler() {
      const hash = location.hash.substr(1);
      if (!quizVisible && hash === "quiz") setQuizVisible(true);
    }

    window.addEventListener("hashchange", hashHandler, false);

    hashHandler();

    return () => {
      window.removeEventListener("hashchange", hashHandler, false);
    };
  }, []);

  return (
    <>
      {quizVisible && (
        <Section>
          <Stack spacing="large" align="center">
            <Stack spacing="small" align="center">
              <Text variant="title2" id="quiz">
                Häävisa
              </Text>
              <Text variant="title3" color="tertiaryLight">
                Wedding quiz
              </Text>
            </Stack>

            <LeafDecoration />

            <QuizForm />
          </Stack>
        </Section>
      )}

      <form
        name="quiz"
        method="post"
        data-netlify="true"
        className="visually-hidden"
      >
        <input type="hidden" name="form-name" value="quiz" />
        <input required type="text" name="name" />
      </form>
    </>
  );
}
