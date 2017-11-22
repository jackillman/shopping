import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: core.css, accordion.css, autocomplete.css, menu.css, button.css, controlgroup.css, checkboxradio.css, datepicker.css, dialog.css, draggable.css, resizable.css, progressbar.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?bgShadowXPos=&bgOverlayXPos=&bgErrorXPos=&bgHighlightXPos=&bgContentXPos=&bgHeaderXPos=&bgActiveXPos=&bgHoverXPos=&bgDefaultXPos=&bgShadowYPos=&bgOverlayYPos=&bgErrorYPos=&bgHighlightYPos=&bgContentYPos=&bgHeaderYPos=&bgActiveYPos=&bgHoverYPos=&bgDefaultYPos=&bgShadowRepeat=&bgOverlayRepeat=&bgErrorRepeat=&bgHighlightRepeat=&bgContentRepeat=&bgHeaderRepeat=&bgActiveRepeat=&bgHoverRepeat=&bgDefaultRepeat=&iconsHover=url(%22images%2Fui-icons_555555_256x240.png%22)&iconsHighlight=url(%22images%2Fui-icons_777620_256x240.png%22)&iconsHeader=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsError=url(%22images%2Fui-icons_cc0000_256x240.png%22)&iconsDefault=url(%22images%2Fui-icons_777777_256x240.png%22)&iconsContent=url(%22images%2Fui-icons_444444_256x240.png%22)&iconsActive=url(%22images%2Fui-icons_ffffff_256x240.png%22)&bgImgUrlShadow=&bgImgUrlOverlay=&bgImgUrlHover=&bgImgUrlHighlight=&bgImgUrlHeader=&bgImgUrlError=&bgImgUrlDefault=&bgImgUrlContent=&bgImgUrlActive=&opacityFilterShadow=Alpha(Opacity%3D30)&opacityFilterOverlay=Alpha(Opacity%3D30)&opacityShadowPerc=30&opacityOverlayPerc=30&iconColorHover=%23555555&iconColorHighlight=%23777620&iconColorHeader=%23444444&iconColorError=%23cc0000&iconColorDefault=%23777777&iconColorContent=%23444444&iconColorActive=%23ffffff&bgImgOpacityShadow=0&bgImgOpacityOverlay=0&bgImgOpacityError=95&bgImgOpacityHighlight=55&bgImgOpacityContent=75&bgImgOpacityHeader=75&bgImgOpacityActive=65&bgImgOpacityHover=75&bgImgOpacityDefault=75&bgTextureShadow=flat&bgTextureOverlay=flat&bgTextureError=flat&bgTextureHighlight=flat&bgTextureContent=flat&bgTextureHeader=flat&bgTextureActive=flat&bgTextureHover=flat&bgTextureDefault=flat&cornerRadius=3px&fwDefault=normal&ffDefault=Arial%2CHelvetica%2Csans-serif&fsDefault=1em&cornerRadiusShadow=8px&thicknessShadow=5px&offsetLeftShadow=0px&offsetTopShadow=0px&opacityShadow=.3&bgColorShadow=%23666666&opacityOverlay=.3&bgColorOverlay=%23aaaaaa&fcError=%235f3f3f&borderColorError=%23f1a899&bgColorError=%23fddfdf&fcHighlight=%23777620&borderColorHighlight=%23dad55e&bgColorHighlight=%23fffa90&fcContent=%23333333&borderColorContent=%23dddddd&bgColorContent=%23ffffff&fcHeader=%23333333&borderColorHeader=%23dddddd&bgColorHeader=%23e9e9e9&fcActive=%23ffffff&borderColorActive=%23003eff&bgColorActive=%23007fff&fcHover=%232b2b2b&borderColorHover=%23cccccc&bgColorHover=%23ededed&fcDefault=%23454545&borderColorDefault=%23c5c5c5&bgColorDefault=%23f6f6f6
* Copyright jQuery Foundation and other contributors; Licensed MIT
  'ui-helper-hidden': {
    'display': 'none'
  },
  'ui-helper-hidden-accessible': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'clip': 'rect(0 0 0 0)',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-helper-reset': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': '0',
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }],
    'textDecoration': 'none',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'listStyle': 'none'
  },
  'ui-helper-clearfix:before': {
    'content': '""',
    'display': 'table',
    'borderCollapse': 'collapse'
  },
  'ui-helper-clearfix:after': {
    'content': '""',
    'display': 'table',
    'borderCollapse': 'collapse'
  },
  'ui-helper-clearfix:after': {
    'clear': 'both'
  },
  'ui-helper-zfix': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'opacity': '0',
    'filter': 'Alpha(Opacity=0)'
  },
  'ui-front': {
    'zIndex': '100'
  },
  'ui-state-disabled': {
    'cursor': 'default!important',
    'pointerEvents': 'none'
  },
  'ui-icon': {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'marginTop': [{ 'unit': 'em', 'value': -0.25 }],
    'position': 'relative',
    'textIndent': '-99999px',
    'overflow': 'hidden',
    'backgroundRepeat': 'no-repeat'
  },
  'ui-widget-icon-block': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -8 }],
    'display': 'block'
  },
  'ui-widget-overlay': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-accordion ui-accordion-header': {
    'display': 'block',
    'cursor': 'pointer',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.7 }],
    'fontSize': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-accordion ui-accordion-content': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2.2 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 2.2 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'auto'
  },
  'ui-autocomplete': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'default'
  },
  'ui-menu': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'outline': '0'
  },
  'ui-menu ui-menu': {
    'position': 'absolute'
  },
  'ui-menu ui-menu-item': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'listStyleImage': 'url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")'
  },
  'ui-menu ui-menu-item-wrapper': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'em', 'value': 0.4 }]
  },
  'ui-menu ui-menu-divider': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'borderWidth': '1px 0 0 0'
  },
  'ui-menu ui-state-focus': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }]
  },
  'ui-menu ui-state-active': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }]
  },
  'ui-menu-icons': {
    'position': 'relative'
  },
  'ui-menu-icons ui-menu-item-wrapper': {
    'paddingLeft': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-menu ui-icon': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'em', 'value': 0.2 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-menu ui-menu-icon': {
    'left': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-button': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }],
    'display': 'inline-block',
    'position': 'relative',
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }],
    'marginRight': [{ 'unit': 'em', 'value': 0.1 }],
    'cursor': 'pointer',
    'verticalAlign': 'middle',
    'textAlign': 'center',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'overflow': 'visible'
  },
  'ui-button': {
    'textDecoration': 'none'
  },
  'ui-button:link': {
    'textDecoration': 'none'
  },
  'ui-button:visited': {
    'textDecoration': 'none'
  },
  'ui-button:hover': {
    'textDecoration': 'none'
  },
  'ui-button:active': {
    'textDecoration': 'none'
  },
  'ui-button-icon-only': {
    'width': [{ 'unit': 'em', 'value': 2 }],
    'boxSizing': 'border-box',
    'textIndent': '-9999px',
    'whiteSpace': 'nowrap'
  },
  'inputui-buttonui-button-icon-only': {
    'textIndent': '0'
  },
  'ui-button-icon-only ui-icon': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }],
    'marginLeft': [{ 'unit': 'px', 'value': -8 }]
  },
  'ui-buttonui-icon-notext ui-icon': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'em', 'value': 2.1 }],
    'height': [{ 'unit': 'em', 'value': 2.1 }],
    'textIndent': '-9999px',
    'whiteSpace': 'nowrap'
  },
  'inputui-buttonui-icon-notext ui-icon': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'textIndent': '0',
    'whiteSpace': 'normal',
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }]
  },
  'inputui-button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'buttonui-button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-controlgroup': {
    'verticalAlign': 'middle',
    'display': 'inline-block'
  },
  'ui-controlgroup > ui-controlgroup-item': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-controlgroup > ui-controlgroup-item:focus': {
    'zIndex': '9999'
  },
  'ui-controlgroup > ui-controlgroup-itemui-visual-focus': {
    'zIndex': '9999'
  },
  'ui-controlgroup-vertical > ui-controlgroup-item': {
    'display': 'block',
    'float': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left'
  },
  'ui-controlgroup-vertical ui-controlgroup-item': {
    'boxSizing': 'border-box'
  },
  'ui-controlgroup ui-controlgroup-label': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }]
  },
  'ui-controlgroup ui-controlgroup-label span': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'ui-controlgroup-horizontal ui-controlgroup-label + ui-controlgroup-item': {
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-controlgroup-vertical ui-controlgroup-label + ui-controlgroup-item': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-controlgroup-horizontal ui-controlgroup-labelui-widget-content': {
    'borderRight': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-controlgroup-vertical ui-controlgroup-labelui-widget-content': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-controlgroup-vertical ui-spinner-input': {
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'width': [{ 'unit': '%H', 'value': NaN }]
  },
  'ui-controlgroup-vertical ui-spinner ui-spinner-up': {
    'borderTopStyle': 'solid'
  },
  'ui-checkboxradio-label ui-icon-background': {
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '.12em',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-checkboxradio-radio-label ui-icon-background': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '1em',
    'overflow': 'visible',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-checkboxradio-radio-labelui-checkboxradio-checked ui-icon': {
    'backgroundImage': 'none',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'borderWidth': '4px',
    'borderStyle': 'solid'
  },
  'ui-checkboxradio-radio-labelui-checkboxradio-checked:hover ui-icon': {
    'backgroundImage': 'none',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'borderWidth': '4px',
    'borderStyle': 'solid'
  },
  'ui-checkboxradio-disabled': {
    'pointerEvents': 'none'
  },
  'ui-datepicker': {
    'width': [{ 'unit': 'em', 'value': 17 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }],
    'display': 'none'
  },
  'ui-datepicker ui-datepicker-header': {
    'position': 'relative',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker ui-datepicker-prev': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'em', 'value': 1.8 }],
    'height': [{ 'unit': 'em', 'value': 1.8 }]
  },
  'ui-datepicker ui-datepicker-next': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'em', 'value': 1.8 }],
    'height': [{ 'unit': 'em', 'value': 1.8 }]
  },
  'ui-datepicker ui-datepicker-prev-hover': {
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker ui-datepicker-next-hover': {
    'top': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker ui-datepicker-prev': {
    'left': [{ 'unit': 'px', 'value': 2 }]
  },
  'ui-datepicker ui-datepicker-next': {
    'right': [{ 'unit': 'px', 'value': 2 }]
  },
  'ui-datepicker ui-datepicker-prev-hover': {
    'left': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker ui-datepicker-next-hover': {
    'right': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker ui-datepicker-prev span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -8 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }]
  },
  'ui-datepicker ui-datepicker-next span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -8 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }]
  },
  'ui-datepicker ui-datepicker-title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2.3 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.8 }],
    'textAlign': 'center'
  },
  'ui-datepicker ui-datepicker-title select': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker selectui-datepicker-month': {
    'width': [{ 'unit': '%H', 'value': 0.45 }]
  },
  'ui-datepicker selectui-datepicker-year': {
    'width': [{ 'unit': '%H', 'value': 0.45 }]
  },
  'ui-datepicker table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'borderCollapse': 'collapse',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker th': {
    'padding': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 0.3 }],
    'textAlign': 'center',
    'fontWeight': 'bold',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker td': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker td span': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'textAlign': 'right',
    'textDecoration': 'none'
  },
  'ui-datepicker td a': {
    'display': 'block',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'textAlign': 'right',
    'textDecoration': 'none'
  },
  'ui-datepicker ui-datepicker-buttonpane': {
    'backgroundImage': 'none',
    'margin': [{ 'unit': 'em', 'value': 0.7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker ui-datepicker-buttonpane button': {
    'float': 'right',
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.2 }],
    'cursor': 'pointer',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.6 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.6 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'visible'
  },
  'ui-datepicker ui-datepicker-buttonpane buttonui-datepicker-current': {
    'float': 'left'
  },
  'ui-datepickerui-datepicker-multi': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-multi ui-datepicker-group': {
    'float': 'left'
  },
  'ui-datepicker-multi ui-datepicker-group table': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-multi-2 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'ui-datepicker-multi-3 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }]
  },
  'ui-datepicker-multi-4 ui-datepicker-group': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'ui-datepicker-multi ui-datepicker-group-last ui-datepicker-header': {
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker-multi ui-datepicker-group-middle ui-datepicker-header': {
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker-multi ui-datepicker-buttonpane': {
    'clear': 'left'
  },
  'ui-datepicker-row-break': {
    'clear': 'both',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-datepicker-rtl': {
    'direction': 'rtl'
  },
  'ui-datepicker-rtl ui-datepicker-prev': {
    'right': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-rtl ui-datepicker-next': {
    'left': [{ 'unit': 'px', 'value': 2 }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-rtl ui-datepicker-prev:hover': {
    'right': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-rtl ui-datepicker-next:hover': {
    'left': [{ 'unit': 'px', 'value': 1 }],
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ui-datepicker-rtl ui-datepicker-buttonpane': {
    'clear': 'right'
  },
  'ui-datepicker-rtl ui-datepicker-buttonpane button': {
    'float': 'left'
  },
  'ui-datepicker-rtl ui-datepicker-buttonpane buttonui-datepicker-current': {
    'float': 'right'
  },
  'ui-datepicker-rtl ui-datepicker-group': {
    'float': 'right'
  },
  'ui-datepicker-rtl ui-datepicker-group-last ui-datepicker-header': {
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker-rtl ui-datepicker-group-middle ui-datepicker-header': {
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-datepicker ui-icon': {
    'display': 'block',
    'textIndent': '-99999px',
    'overflow': 'hidden',
    'backgroundRepeat': 'no-repeat',
    'left': [{ 'unit': 'em', 'value': 0.5 }],
    'top': [{ 'unit': 'em', 'value': 0.3 }]
  },
  'ui-dialog': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'outline': '0'
  },
  'ui-dialog ui-dialog-titlebar': {
    'padding': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 1 }],
    'position': 'relative'
  },
  'ui-dialog ui-dialog-title': {
    'float': 'left',
    'margin': [{ 'unit': 'em', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'ui-dialog ui-dialog-titlebar-close': {
    'position': 'absolute',
    'right': [{ 'unit': 'em', 'value': 0.3 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': -10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'ui-dialog ui-dialog-content': {
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'background': 'none',
    'overflow': 'auto'
  },
  'ui-dialog ui-dialog-buttonpane': {
    'textAlign': 'left',
    'borderWidth': '1px 0 0 0',
    'backgroundImage': 'none',
    'marginTop': [{ 'unit': 'em', 'value': 0.5 }],
    'padding': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.4 }]
  },
  'ui-dialog ui-dialog-buttonpane ui-dialog-buttonset': {
    'float': 'right'
  },
  'ui-dialog ui-dialog-buttonpane button': {
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  'ui-dialog ui-resizable-n': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-e': {
    'width': [{ 'unit': 'px', 'value': 2 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-s': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-w': {
    'width': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-se': {
    'width': [{ 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 7 }]
  },
  'ui-dialog ui-resizable-sw': {
    'width': [{ 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 7 }]
  },
  'ui-dialog ui-resizable-ne': {
    'width': [{ 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 7 }]
  },
  'ui-dialog ui-resizable-nw': {
    'width': [{ 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 7 }]
  },
  'ui-dialog ui-resizable-se': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-sw': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-ne': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-dialog ui-resizable-nw': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-draggable ui-dialog-titlebar': {
    'cursor': 'move'
  },
  'ui-draggable-handle': {
    'MsTouchAction': 'none',
    'touchAction': 'none'
  },
  'ui-resizable': {
    'position': 'relative'
  },
  'ui-resizable-handle': {
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 0.1 }],
    'display': 'block',
    'MsTouchAction': 'none',
    'touchAction': 'none'
  },
  'ui-resizable-disabled ui-resizable-handle': {
    'display': 'none'
  },
  'ui-resizable-autohide ui-resizable-handle': {
    'display': 'none'
  },
  'ui-resizable-n': {
    'cursor': 'n-resize',
    'height': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-resizable-s': {
    'cursor': 's-resize',
    'height': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-resizable-e': {
    'cursor': 'e-resize',
    'width': [{ 'unit': 'px', 'value': 7 }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-resizable-w': {
    'cursor': 'w-resize',
    'width': [{ 'unit': 'px', 'value': 7 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-resizable-se': {
    'cursor': 'se-resize',
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'right': [{ 'unit': 'px', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-resizable-sw': {
    'cursor': 'sw-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'bottom': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-resizable-nw': {
    'cursor': 'nw-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-resizable-ne': {
    'cursor': 'ne-resize',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'ui-progressbar': {
    'height': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'left',
    'overflow': 'hidden'
  },
  'ui-progressbar ui-progressbar-value': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-progressbar ui-progressbar-overlay': {
    'background': 'url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==")',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'filter': 'alpha(opacity=25)',
    'opacity': '0.25'
  },
  'ui-progressbar-indeterminate ui-progressbar-value': {
    'backgroundImage': 'none'
  },
  'ui-selectable': {
    'MsTouchAction': 'none',
    'touchAction': 'none'
  },
  'ui-selectable-helper': {
    'position': 'absolute',
    'zIndex': '100',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': 'black' }]
  },
  'ui-selectmenu-menu': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'none'
  },
  'ui-selectmenu-menu ui-menu': {
    'overflow': 'auto',
    'overflowX': 'hidden',
    'paddingBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-selectmenu-menu ui-menu ui-selectmenu-optgroup': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'em', 'value': 0.4 }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-selectmenu-open': {
    'display': 'block'
  },
  'ui-selectmenu-text': {
    'display': 'block',
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis'
  },
  'ui-selectmenu-buttonui-button': {
    'textAlign': 'left',
    'whiteSpace': 'nowrap',
    'width': [{ 'unit': 'em', 'value': 14 }]
  },
  'ui-selectmenu-iconui-icon': {
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider': {
    'position': 'relative',
    'textAlign': 'left'
  },
  'ui-slider ui-slider-handle': {
    'position': 'absolute',
    'zIndex': '2',
    'width': [{ 'unit': 'em', 'value': 1.2 }],
    'height': [{ 'unit': 'em', 'value': 1.2 }],
    'cursor': 'default',
    'MsTouchAction': 'none',
    'touchAction': 'none'
  },
  'ui-slider ui-slider-range': {
    'position': 'absolute',
    'zIndex': '1',
    'fontSize': [{ 'unit': 'em', 'value': 0.7 }],
    'display': 'block',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'backgroundPosition': '0 0'
  },
  'ui-sliderui-state-disabled ui-slider-handle': {
    'filter': 'inherit'
  },
  'ui-sliderui-state-disabled ui-slider-range': {
    'filter': 'inherit'
  },
  'ui-slider-horizontal': {
    'height': [{ 'unit': 'em', 'value': 0.8 }]
  },
  'ui-slider-horizontal ui-slider-handle': {
    'top': [{ 'unit': 'em', 'value': -0.3 }],
    'marginLeft': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-slider-horizontal ui-slider-range': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'ui-slider-horizontal ui-slider-range-min': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-horizontal ui-slider-range-max': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-vertical': {
    'width': [{ 'unit': 'em', 'value': 0.8 }],
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'ui-slider-vertical ui-slider-handle': {
    'left': [{ 'unit': 'em', 'value': -0.3 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'em', 'value': -0.6 }]
  },
  'ui-slider-vertical ui-slider-range': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'ui-slider-vertical ui-slider-range-min': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-slider-vertical ui-slider-range-max': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-sortable-handle': {
    'MsTouchAction': 'none',
    'touchAction': 'none'
  },
  'ui-spinner': {
    'position': 'relative',
    'display': 'inline-block',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'ui-spinner-input': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': 'none',
    'color': 'inherit',
    'padding': [{ 'unit': 'em', 'value': 0.222 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.222 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle',
    'marginLeft': [{ 'unit': 'em', 'value': 0.4 }],
    'marginRight': [{ 'unit': 'em', 'value': 2 }]
  },
  'ui-spinner-button': {
    'width': [{ 'unit': 'em', 'value': 1.6 }],
    'height': [{ 'unit': '%V', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'position': 'absolute',
    'cursor': 'default',
    'display': 'block',
    'overflow': 'hidden',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-spinner aui-spinner-button': {
    'borderTopStyle': 'none',
    'borderBottomStyle': 'none',
    'borderRightStyle': 'none'
  },
  'ui-spinner-up': {
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-spinner-down': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-tabs': {
    'position': 'relative',
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-tabs ui-tabs-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-tabs ui-tabs-nav li': {
    'listStyle': 'none',
    'float': 'left',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'ui-tabs ui-tabs-nav ui-tabs-anchor': {
    'float': 'left',
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 1 }],
    'textDecoration': 'none'
  },
  'ui-tabs ui-tabs-nav liui-tabs-active': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabs ui-tabs-nav liui-tabs-active ui-tabs-anchor': {
    'cursor': 'text'
  },
  'ui-tabs ui-tabs-nav liui-state-disabled ui-tabs-anchor': {
    'cursor': 'text'
  },
  'ui-tabs ui-tabs-nav liui-tabs-loading ui-tabs-anchor': {
    'cursor': 'text'
  },
  'ui-tabs-collapsible ui-tabs-nav liui-tabs-active ui-tabs-anchor': {
    'cursor': 'pointer'
  },
  'ui-tabs ui-tabs-panel': {
    'display': 'block',
    'borderWidth': '0',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }],
    'background': 'none'
  },
  'ui-tooltip': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'position': 'absolute',
    'zIndex': '9999',
    'maxWidth': [{ 'unit': 'px', 'value': 300 }]
  },
  'body ui-tooltip': {
    'borderWidth': '2px'
  },
  'ui-widget': {
    'fontFamily': 'Arial,Helvetica,sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widget ui-widget': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widget input': {
    'fontFamily': 'Arial,Helvetica,sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widget select': {
    'fontFamily': 'Arial,Helvetica,sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widget textarea': {
    'fontFamily': 'Arial,Helvetica,sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widget button': {
    'fontFamily': 'Arial,Helvetica,sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'ui-widgetui-widget-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }]
  },
  'ui-widget-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'background': '#fff',
    'color': '#333'
  },
  'ui-widget-content a': {
    'color': '#333'
  },
  'ui-widget-header': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'background': '#e9e9e9',
    'color': '#333',
    'fontWeight': 'bold'
  },
  'ui-widget-header a': {
    'color': '#333'
  },
  'ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'ui-widget-content ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'ui-widget-header ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'ui-button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'html ui-buttonui-state-disabled:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'html ui-buttonui-state-disabled:active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c5c5c5' }],
    'background': '#f6f6f6',
    'fontWeight': 'normal',
    'color': '#454545'
  },
  'ui-state-default a': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'ui-state-default a:link': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'ui-state-default a:visited': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'aui-button': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'a:linkui-button': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'a:visitedui-button': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'ui-button': {
    'color': '#454545',
    'textDecoration': 'none'
  },
  'ui-state-hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-widget-content ui-state-hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-widget-header ui-state-hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-state-focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-widget-content ui-state-focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-widget-header ui-state-focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-button:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-button:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'background': '#ededed',
    'fontWeight': 'normal',
    'color': '#2b2b2b'
  },
  'ui-state-hover a': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-hover a:hover': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-hover a:link': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-hover a:visited': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-focus a': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-focus a:hover': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-focus a:link': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-state-focus a:visited': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'aui-button:hover': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'aui-button:focus': {
    'color': '#2b2b2b',
    'textDecoration': 'none'
  },
  'ui-visual-focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgb(94,158,214)' }]
  },
  'ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'ui-widget-content ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'ui-widget-header ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'aui-button:active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'ui-button:active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'ui-buttonui-state-active:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#003eff' }],
    'background': '#007fff',
    'fontWeight': 'normal',
    'color': '#fff'
  },
  'ui-icon-background': {
    'border': [{ 'unit': 'string', 'value': '#003eff' }],
    'backgroundColor': '#fff'
  },
  'ui-state-active ui-icon-background': {
    'border': [{ 'unit': 'string', 'value': '#003eff' }],
    'backgroundColor': '#fff'
  },
  'ui-state-active a': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'ui-state-active a:link': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'ui-state-active a:visited': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'ui-state-highlight': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dad55e' }],
    'background': '#fffa90',
    'color': '#777620'
  },
  'ui-widget-content ui-state-highlight': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dad55e' }],
    'background': '#fffa90',
    'color': '#777620'
  },
  'ui-widget-header ui-state-highlight': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dad55e' }],
    'background': '#fffa90',
    'color': '#777620'
  },
  'ui-state-checked': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dad55e' }],
    'background': '#fffa90'
  },
  'ui-state-highlight a': {
    'color': '#777620'
  },
  'ui-widget-content ui-state-highlight a': {
    'color': '#777620'
  },
  'ui-widget-header ui-state-highlight a': {
    'color': '#777620'
  },
  'ui-state-error': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1a899' }],
    'background': '#fddfdf',
    'color': '#5f3f3f'
  },
  'ui-widget-content ui-state-error': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1a899' }],
    'background': '#fddfdf',
    'color': '#5f3f3f'
  },
  'ui-widget-header ui-state-error': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1a899' }],
    'background': '#fddfdf',
    'color': '#5f3f3f'
  },
  'ui-state-error a': {
    'color': '#5f3f3f'
  },
  'ui-widget-content ui-state-error a': {
    'color': '#5f3f3f'
  },
  'ui-widget-header ui-state-error a': {
    'color': '#5f3f3f'
  },
  'ui-state-error-text': {
    'color': '#5f3f3f'
  },
  'ui-widget-content ui-state-error-text': {
    'color': '#5f3f3f'
  },
  'ui-widget-header ui-state-error-text': {
    'color': '#5f3f3f'
  },
  'ui-priority-primary': {
    'fontWeight': 'bold'
  },
  'ui-widget-content ui-priority-primary': {
    'fontWeight': 'bold'
  },
  'ui-widget-header ui-priority-primary': {
    'fontWeight': 'bold'
  },
  'ui-priority-secondary': {
    'opacity': '.7',
    'filter': 'Alpha(Opacity=70)',
    'fontWeight': 'normal'
  },
  'ui-widget-content ui-priority-secondary': {
    'opacity': '.7',
    'filter': 'Alpha(Opacity=70)',
    'fontWeight': 'normal'
  },
  'ui-widget-header ui-priority-secondary': {
    'opacity': '.7',
    'filter': 'Alpha(Opacity=70)',
    'fontWeight': 'normal'
  },
  'ui-state-disabled': {
    'opacity': '.35',
    'filter': 'Alpha(Opacity=35)',
    'backgroundImage': 'none'
  },
  'ui-widget-content ui-state-disabled': {
    'opacity': '.35',
    'filter': 'Alpha(Opacity=35)',
    'backgroundImage': 'none'
  },
  'ui-widget-header ui-state-disabled': {
    'opacity': '.35',
    'filter': 'Alpha(Opacity=35)',
    'backgroundImage': 'none'
  },
  'ui-state-disabled ui-icon': {
    'filter': 'Alpha(Opacity=35)'
  },
  'ui-icon': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'ui-icon': {
    'backgroundImage': 'url("images/ui-icons_444444_256x240.png")'
  },
  'ui-widget-content ui-icon': {
    'backgroundImage': 'url("images/ui-icons_444444_256x240.png")'
  },
  'ui-widget-header ui-icon': {
    'backgroundImage': 'url("images/ui-icons_444444_256x240.png")'
  },
  'ui-state-hover ui-icon': {
    'backgroundImage': 'url("images/ui-icons_555555_256x240.png")'
  },
  'ui-state-focus ui-icon': {
    'backgroundImage': 'url("images/ui-icons_555555_256x240.png")'
  },
  'ui-button:hover ui-icon': {
    'backgroundImage': 'url("images/ui-icons_555555_256x240.png")'
  },
  'ui-button:focus ui-icon': {
    'backgroundImage': 'url("images/ui-icons_555555_256x240.png")'
  },
  'ui-state-active ui-icon': {
    'backgroundImage': 'url("images/ui-icons_444444_256x240.png")'
  },
  'ui-button:active ui-icon': {
    'backgroundImage': 'url("images/ui-icons_444444_256x240.png")'
  },
  'ui-state-highlight ui-icon': {
    'backgroundImage': 'url("images/ui-icons_777620_256x240.png")'
  },
  'ui-button ui-state-highlightui-icon': {
    'backgroundImage': 'url("images/ui-icons_777620_256x240.png")'
  },
  'ui-state-error ui-icon': {
    'backgroundImage': 'url("images/ui-icons_cc0000_256x240.png")'
  },
  'ui-state-error-text ui-icon': {
    'backgroundImage': 'url("images/ui-icons_cc0000_256x240.png")'
  },
  'ui-button ui-icon': {
    'backgroundImage': 'url("images/ui-icons_777777_256x240.png")'
  },
  'ui-icon-blank': {
    'backgroundPosition': '16px 16px'
  },
  'ui-icon-caret-1-n': {
    'backgroundPosition': '0 0'
  },
  'ui-icon-caret-1-ne': {
    'backgroundPosition': '-16px 0'
  },
  'ui-icon-caret-1-e': {
    'backgroundPosition': '-32px 0'
  },
  'ui-icon-caret-1-se': {
    'backgroundPosition': '-48px 0'
  },
  'ui-icon-caret-1-s': {
    'backgroundPosition': '-65px 0'
  },
  'ui-icon-caret-1-sw': {
    'backgroundPosition': '-80px 0'
  },
  'ui-icon-caret-1-w': {
    'backgroundPosition': '-96px 0'
  },
  'ui-icon-caret-1-nw': {
    'backgroundPosition': '-112px 0'
  },
  'ui-icon-caret-2-n-s': {
    'backgroundPosition': '-128px 0'
  },
  'ui-icon-caret-2-e-w': {
    'backgroundPosition': '-144px 0'
  },
  'ui-icon-triangle-1-n': {
    'backgroundPosition': '0 -16px'
  },
  'ui-icon-triangle-1-ne': {
    'backgroundPosition': '-16px -16px'
  },
  'ui-icon-triangle-1-e': {
    'backgroundPosition': '-32px -16px'
  },
  'ui-icon-triangle-1-se': {
    'backgroundPosition': '-48px -16px'
  },
  'ui-icon-triangle-1-s': {
    'backgroundPosition': '-65px -16px'
  },
  'ui-icon-triangle-1-sw': {
    'backgroundPosition': '-80px -16px'
  },
  'ui-icon-triangle-1-w': {
    'backgroundPosition': '-96px -16px'
  },
  'ui-icon-triangle-1-nw': {
    'backgroundPosition': '-112px -16px'
  },
  'ui-icon-triangle-2-n-s': {
    'backgroundPosition': '-128px -16px'
  },
  'ui-icon-triangle-2-e-w': {
    'backgroundPosition': '-144px -16px'
  },
  'ui-icon-arrow-1-n': {
    'backgroundPosition': '0 -32px'
  },
  'ui-icon-arrow-1-ne': {
    'backgroundPosition': '-16px -32px'
  },
  'ui-icon-arrow-1-e': {
    'backgroundPosition': '-32px -32px'
  },
  'ui-icon-arrow-1-se': {
    'backgroundPosition': '-48px -32px'
  },
  'ui-icon-arrow-1-s': {
    'backgroundPosition': '-65px -32px'
  },
  'ui-icon-arrow-1-sw': {
    'backgroundPosition': '-80px -32px'
  },
  'ui-icon-arrow-1-w': {
    'backgroundPosition': '-96px -32px'
  },
  'ui-icon-arrow-1-nw': {
    'backgroundPosition': '-112px -32px'
  },
  'ui-icon-arrow-2-n-s': {
    'backgroundPosition': '-128px -32px'
  },
  'ui-icon-arrow-2-ne-sw': {
    'backgroundPosition': '-144px -32px'
  },
  'ui-icon-arrow-2-e-w': {
    'backgroundPosition': '-160px -32px'
  },
  'ui-icon-arrow-2-se-nw': {
    'backgroundPosition': '-176px -32px'
  },
  'ui-icon-arrowstop-1-n': {
    'backgroundPosition': '-192px -32px'
  },
  'ui-icon-arrowstop-1-e': {
    'backgroundPosition': '-208px -32px'
  },
  'ui-icon-arrowstop-1-s': {
    'backgroundPosition': '-224px -32px'
  },
  'ui-icon-arrowstop-1-w': {
    'backgroundPosition': '-240px -32px'
  },
  'ui-icon-arrowthick-1-n': {
    'backgroundPosition': '1px -48px'
  },
  'ui-icon-arrowthick-1-ne': {
    'backgroundPosition': '-16px -48px'
  },
  'ui-icon-arrowthick-1-e': {
    'backgroundPosition': '-32px -48px'
  },
  'ui-icon-arrowthick-1-se': {
    'backgroundPosition': '-48px -48px'
  },
  'ui-icon-arrowthick-1-s': {
    'backgroundPosition': '-64px -48px'
  },
  'ui-icon-arrowthick-1-sw': {
    'backgroundPosition': '-80px -48px'
  },
  'ui-icon-arrowthick-1-w': {
    'backgroundPosition': '-96px -48px'
  },
  'ui-icon-arrowthick-1-nw': {
    'backgroundPosition': '-112px -48px'
  },
  'ui-icon-arrowthick-2-n-s': {
    'backgroundPosition': '-128px -48px'
  },
  'ui-icon-arrowthick-2-ne-sw': {
    'backgroundPosition': '-144px -48px'
  },
  'ui-icon-arrowthick-2-e-w': {
    'backgroundPosition': '-160px -48px'
  },
  'ui-icon-arrowthick-2-se-nw': {
    'backgroundPosition': '-176px -48px'
  },
  'ui-icon-arrowthickstop-1-n': {
    'backgroundPosition': '-192px -48px'
  },
  'ui-icon-arrowthickstop-1-e': {
    'backgroundPosition': '-208px -48px'
  },
  'ui-icon-arrowthickstop-1-s': {
    'backgroundPosition': '-224px -48px'
  },
  'ui-icon-arrowthickstop-1-w': {
    'backgroundPosition': '-240px -48px'
  },
  'ui-icon-arrowreturnthick-1-w': {
    'backgroundPosition': '0 -64px'
  },
  'ui-icon-arrowreturnthick-1-n': {
    'backgroundPosition': '-16px -64px'
  },
  'ui-icon-arrowreturnthick-1-e': {
    'backgroundPosition': '-32px -64px'
  },
  'ui-icon-arrowreturnthick-1-s': {
    'backgroundPosition': '-48px -64px'
  },
  'ui-icon-arrowreturn-1-w': {
    'backgroundPosition': '-64px -64px'
  },
  'ui-icon-arrowreturn-1-n': {
    'backgroundPosition': '-80px -64px'
  },
  'ui-icon-arrowreturn-1-e': {
    'backgroundPosition': '-96px -64px'
  },
  'ui-icon-arrowreturn-1-s': {
    'backgroundPosition': '-112px -64px'
  },
  'ui-icon-arrowrefresh-1-w': {
    'backgroundPosition': '-128px -64px'
  },
  'ui-icon-arrowrefresh-1-n': {
    'backgroundPosition': '-144px -64px'
  },
  'ui-icon-arrowrefresh-1-e': {
    'backgroundPosition': '-160px -64px'
  },
  'ui-icon-arrowrefresh-1-s': {
    'backgroundPosition': '-176px -64px'
  },
  'ui-icon-arrow-4': {
    'backgroundPosition': '0 -80px'
  },
  'ui-icon-arrow-4-diag': {
    'backgroundPosition': '-16px -80px'
  },
  'ui-icon-extlink': {
    'backgroundPosition': '-32px -80px'
  },
  'ui-icon-newwin': {
    'backgroundPosition': '-48px -80px'
  },
  'ui-icon-refresh': {
    'backgroundPosition': '-64px -80px'
  },
  'ui-icon-shuffle': {
    'backgroundPosition': '-80px -80px'
  },
  'ui-icon-transfer-e-w': {
    'backgroundPosition': '-96px -80px'
  },
  'ui-icon-transferthick-e-w': {
    'backgroundPosition': '-112px -80px'
  },
  'ui-icon-folder-collapsed': {
    'backgroundPosition': '0 -96px'
  },
  'ui-icon-folder-open': {
    'backgroundPosition': '-16px -96px'
  },
  'ui-icon-document': {
    'backgroundPosition': '-32px -96px'
  },
  'ui-icon-document-b': {
    'backgroundPosition': '-48px -96px'
  },
  'ui-icon-note': {
    'backgroundPosition': '-64px -96px'
  },
  'ui-icon-mail-closed': {
    'backgroundPosition': '-80px -96px'
  },
  'ui-icon-mail-open': {
    'backgroundPosition': '-96px -96px'
  },
  'ui-icon-suitcase': {
    'backgroundPosition': '-112px -96px'
  },
  'ui-icon-comment': {
    'backgroundPosition': '-128px -96px'
  },
  'ui-icon-person': {
    'backgroundPosition': '-144px -96px'
  },
  'ui-icon-print': {
    'backgroundPosition': '-160px -96px'
  },
  'ui-icon-trash': {
    'backgroundPosition': '-176px -96px'
  },
  'ui-icon-locked': {
    'backgroundPosition': '-192px -96px'
  },
  'ui-icon-unlocked': {
    'backgroundPosition': '-208px -96px'
  },
  'ui-icon-bookmark': {
    'backgroundPosition': '-224px -96px'
  },
  'ui-icon-tag': {
    'backgroundPosition': '-240px -96px'
  },
  'ui-icon-home': {
    'backgroundPosition': '0 -112px'
  },
  'ui-icon-flag': {
    'backgroundPosition': '-16px -112px'
  },
  'ui-icon-calendar': {
    'backgroundPosition': '-32px -112px'
  },
  'ui-icon-cart': {
    'backgroundPosition': '-48px -112px'
  },
  'ui-icon-pencil': {
    'backgroundPosition': '-64px -112px'
  },
  'ui-icon-clock': {
    'backgroundPosition': '-80px -112px'
  },
  'ui-icon-disk': {
    'backgroundPosition': '-96px -112px'
  },
  'ui-icon-calculator': {
    'backgroundPosition': '-112px -112px'
  },
  'ui-icon-zoomin': {
    'backgroundPosition': '-128px -112px'
  },
  'ui-icon-zoomout': {
    'backgroundPosition': '-144px -112px'
  },
  'ui-icon-search': {
    'backgroundPosition': '-160px -112px'
  },
  'ui-icon-wrench': {
    'backgroundPosition': '-176px -112px'
  },
  'ui-icon-gear': {
    'backgroundPosition': '-192px -112px'
  },
  'ui-icon-heart': {
    'backgroundPosition': '-208px -112px'
  },
  'ui-icon-star': {
    'backgroundPosition': '-224px -112px'
  },
  'ui-icon-link': {
    'backgroundPosition': '-240px -112px'
  },
  'ui-icon-cancel': {
    'backgroundPosition': '0 -128px'
  },
  'ui-icon-plus': {
    'backgroundPosition': '-16px -128px'
  },
  'ui-icon-plusthick': {
    'backgroundPosition': '-32px -128px'
  },
  'ui-icon-minus': {
    'backgroundPosition': '-48px -128px'
  },
  'ui-icon-minusthick': {
    'backgroundPosition': '-64px -128px'
  },
  'ui-icon-close': {
    'backgroundPosition': '-80px -128px'
  },
  'ui-icon-closethick': {
    'backgroundPosition': '-96px -128px'
  },
  'ui-icon-key': {
    'backgroundPosition': '-112px -128px'
  },
  'ui-icon-lightbulb': {
    'backgroundPosition': '-128px -128px'
  },
  'ui-icon-scissors': {
    'backgroundPosition': '-144px -128px'
  },
  'ui-icon-clipboard': {
    'backgroundPosition': '-160px -128px'
  },
  'ui-icon-copy': {
    'backgroundPosition': '-176px -128px'
  },
  'ui-icon-contact': {
    'backgroundPosition': '-192px -128px'
  },
  'ui-icon-image': {
    'backgroundPosition': '-208px -128px'
  },
  'ui-icon-video': {
    'backgroundPosition': '-224px -128px'
  },
  'ui-icon-script': {
    'backgroundPosition': '-240px -128px'
  },
  'ui-icon-alert': {
    'backgroundPosition': '0 -144px'
  },
  'ui-icon-info': {
    'backgroundPosition': '-16px -144px'
  },
  'ui-icon-notice': {
    'backgroundPosition': '-32px -144px'
  },
  'ui-icon-help': {
    'backgroundPosition': '-48px -144px'
  },
  'ui-icon-check': {
    'backgroundPosition': '-64px -144px'
  },
  'ui-icon-bullet': {
    'backgroundPosition': '-80px -144px'
  },
  'ui-icon-radio-on': {
    'backgroundPosition': '-96px -144px'
  },
  'ui-icon-radio-off': {
    'backgroundPosition': '-112px -144px'
  },
  'ui-icon-pin-w': {
    'backgroundPosition': '-128px -144px'
  },
  'ui-icon-pin-s': {
    'backgroundPosition': '-144px -144px'
  },
  'ui-icon-play': {
    'backgroundPosition': '0 -160px'
  },
  'ui-icon-pause': {
    'backgroundPosition': '-16px -160px'
  },
  'ui-icon-seek-next': {
    'backgroundPosition': '-32px -160px'
  },
  'ui-icon-seek-prev': {
    'backgroundPosition': '-48px -160px'
  },
  'ui-icon-seek-end': {
    'backgroundPosition': '-64px -160px'
  },
  'ui-icon-seek-start': {
    'backgroundPosition': '-80px -160px'
  },
  'ui-icon-seek-first': {
    'backgroundPosition': '-80px -160px'
  },
  'ui-icon-stop': {
    'backgroundPosition': '-96px -160px'
  },
  'ui-icon-eject': {
    'backgroundPosition': '-112px -160px'
  },
  'ui-icon-volume-off': {
    'backgroundPosition': '-128px -160px'
  },
  'ui-icon-volume-on': {
    'backgroundPosition': '-144px -160px'
  },
  'ui-icon-power': {
    'backgroundPosition': '0 -176px'
  },
  'ui-icon-signal-diag': {
    'backgroundPosition': '-16px -176px'
  },
  'ui-icon-signal': {
    'backgroundPosition': '-32px -176px'
  },
  'ui-icon-battery-0': {
    'backgroundPosition': '-48px -176px'
  },
  'ui-icon-battery-1': {
    'backgroundPosition': '-64px -176px'
  },
  'ui-icon-battery-2': {
    'backgroundPosition': '-80px -176px'
  },
  'ui-icon-battery-3': {
    'backgroundPosition': '-96px -176px'
  },
  'ui-icon-circle-plus': {
    'backgroundPosition': '0 -192px'
  },
  'ui-icon-circle-minus': {
    'backgroundPosition': '-16px -192px'
  },
  'ui-icon-circle-close': {
    'backgroundPosition': '-32px -192px'
  },
  'ui-icon-circle-triangle-e': {
    'backgroundPosition': '-48px -192px'
  },
  'ui-icon-circle-triangle-s': {
    'backgroundPosition': '-64px -192px'
  },
  'ui-icon-circle-triangle-w': {
    'backgroundPosition': '-80px -192px'
  },
  'ui-icon-circle-triangle-n': {
    'backgroundPosition': '-96px -192px'
  },
  'ui-icon-circle-arrow-e': {
    'backgroundPosition': '-112px -192px'
  },
  'ui-icon-circle-arrow-s': {
    'backgroundPosition': '-128px -192px'
  },
  'ui-icon-circle-arrow-w': {
    'backgroundPosition': '-144px -192px'
  },
  'ui-icon-circle-arrow-n': {
    'backgroundPosition': '-160px -192px'
  },
  'ui-icon-circle-zoomin': {
    'backgroundPosition': '-176px -192px'
  },
  'ui-icon-circle-zoomout': {
    'backgroundPosition': '-192px -192px'
  },
  'ui-icon-circle-check': {
    'backgroundPosition': '-208px -192px'
  },
  'ui-icon-circlesmall-plus': {
    'backgroundPosition': '0 -208px'
  },
  'ui-icon-circlesmall-minus': {
    'backgroundPosition': '-16px -208px'
  },
  'ui-icon-circlesmall-close': {
    'backgroundPosition': '-32px -208px'
  },
  'ui-icon-squaresmall-plus': {
    'backgroundPosition': '-48px -208px'
  },
  'ui-icon-squaresmall-minus': {
    'backgroundPosition': '-64px -208px'
  },
  'ui-icon-squaresmall-close': {
    'backgroundPosition': '-80px -208px'
  },
  'ui-icon-grip-dotted-vertical': {
    'backgroundPosition': '0 -224px'
  },
  'ui-icon-grip-dotted-horizontal': {
    'backgroundPosition': '-16px -224px'
  },
  'ui-icon-grip-solid-vertical': {
    'backgroundPosition': '-32px -224px'
  },
  'ui-icon-grip-solid-horizontal': {
    'backgroundPosition': '-48px -224px'
  },
  'ui-icon-gripsmall-diagonal-se': {
    'backgroundPosition': '-64px -224px'
  },
  'ui-icon-grip-diagonal-se': {
    'backgroundPosition': '-80px -224px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': '3px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': '3px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': '3px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': '3px'
  },
  'ui-corner-all': {
    'borderTopRightRadius': '3px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': '3px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': '3px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': '3px'
  },
  'ui-corner-all': {
    'borderBottomLeftRadius': '3px'
  },
  'ui-corner-bottom': {
    'borderBottomLeftRadius': '3px'
  },
  'ui-corner-left': {
    'borderBottomLeftRadius': '3px'
  },
  'ui-corner-bl': {
    'borderBottomLeftRadius': '3px'
  },
  'ui-corner-all': {
    'borderBottomRightRadius': '3px'
  },
  'ui-corner-bottom': {
    'borderBottomRightRadius': '3px'
  },
  'ui-corner-right': {
    'borderBottomRightRadius': '3px'
  },
  'ui-corner-br': {
    'borderBottomRightRadius': '3px'
  },
  'ui-widget-overlay': {
    'background': '#aaa',
    'opacity': '.003',
    'filter': 'Alpha(Opacity=.3)'
  },
  'ui-widget-shadow': {
    'WebkitBoxShadow': '0 0 5px #666',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#666' }]
  }
});
