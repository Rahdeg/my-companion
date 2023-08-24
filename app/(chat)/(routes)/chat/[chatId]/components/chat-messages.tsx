"use client"

import { Companion, Message } from "@prisma/client";
import ChatMessage, { ChatMessageProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps {
  isLoading: boolean;
  messages: ChatMessageProps[];
  companion: Companion;
}

const ChatMessages = ({ isLoading, messages = [], companion }: ChatMessagesProps) => {
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);
  const scrollRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  useEffect(() => {

    scrollRef.current?.scrollIntoView({ behavior: "smooth" });

  }, [messages.length])



  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage role='system' isLoading={fakeLoading} content={`Hello I am ${companion.name}, ${companion.description}`} src={companion.src} />
      {
        messages.map((message) => (
          <ChatMessage key={message.content} role={message.role} isLoading={message.isLoading} content={message.content} src={companion.src} />
        ))
      }
      {
        isLoading && (
          <ChatMessage role="system" src={companion.src} isLoading />
        )
      }

      <div ref={scrollRef} />
    </div>
  )
}

export default ChatMessages