import { createStyles } from '@material-ui/core';

export const FONT_FAMILY_LIGHT = 'NunitoSans Light';
export const FONT_FAMILY_REGULAR = 'NunitoSans Regular';
export const FONT_FAMILY_SEMIBOLD = 'NunitoSans SemiBold';
export const FONT_FAMILY_BOLD = 'NunitoSans Bold';
export const FONT_FAMILY_EXTRABOLD = 'NunitoSans ExtraBold';

export const GRAY_COLOR = '#9EABB5';
export const LIGHT_GRAY_COLOR = '#E8EEF2';
export const MEDIUM_GRAY_COLOR = '#737677';
export const DARK_GRAY_COLOR = '#50595F';
export const EERIE_BLACK_COLOR = '#1D1E1F';
export const TOMATO_COLOR = '#FF404B';
export const LIGHT_TOMATO_COLOR = 'rgba(255,64,75,0.2)';
export const OPAQUE_TOMATO_COLOR = '#fed8da';
export const BLACK_COLOR = '#000000';
export const WHITE_COLOR = '#FFFFFF';
export const DARK_CYAN_COLOR = '#0EA789';

export const HOVER_BUTTON_DIPLOMA_COLOR = 'rgba(16, 120, 135, 0.90)';
export const BUTTON_SHADOW = '0px 4px 8px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.1)';

export const CRITICAL_COLOR = '#E5232E';
export const OPAQUE_CRITICAL_COLOR = 'rgba(229,35,46,0.1)';

export const OPAQUE_WARNING_COLOR = 'rgba(255,145,0,0.2)';

export const OPAQUE_INPUT_INACTIVE_COLOR = 'rgba(158,171,181,0.2)';
export const INPUT_INACTIVE_COLOR = 'rgba(158,171,181,0.05)';

export const BACKGROUND_COLOR = '#F8F8F8';

export const A2S_COLOR = '#1B82FC';
export const LIGHT_A2S_COLOR = 'rgba(27,130,252,0.2)';
export const OPAQUE_A2S_COLOR = 'rgba(27,130,252,0.05)';

export const INFO_COLOR = '#066BFF';
export const OPAQUE_INFO_COLOR = 'rgba(6,107,255,0.05)';

export const DIPLOMA_COLOR = '#107887';
export const LIGHT_DIPLOMA_COLOR = 'rgba(16,120,135,0.2)';
export const OPAQUE_DIPLOMA_COLOR = 'rgba(16,120,135,0.05)';

export const DIPLOMA_VALIDATION_ACTIVE_ACTION = '#F09300';
export const DIPLOMA_VALIDATION_PASSIVE_ACTION = '#066BFF';

export const DIPLOMA_SUCCESS_MAIN_COLOR = DARK_CYAN_COLOR;
const DIPLOMA_ERROR_COLOR = CRITICAL_COLOR;
const DIPLOMA_ERROR_FADED_COLOR = 'rgba(229, 35, 46, 0.9)';
const DIPLOMA_BODY1_FONT_COLOR = MEDIUM_GRAY_COLOR;
const DIPLOMA_BODY2_FONT_COLOR = EERIE_BLACK_COLOR;

export const ITI_COLOR = '#273A67';

const SPACING = 8;

const theme: any = {
  palette: {
    primary: {
      main: DIPLOMA_COLOR,
      light: LIGHT_DIPLOMA_COLOR,
    },
    error: {
      main: DIPLOMA_ERROR_COLOR,
      light: DIPLOMA_ERROR_FADED_COLOR,
    },
    action: {
      disabled: '',
    },
    background: {
      default: WHITE_COLOR,
    },
    success: {
      main: DIPLOMA_SUCCESS_MAIN_COLOR,
    },
  },
  spacing: SPACING,
  typography: {
    fontFamily: FONT_FAMILY_REGULAR,
    h1: {
      fontFamily: FONT_FAMILY_EXTRABOLD,
      color: DIPLOMA_COLOR,
      fontSize: '38px',
      lineHeight: '48px',
    },
    h2: {
      fontFamily: FONT_FAMILY_BOLD,
      color: DIPLOMA_COLOR,
      fontSize: '28px',
      lineHeight: '36px',
    },
    h3: {
      fontFamily: FONT_FAMILY_EXTRABOLD,
      fontStyle: 'normal',
      color: DIPLOMA_COLOR,
      fontSize: '18px',
      lineHeight: '24px',
    },
    h4: {
      fontFamily: FONT_FAMILY_BOLD,
      fontStyle: 'normal',
      color: DIPLOMA_COLOR,
      fontSize: '18px',
      lineHeight: '24px',
    },
    h5: {
      fontFamily: FONT_FAMILY_SEMIBOLD,
      fontStyle: 'normal',
      color: DARK_GRAY_COLOR,
      fontSize: '16px',
      lineHeight: '20px',
    },
    h6: {
      fontFamily: FONT_FAMILY_SEMIBOLD,
      fontStyle: 'normal',
      color: DARK_GRAY_COLOR,
      fontSize: '14px',
      lineHeight: '20px',
    },
    body1: {
      fontFamily: FONT_FAMILY_SEMIBOLD,
      color: DIPLOMA_BODY1_FONT_COLOR,
      fontSize: '14px',
      lineHeight: '20px',
    },
    body2: {
      fontFamily: FONT_FAMILY_REGULAR,
      color: DIPLOMA_BODY2_FONT_COLOR,
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle1: {
      color: GRAY_COLOR,
      fontFamily: FONT_FAMILY_LIGHT,
      fontSize: '14px',
      lineHeight: '17px',
    },
    subtitle2: {
      color: GRAY_COLOR,
      fontFamily: FONT_FAMILY_SEMIBOLD,
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '24px',
    },
    button: {
      color: WHITE_COLOR,
      fontSize: '14px',
      fontFamily: FONT_FAMILY_REGULAR,
      lineHeight: '20px',
      textTransform: 'none',
    },
    caption: {
      fontFamily: FONT_FAMILY_SEMIBOLD,
      color: DARK_GRAY_COLOR,
      lineHeight: '16px',
      fontSize: '12px',
      fontStyle: 'normal',
    },
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '4px 4px 25px rgba(158, 171, 181, 0.15)',
      },
      rounded: {
        borderRadius: '8px',
      },
    },
    MuiStepConnector: {
      line: {
        borderColor: LIGHT_GRAY_COLOR,
      },
    },
    MuiChip: {
      root: {
        fontFamily: FONT_FAMILY_EXTRABOLD,
        fontSize: '12px',
        lineHeight: '14px',
        paddingRight: '10px',
        paddingLeft: '10px',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'rgba(255,255,255,0.3)',
        },
        '&.MuiSelect-select': {
          paddingLeft: '9px',
        },
      },
    },
    MuiInput: {
      root: {
        marginTop: '18px',
        minHeight: '48px',
        padding: '0px 8px',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        color: EERIE_BLACK_COLOR,
        backgroundColor: INPUT_INACTIVE_COLOR,
        fontSize: '16px',
      },
      underline: {
        '&:before': {
          borderBottom: `1px solid ${LIGHT_GRAY_COLOR}`,
        },
        '&:hover:not($disabled):before': {
          borderBottom: `1px solid ${LIGHT_GRAY_COLOR}`,
        },
      },
      multiline: {
        padding: '20px 10px',
      },
      input: {
        fontFamily: FONT_FAMILY_REGULAR,
      },
    },
    MuiInputLabel: {
      root: {
        marginBottom: '-14px',
        fontSize: '12px',
        fontFamily: FONT_FAMILY_SEMIBOLD,
        color: DARK_GRAY_COLOR,
        height: '14px',
      },
    },
    MuiFormHelperText: {
      root: {
        bottom: '0',
        top: '66px',
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: OPAQUE_DIPLOMA_COLOR,
        '&.Mui-focused': {
          backgroundColor: OPAQUE_DIPLOMA_COLOR,
          borderBottom: '0px',
        },
        '&.Mui-error&.Mui-focused': {
          backgroundColor: OPAQUE_CRITICAL_COLOR,
        },
        '&.Mui-error': {
          backgroundColor: OPAQUE_CRITICAL_COLOR,
        },
      },
      input: {
        padding: '0px',
      },
    },
    MuiAutocomplete: {
      root: {
        backgroundColor: WHITE_COLOR,
        width: '348px',
        height: '48px',
        color: EERIE_BLACK_COLOR,
        fontFamily: FONT_FAMILY_SEMIBOLD,
        fontSize: '12px',
      },
      inputRoot: {
        backgroundColor: INPUT_INACTIVE_COLOR,
        fontSize: '16px',
        borderRadius: '4px 4px 0px 0px',
        '&&[class*="MuiInput-root"]': {
          paddingBottom: '0px',
        },
      },
    },
    MuiToolbar: {
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '56px',
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '10px',
        fontSize: '14px',
        fontFamily: FONT_FAMILY_EXTRABOLD,
        '&.Mui-disabled': {
          backgroundColor: LIGHT_GRAY_COLOR,
          color: WHITE_COLOR,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: BLACK_COLOR,
        },
      },
    },
    MuiLink: {
      root: {
        color: INFO_COLOR,
      },
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: DIPLOMA_COLOR,
        },
        '&$disabled': {
          color: '#DADADA',
        },
      },
    },
    MuiStepContent: {
      root: {
        borderColor: LIGHT_GRAY_COLOR,
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '16px',
        fontFamily: FONT_FAMILY_REGULAR,
        fontColor: EERIE_BLACK_COLOR,
      },
    },
  },
};

const globalStyle = createStyles({
  '.chipDefault': {
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: INFO_COLOR,
    backgroundColor: OPAQUE_INFO_COLOR,
  },
  '.chipWarning': {
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: DARK_GRAY_COLOR,
    backgroundColor: OPAQUE_WARNING_COLOR,
  },
  '.chipCritical': {
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: CRITICAL_COLOR,
    backgroundColor: OPAQUE_CRITICAL_COLOR,
  },
  '.chipNoBackground': {
    fontFamily: FONT_FAMILY_EXTRABOLD,
    color: DIPLOMA_COLOR,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  '.cursorPointer': {
    cursor: 'pointer',
  },
});

export { theme, globalStyle };
