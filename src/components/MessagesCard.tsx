// src/components/MessagesCard.tsx
const MessagesCard = () => {
  return (
    <a className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-700/50 dark:bg-[#111c22] dark:hover:shadow-primary/10" href="#">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Unread Messages</h3>
        </div>
        <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-sm font-semibold text-white">3</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Dr. Alan Grant</p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">Regarding your recent lab results...</p>
        </div>
      </div>
      <p className="text-sm font-medium text-primary hover:underline mt-auto pt-2">Go to Inbox</p>
    </a>
  );
};

export default MessagesCard;
