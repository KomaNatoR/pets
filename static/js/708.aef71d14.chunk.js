"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{1647:function(n,e,t){t.d(e,{Z:function(){return d}});var i,o=t(1413),r=t(168),a=t(9202),c=function(n){var e=n.colors;return"\n    padding: 8px 20px;\n    border: 2px solid ".concat(e.blue,";\n    color:").concat(e.blue,";\n    background: ").concat(e.white,";\n\n    :hover, :focus {\n        padding: 10px 22px;\n        color:").concat(e.white,";\n        background: ").concat(e.gradBlue,";\n        border: none;\n    }\n")},l=a.Z.button(i||(i=(0,r.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width:",";\n\n    border-radius: 40px;\n    font-family: inherit;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: calc(22 / 16);\n    letter-spacing: 0.04em;\n    cursor: pointer;\n\n    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    ","\n\n\n    :active {\n    }\n    :hover, :focus {\n        transform: scale(",");\n    }\n"])),(function(n){return n.width}),(function(n){var e=n.buttonView,t=n.theme;switch(e){case"white":default:return c(t);case"blue":return function(n){var e=n.colors;return"\n    padding: 8px 20px;\n    border: 2px solid ".concat(e.blue,";\n    color:").concat(e.white,";\n    background: ").concat(e.blue,";\n\n    :hover, :focus {\n        padding: 10px 22px;\n        color:").concat(e.white,";\n        background: ").concat(e.gradBlue,";\n        border: none;\n    }\n")}(t);case"yellow":return function(n){var e=n.colors;return"\n    padding: 8px 20px;\n    border: 2px solid ".concat(e.yellow,";\n    color:").concat(e.yellow,";\n    background: ").concat(e.white,";\n\n    :hover, :focus {\n        padding: 10px 22px;\n        color:").concat(e.white,";\n        background: ").concat(e.yellow,";\n        border: none;\n    }\n")}(t);case"close":return"\n    width: auto;\n    height: auto;\n    padding: 0;\n    border: 50%;\n    border: none;\n    background: rgba(0,0,0,0);\n"}}),(function(n){return n.scale})),s=t(184),u=function(n){var e=n.type,t=n.buttonView,i=n.width,r=n.scale,a=n.children;return(0,s.jsx)(l,(0,o.Z)((0,o.Z)({},n),{},{type:e,buttonView:t,width:i,scale:r,children:a}))};u.defaultProps={type:"button",buttonView:"white",width:"auto",scale:"1",children:"NO TEXT ON BUTTON!!!"};var d=u},7931:function(n,e,t){t.d(e,{Z:function(){return z}});var i,o,r,a,c,l,s=t(168),u=t(9202),d=u.Z.h1(i||(i=(0,s.Z)(["\n    margin: 0;\n\n    @media (min-width: 768px) {\n        font-size: 68px;\n        line-height: calc(100 / 68);\n    }\n\n    @media (min-width: 1280px) {\n        font-weight: 800;\n        line-height: 130%;\n    }\n"]))),h=u.Z.h2(o||(o=(0,s.Z)(["\n    margin: 0;\n\n    // font-weight: 700; -\n    // font-size: 24px; -\n    // line-height: 33px -\n\n@media (min-width: 768px) {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 130%;\n}\n@media (min-width: 1280px) {}\n"]))),p=u.Z.h2(r||(r=(0,s.Z)(["\n    margin: 0;\n\n    // font-weight: 700; -\n    // font-size: 24px; -\n    // line-height: 33px; -\n\n@media (min-width: 768px) {\n    // font-weight: 700; -\n    font-size: 48px;\n    line-height: calc(66 / 48);\n}\n@media (min-width: 1280px) {\n    // font-weight: 700;\n    // font-size: 48px;\n    // line-height: 66px;\n}\n"]))),x=u.Z.h2(a||(a=(0,s.Z)(["\n    margin: 0;\n\n    font-weight: 500;\n    // font-size: 24px; -\n    // line-height: 33px; -\n\n@media (min-width: 768px) {\n    // font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n}\n@media (min-width: 1280px) {\n    // font-weight: 500;\n    // font-size: 36px;\n    // line-height: 49px;\n    letter-spacing: 0.04em;\n}\n"]))),m=u.Z.h3(c||(c=(0,s.Z)(["\n    margin: 0;\n\n    font-weight: 500;\n    font-size: 20px;\n    line-height: calc(27 / 20);\n\n@media (min-width: 768px) {\n    // font-weight: 500;\n    font-size: 28px;\n    line-height: calc(38 / 28);\n}\n@media (min-width: 1280px) {\n    // font-weight: 500;\n    // font-size: 28px;\n    // line-height: 38px;\n}\n"]))),f=u.Z.h3(l||(l=(0,s.Z)(["\n    margin: 0;\n    text-align: left;\n\n    font-size: 24px; \n    letter-spacing: -0.01em;\n\n@media (min-width: 768px) {\n}\n@media (min-width: 1280px) {\n}\n"]))),g=t(184),w=function(n){return(0,g.jsx)(d,{children:n})},b=function(n){return(0,g.jsx)(p,{children:n})},Z=function(n){return(0,g.jsx)(x,{children:n})},v=function(n){return(0,g.jsx)(h,{children:n})},y=function(n){return(0,g.jsx)(m,{children:n})},j=function(n){return(0,g.jsx)(f,{children:n})},k=function(n){var e=n.children,t=n.titleStyle;return"h1"===t?w(e):"h2_main"===t?b(e):"h2_auth"===t?Z(e):"h2_404"===t?v(e):"h3_user"===t?y(e):"h3_main_card"===t?j(e):b(e)};k.defaultProps={titleStyle:"h2_main"};var z=k},1004:function(n,e,t){t.d(e,{Z:function(){return q}});var i,o,r,a,c=t(1413),l=t(168),s=t(9202),u=t(5705),d=s.Z.div(i||(i=(0,l.Z)(["\n    display:flex;\n    align-items: center;\n\n    min-height: calc(100vh - 60px);\n\n    > div {\n        box-sizing: border-box;\n\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        width: 280px;\n        // height: 400px;\n        padding: 40px 12px;\n        margin-left: auto;\n        margin-right: auto;\n\n        text-align: center;\n\n        border-radius: 20px;\n        background: ",";\n        box-shadow: ",";\n        \n        .auth_bottom_text {\n            margin: 0;\n            margin-top: auto;\n\n            font-weight: 500;\n            font-size: 12px;\n            line-height: 1.37;\n            letter-spacing: 0.04em;\n            color: ",";\n\n            a {\n                color: ",";\n                \n                :focus {\n                    outline-color: ",";\n                }\n            }\n        }\n    }\n@media (min-width: 768px) {\n\n    > div {\n        width: 608px;\n        height: 482px;\n    }\n}\n"])),(function(n){return n.theme.colors.pureWhite}),(function(n){return n.theme.shadows.small}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.yellow})),h=(0,s.Z)(u.l0)(o||(o=(0,l.Z)(["\n    box-sizing: border-box;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 250px;\n    margin: 40px 0;\n\n    > div {\n        display: flex;\n        flex-direction: column;\n        gap:24px;\n        margin-bottom: 40px;\n    }\n    button {\n        width: 256px;\n\n        :focus {\n            outline-color: ",";\n        }\n    }\n@media (min-width: 768px) {\n\n    button {\n        width: 458px;\n    }\n}\n"])),(function(n){return n.theme.colors.yellow})),p=t(7931),x={type:"email",name:"email",placeholder:"Email",required:!0},m={type:"password",name:"password",placeholder:"Password(min 8)",required:!0},f={type:"password",name:"confirm",placeholder:"Confirm password",required:!0},g={email:"",password:"",confirm:""},w=t(6727),b=w.Ry().shape({email:w.Z_().required().nullable().email("Enter a valid Email").trim(),password:w.Z_().required("Password is unsecure").nullable().min(8,"min value 8").max(16,"max value 16").trim(),confirm:w.Z_().required("Password is unsecure").oneOf([w.iH("password"),null],"Passwords must match")}),Z=t(4942),v=t(9439),y=t(4925),j=t(2791),k=t(5984),z=s.Z.div(r||(r=(0,l.Z)(["\n    position: relative;\n\n    color: ",";\n\n    input {\n        box-sizing: border-box;\n\n        width: 256px;\n        height: 48px;\n        padding: 0 16px;\n\n        font-size: 16px;\n\n        color: ",";\n        background: ",";\n        border: 1px solid ",";\n        border-radius: 40px;\n\n        ::placeholder {\n            font-size: 16px;\n            color: ",";\n        }\n        :focus {\n            outline-color: ",";\n        }\n    }\n    > div:first-of-type {\n        position: absolute;\n        top: 12px;\n        right: 12px;\n\n        display: flex;\n        gap: 8px;\n\n        svg {\n            cursor: pointer;\n        }\n    }\n@media (min-width: 768px) {\n    \n    input {\n        width: 458px;\n    }\n}\n"])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.colors.whiteInput}),(function(n){var e=n.theme,t=n.isError;return n.isValidField?e.colors.green:t?e.colors.red:e.colors.blue}),(function(n){return n.theme.colors.grayInput}),(function(n){return n.theme.colors.yellow})),_=t(4018),C=s.Z.div(a||(a=(0,l.Z)(["\n    position: absolute;\n    left: 16px;\n\n    font-size: 12px;\n\n    color: ",";\n"])),(function(n){return n.theme.colors.red})),S=t(184),V=["name","type"],B=function(n){var e=n.name,t=n.type,i=(0,y.Z)(n,V),o=(0,j.useState)(!1),r=(0,v.Z)(o,2),a=r[0],l=r[1],s=(0,j.useState)(!1),d=(0,v.Z)(s,2),h=d[0],p=d[1],x=(0,u.u6)(),m=x.values,f=x.setFieldValue,g=x.errors,w=x.setErrors,b=x.validateForm,B=(0,j.useMemo)((function(){return(0,k.x0)()}),[]),E=function(){p((function(n){return!n}))},q=function(){f(e,""),w((0,c.Z)((0,c.Z)({},g),{},(0,Z.Z)({},e,""))),p(!1)},O=Boolean((0,u.u9)(g,e)),P=Boolean(""===m[e]),F="email"!==e,N=!h,T=h?"text":"password",R=void 0===g[e];return(0,S.jsxs)(z,{isError:P?null:O,isValidField:!P&&R,children:[(0,S.jsx)(u.gN,(0,c.Z)((0,c.Z)({id:B},i),{},{onChange:function(n){var t=n.target.value;f(e,t),w((0,c.Z)((0,c.Z)({},g),{},(0,Z.Z)({},e,"")))},onFocus:function(){l(!0),w((0,c.Z)((0,c.Z)({},g),{},(0,Z.Z)({},e,"")))},onBlur:function(){b(),setTimeout((function(){l(!1)}),100)},name:e,type:"email"===t?t:T,value:m[e]})),(0,S.jsxs)("div",{children:[!P&&!a&&R&&(0,S.jsx)(_.Z,{onClick:q,id:"okey",colorStroke:"green"}),!P&&a&&(0,S.jsx)(_.Z,{onClick:q,id:"cross_big",colorStroke:"red"}),F&&N&&(0,S.jsx)(_.Z,{onClick:E,id:"eye_closed"}),F&&!N&&(0,S.jsx)(_.Z,{onClick:E,id:"eye_open"})]}),!P&&O&&(0,S.jsx)(u.Bc,{name:e,component:C})]})},E=t(1647),q=function(n){var e=n.children,t=n.forWhat;return(0,S.jsx)(d,{children:(0,S.jsxs)("div",{children:[(0,S.jsx)(p.Z,{titleStyle:"h2_auth",children:t}),(0,S.jsx)(u.J9,{onSubmit:function(n,e){},initialValues:g,validationSchema:b,validateOnChange:!1,validateOnBlur:!0,children:(0,S.jsxs)(h,{children:[(0,S.jsxs)("div",{children:[(0,S.jsx)(B,(0,c.Z)({},x)),(0,S.jsx)(B,(0,c.Z)({},m)),"Registration"===t&&(0,S.jsx)(B,(0,c.Z)({},f))]}),(0,S.jsx)(E.Z,{buttonView:"blue",type:"submit",children:t})]})}),e]})})}},2708:function(n,e,t){t.r(e);var i=t(1087),o=t(1004),r=t(184);e.default=function(){return(0,r.jsx)(o.Z,{forWhat:"Registration",children:(0,r.jsxs)("p",{className:"auth_bottom_text",children:["Already have an account?",(0,r.jsx)(i.rU,{to:"/login",children:" Login"})]})})}}}]);
//# sourceMappingURL=708.aef71d14.chunk.js.map