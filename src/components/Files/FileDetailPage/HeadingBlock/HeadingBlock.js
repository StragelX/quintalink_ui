import * as React from "react";
import RoundedPaper from "../../../UiElements/RoundedPaper";
import GreenDivider from "./GreenDivider";
import HeadignTop from "./HeadignTop";
import HeadingBottom from "./HeadingBottom";


export default function HeadingBlock(props) {
  return (
    <div>
      <RoundedPaper className="px-8 py-11">
        <HeadignTop />

        <GreenDivider />

        <HeadingBottom />
      </RoundedPaper>
    </div>
  );
}
