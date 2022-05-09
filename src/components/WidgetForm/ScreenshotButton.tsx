import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface screenshotProps {
  screen: string | null;
  onScreen: (screenshot: string | null) => void;
}

export function ScreenshotButton({ onScreen, screen }: screenshotProps) {
  const [isTakeScreen, setTakeScreen] = useState(false);

  async function handleTackleScreen() {
    setTakeScreen(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64img = canvas.toDataURL('image/png');

    onScreen(base64img);

    setTakeScreen(false);
  }

  if (screen) {
    return (
      <button
      type="button"
      onClick={() => onScreen(null)}
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      style={{
        backgroundImage: `url(${screen})`,
      }}
      >

       <Trash weight="fill" className=""/>
      </button>
    );
  }

  return (
    <button
    type="button"
    onClick={handleTackleScreen}
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      { isTakeScreen ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100 animate-pulse"/>}
    </button>
  )
}