"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[921],{6308:function(n,i,t){t.d(i,{$J:function(){return p},dD:function(){return s}});var e=t(5861),r=t(4687),a=t.n(r),o=t(1243),h=t(9085),c=o.Z.create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"/pets",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"https://barkend.onrender.com/api",timeout:2e3}),s=function(){var n=(0,e.Z)(a().mark((function n(i){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("/news",{params:i});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),h.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(i){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(){var i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("/friends");case 3:return i=n.sent,n.abrupt("return",i.data);case 7:n.prev=7,n.t0=n.catch(0),h.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()},8936:function(n,i,t){t.d(i,{Z:function(){return p}});var e,r=t(9439),a=t(2791),o=t(168),h=t(9202).Z.div(e||(e=(0,o.Z)(["\n    position: relative;\n    display: flex;\n    // flex-direction: row-reverse;\n    width: 60px;\n    height: 15px;\n    margin-left: auto;\n    margin-right: auto;\n\n    // background: red;\n    // p {\n    //     position: absolute;\n    //     left: -80px;\n    //     width: 220px;\n    // }\n\n\n        \n    @keyframes stepFolowing {\n        0% {\n            opacity: 1;\n        }\n        25% {\n            opacity: 1;\n        }\n        45% {\n            opacity: 1;\n        }\n        55% {\n            opacity: 0;\n        }\n        75% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 0;\n        }\n    }\n    .loader {fill:","};\n    .loader_one {\n        position: absolute;\n        top: -3px;\n        right: 0;\n        width: 15px;\n        height: 15px;\n        // transform: rotateZ(15deg);\n        \n        animation-name: stepFolowing;\n        animation-duration: 2400ms;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n    .loader_two {\n        position: absolute;\n        top: 3px;\n        right: 15px;\n        width: 15px;\n        height: 15px;\n        // transform: rotateZ(335deg);\n        transform: rotateX(180deg);\n           \n        animation-name: stepFolowing;\n        animation-duration: 2400ms;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n    .loader_three {\n        position: absolute;\n        top: -3px;\n        right: 30px;\n        width: 15px;\n        height: 15px;\n        // transform: rotateZ(15deg);\n           \n        animation-name: stepFolowing;\n        animation-duration: 2400ms;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n    .loader_four {\n        position: absolute;\n        top: 3px;\n        right: 45px;\n        width: 15px;\n        height: 15px;\n        // transform: rotateZ(335deg);\n        transform: rotateX(180deg);\n             \n        animation-name: stepFolowing;\n        animation-duration: 2400ms;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n    }\n"])),(function(n){return n.theme.colors.blue})),c=t(2991),s=t(184),p=function(n){n.isUndefind;var i=(0,a.useState)(!1),t=(0,r.Z)(i,2),e=t[0],o=t[1],p=(0,a.useState)(!1),l=(0,r.Z)(p,2),d=l[0],u=l[1],x=(0,a.useState)(!1),m=(0,r.Z)(x,2),f=m[0],g=m[1],w=(0,a.useState)(!1),v=(0,r.Z)(w,2),_=v[0],j=v[1];return setTimeout((function(){o(!0)}),300),setTimeout((function(){u(!0)}),600),setTimeout((function(){g(!0)}),900),setTimeout((function(){j(!0)}),1200),(0,s.jsxs)(h,{children:[e&&(0,s.jsx)("svg",{className:"loader_one loader",children:(0,s.jsx)("use",{href:"".concat(c.Z,"#icon-paw_full_stright")})}),d&&(0,s.jsx)("svg",{className:"loader_two loader",children:(0,s.jsx)("use",{href:"".concat(c.Z,"#icon-paw_full_stright")})}),f&&(0,s.jsx)("svg",{className:"loader_three loader",children:(0,s.jsx)("use",{href:"".concat(c.Z,"#icon-paw_full_stright")})}),_&&(0,s.jsx)("svg",{className:"loader_four loader",children:(0,s.jsx)("use",{href:"".concat(c.Z,"#icon-paw_full_stright")})})]})}},7931:function(n,i,t){t.d(i,{Z:function(){return z}});var e,r,a,o,h,c,s=t(168),p=t(9202),l=p.Z.h1(e||(e=(0,s.Z)(["\n    margin: 0;\n\n    @media (min-width: 768px) {\n        font-size: 68px;\n        line-height: calc(100 / 68);\n    }\n\n    @media (min-width: 1280px) {\n        font-weight: 800;\n        line-height: 130%;\n    }\n"]))),d=p.Z.h2(r||(r=(0,s.Z)(["\n    margin: 0;\n\n    // font-weight: 700; -\n    // font-size: 24px; -\n    // line-height: 33px -\n\n@media (min-width: 768px) {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 130%;\n}\n@media (min-width: 1280px) {}\n"]))),u=p.Z.h2(a||(a=(0,s.Z)(["\n    margin: 0;\n\n    // font-weight: 700; -\n    // font-size: 24px; -\n    // line-height: 33px; -\n\n@media (min-width: 768px) {\n    // font-weight: 700; -\n    font-size: 48px;\n    line-height: calc(66 / 48);\n}\n@media (min-width: 1280px) {\n    // font-weight: 700;\n    // font-size: 48px;\n    // line-height: 66px;\n}\n"]))),x=p.Z.h2(o||(o=(0,s.Z)(["\n    margin: 0;\n\n    font-weight: 500;\n    // font-size: 24px; -\n    // line-height: 33px; -\n\n@media (min-width: 768px) {\n    // font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n}\n@media (min-width: 1280px) {\n    // font-weight: 500;\n    // font-size: 36px;\n    // line-height: 49px;\n    letter-spacing: 0.04em;\n}\n"]))),m=p.Z.h3(h||(h=(0,s.Z)(["\n    margin: 0;\n\n    font-weight: 500;\n    font-size: 20px;\n    line-height: calc(27 / 20);\n\n@media (min-width: 768px) {\n    // font-weight: 500;\n    font-size: 28px;\n    line-height: calc(38 / 28);\n}\n@media (min-width: 1280px) {\n    // font-weight: 500;\n    // font-size: 28px;\n    // line-height: 38px;\n}\n"]))),f=p.Z.h3(c||(c=(0,s.Z)(["\n    margin: 0;\n    text-align: left;\n\n    font-size: 24px; \n    letter-spacing: -0.01em;\n\n@media (min-width: 768px) {\n}\n@media (min-width: 1280px) {\n}\n"]))),g=t(184),w=function(n){return(0,g.jsx)(l,{children:n})},v=function(n){return(0,g.jsx)(u,{children:n})},_=function(n){return(0,g.jsx)(x,{children:n})},j=function(n){return(0,g.jsx)(d,{children:n})},Z=function(n){return(0,g.jsx)(m,{children:n})},b=function(n){return(0,g.jsx)(f,{children:n})},y=function(n){var i=n.children,t=n.titleStyle;return"h1"===t?w(i):"h2_main"===t?v(i):"h2_auth"===t?_(i):"h2_404"===t?j(i):"h3_user"===t?Z(i):"h3_main_card"===t?b(i):v(i)};y.defaultProps={titleStyle:"h2_main"};var z=y},4921:function(n,i,t){t.r(i),t.d(i,{default:function(){return _}});var e,r,a,o=t(168),h=t(9202),c=h.Z.div(e||(e=(0,o.Z)(["\n    min-height: calc(100vh - 20px - 25px);\n    margin-left: auto;\n    margin-right: auto;\n\n    text-align: center;\n\n    h2 {\n        padding-top: 40px;\n        padding-bottom: 24px;\n    }\n    \n@media (min-width: 768px) {\n    max-width: calc(768px - 32px);\n}\n    \n@media (min-width: 1280px) {\n    max-width: calc(1280px - 32px);\n}\n"]))),s=t(7931),p=t(9439),l=t(2791),d=t(6308),u=h.Z.ul(r||(r=(0,o.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap:20px;\n\n    list-style: none;\n    padding: 0;\n\n    li {\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]))),x=h.Z.div(a||(a=(0,o.Z)(["\n    width: calc(280px - 24px);\n    // height: calc(240px - 32px);\n    padding: 16px 12px;\n\n    background: ",";\n    box-shadow: ",";\n    border-radius: 40px;\n\n    h3 {\n        margin: 0;\n        margin-bottom: 16px;\n\n        font-size: 20px;\n        line-height: calc(27 / 20);\n\n        color: ",";\n    }\n    > div {\n        display: flex;\n\n        img {\n            width: 100px;\n            height: 68px;\n            margin-right: 12px;\n\n            object-fit: cover;\n            background: #888888;\n        }\n        > div {\n            display: flex;\n            flex-direction: column;\n            gap: 12px;\n\n            p {\n                margin: 0;\n                text-align: left;\n                font-size: 12px;\n                line-height: calc(16 / 12);\n                color: ",";\n            }\n            p:first-of-type {\n                font-weight: 600;\n                color: ",";\n            }\n            p:last-of-type {\n                font-weight: 400;\n            }\n        }\n    }\n    \n@media (min-width: 768px) {\n    width: calc(336px - 24px);\n    min-height: calc(275px - 32px);\n    height: calc(100% - 32px);\n\n    > div {\n        img {\n            width: 124px;\n            height: 88px;\n        }\n        > div {\n            p {\n                font-size: 14px;\n                line-height: calc(19 / 14);\n            }\n        }\n    }\n}\n    \n@media (min-width: 1280px) {\n    width: calc(395px - 24px);\n    min-height: calc(288px - 32px);\n\n    > div {\n        img {\n            width: 146px;\n            height: 104px;\n        }\n        > div {\n            p {\n                font-size: 16px;\n                line-height: calc(22 / 16);\n            }\n        }\n    }\n}\n"])),(function(n){return n.theme.colors.pureWhite}),(function(n){return n.theme.shadows.small}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.pureBlack})),m=t(767),f=t(184),g=function(n){var i=n.it,t=i.address,e=i.email,r=i.imageUrl,a=i.phone,o=i.title,h=a&&a.replace(/\+?(\d{2})\s?(\d{3})\s?(\d{3})\s?(\d{4})/,"+$1 $2 $3 $4");return(0,f.jsxs)(x,{children:[(0,f.jsx)("h3",{children:o}),(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:r||m,alt:o}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Time:"}),(0,f.jsx)("p",{children:"8:00- 19:00"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Adress:"}),(0,f.jsx)("p",{children:t||"no data"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Email:"}),(0,f.jsx)("p",{children:e||"no data"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Phone:"}),(0,f.jsx)("p",{children:h||"email only"})]})]})]})]})},w=t(8936),v=function(){var n=(0,l.useState)([]),i=(0,p.Z)(n,2),t=i[0],e=i[1];(0,l.useEffect)((function(){(0,d.$J)().then((function(n){return e(n.friends)})).catch((function(n){return e([])}))}),[]);var r=t.map((function(n){return n&&(0,f.jsx)("li",{children:(0,f.jsx)(g,{it:n})},n._id)}));return(0,f.jsx)(u,{children:0===r.length?(0,f.jsx)(w.Z,{}):r})},_=function(){return(0,f.jsxs)(c,{children:[(0,f.jsx)(s.Z,{children:"Our friends"}),(0,f.jsx)(v,{})]})}},767:function(n,i,t){n.exports=t.p+"static/media/404_mob_origin.96c69803286437065bde.png"}}]);
//# sourceMappingURL=921.cf309dcd.chunk.js.map