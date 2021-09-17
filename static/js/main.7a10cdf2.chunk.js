(this["webpackJsonpreact-mentor-grid-sunnyside"]=this["webpackJsonpreact-mentor-grid-sunnyside"]||[]).push([[0],{27:function(A,n,t){"use strict";t.r(n);t(1);var e,i,o,r,g,Q,s,c,B,a,l,x,f,C,I,E,u=t(9),h=t.n(u),j=t(3),d=(t(20),t(10)),y=t(4),k=Object(j.b)(e||(e=Object(y.a)(["\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#root, body {\n    background: #FBFBFB;\n    font-family: ",";\n    font-size: ",";\n    min-height: 100vh;\n}\n"])),(function(A){return A.theme.font.family.barlow.rules}),(function(A){return A.theme.font.fontSize})),P={layout:{mobile:"375px",desktop:"1440px"},colors:{primary:{SoftRed:"hsl(7, 99%, 70%)",Yellow:"hsl(51, 100%, 49%)",DarkDesaturatedCyan:"hsl(167, 40%, 24%)",DarkBlue:"hsl(198, 62%, 26%)",DarkModerateCyan:"hsl(168, 34%, 41%)"},neutral:{veryDarkDesaturatedBlue:"hsl(212, 27%, 19%)",veryDarkGrayishBlue:"hsl(213, 9%, 39%)",darkGrayishBlue:"hsl(232, 10%, 55%)",grayishBlue:"hsl(210, 4%, 67%)",white:"hsl(0, 0%, 100%)"}},font:{fontSize:"18px",family:{barlow:{rules:"'Barlow', sans-serif"},fraunces:{rules:"'Fraunces', serif"}}}},p=j.c.div(i||(i=Object(y.a)(['\n   display: grid;\n   grid-template-columns: 1fr;\n   grid-template-rows: repeat(5, auto);\n   grid-template-areas:\n      "header"\n      "main"\n      "client"\n      "gallery"\n      "footer";\n\n   position: relative;\n   left: 50%;\n   transform: translateX(-50%);\n   width: ',";\n"])),(function(A){return A.theme.layout.desktop})),m=j.c.ul(o||(o=Object(y.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: flex-end;\n   padding: 35px 20px;\n   list-style: none;\n   color: ",";\n"])),(function(A){return A.theme.colors.neutral.white})),H=j.c.div(r||(r=Object(y.a)(["\n   flex-grow: 1;\n"]))),J=j.c.img.attrs((function(A){return{src:A.path}}))(g||(g=Object(y.a)(["\n   height: 33px;\n   margin-left: 20px;\n"]))),F=j.c.li(Q||(Q=Object(y.a)(["\n   margin: 0 25px;\n   cursor: pointer;\n   font-weight: 600;\n   font-size: 19px;\n   opacity: 0.8;\n   &:nth-last-of-type(1) {\n      font-size: 16px;\n      opacity: 1;\n      font-family: ",";\n      font-weight: 700;\n      text-transform: uppercase;\n      background: white;\n      color: black;\n      padding: 20px 30px;\n      border-radius: 50px 50px;\n   }\n"])),(function(A){return A.theme.font.family.fraunces.rules})),M=["About","Services","Projects","Contact"],w=t.p+"static/media/logo.4271b899.svg",U=t(0),O=function(){return Object(U.jsxs)(m,{children:[Object(U.jsx)(H,{children:Object(U.jsx)(J,{path:w})}),M.map((function(A){return Object(U.jsx)(F,{children:A},A)}))]})},b=j.c.ul(s||(s=Object(y.a)(["\n   grid-area: header;\n   position: relative;\n   width: 100%;\n   height: 800px;\n"]))),K=j.c.img.attrs((function(A){return{src:A.background}}))(c||(c=Object(y.a)(["\n   width: 100%;\n   position: absolute;\n   top: 0;\n   left: 0;\n   z-index: -5;\n"]))),Y=j.c.div(B||(B=Object(y.a)(["\n   display: inline-block;\n   position: relative;\n   top: 75px;\n   left: 50%;\n   transform: translateX(-50%);\n   color: ",";\n   font-family: ",";\n   font-weight: 900;\n   font-size: 55px;\n   text-transform: uppercase;\n   letter-spacing: 9px;\n"])),(function(A){return A.theme.colors.neutral.white}),(function(A){return A.theme.font.family.fraunces.rules})),S=j.c.img.attrs((function(A){return{src:A.path}}))(a||(a=Object(y.a)(["\n   display: inline-block;\n   position: absolute;\n   top: 355px;\n   left: 50%;\n   transform: translateX(-50%);\n"]))),T=t.p+"static/media/image-header.49b52ffa.jpg",R=t.p+"static/media/icon-arrow-down.979ef07a.svg",D=function(){return Object(U.jsxs)(b,{children:[Object(U.jsx)(K,{background:T}),Object(U.jsx)(O,{}),Object(U.jsx)(Y,{children:"we are creatives"}),Object(U.jsx)(S,{path:R})]})},W=j.c.div(l||(l=Object(y.a)(['\n   grid-area: main;\n   display: grid;\n   grid-template-columns: 1fr 1fr;\n   grid-template-rows: repeat(3, 600px);\n   grid-template-areas:\n      "tile1 picture1"\n      "picture2 tile2"\n      "picture3 picture4";\n']))),v=[null,"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAlgC0AMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQIDBAUGB//aAAgBAQAAAAD+whAqCgAAAAUlAAABYsAgAQKBFJQAAAUigAqCoABAAgABYoACUAoAAAFgAQAIAAsCwUAAUIoAAAAsJYgAsAoQUAAAAoAAACiCIAAAoAAAALCgAAAACQAsAAAqFAABZSWUAAAAM0gsFiwAFllAAAKJQAAAAIgACwAFJQAACiUAAAADNgAAAVLLFAABRFAAABSAyAABYBUUAAACkoABULACCCwAAFhQAWABZQAAAqAMgWAACglEUAAAoAAAACCAAACwKAAACgAAAACJUAABZYFCUAAACgAAACRUAAALCglAAAUSgAAADIAAAACkCgAAFAAAADIAAAAKHT3evv0uefDzeXzABUoAAAAMgsAAACx6Pse8RIznl4PBzBYKAAAADIAAAAF+t9fRCSJmTn4PnZAFAAAAFwAAAADX3voBCSJJnOeXzPKFAAAAAMiUAAAF+/7xYREkmZnHPxeFBQAAAAMgAAAB9f7ABESSZyxjl5vBAUAAAAMgAVAAO/6XVAiJGZM5zjHPz+KFSyiCgAAyCUAAA+97xRYiSZkmcznz48PKAoQUAAMqgAAAdf01KFSSJMzLOcY5cfPyVAWVCgADIAAhQH0ftCgIzJJJM5zjly4cYqKhQAADIAAAB9z3CghJJJJJic+XPhxgBRKAADIEUAAH6PqoAyjLKTOc458uPCUAoAAAyAigAC/pLQBDKSRmZxjnjhw5dgBUUAAMgIWKADX6G2hBkiSRM5zjnjhw4dOoACgAIgCBQANff1RYMkhJJM4mOeOXDhj2AABYoAyhSCoUAv3N0ohDKSMzOcZxjlw4c/ZuKACosFhchACgAfY7KBBJJGZJzzMcuXHhy9XpRSUACgjIALLFIofR9LQiTSJJJGc4xjPLly447e6FASgALJAAsAoHp9xRZmkiJmTGMY5Y5cuc6e+lIUABSIgLCywsoG/fbSCGZEkcs5xz555cpb9DZYFAAAyAsACgPX0tSpETKzM585jnjOOeLde7pQCgAAiUiosCgDffQJIZjMc888YmMTDV17O4BYoAAggABYKLvakyZzkzMYzzYmcSaut+r0gAFAAiAAAFBGlkiTGZnLm5WYnNq3Wunzvd9PQACgAyAAACg5YojOZhnGZiOcNXV1vr+e832fvdJQAoAMrABKAVKJ5+URmZxOeZEzC3WtXfTf5F1+l+j7AACgMgAABYBjzcs4mZjMxMZtKaut7314fj+/br7/0fcABQCQASgAFiOfm5YznGcTLKC01ve+m/g/C9Hbr19/6TqAFigMgAAAAZcvPyxjExmZSJVarr06T8Rjv27dun0/0OooAolMhFAAACST5PfOM85nMkiUrd3018L8137du3frr7n2FAAKMggoJQAJJPg/D/AEPo54znBlELq71fD+K3179u/btvt+l9YAFCXIEoJYoAJJPnfjuP1fuaxnESRkurb4vxnPt27du/bt1v0f0WgAKDJFiosWUABmOf4fx8MfZ+12zmRmIVPjflZ07de3ft37dd6/Se4AUlDIASwLAKQkn5n8/y8/Dn9H7H0+iIknL5H57wdOvXr07d+3ft16X6P6GgAssrJLKBLFIVCwkeP8T5+PLj5/Py9Ps9ffWePk8XgnXpvr06du3Xv369t76fpvQAKBIAioAApCJPzHwOXLly5cOHHjnK63ve99N77dO3Xv279emtfd+mAFRTMsFgCkCkCI8/4vxc+XPHPly44zm271reumunXr27d+vXrt9L7tAFRTMVAAAABCfL/IcuXPGeeefPGRbrW9b6b69uvfr16bez9FoAFDMARQAWCwRE+F+Z5884xnOcZzC3Wt63069evbr16V6v0XQCxQSQBKIoAFQSJ+e/PZ54mMzOZM0u7ve+vXtvr16Ho/SbACgxUAShKAAEJPz/AMDnnOcyTMkW6ut77b69Ou7Xt/QaBZYVFygSkFhSKAIIfF/O8piSZSBrV106dOnTpqp9j64AUlMCLCxYCgACBPn/AJ3x5kkkFXWtb31101Tp+g9QAWAyASywsFQoAgHH4XyMZiSrTV3vWumlr6v16AAFwCCwACygAgqeL4XgzclW3Vu9XSr7fudAKlEFwioAAAKACUjPh+R4slLbq6Wmvd9j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","data:image/jpeg;base64,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",null,t.p+"static/media/image-graphic-design.7ac8bdf0.jpg",t.p+"static/media/image-photography.104cf40b.jpg"],Z=[{id:1,backgroundIndex:0,text:{title:"Transform your brand",text:"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",button:"Learn more"}},{id:2,backgroundIndex:1,text:{title:"",text:"",button:""}},{id:3,backgroundIndex:2,text:{title:"",text:"",button:""}},{id:4,backgroundIndex:3,text:{title:"Stand out to the right audience",text:"Using a collaborative formula of designers, researchres, photographers, videograpgers, and copywriters, we'll build and extend your brand in digital places.",button:"Learn more"}},{id:5,backgroundIndex:4,text:{title:"Graphic Design",text:"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",button:""}},{id:6,backgroundIndex:5,text:{title:"Photography",text:"Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",button:""}}],L=function(){return Object(U.jsx)(W,{children:Z.map((function(A){var n=A.backgroundIndex,t=A.id,e=A.text;return Object(U.jsx)(q,{id:t,background:v[n],button:e.button,text:e.text,title:e.title},t)}))})},V=j.c.div(x||(x=Object(y.a)(["\n   color: ",";\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   background: ",";\n   &:nth-last-of-type(1) {\n      color: ",";\n   }\n   &:nth-last-of-type(2) {\n      color: ",";\n   }\n   &:nth-last-of-type(1),\n   &:nth-last-of-type(2) {\n      justify-content: flex-end;\n      padding-bottom: 30px;\n   }\n"])),(function(A){return A.theme.colors.neutral.veryDarkDesaturatedBlue}),(function(A){var n=A.background,t=A.theme;return n?"url(".concat(n,")"):t.colors.neutral.white}),(function(A){return A.theme.colors.primary.DarkBlue}),(function(A){return A.theme.colors.primary.DarkDesaturatedCyan})),X=j.c.div(f||(f=Object(y.a)(["\n   width: ",";\n   text-align: ",";\n"])),(function(A){return A.button?"64%":"50%"}),(function(A){return A.button?"left":"center"})),z=j.c.button(C||(C=Object(y.a)(["\n   position: relative;\n   color: ",";\n   background: transparent;\n   border: 0;\n   margin: 25px 0;\n   font-family: ",';\n   font-weight: 900;\n   text-transform: uppercase;\n   font-size: 16px;\n   letter-spacing: 1px;\n   z-index: 1;\n   &::after {\n      content: "";\n      position: absolute;\n      bottom: -4px;\n      border-radius: 5px 5px;\n      left: 50%;\n      transform: translateX(-50%);\n      height: 9px;\n      width: 110%;\n      opacity: 0.25;\n      z-index: -1;\n      background-color: ',";\n   }\n"])),(function(A){return A.theme.colors.neutral.veryDarkDesaturatedBlue}),(function(A){return A.theme.font.family.fraunces.rules}),(function(A){var n=A.theme;return 1===A.id?n.colors.primary.Yellow:n.colors.primary.SoftRed})),G=j.c.div(I||(I=Object(y.a)(["\n   margin: 25px 0;\n   font-weight: 600;\n   line-height: 1.5em;\n   opacity: ",";\n   font-size: ",";\n   text-align: ",";\n"])),(function(A){return A.button?"0.6":"0.8"}),(function(A){return A.button?"18px":"17px"}),(function(A){return A.button?"left":"center"})),N=j.c.div(E||(E=Object(y.a)(["\n   margin: 25px 0;\n   font-family: ",";\n   font-size: ",";\n   font-weight: 900;\n   line-height: 1.4em;\n"])),(function(A){return A.theme.font.family.fraunces.rules}),(function(A){return A.button?"40px":"30px"})),q=function(A){var n=A.background,t=A.button,e=A.id,i=A.text,o=A.title;return Object(U.jsx)(V,{background:n,children:Object(U.jsxs)(X,{button:t,children:[o?Object(U.jsx)(N,{button:t,children:o}):null,i?Object(U.jsx)(G,{button:t,children:i}):null,t?Object(U.jsx)(z,{id:e,children:t}):null]})})};var $=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(d.a,{children:[Object(U.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(U.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(U.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Fraunces:wght@400;700;900&display=swap",rel:"stylesheet"})]}),Object(U.jsxs)(j.a,{theme:P,children:[Object(U.jsx)(k,{}),Object(U.jsxs)(p,{children:[Object(U.jsx)(D,{}),Object(U.jsx)(L,{})]})]})]})},_=document.getElementById("root");h.a.render(Object(U.jsx)($,{}),_)}},[[27,1,2]]]);
//# sourceMappingURL=main.7a10cdf2.chunk.js.map