import React, { useState } from "react";
import Modal from "react-modal";

function EditProfileModal({ isOpen, closeModal }) {
  //   const [modalIsOpen, setModalIsOpen] = useState(true);

  //   const closeModal = () => {
  //     setModalIsOpen(false);
  //   };

  //   const openModal = () => {
  //     setModalIsOpen(true);
  //   };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile Modal"
      className="dispaly-flex justify-center item-center  mx-auto block max-w-md rounded-lg bg-gray-900 p-6 shadow-4 dark:bg-surface-dark"
    >
      <div className="w-full max-w-lg mx-auto mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="profileLink"
            >
              Profile Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profilePhoto"
              type="text"
              placeholder="Enter profile photo drive link"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="role"
            >
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              placeholder="Enter role"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="about"
            >
              About
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="about"
              placeholder="Enter about"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditProfileModal;
