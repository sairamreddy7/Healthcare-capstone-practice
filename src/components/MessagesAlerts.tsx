// src/components/MessagesAlerts.tsx
const messages = [
  {
    type: 'critical',
    title: 'CRITICAL LAB RESULT',
    message: 'John Smith - Potassium level is high. Please review immediately.',
    icon: 'error',
  },
  {
    type: 'message',
    title: 'From: Noah Williams',
    message: 'Quick question about my new prescription...',
    icon: 'chat',
  },
  {
    type: 'message',
    title: 'From: Dr. Isabella Brown',
    message: 'Could you take a look at the ECG for...',
    icon: 'chat',
  },
];

const MessagesAlerts = () => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Messages & Alerts</h2>
      <div className="space-y-4">
        {messages.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 items-start p-3 rounded-lg ${
              item.type === 'critical' ? 'bg-danger/10' : 'hover:bg-primary/5'
            }`}
          >
            <span
              className={`material-symbols-outlined mt-1 ${
                item.type === 'critical' ? 'text-danger' : 'text-text-secondary-light dark:text-text-secondary-dark'
              }`}
            >
              {item.icon}
            </span>
            <div>
              <p
                className={`font-semibold text-sm ${
                  item.type === 'critical' ? 'text-danger' : ''
                }`}
              >
                {item.title}
              </p>
              <p className="text-sm">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessagesAlerts;
