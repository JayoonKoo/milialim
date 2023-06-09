import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
	box-sizing: border-box;
}
body {
	line-height: 1.2;
	background-color: #2f3542;
}
a {
	text-decoration: none;
	color: inherit;
}
html,
body,
#root {
	height: 100%;
}
html {
	box-sizing: border-box;
	* {
		box-sizing: inherit;
	}
	-webkit-touch-callout: none;
	
	-webkit-user-select: none;

	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
button{
background: transparent ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer}
input{
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;  
}
/* Select box 스타일 초기화 */ 
select {
    -webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: transparent;
}
`;
export default GlobalStyle;
