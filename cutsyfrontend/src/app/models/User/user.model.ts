export class User {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  password?: string;
  role?: 'client' | 'hairdresser' | 'admin';
}
