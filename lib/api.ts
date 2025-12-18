const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async signup(data: { name: string; email: string; password: string; phone?: string }) {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async logout() {
    return this.request('/auth/logout', { method: 'POST' });
  }

  // User endpoints
  async getMe() {
    return this.request('/users/me');
  }

  async getUsers() {
    return this.request('/users');
  }

  // Products endpoints
  async getProducts() {
    return this.request('/products');
  }

  async createProduct(data: any) {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Loans endpoints
  async applyLoan(data: { productId: string; amount: number }) {
    return this.request('/loans/apply', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getMyLoans() {
    return this.request('/loans/my');
  }

  async getAllLoans() {
    return this.request('/loans/all');
  }

  // Eligibility endpoints
  async checkEligibility(data: { income: number; age: number }) {
    return this.request('/eligibility/check', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Dashboard endpoints
  async getDashboardStats() {
    return this.request('/dashboard/stats');
  }
}

export const api = new ApiClient(API_BASE_URL);