import { createTheme } from "@material-ui/core/styles";

const sidebarTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          gridGap: 20,
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          maxWidth: "100%",
          padding: 16,
          display: "block",

          "&:hover": {
            background: "rgba(0, 0, 0, 0.38)",
          },
        },
      },
    },
  },
});

export default sidebarTheme;
