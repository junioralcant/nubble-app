import {ToastService} from './toast.types';
import {useToastContext} from './use-toast-context';

export function useToast(): ToastService {
  return useToastContext();
}
