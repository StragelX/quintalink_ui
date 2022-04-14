import * as React from "react";
import FlexContainer from "./../UiElements/FlexContainer";
import Search from "./../Header/Search";
import AvatarGroupWrap from "./../UiElements/AvatarGroupWrap";
import TableContentSwitch from "./../UiElements/TableContentSwitch";
import FilseTypeSelect from "./../UiElements/FilseTypeSelect";

function RowTableHeader(props) {
  return (
    <FlexContainer className={props.className + " mb-7"}>
      <div className="flex items-center gap-4">
        <Search />

        <FilseTypeSelect />

        <AvatarGroupWrap />
      </div>

      <TableContentSwitch />
    </FlexContainer>
  );
}

export default RowTableHeader;
