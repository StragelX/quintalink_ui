import { styled } from "@mui/material/styles";
import { Divider, Typography } from "@mui/material";
import * as React from "react";
import CallDrop from "../../../DropDowns/CallDrop";

const CTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.black_06.main,
}));

const CDivider = styled(Divider)(({ theme }) => ({
  width: 2,
  height: theme.spacing(2.75),
  alignSelf: "center",
  backgroundColor: "#C4C4C4",
}));

export default function HeadingSolicitor(props) {
  return (
    <div className="flex items-center gap-3">
      <CTypography variant="subtitle2" component={"p"}>
        Solicitor:
      </CTypography>

      <CallDrop variant={"file_solicitor"} />

      <CDivider />

      <CTypography variant="subtitle2" component={"p"}>
        Clerk (s):
      </CTypography>

      <CallDrop variant={"file_clerks"} />
    </div>
  );
}
