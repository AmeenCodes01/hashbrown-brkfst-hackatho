"use client"
import { UiChatMessage } from '@hashbrownai/react';

export const RichMessage = ({
  message,
  onRetry,
  isLast,
}: {
  message: UiChatMessage<any>;
  onRetry: () => void;
  isLast: boolean;
}) => {
  const isAssistant = message.role === 'assistant';
  const isError = message.role === 'error';

  const onLeft = isAssistant || isError;

  if ((isAssistant || isError) && !message.content) {
    return null;
  }

  let classNames = '';

  if (isAssistant) {
    classNames = 'bg-secondary/80 text-secondary-foreground';
  } else if (isError) {
    classNames = 'bg-destructive/80 text-primary-foreground';
  } else {
    classNames = 'bg-primary/80 text-primary-foreground';
  }

  return (
    <div className={`flex w-full  ${onLeft ? 'justify-start' : 'justify-end'}`}>
      <div className={`p-2  ${classNames} border-dashed  border-b-1 border-t-green-900 border-t-1`}> 
        {message.role === 'error' && (
          <div className="flex flex-row items-center gap-2">
           !!
            {message.content}
            {isLast && (
              <button
                className="!pt-0 !pb-0 h-auto"
                onClick={onRetry}
              >
                Retry
              </button>
            )}
          </div>
        )}

        {message.role === 'assistant' && (
          <div className="flex flex-col gap-2">{message.ui}</div>
        )}

        {message.role === 'user' && (
          <div className="flex flex-col gap-2">{message.content}</div>
        )}
      </div>
    </div>
  );
};
