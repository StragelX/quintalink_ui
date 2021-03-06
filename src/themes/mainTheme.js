import { createTheme } from "@material-ui/core/styles";
import { grey } from "@mui/material/colors";

const sidebarWidth = "56px";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50",
    },

    white: {
      main: "#fff",
    },

    black: {
      main: "#000",
    },

    black_038: {
      main: "rgba(0, 0, 0, 0.38)",
    },

    black_078: {
      main: "rgba(0, 0, 0, 0.87)",
    },

    black_06: {
      main: "rgba(0, 0, 0, 0.6)",
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
    MuiChip: {
      styleOverrides: {
        icon: {
          color: "rgba(0, 0, 0, 0.54)",
        },

        label: {
          paddingLeft: 5,
          paddingRight: 0,
        },

        iconSmall: {
          marginLeft: 0,
        },
      },
    },

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

    MuiTabs: {
      styleOverrides: {
        scrollableY: {
          "& .MuiTabs-indicator": {
            display: "none",
          },

          "& .MuiTabs-flexContainerVertical": {
            gridGap: 10,

            "& .MuiButtonBase-root": {
              width: 175,
              height: 54,
              minHeight: 54,
              paddingLeft: 24,
              justifyContent: "flex-start",
              textTransform: "capitalize",
              color: "rgba(0, 0, 0, 0.87)",

              "& .MuiSvgIcon-root": {
                color: "rgba(0, 0, 0, 0.54);",
                marginRight: 16,
              },

              "&.Mui-selected": {
                backgroundColor: "#fff",
                borderRadius: "10px 0 0 10px",
                color: "#3B873E",

                "& .MuiSvgIcon-root": {
                  color: "#4CAF50",
                },
              },
            },
          },
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
