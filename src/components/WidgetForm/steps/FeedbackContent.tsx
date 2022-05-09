import { ArrowLeft, Function, TestTube } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  feedbackRestart: () => void;
  feedbackSend: () => void;
}

export function FeedbackContent({ feedbackType, feedbackRestart, feedbackSend }: FeedbackContentProps) {
  const [screenshot, setScreenshot] = useState< string | null>(null);
  const [comment, setComment] = useState('');

  function handleComment(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });
    
    feedbackSend();
  }

  const feedbackTypeInfos = feedbackTypes[feedbackType];

  return (
    <>
    <header>      
      <button
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={feedbackRestart}
      >
        <ArrowLeft weight="bold" className="w-4 h-4" />
      </button>

      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={feedbackTypeInfos.image.source} alt={feedbackTypeInfos.title} className="w-6 h-6" />  
        {feedbackTypeInfos.title}
      </span>

      <CloseButton />
    </header>

    <form onSubmit={handleComment} className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-400 focus:ring-brand-400 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Tell us in detail what's happening..."
        onChange={event => setComment(event.target.value)}
      />

    <footer className="flex gap-2 mt-2">
        <ScreenshotButton
        screen={screenshot}
        onScreen={setScreenshot}
        />
        <button
        disabled={comment.length === 0}
        type="submit"
        className="p-2 bg-brand-400 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-400 disabled:hover:text-zinc-100"
        >
          Send Feedback
        </button>
    </footer>
    </form>
  </>
  );
}