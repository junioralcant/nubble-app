import {useState} from 'react';

export type MutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
};

/**
 * @deprecated use useMutation from @tanstack/react-query
 */
export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();

  async function mutate(variable: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variable);
      if (options?.onSuccess) {
        options?.onSuccess(data);
      }
    } catch (error) {
      setError(true);
      if (options?.onError) {
        options?.onError(options?.errorMessage || '');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
