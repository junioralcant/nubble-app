export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'success' | 'error';

export type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  action?: {
    title: string;
    onPress: () => void;
  };
};

export type ToastService = {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
};
