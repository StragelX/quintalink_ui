import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import FlexContainer from "./UiElements/FlexContainer";
import FilesViewSelector from "./UiElements/FilesViewSelector";
import DateSelector from "./UiElements/DateSelector";
import RoundedPaper from "./UiElements/RoundedPaper";
import RowTableHeader from "./Files/AllFilesPage/RowTableHeader";
import CustomTable from "./UiElements/CustomTable/CustomTable";
import MonthTable from "./Files/AllFilesPage/MonthTable";
import HeadingBlock from "./Files/FileDetailPage/HeadingBlock/HeadingBlock";
import VerticalTabs from "./Files/FileDetailPage/VerticalTabs";
import WeekTable from "./Files/AllFilesPage/WeekTable";
import TableDateSelector from "./Files/AllFilesPage/TableDateSelector";

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
        <HeadingBlock />

        <VerticalTabs />

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
