import { Divider, Stack, styled, Typography } from "@mui/material";
import * as React from "react";
import FlexContainer from "../../../UiElements/FlexContainer";
import HeadingSolicitor from "./HeadingSolicitor";
import PurchaseButtton from "./PurchaseButtton";

const CTitile = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
}));

const CPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
}));

const CDivider = styled(Divider)(({ theme }) => ({
  width: 2,
  height: theme.spacing(2.75),
  alignSelf: "center",
  backgroundColor: "#000",
}));

export default function HeadignTop(props) {
  return (
    <FlexContainer>
      <Stack direction="row" spacing={1.25}>
        <PurchaseButtton />

        <CTitile variant="h6" component={"h1"}>
          ID 8045 04/07/2021 - Erik Edwards
        </CTitile>

        <CDivider orientation="vertical" flexItem variant="middle" />

        <CPrice variant="h6" component={"h2"} color="primary">
          800 000
        </CPrice>
      </Stack>

      <HeadingSolicitor />
    </FlexContainer>
  );
}
