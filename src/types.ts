export interface Tour {
  id: string;
  title: string;
  destination: string;
  category: 'international' | 'domestic' | 'incoming';
  price: string;
  duration: string;
  image: string;
  rating: number;
  tags: string[];
  description: string;
  highlights: string[];
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  destination: string;
  date: string;
  durationDays: number;
  guestsCount: number;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface FlightRequest {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passengerCount: number;
  ticketClass: 'economy' | 'business';
  tripType: 'round' | 'one-way';
  fullName: string;
  phone: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  tourName: string;
  text: string;
  rating: number;
  date: string;
}
