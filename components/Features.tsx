import React from 'react';
import {
  Support as SupportIcon,
  AccountTree as WorkflowIcon,
  History as RetentionIcon,
  Lightbulb as InsightsIcon,
  Diversity3 as DiversityIcon,
  Hotel as AccommodationsIcon,
} from '@mui/icons-material';

const Features: React.FC = () => {
  const featureData = [
    {
      title: 'Neurodiversity Support',
      description: 'Provide tailored tools and resources to support neurodivergent employees in the workplace.',
      icon: <SupportIcon className="text-4xl" />,
    },
    {
      title: 'Inclusive Workflows',
      description: 'Optimize productivity and workflows for neurodivergent employees with personalized features.',
      icon: <WorkflowIcon className="text-4xl" />,
    },
    {
      title: 'Employee Retention',
      description: 'Reduce absenteeism and turnover by addressing neurodiversity in your DEI strategy.',
      icon: <RetentionIcon className="text-4xl" />,
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into how neurodivergent employees perform and contribute to your team.',
      icon: <InsightsIcon className="text-4xl" />,
    },
    {
      title: 'Customized Accommodations',
      description: 'Offer custom accommodations to empower neurodivergent individuals to succeed in their roles.',
      icon: <AccommodationsIcon className="text-4xl" />,
    },
    {
      title: 'Workplace Inclusion',
      description: 'Foster a truly inclusive environment by making neurodiversity part of your core DEI strategy.',
      icon: <DiversityIcon className="text-4xl" />,
    },
  ];
  

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-900 text-center">Features</h1>
      <div className="mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featureData.map((feature, index) => (
        <div key={index} className="bg-white text-blue-900 p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-4">{feature.icon}</div>
          <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
