import React from "react";
import styles from "./styles.module.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ResponsiveModal = () => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{ modal: styles.modalStyles }}
        showCloseIcon={false}
      >
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.youtube.com/embed/JJFy06nGWUw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default ResponsiveModal;
