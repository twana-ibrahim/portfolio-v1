"use client";

import { useEffect, useState } from "react";

const PWAModal = () => {
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [prompt, setPrompt] = useState<any>(null);

  useEffect(() => {
    const isInstallModalShown = JSON.parse(
      localStorage.getItem("isInstallModalShown") || "false"
    );

    if (isInstalled || isInstallModalShown) {
      const handleInstalled = () => {
        setIsInstalled(true);
        setPrompt(null);
      };

      window.addEventListener("appinstalled", handleInstalled);

      return () => window.removeEventListener("appinstalled", handleInstalled);
    } else {
      const handleBeforeInstallPrompt = (e: any) => {
        e.preventDefault();
        setPrompt(e);
        setShowInstallModal(true);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      return () =>
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setShowInstallModal(false);

    localStorage.setItem("isInstallModalShown", "true");
  };

  const handleInstall = () => {
    if (prompt) {
      handleClose();
      prompt.prompt();
      setPrompt(null);
    }
  };

  return (
    showInstallModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-ternary w-96 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold my-2 text-primary">
            Install the App
          </h2>

          <p className="text-sm my-2 text-primary">
            Click the button below to install the app on your device.
          </p>

          <div className="flex justify-end gap-2">
            <button
              onClick={handleClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
            >
              Close
            </button>
            <button
              onClick={handleInstall}
              className="bg-brand hover:bg-brand/85 text-white px-4 py-2 rounded-md"
            >
              Install
            </button>
          </div>
        </div>
        <div
          role="presentation"
          onClick={handleClose}
          className={`fixed inset-0 bg-gray-900 opacity-80 -z-10 ${
            showInstallModal ? "backdrop-blur" : ""
          }`}
        />
      </div>
    )
  );
};
export default PWAModal;
