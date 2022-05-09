import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className="fixed bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
      <WidgetForm />
      </Popover.Panel>
      
      <Popover.Button className="bg-brand-400 rounded-full px-3 h-12 text-[1.3rem] text-white flex items-center group">
      <ChatTeardropDots className="w-6 h-6" />

      <span className="ml-px max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-500">Feedback</span>
    </Popover.Button>
    </Popover>
  )
}