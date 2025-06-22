import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const openModal = (modalType) => {
    switch (modalType) {
      case "contact":
        setShowContactModal(true);
        break;
      case "feature":
        setShowFeatureModal(true);
        break;
      case "waitlist":
        setShowWaitlistModal(true);
        break;
    }
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowContactModal(false);
    setShowFeatureModal(false);
    setShowWaitlistModal(false);
    document.body.style.overflow = "unset";
  };

  const value = {
    showContactModal,
    showFeatureModal,
    showWaitlistModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
