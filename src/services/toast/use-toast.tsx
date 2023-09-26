import {ToastService} from './toast.types';
import {useToastZustand, useToastZustandService} from './use-toast-zustand';

export function useToast(): ToastService['toast'] {
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastZustandService();
}
