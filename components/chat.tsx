"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faker } from '@faker-js/faker';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  message: string;
}

interface ChatComponentProps {
  onClose: () => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ onClose }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userMessage, setUserMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    addChatMessage('assistant', "Hello! How can I help you with your tasks today?");
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addChatMessage = (sender: 'user' | 'assistant', message: string) => {
    const newMessage: ChatMessage = {
      id: faker.string.uuid(),
      sender,
      message,
    };
    setChatMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const simulateConversation = (topic: string) => {
    setShowOptions(false);
    addChatMessage('user', topic);

    setTimeout(() => {
      switch (topic) {
        case 'Time management tips':
          addChatMessage('assistant', "Sure, I can help with time management. Let's start with the Pomodoro Technique. Have you tried it before?");
          setTimeout(() => {
            addChatMessage('user', "No, I haven't. What is it?");
            setTimeout(() => {
              addChatMessage('assistant', "The Pomodoro Technique involves working in focused 25-minute intervals, followed by 5-minute breaks. After 4 'pomodoros', take a longer 15-30 minute break.");
              setTimeout(() => {
                addChatMessage('assistant', "Let's try it now. I'll set a timer for 25 minutes. Focus on your current task, and I'll notify you when it's break time.");
                setTimeout(() => {
                  addChatMessage('assistant', "Time's up! Great job focusing for 25 minutes. Now, take a 5-minute break. Stand up, stretch, or take a short walk. I'll let you know when the break is over.");
                  setTimeout(() => {
                    addChatMessage('assistant', "Break time is over. Ready for another focused session?");
                  }, 5000);
                }, 5000); // Simulating 25 minutes in 5 seconds for demo purposes
              }, 3000);
            }, 2000);
          }, 2000);
          break;

        case 'Task rearrangement':
          addChatMessage('assistant', "I see you have a new meeting to schedule. Let's rearrange your tasks to accommodate it. What time is the meeting?");
          setTimeout(() => {
            addChatMessage('user', "It's at 2 PM and will last for an hour.");
            setTimeout(() => {
              addChatMessage('assistant', "Alright, I've rearranged your schedule. Here's the updated plan:");
              setTimeout(() => {
                addChatMessage('assistant', "9:00 AM - 11:00 AM: Work on project report\n11:00 AM - 12:00 PM: Break and lunch\n12:00 PM - 1:30 PM: Continue project report\n1:30 PM - 2:00 PM: Prepare for meeting\n2:00 PM - 3:00 PM: New meeting\n3:00 PM - 5:00 PM: Complete project report");
                setTimeout(() => {
                  addChatMessage('assistant', "How does this look? Remember to take short breaks between tasks.");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 2000);
          break;

          case 'Communication help':
          addChatMessage('assistant', "Let's practice communicating effectively in a meeting scenario. Imagine you're presenting a new project idea to your team. What's the project about?");
          setTimeout(() => {
            addChatMessage('user', "I want to propose a new customer feedback system to improve our product.");
            setTimeout(() => {
              addChatMessage('assistant', "Great idea! Let's structure your presentation. Start by explaining the current situation. What's the problem you're trying to solve?");
              setTimeout(() => {
                addChatMessage('user', "Our current feedback process is slow and we're missing out on valuable customer insights.");
                setTimeout(() => {
                  addChatMessage('assistant', "Good. Now, what specific task or goal does your project aim to achieve?");
                  setTimeout(() => {
                    addChatMessage('user', "We want to implement a real-time feedback system that captures customer opinions immediately after using our product.");
                    setTimeout(() => {
                      addChatMessage('assistant', "Excellent. What actions do you propose to implement this system?");
                      setTimeout(() => {
                        addChatMessage('user', "We'll develop a mobile app integration and use AI to analyze feedback instantly.");
                        setTimeout(() => {
                          addChatMessage('assistant', "Very innovative! Lastly, what results do you expect from this new system?");
                          setTimeout(() => {
                            addChatMessage('user', "We expect to increase customer satisfaction by 20% and reduce product improvement cycle time by 30%.");
                            setTimeout(() => {
                              addChatMessage('assistant', "Excellent presentation! You've clearly communicated your idea using the STAR method: Situation, Task, Action, and Result. This structure helps your team understand the context, goal, plan, and expected outcomes. Great job!");
                              setShowOptions(true);
                            }, 2000);
                          }, 2000);
                        }, 2000);
                      }, 2000);
                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
          break;

     

        case 'Dealing with distractions':
          addChatMessage('assistant', "Dealing with distractions can be challenging. Let's identify your main distractions first. What tends to distract you the most during work?");
          setTimeout(() => {
            addChatMessage('user', "I get distracted by notifications on my phone and social media.");
            setTimeout(() => {
              addChatMessage('assistant', "That's a common issue. Here are some strategies to minimize these distractions:");
              setTimeout(() => {
                addChatMessage('assistant', "1. Use 'Do Not Disturb' mode on your phone during focused work periods\n2. Install website blockers to limit access to social media during work hours\n3. Designate specific times to check notifications and social media\n4. Keep your phone out of sight while working\n5. Use noise-cancelling headphones to create a focused environment");
                setTimeout(() => {
                  addChatMessage('assistant', "Let's start with turning on 'Do Not Disturb' mode now. Can you do that and let me know when it's done?");
                }, 3000);
              }, 3000);
            }, 2000);
          }, 2000);
          break;
      }
    }, 1000);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    addChatMessage('user', userMessage);
    setUserMessage('');

    setTimeout(() => {
      addChatMessage('assistant', "I understand. Is there a specific area you'd like help with? Time management, task rearrangement, communication, or dealing with distractions?");
      setShowOptions(true);
    }, 1000);
  };

  return (
    <div className={`fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 ease-in-out ${isMinimized ? 'h-12' : 'h-96'}`}>
      <div className="bg-blue-500 text-white p-2 flex justify-between items-center rounded-t-lg">
        <h2 className="font-semibold">ADHD Assistant</h2>
        <div className="flex items-center space-x-2">
          {isMinimized ? (
            <FaChevronUp className="cursor-pointer" onClick={() => setIsMinimized(false)} />
          ) : (
            <FaChevronDown className="cursor-pointer" onClick={() => setIsMinimized(true)} />
          )}
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <div className="flex-grow p-2 overflow-y-auto">
            {chatMessages.map(message => (
              <div key={message.id} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                  {message.message}
                </span>
              </div>
            ))}
            {showOptions && (
              <div className="mt-2 space-y-2">
                <button onClick={() => simulateConversation('Time management tips')} className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-200">Time management tips</button>
                <button onClick={() => simulateConversation('Task rearrangement')} className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-200">Task rearrangement</button>
                <button onClick={() => simulateConversation('Communication help')} className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-200">Communication help</button>
                <button onClick={() => simulateConversation('Dealing with distractions')} className="w-full bg-blue-100 text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-200">Dealing with distractions</button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex p-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring"
            />
            <button onClick={handleSendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatComponent;