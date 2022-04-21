import * as React from "react";
import FlexContainer from "./../UiElements/FlexContainer";
import Search from "./../Header/Search";
import AvatarGroupWrap from "./../UiElements/AvatarGroupWrap";
import TableContentSwitch from "./../UiElements/TableContentSwitch";
import FilesTypeSelect from "./../UiElements/FilesTypeSelect";

function RowTableHeader(props) {
  return (
    <FlexContainer className={props.className + " mb-7"}>
      <div className="flex items-center gap-4">
        <Search />

        <FilesTypeSelect />

        <AvatarGroupWrap max={4} />
      </div>

      <TableContentSwitch />
    </FlexContainer>
  );
}

export default RowTableHeader;
