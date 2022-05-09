import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"

import { FeedbackTypeSteps } from "./steps/FeedbackTypeSteps";
import { FeedbackContent } from "./steps/FeedbackContent";
import { FeedbackSucess } from "./steps/FeedbackSucess";


export const feedbackTypes = {
  bug: {
    title: 'Problem',
    image: {
      source: bugImageUrl,
      alt: 'imagem de um inseto simbolizando um bug',
    }
  },
  ideia: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'imagem de uma lâmpada simbolizando uma ideia',
    }
  },
  other: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'imagem de uma nuvem simbolizando outra ação',
    }
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState< FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleFeedback() {
    setFeedbackSend(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-[#171524] p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 

    { feedbackSend ? (
      <FeedbackSucess feedbackRestart={handleFeedback}/>
    ) : (
      <>
        {!feedbackType ? (
          <FeedbackTypeSteps sendFeedbackType={setFeedbackType} />
        ) : (
          <FeedbackContent
          feedbackType={feedbackType}
          feedbackRestart={handleFeedback}
          feedbackSend={() => setFeedbackSend(true)}
          />
        )}
      </>
    ) }

    </div>
  )
}