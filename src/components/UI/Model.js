import React, { Fragment } from "react";
import reactDom from "react-dom";
import classes from "./Model.module.css";
const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose}></div>
);
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default function Model(props) {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {reactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
}
