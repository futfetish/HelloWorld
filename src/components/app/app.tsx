import { FC } from "react";
import * as Styles from "@/components/app/app.module.scss";

export const App: FC = () => {
  return (
    <div className={Styles.app}>
      <p>Hello Wxrld!</p>
    </div>
  );
};
