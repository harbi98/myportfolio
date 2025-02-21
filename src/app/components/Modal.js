"use client";
import { useState } from "react";

export default function Modal({ title, children, buttonText = "Learn More" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="button"
      >
        {buttonText}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96 shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-4xl font-semibold">{title}</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                ✖
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
