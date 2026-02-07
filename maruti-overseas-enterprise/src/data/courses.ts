export interface Course {
  id: string;
  title: string;
  type: 'Trial' | 'Foreign';
  link?: string;
  description?: string;
}

export const trialCourses: Course[] = [
  { id: 'celpip-trial', title: 'CELPIP - Trial', type: 'Trial' },
  { id: 'french-a2-trial', title: 'French A2 - Trial', type: 'Trial' },
  { id: 'digital-sat-trial', title: 'Digital SAT - Trial', type: 'Trial' },
  { id: 'french-b1-trial', title: 'French B1 - Trial', type: 'Trial' },
  { id: 'duolingo-trial', title: 'Duolingo English Test - Trial', type: 'Trial' },
  { id: 'french-b1-b2-tef-trial', title: 'French B1, B2 & TEF - Trial', type: 'Trial' },
  { id: 'french-basic-a1-trial', title: 'French Basic & A1 - Trial', type: 'Trial' },
  { id: 'french-a1-trial', title: 'French A1 - Trial', type: 'Trial' },
  { id: 'french-b2-trial', title: 'French B2 - Trial', type: 'Trial' },
  { id: 'french-basic-tef-trial', title: 'French Basic to TEF - Trial', type: 'Trial' },
  { id: 'german-a2-trial', title: 'German A2 - Trial', type: 'Trial' },
  { id: 'german-basic-a1-trial', title: 'German Basic & A1 - Trial', type: 'Trial' },
  { id: 'german-basic-b1-trial', title: 'German Basic to B1 - Trial', type: 'Trial' },
  { id: 'german-basic-a1-a2-trial', title: 'German Basic, A1 & A2 - Trial', type: 'Trial' },
  { id: 'ielts-academic-champion-trial', title: 'IELTS Academic Champion - Trial', type: 'Trial' },
  { id: 'ielts-general-champion-trial', title: 'IELTS General Champion - Trial', type: 'Trial' },
  { id: 'gmat-trial', title: 'GMAT - Trial', type: 'Trial' },
  { id: 'ielts-academic-self-prep-trial', title: 'IELTS Academic Self Prep - Trial', type: 'Trial' },
  { id: 'ielts-general-self-prep-trial', title: 'IELTS General Self Prep - Trial', type: 'Trial' },
  { id: 'pte-academic-trial', title: 'PTE Academic - Trial', type: 'Trial' },
  { id: 'pte-core-trial', title: 'PTE Core - Trial', type: 'Trial' },
  { id: 'skill-catalyst-trial', title: 'Skill Catalyst - Trial', type: 'Trial' },
  { id: 'spoken-english-champion-trial', title: 'Spoken English Champion - Trial', type: 'Trial' },
];

export const foreignCourses: Course[] = [
  { id: 'computer-science', title: 'Computer Science', type: 'Foreign', link: '/courses/computer-science', description: 'AI, Software Engineering, Data Science' },
  { id: 'business', title: 'Business', type: 'Foreign', link: '/courses/business', description: 'MBA, Finance, Marketing, Management' },
  { id: 'engineering', title: 'Engineering', type: 'Foreign', link: '/courses/engineering', description: 'Mechanical, Civil, Electrical, Robotics' },
  { id: 'medicine', title: 'Medicine', type: 'Foreign', link: '/courses/medicine', description: 'MBBS, Nursing, Public Health, Pharmacy' },
  { id: 'arts-design', title: 'Arts & Design', type: 'Foreign', link: '/courses/arts-design', description: 'Fashion, Graphic Design, Animation' },
  { id: 'science', title: 'Science', type: 'Foreign', link: '/courses/science', description: 'Biotechnology, Physics, Chemistry' },
  { id: 'law', title: 'Law', type: 'Foreign', link: '/courses/law', description: 'International Law, Corporate Law' },
  { id: 'hospitality', title: 'Hospitality', type: 'Foreign', link: '/courses/hospitality', description: 'Hotel Management, Tourism, Culinary Arts' },
];
