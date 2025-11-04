// src/pages/ClinicianMessages.tsx
import { useState } from 'react';

const messages = [
  {
    name: 'Noah Williams',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL_-GG31lKe7Cs7Uo3f5-xv_5mQVTqpScZoc15LzZ4HGw_pyDlHNLu_JYyz262i5t2vEqt475F20R85RVFcwtljiY4abxkZ_8xvrsAu_hXdpEHEueHB4t6wIBb1sWEyyEveP5BIR-uy5ETI47-e0SLkGF0nzqt2Xso0v5Quze5z0zyXqOHhGP3OAhJ1V0a9NSXfO7sXCRflWHIkfUhzqto62_C82yF5kRRbHfvsAhgUi69dF41jyHGAXZGUq5Jq4GIMQsPrg77J8Y',
    time: '10:42 AM',
    preview: 'Quick question about my new prescription...',
    online: true,
  },
  {
    name: 'Dr. Isabella Brown',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwS80hIruixHqVvrruWMYfxpO2-BDLOGTQnyjjaZ8VYra9AmIKne80DlTFfqbNUcQTvwzUAHjtm5SEMtzIa2hiqAGPbPZCS8SPjFYpFUOu7yEJyMKu_0fup2545BreINqDeWFOtowlZORSS_c6gSqKgq8wtP4emDdnC9hf-W_ESlPTALVSHOm6lgiK7Svo_uS9bnE4_LcOrSxiTWqWxxMoHuIbfc0DId9pV9U7Gm2DyayIy46KEhuoTNl6y7KdOD1iR2LuFKKvdb0',
    time: 'Yesterday',
    preview: 'Could you take a look at the ECG for...',
    online: false,
  },
  {
    name: 'Ethan Martinez',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuQZ_otFoWL5AvNX_faXff_-e0LtiFWozc28-49udYukJJKt0SsLMp401R3fT2X6Vb1TYuoWr_5lwKmIMw7h60iS5LnucxCLwtD_2dh4dsLcaBG6r1TEBtL9FrS5fi_xxJwOEEsrhO0eQ4xKZN5P-1wU-aJ5AiyOjHjDliKaGkqzLVcxqYzpiAfdG4uhQoNYIYmgwnBSGDBWpPug011Z4krEY_GqBwJngBj0EfsFmdka1AILlj6fWmXzk20bWd4XAk-ovb4_BRJbw',
    time: '2d ago',
    preview: 'RE: Follow-up on lab results',
    online: false,
    unread: true,
  },
  {
    name: 'Chloe Davis',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-FGbvc5ljLZ2bfYehhnrgF1xoCMkv0tfY-1qW9kUoYS3UJx_lO1cTcWZunBHl89JMEFitFB7L9Tcj2pKewQIeyk14ZUo6NM28r5tAHRvFBORnKmvInbFhHHHQOlvu0CDJsv_CuynLpiUpIpfMd8dD8l8ZfE_N3yJUM94ju7mxMQlPMCUY7GfFomiBy-Elbe2xhf-gGFEtm5Zvtib6W4LnKr6YjQ0GfQ3pAkay1pgQ36qTnCMlzHB-8SRpuLtHMxCgh9EYcmLmq8c',
    time: '3d ago',
    preview: 'Thanks for the consultation today!',
    online: false,
  },
];

const ClinicianMessages = () => {
  const [selectedMessage, setSelectedMessage] = useState(messages[0]);

  return (
    <div className="flex-grow flex border-t border-border-light dark:border-border-dark overflow-hidden">
      <div className="w-full sm:w-1/3 xl:w-1/4 flex flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
        <div className="p-4 border-b border-border-light dark:border-border-dark">
          <label className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
            <input
              className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary focus:ring-opacity-50 h-10 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark pl-10 text-sm"
              placeholder="Search messages..."
              type="search"
            />
          </label>
        </div>
        <div className="flex-grow overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.name}
              className={`flex items-start gap-3 p-4 border-b border-border-light dark:border-border-dark cursor-pointer ${
                selectedMessage.name === message.name ? 'bg-primary/5' : 'hover:bg-primary/5'
              }`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{ backgroundImage: `url("${message.avatar}")` }}
                ></div>
                {message.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-surface-light dark:ring-surface-dark"></span>}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center">
                  <p className={`font-semibold text-sm truncate ${message.unread ? 'text-primary dark:text-white' : ''}`}>{message.name}</p>
                  <p className={`text-xs flex-shrink-0 ${message.unread ? 'font-semibold text-primary dark:text-white' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}>
                    {message.time}
                  </p>
                </div>
                <p className={`text-sm truncate ${message.unread ? 'font-semibold text-primary dark:text-white' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}>
                  {message.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-2/3 xl:w-3/4 flex flex-col bg-background-light dark:bg-background-dark">
        <div className="flex-grow p-6 overflow-y-auto space-y-6">
          <div className="flex items-end gap-3 max-w-lg">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex-shrink-0"
              style={{ backgroundImage: `url("${selectedMessage.avatar}")` }}
            ></div>
            <div>
              <div className="bg-surface-light dark:bg-surface-dark p-3 rounded-lg rounded-bl-none shadow-sm">
                <p className="text-sm">Hi Dr. Reed, I have a quick question about the new prescription you gave me. The pharmacy said my insurance isn't covering it. Is there an alternative we could consider?</p>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">10:42 AM</p>
            </div>
          </div>
          <div className="flex items-end gap-3 max-w-lg ml-auto">
            <div>
              <div className="bg-primary text-white p-3 rounded-lg rounded-br-none shadow-sm">
                <p className="text-sm">Hi Noah, I'm sorry to hear that. Let me look into some alternatives that are usually covered. I've also sent a request to your insurance for prior authorization just in case.</p>
              </div>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1 text-right">10:45 AM</p>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 flex-shrink-0"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9puGqQmQno5xvQ--YCTzlPvsPZyOtCJ5WtskBYs-1glrk5xFIDV3VQ-bc9gj-FDzACB4nM_RJQk0_xk8lapamCWHq51iObWr72itpHJdA32_6TIvilgvnmm-QPzQqcuY4SWoyveNLHVQEgrrNy6dNr0vNtATWsL0z2Eag1prIRpKDGPPDhHhOS8p5RAIKQ3C64s4QBeiXxh2qjqJ1BvlXS_i7VANrZk5dUfMaQqhd74GmWVAq8qqarKIs4DFLQKTIXtzc-k-SlLk")' }}
            ></div>
          </div>
        </div>
        <div className="p-4 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark flex-shrink-0">
          <div className="flex items-center gap-4">
            <textarea
              className="form-textarea flex-1 resize-none bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark rounded-lg focus:border-primary focus:ring-primary focus:ring-opacity-50"
              placeholder="Type a message..."
              rows={1}
            ></textarea>
            <button className="size-10 flex items-center justify-center rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicianMessages;
