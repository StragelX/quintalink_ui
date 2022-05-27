import * as React from "react";
import BottomDate from "./BottomDate";
import CallDrop from "../../../DropDowns/CallDrop";
import FlexContainer from "../../../UiElements/FlexContainer";

export default function HeadingBottom(props) {
  return (
    <FlexContainer>
      <CallDrop
        variant={"date-with-label"}
        value={"04/08/2021"}
        label={"Edit Agreement Date"}
      >
        <BottomDate title="Agreement Date" date="04/08/2021" />
      </CallDrop>

      <CallDrop
        variant={"date-with-label"}
        value={"04/012/2022"}
        label={"Edit Requisition Date"}
      >
        <BottomDate
          title="Requisition Date"
          date="04/012/2022"
          type="requisition"
        />
      </CallDrop>

      <CallDrop
        variant={"date-with-label"}
        value={"01/02/2023"}
        label={"Edit Closing Date"}
      >
        <BottomDate title="Closing Date" date="01/02/2023" type="closing" />
      </CallDrop>
    </FlexContainer>
  );
}
