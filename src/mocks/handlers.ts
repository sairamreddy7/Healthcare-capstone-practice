// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

const users: any[] = [
  // ... (user data)
];

const patients: any[] = [
  // ... (patient data)
];

const patientDashboardData = {
  appointments: [
    {
      date: 'OCT 28',
      time: '10:30 AM',
      doctor: 'Dr. Evelyn Reed',
      reason: 'Annual Physical Exam',
    },
  ],
  messages: [
    {
      from: 'Dr. Alan Grant',
      preview: 'Regarding your recent lab results...',
    },
  ],
  testResults: [
    {
      name: 'Comprehensive Metabolic Panel',
      status: 'Available',
    },
  ],
  medications: [
    {
      name: 'Lisinopril',
      dosage: '10mg',
    },
    {
      name: 'Metformin',
      dosage: '500mg',
    },
  ],
  billing: {
    balance: '$75.00',
    dueDate: 'Nov 15, 2023',
  },
};

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const { email } = await request.json() as { email: string };
    let role = 'patient';
    if (email === 'admin@healthapp.com') role = 'admin';
    if (email === 'clinician@healthapp.com') role = 'clinician';

    return HttpResponse.json({
      success: true,
      role,
    });
  }),
  http.post('/api/signup', () => {
    return HttpResponse.json({
      success: true,
    });
  }),
  http.get('/api/users', () => {
    return HttpResponse.json(users);
  }),
  http.get('/api/patients', () => {
    return HttpResponse.json(patients);
  }),
  http.get('/api/patient/dashboard', () => {
    return HttpResponse.json(patientDashboardData);
  }),
];
