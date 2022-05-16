import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import FlexContainer from "./UiElements/FlexContainer";
import FilesViewSelector from "./UiElements/FilesViewSelector";
import DateSelector from "./UiElements/DateSelector";
import RoundedPaper from "./UiElements/RoundedPaper";
import RowTableHeader from "./Files/RowTableHeader";
import CustomTable from "./UiElements/CustomTable/CustomTable";
import TableDateSelector from "./Files/TableDateSelector";
import WeekTable from "./Files/WeekTable";
import MonthTable from "./Files/MonthTable";

const ContentBox = styled("div")(({ theme }) => ({
  minHeight: `calc(100vh - 64px)`,
  backgroundColor: theme.palette.grey_100.main,
  paddingLeft: theme.mixins.sidebar.minWidth,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(6),
}));

export default function Content() {
  return (
    <ContentBox>
      <Container>
        <RoundedPaper className="px-8 py-11">
          <FlexContainer className="mb-8"></FlexContainer>
        </RoundedPaper>

        <FlexContainer className="mt-5">
          <FilesViewSelector />

          <TableDateSelector />
        </FlexContainer>

        <FlexContainer className="mt-5">
          <RoundedPaper className="p-6">
            <RowTableHeader />

            <MonthTable />
          </RoundedPaper>
        </FlexContainer>

        <FlexContainer className="mt-5">
          <FilesViewSelector />

          <TableDateSelector />
        </FlexContainer>

        <FlexContainer className="mt-5">
          <RoundedPaper className="p-6">
            <RowTableHeader />

            <WeekTable />
          </RoundedPaper>
        </FlexContainer>

        <FlexContainer className="mt-5">
          <FilesViewSelector />

          <DateSelector />
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
