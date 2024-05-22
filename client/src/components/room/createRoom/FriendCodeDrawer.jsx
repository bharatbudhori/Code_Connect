import React, { useContext, useState } from "react";
import FriendCodeEditor from "../FriendCodeEditor";
import Drawer from "../Drawer";
import GlobalContext from "../../../context/GlobalContext";
import ShowFriendCodeButton from "../ShowFriendCodeButton";

function FriendCodeDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { friendLanguage, friendText, membersList } = useContext(GlobalContext);

  return (
    <>
      <ShowFriendCodeButton isOpen={isOpen} setIsOpen={setIsOpen} />

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} language={friendLanguage}>
        <FriendCodeEditor
          friendText={friendText}
          language={friendLanguage}
          membersList={membersList}
        />
      </Drawer>
    </>
  );
}

export default FriendCodeDrawer;
