import * as React from "react";
import FlexContainer from "./../UiElements/FlexContainer";
import Search from "./../Header/Search";
import TableContentSwitch from "./../UiElements/TableContentSwitch";
import FilesTypeSelect from "./../UiElements/FilesTypeSelect";
import CallDrop from "../DropDowns/CallDrop";

export default function RowTableHeader(props) {
  return (
    <FlexContainer className={props.className + " mb-7"}>
      <div className="flex items-center gap-4">
        <Search />

        <FilesTypeSelect />

        <CallDrop variant={"avatar"} max="4"></CallDrop>
      </div>

      <TableContentSwitch />
    </FlexContainer>
  );
}
