import React, { useState } from "react";
import Modal from "../Modal";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Textarea = (child) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <label
          for={child.textName}
          class="form-label inline-block mb-2 text-gray-700"
        >
          {child.textTitle}
        </label>
        <textarea
          class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id={child.textName}
          rows="3"
          placeholder="Message"
        ></textarea>
        <button
          id="ok-btn"
          class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => setShowModal(true)}
        >
          Send
        </button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          TESTINGTTTTTT
        </Modal>
      </div>
    </div>
  );
};

export default Textarea;