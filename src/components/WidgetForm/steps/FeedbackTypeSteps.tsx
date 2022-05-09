import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepsProps {
  sendFeedbackType: (type: FeedbackType) => void;
}

export function FeedbackTypeSteps({ sendFeedbackType }: FeedbackTypeStepsProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Leave your Feedback</span>
        <CloseButton />
      </header>
    
      <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, item]) => {
        return (
          <button
          onClick={() => sendFeedbackType(key as FeedbackType)}
            key={key}
            type="button"
            className="bg-[#28364A] rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-400 hover:animate-pulse focus:border-brand-400 focus:outline-none"
          >
            <span className="text-[1.3rem]">{item.title}</span>
            <img src={item.image.source} alt={item.image.alt} />
          </button>
        );
      })}
    </div>
    </>
  );
}