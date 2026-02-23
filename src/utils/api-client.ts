import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}

/**
 * API Client utility for making HTTP requests
 */
export class ApiClient {
  private client: AxiosInstance;

  constructor(config: ApiClientConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 5000,
      headers: config.headers || {},
    });
  }

  async get<T = unknown>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> {
    return this.client.get(url, { params });
  }

  async post<T = unknown>(url: string, data?: unknown): Promise<AxiosResponse<T>> {
    return this.client.post(url, data);
  }

  async put<T = unknown>(url: string, data?: unknown): Promise<AxiosResponse<T>> {
    return this.client.put(url, data);
  }

  async delete<T = unknown>(url: string): Promise<AxiosResponse<T>> {
    return this.client.delete(url);
  }

  async patch<T = unknown>(url: string, data?: unknown): Promise<AxiosResponse<T>> {
    return this.client.patch(url, data);
  }
}

export default ApiClient;
