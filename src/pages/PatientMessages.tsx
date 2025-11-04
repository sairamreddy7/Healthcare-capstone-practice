// src/pages/PatientMessages.tsx
import { useState } from 'react';

const messages = [
  {
    name: 'Dr. Alan Grant',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQ5TBA1k8g0ifbgFGYE6Mj0S4pULsR-f0OrPPolUXlfg8WfGVfhmN-ZUrJtiRM3xpbVeYeg-hmbpIXRCPZNDr7fQ21wHXKwnxSx5DpBcjpdf6Q7CrCn6bcBRqw3OK3mWwDbwQsQki2kJTPM3_1UK2xcGoikLDt3DxU9BsWaX_iLp-wSLd2qpmau4lw_9DWB7hWw1Jcjd5LBld6M5qDOgz4_4YiCEJidhJ4LAqehRD_6mZZ0Pu8--W7HyYd248nyjsvzEtjzu827k',
    time: '2 days ago',
    subject: 'Regarding your recent lab results...',
    preview: 'I have reviewed your recent blood work results, and I would like to discuss them with you. Overall, things are looking good, but there are a couple of markers we should monitor...',
  },
  {
    name: 'Appointment Reminder',
    time: '4 days ago',
    subject: 'Your appointment is confirmed.',
    preview: 'This is a reminder for your upcoming annual physical exam with Dr. Evelyn Reed on October 28th at 10:30 AM. Please arrive 15 minutes early to complete any necessary paperwork.',
  },
  {
    name: 'Dr. Ian Malcolm',
    time: '5 days ago',
    subject: 'Follow-up on your medication',
    preview: 'Hi Maria, I am just checking in to see how you are feeling on the new dosage of Lisinopril. Please let me know if you are experiencing any side effects. We can schedule a brief call if needed.',
  },
];

const PatientMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-[#111c22]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border-r border-gray-200 dark:border-gray-700/50 md:col-span-1">
          <div className="border-b border-gray-200 p-4 dark:border-gray-700/50">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Inbox</h2>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary dark:bg-primary/20">12 Total</span>
            </div>
          </div>
          <div className="h-[calc(100vh-210px)] overflow-y-auto">
            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700/50">
              {messages.map((message) => (
                <div
                  key={message.name}
                  className={`cursor-pointer p-4 ${selectedMessage.name === message.name ? 'bg-gray-50 dark:bg-gray-800/50' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                  onClick={() => setSelectedMessage(message)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900 dark:text-white">{message.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{message.time}</p>
                  </div>
                  <p className="text-sm font-semibold text-primary dark:text-primary/90">{message.subject}</p>
                  <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">{message.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col p-6">
            <div className="flex items-center gap-4 border-b border-gray-200 pb-4 dark:border-gray-700/50">
              <div
                className="h-12 w-12 rounded-full bg-gray-200 bg-cover bg-center dark:bg-gray-700"
                style={{ backgroundImage: `url("${selectedMessage.avatar}")` }}
              ></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedMessage.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedMessage.name.startsWith('Dr.') ? 'Family Medicine' : 'System Message'}</p>
              </div>
            </div>
            <div className="h-[calc(100vh-320px)] space-y-6 overflow-y-auto py-6">
              <div className="flex flex-col items-start gap-2">
                <div className="max-w-xl rounded-xl rounded-tl-none bg-gray-100 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hi Maria, I have reviewed your recent blood work results, and I would like to discuss them with you. Overall, things are looking good, but there are a couple of markers we should monitor. Your cholesterol levels are slightly elevated. I'd recommend we focus on dietary adjustments for the next three months and then re-test. Please find the detailed results attached.
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">2 days ago, 11:45 AM</span>
              </div>
              <div className="flex flex-col items-end self-end gap-2">
                <div className="max-w-xl rounded-xl rounded-tr-none bg-primary/10 p-4 text-primary-dark dark:bg-primary/20">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Thank you, Dr. Grant. I've received the results. I will schedule a follow-up appointment to discuss the dietary plan. I appreciate you looking out for me.
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">1 day ago, 3:20 PM</span>
              </div>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700/50">
              <div className="relative">
                <textarea
                  className="form-textarea w-full rounded-lg border-gray-300 bg-gray-50 p-3 pr-24 text-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800/50"
                  placeholder="Type your message..."
                  rows={3}
                ></textarea>
                <button className="absolute bottom-2 right-2 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-primary/90">
                  Reply
                  <span className="material-symbols-outlined text-base">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientMessages;
