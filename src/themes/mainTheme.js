import { createTheme } from "@material-ui/core/styles";
import { grey } from "@mui/material/colors";

const sidebarWidth = "56px";

const mainTheme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },

  palette: {
    primary: {
      main: "#4CAF50",
    },

    white: {
      main: "#fff",
    },

    black_078: {
      main: "rgba(0, 0, 0, 0.87)",
    },

    grey_600: {
      main: grey[600],
    },

    grey_500: {
      main: grey[500],
    },

    grey_300: {
      main: grey[300],
    },

    grey_100: {
      main: grey[100],
    },

    grey_0_6: {
      main: "#666",
    },
  },

  mixins: {
    sidebar: {
      minWidth: sidebarWidth,
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1148px",
        },
      },
    },

    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: "1px solid #E0E0E0",
          color: "#757575",

          "&.Mui-selected, &.Mui-selected:hover, &:hover": {
            transition: "background-color 180ms",
            backgroundColor: "#f1f9f1",
            color: "#4CAF50",
          },

          "&:not(:first-of-type):hover, &:not(:first-of-type), ": {
            marginLeft: "0 !important",
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          marginLeft: sidebarWidth,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "0px 0px 0px 1px #E0E0E0" },
      },
    },

    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          color: "#fff",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#303030",
          width: sidebarWidth,
          paddingTop: 5,
          border: "none",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "14px 10px",
          borderBottom: "none",
          boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
        },

        head: {
          "&:not(:last-child):after": {
            content: "''",
            borderRight: "1px solid #E0E0E0",
            right: "-5px",
            position: "relative",
          },
        },
      },
    },

    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          boxShadow: "none !important",
        },
      },
    },
  },
});

export default mainTheme;
