import React, {PropsWithChildren, createContext, useState} from 'react';

import {ToastProps, ToastService} from '../toast.types';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: ToastProps) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{toast, showToast, hideToast}}>
      {children}
    </ToastContext.Provider>
  );
}
