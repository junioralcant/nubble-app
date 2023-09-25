export type ToastProps = {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
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
