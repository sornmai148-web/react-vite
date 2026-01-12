/* eslint-disable @typescript-eslint/no-explicit-any */
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface Options {
  method?: HttpMethod;
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  isFormData?: boolean;
}

/**
 * Note : Nextjs by default server fetching
 * Used for server fetching data
 */
export async function fetchApi<T = any>(
  path: string,
  options: Options = {}
): Promise<T | null> {
  try {
    const basePath = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const response = await fetch(`${basePath}${path}`, {
      method: options.method || "POST",
      body: JSON.stringify(options?.body as any),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    if (!response.ok) throw new Error(response?.statusText);
    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof Error) console.log(`请求失败 : ${error.message}`);
    return null;
  }
}
