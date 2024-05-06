import { Button, Modal, Select } from "flowbite-react";
import { useState } from "react";

function PrivacyPolicy() {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");

  return (
    <>
      <div className="flex flex-wrap">
        <Button className="text-gray-400 hover:text-white" onClick={() => setOpenModal(true)}>
          Privacy Policy
        </Button>
      </div>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
        // className="w-2/3 h-4/5 rounded-lg flex items-center justify-center"
        className="w-2/3 h-2/3 mx-auto my-auto rounded-lg flex flex-col justify-center items-center z-50"
      >
        <div className="flex flex-col items-center bg-gray-800 px-5 justift-text rounded-lg">
          <div className="flex justify-end w-full">
          </div>
          <div className="text-3xl font-bold mb-4">
            Privacy Policy
            <div className="absolute top-0 right-0">
              <button className="text-white text-lg" onClick={() => setOpenModal(false)}>
                <img src="close.png" alt="X" className="w-12 pt-2 pr-2" />
              </button>
            </div>
          </div>
          <img src="mainLogo.png" alt="logo" className="h-40 " />
          <p className="text-base leading-relaxed text-white dark:text-gray-400">
            <br/><strong>Last Updated: 01-05-2024</strong>
            <br />
            <br />
            Welcome to Code Connect! This Privacy Policy outlines how we
            handle your personal information on our collaborative coding
            platform and associated services . By using Code Connect, you
            agree to the terms outlined in this Privacy Policy.
            <br />
            <ol>
              <li>
                <strong>1. Information We Collect</strong>
                <ul>
                  <li>
                    <strong>a Account Information : </strong>
                    When you create a Code Connect account, we collect and
                    securely store your username, email address, and password.
                  </li>
                  <li>
                    <strong>b. Coding Activity Data : </strong>
                    We collect data related to your coding activities,
                    including the languages you use (c++, Java, Python,
                    JavaScript), code snippets, and collaborative sessions, to
                    enhance your coding experience.
                  </li>
                  <li>
                    <strong>c. Communication Data : </strong>
                    Information from your communications with other users,
                    mentors, or support teams through our messaging or chat
                    features may be collected.
                  </li>
                  <li>
                    <strong>d. Usage Information : </strong>
                    We gather information about your interactions with our
                    Services, such as the pages you visit, the features you
                    use, and the duration of your sessions.
                  </li>
                </ul>
              </li>
              <li>
                <strong>2. How We Use Your Information</strong>
                <ul>
                  <li>
                    <strong>a. Collaborative Coding : </strong>
                    We use your information to facilitate collaborative coding
                    sessions, track coding progress, and provide personalized
                    learning experiences on Code Connect.
                  </li>
                  <li>
                    <strong>b. Communication : </strong>
                    Your information is used for communication purposes,
                    including notifications about coding sessions, updates,
                    and support.
                  </li>
                  <li>
                    <strong>c. Analytics and Improvements : </strong>
                    We leverage data for analytics to understand user
                    behavior, improve our Services, and enhance the overall
                    user experience.
                  </li>
                </ul>
              </li>
              <li>
                <strong>3. Information Sharing</strong>
                <p>
                  We do not sell, trade, or transfer your personal information
                  to third parties without your consent, except as described
                  in this Privacy Policy or when required by law.
                </p>
              </li>
              <li>
                <strong>4. Security</strong>
                <p>
                  We employ reasonable measures to protect your information
                  from unauthorized access, disclosure, alteration, and
                  destruction.
                </p>
              </li>
              <li>
                <strong>5. Changes to Our Privacy Policy</strong>
                <p>
                  We may update our Privacy Policy to reflect changes in our
                  practices. Any updates will be posted on this page, and the
                  date of the last update will be indicated at the top.
                </p>
              </li>
              <li>
                <strong>6. Contact Us</strong>
                <p>
                  If you have any questions about our Privacy Policy, please
                  contact us at{" "}
                  <a href="mailto:codedual5@gmail.com">codedual5@gmail.com</a>
                  .
                </p>
              </li>
            </ol>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default PrivacyPolicy;
