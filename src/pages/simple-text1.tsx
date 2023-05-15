import { FunctionComponent } from "react";
import styles from "./simple-text1.module.css";
const SimpleText1: FunctionComponent = () => {
  return (
    <div className={styles.simpleText1}>
      <div className={styles.topLeftAlign}>top-left-align</div>
      <div className={styles.middleLeftAlign}>middle-left-align</div>
      <div className={styles.bottomLeftAlign}>bottom-left-align</div>
      <div className={styles.topRightAlign}>top-right-align</div>
      <div className={styles.middleRightAlign}>middle-right-align</div>
      <div className={styles.bottomRightAlign}>bottom-right-align</div>
      <div className={styles.topCenterAlign}>top-center-align</div>
      <div className={styles.middleCenterAlign}>middle-center-align</div>
      <div className={styles.bottomCenterAlign}>bottom-center-align</div>
    </div>
  );
};

export default SimpleText1;
