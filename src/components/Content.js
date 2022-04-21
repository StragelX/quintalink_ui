import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import FlexContainer from "./UiElements/FlexContainer";
import FilesViewSelector from "./UiElements/FilesViewSelector";
import DateSelector from "./UiElements/DateSelector";
import RoundedPaper from "./UiElements/RoundedPaper";
import RowTableHeader from "./Files/RowTableHeader";
import CustomTable from "./UiElements/CustomTable";

const ContentBox = styled("div")(({ theme }) => ({
  minHeight: `calc(100vh - 64px)`,
  backgroundColor: theme.palette.grey_100.main,
  paddingLeft: theme.mixins.sidebar.minWidth,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(6),
}));

function Content() {
  return (
    <ContentBox>
      <Container>
        <FlexContainer>
          <FilesViewSelector></FilesViewSelector>

          <DateSelector></DateSelector>
        </FlexContainer>

        <FlexContainer className="mt-5">
          <RoundedPaper className="p-6">
            <RowTableHeader />

            <CustomTable />
          </RoundedPaper>
        </FlexContainer>
      </Container>
    </ContentBox>
  );
}

export default Content;