import React, { useState } from "react";
import { Div, Button, Modal, Icon, Text } from "atomize";

const list = [
    "Ensure your privacy: Keep your journal materials in a safe place which in this case, it is. Trust us, we do not have your journal contents.",
    "Return to what you have written: Save everything you write, when appropriate, and review it often. The process of going back to what you have written can not only spark inspiration for future writing, but can offer perspective on how far you have come.",
    "Time yourself: Using timed writing exercises can help you avoid writer’s block and help you tap into relevant unconscious material.",
    "Write freely: Hush your inner critic and ignore the urge to edit your work. Therapeutic journal writing is not meant to be pretty or grammatically correct; it is meant to be real.",
    "Be honest with yourself: Honor your thoughts, feelings, and experiences with the authenticity they deserve. More work gets accomplished when you are your genuine self in your writing.",
];

const TipsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md" maxW="48rem">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text
          textWeight="500"
          textSize="title"
          fontFamily="secondary"
          textColor="medium"
      >
          Tips for Therapeutic Journal Writing
      </Text>
      <Div d="flex" m={{ b: "2rem" }}>
        <ul>
          {list.map(text => {
              return (
                  <li>
                      <Text
                          tag="h5"
                          textWeight="400"
                          textSize="subheader"
                          fontFamily="secondary"
                          textColor="medium"
                          m={{ b: "0.5rem", r: "2rem" }}
                      >
                          {text}
                      </Text>
                  </li>
              )
          })}
        </ul>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button onClick={onClose} bg="info700">
          Close
        </Button>
      </Div>
    </Modal>
  );
};

export default TipsModal;
