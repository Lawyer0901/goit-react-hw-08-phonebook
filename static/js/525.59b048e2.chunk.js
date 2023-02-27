"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[525],{3309:function(n,e,r){r.d(e,{Dx:function(){return m},HS:function(){return d},II:function(){return x},__:function(){return p},l0:function(){return l}});var t,o,a,i,c,s=r(168),u=r(7691),l=u.ZP.form(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50vw;\n  button {\n    width: 190px;\n    margin: 0 auto;\n  }\n"]))),p=u.ZP.label(o||(o=(0,s.Z)(["\n  display: block;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),x=u.ZP.input(a||(a=(0,s.Z)(["\n  padding: ","px;\n  margin-bottom: ","px;\n  margin-left: ","px;\n  border: ",";\n  border-radius: ",";\n  outline: none;\n  transition: transform 250ms linear, border-color 250ms linear,\n    color 250ms linear;\n  + button {\n    width: 190px;\n    margin: 0 auto ","px;\n  }\n  :focus,\n  :hover,\n  :focus-visible {\n    color: ",";\n    border-color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.primary})),m=u.ZP.h1(i||(i=(0,s.Z)(["\n  color: #1976d2;\n  border-color: ",";\n"])),(function(n){return n.theme.colors.primary})),d=u.ZP.button(c||(c=(0,s.Z)(["\n  background-color: #c2fbd7;\n  border-radius: 100px;\n  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,\n    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,\n    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,\n    rgba(44, 187, 99, 0.15) 0 16px 32px;\n  color: green;\n  cursor: pointer;\n  display: inline-block;\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\n  padding: 7px 20px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 250ms;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,\n      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,\n      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,\n      rgba(44, 187, 99, 0.25) 0 16px 32px;\n    transform: scale(1.05) rotate(-1deg);\n  }\n"])))},9525:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,o,a,i,c,s,u=r(9439),l=r(2791),p=r(3309),x=r(9434),m=r(4554),d=r(2962),f=function(n){return n.contacts.items},b=r(184),h=function(){var n=(0,l.useState)(""),e=(0,u.Z)(n,2),r=e[0],t=e[1],o=(0,l.useState)(""),a=(0,u.Z)(o,2),i=a[0],c=a[1],s=(0,x.I0)(),h=(0,x.v9)(f),g=function(n){var e=n.target,r=e.name,o=e.value;"userName"===r?t(o):"userNumber"===r&&c(o)};return(0,b.jsx)(m.Z,{component:"div",sx:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:300,height:300,backgroundColor:"violet"},children:(0,b.jsxs)(p.l0,{onSubmit:function(n){n.preventDefault();var e={name:r,number:i},o=h.some((function(n){return n.name===e.name}));null===e||o?alert("".concat(e.name," is already in contacts")):(s((0,d.uK)(e)),t(""),c(""),console.log(e))},children:[(0,b.jsxs)(p.__,{children:["Name",(0,b.jsx)(p.II,{type:"text",name:"userName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:g,value:r})]}),(0,b.jsxs)(p.__,{children:["Number",(0,b.jsx)(p.II,{type:"tel",name:"userNumber",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:g})]}),(0,b.jsx)(p.HS,{children:"Add Contact"})]})})},g=r(168),j=r(7691),v=(j.ZP.p(t||(t=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),j.ZP.span(o||(o=(0,g.Z)(["\n  /* display: block; */\n  color: ",";\n"])),(function(n){return n.theme.colors.red})),j.ZP.td(a||(a=(0,g.Z)(["\n  cursor: pointer;\n  padding: ","px;\n  outline: "," ",";\n  transition: color 250ms linear, background-color 250ms linear,\n    transform 250ms linear;\n  :hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundTableHead}))),Z=j.ZP.table(i||(i=(0,g.Z)(["\n  width: 70%;\n  text-align: center;\n"]))),y=j.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),k=j.ZP.button(s||(s=(0,g.Z)(["\n  /* CSS */\n  background-color: #c2fbd7;\n  border-radius: 100px;\n  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,\n    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,\n    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,\n    rgba(44, 187, 99, 0.15) 0 16px 32px;\n  color: green;\n  cursor: pointer;\n  display: inline-block;\n  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;\n  padding: 7px 20px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 250ms;\n  border: 0;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,\n      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,\n      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,\n      rgba(44, 187, 99, 0.25) 0 16px 32px;\n    transform: scale(1.05) rotate(-1deg);\n  }\n"])));function C(n){var e=n.name,r=n.phone,t=n.onClick;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("tbody",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)(v,{children:e}),(0,b.jsx)(v,{children:r}),(0,b.jsx)(v,{children:(0,b.jsx)(k,{onClick:t,children:"Delete contact"})})]})})})}var w,P,I=function(n){return n.filter.filter};function _(){var n=(0,x.v9)(f),e=(0,x.v9)(I),r=(0,x.I0)(),t=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,l.useEffect)((function(){r((0,d.yF)())}),[r]),n.length>0?(0,b.jsx)(y,{children:(0,b.jsxs)(Z,{children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)(v,{children:"Contact Name"}),(0,b.jsx)(v,{children:"Contact number"}),(0,b.jsx)(v,{children:"Delete Contact"})]})}),t.map((function(n){return(0,b.jsx)(C,{name:n.name,phone:n.number,onClick:function(){return r((0,d.GK)(n.id))}},n.id)}))]})}):(0,b.jsx)("p",{children:"There is no contact"})}var N=j.ZP.label(w||(w=(0,g.Z)(["\n  display: block;\n  margin-bottom: ","px;\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),S=j.ZP.input(P||(P=(0,g.Z)(["\n  padding: ","px;\n  margin-bottom: ","px;\n  margin-left: ","px;\n  border: ",";\n  border-radius: ",";\n  outline: none;\n  transition: transform 250ms linear, border-color 250ms linear,\n    color 250ms linear;\n  + button {\n    width: 190px;\n    margin: 0 auto ","px;\n  }\n  :focus,\n  :hover,\n  :focus-visible {\n    color: ",";\n    border-color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.primary})),z=r(6390);function A(){var n=(0,x.v9)(I),e=(0,x.I0)();return(0,b.jsxs)(N,{htmlFor:"",children:["Finde Contact by Name",(0,b.jsx)(S,{type:"text",name:"filter",onChange:function(n){var r=n.target.value;e((0,z.W1)(r))},value:n})]})}var F=r(9423),D=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(F.W2,{children:[(0,b.jsx)(h,{}),(0,b.jsx)(A,{}),(0,b.jsx)(_,{})]})})}}}]);
//# sourceMappingURL=525.59b048e2.chunk.js.map