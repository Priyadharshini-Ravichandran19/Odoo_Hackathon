
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  bio?: string;
  profileImage?: string;
}

export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  image: string;
}

export interface ItinerarySection {
  id: string;
  title: string;
  description: string;
  dateRange: string;
  budget: string;
}

export interface Activity {
  day: number;
  description: string;
  expense: number;
}
