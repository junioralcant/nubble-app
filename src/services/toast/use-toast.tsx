import {PropsWithChildren, createContext, useContext, useState} from 'react';

type ToastProps = {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  action?: {
    title: string;
    onPress: () => void;
  };
};

type ToastService = {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hiddenToast: () => void;
};

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

export function ToastProvider({children}: PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: ToastProps) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hiddenToast}}>
      {children}
    </ToastContext.Provider>
  );
}
export function useToast(): ToastService {
  const {toast, hiddenToast, showToast} = useContext(ToastContext);

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
