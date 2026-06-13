export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'client';
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  clientId: string;
  origin: string;
  destination: string;
  status: 'pending' | 'in-transit' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
  items: ShipmentItem[];
}

export interface ShipmentItem {
  id: string;
  description: string;
  quantity: number;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

export interface TrackingPasscode {
  passcode: string;
  clientId: string;
  createdAt: Date;
  expiresAt: Date;
}
