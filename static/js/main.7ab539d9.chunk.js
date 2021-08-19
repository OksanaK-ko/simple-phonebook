(this["webpackJsonpsimple-phonebook"]=this["webpackJsonpsimple-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__1bttx",ContactList_item:"ContactList_ContactList_item__3cbCM",button:"ContactList_button__3kuw6",enter:"ContactList_enter__2e0YZ",enterActive:"ContactList_enterActive__3dk_4",exit:"ContactList_exit__fbJiM",exitActive:"ContactList_exitActive__2LPXx"}},18:function(t,e,n){t.exports={label:"Filter_label__4VfMi",input:"Filter_input__1Fbum",form:"Filter_form__7iDuS"}},21:function(t,e,n){t.exports={alertBox:"Alert_alertBox__rYuDB",alert:"Alert_alert__28DCL"}},22:function(t,e,n){t.exports={container:"App_container__3gmjY",title:"App_title__2euct"}},24:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(8),s=n(26),u=n(11),l=n(27),b=n(28),m=n(32),j=n(31),d=n(13),h=n.n(d),f=n(5),p={addContact:Object(f.b)("contacts/Add",(function(t){return{payload:{id:h.a.generate(),name:t.name,number:t.number}}})),deleteContact:Object(f.b)("contacts/Delete"),changeFilter:Object(f.b)("contacts/changeFilter")},_=n(58),O=n(21),x=n.n(O),C=n(1),v=function(){return Object(C.jsx)("div",{className:x.a.alertBox,children:Object(C.jsx)("h2",{className:x.a.alert,children:"Contact already exists!"})})},g=(n(24),n(9)),N=n.n(g),L=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",error:!1},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(t){return t.name.toLowerCase()===e.currentTarget.elements[0].value.toLowerCase()})))return t.setState((function(){return{error:!0}})),void setTimeout((function(){t.setState((function(){return{error:!1}}))}),2500);t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(_.a,{in:this.state.error,appear:!0,classNames:"error",timeout:250,unmountOnExit:!0,children:Object(C.jsx)(v,{})}),Object(C.jsx)("form",{onSubmit:this.handleSubmit,children:Object(C.jsxs)("div",{className:N.a.form,children:[Object(C.jsxs)("label",{className:N.a.label,htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{className:N.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(C.jsxs)("label",{className:N.a.label,htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{className:N.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(C.jsx)("button",{className:N.a.button,type:"submit",children:"Add contact"})]})})]})}}]),n}(a.Component);L.defaultProps={type:"text",name:null};var F,y=Object(i.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(p.addContact(e))}}}))(L),k=n(14),A=n.n(k),I=n(59),S=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},w=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:S(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(p.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)(I.a,{component:"ul",className:A.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsx)(_.a,{timeout:250,classNames:A.a,children:Object(C.jsxs)("li",{className:A.a.ContactList_item,children:[a,": ",c,Object(C.jsx)("button",{className:A.a.button,onClick:function(){return n(e)},children:"Delete"})]})},e)}))})})),D=n(18),B=n.n(D),E=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(p.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(C.jsx)("div",{className:B.a.form,children:Object(C.jsxs)("label",{className:B.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:B.a.input,type:"text",value:e,onChange:n})]})})})),M=n(22),T=n.n(M),J=function(){return Object(C.jsxs)("div",{className:T.a.container,children:[Object(C.jsx)(_.a,{in:!0,appear:!0,classNames:"fade",timeout:500,children:Object(C.jsx)("h1",{className:T.a.title,children:"Phonebook"})}),Object(C.jsx)(y,{}),Object(C.jsx)(_.a,{in:!0,classNames:"fade",timeout:500,unmountOnExit:!0,children:Object(C.jsx)(E,{})}),Object(C.jsx)(_.a,{in:!0,classNames:"fade",timeout:250,unmountOnExit:!0,children:Object(C.jsx)(w,{})})]})},P=n(17),Y=n(29),V=n.n(Y),z=n(6),H=n(30),X=n.n(H),Z=n(2),q=Object(f.c)([],(F={},Object(u.a)(F,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(u.a)(F,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),G=Object(f.c)("",Object(u.a)({},p.changeFilter,(function(t,e){return e.payload}))),K=Object(Z.b)({items:q,filter:G}),Q={key:"contacts",storage:X.a,blacklist:["filter"]},R=[].concat(Object(P.a)(Object(f.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[V.a]),U=Object(f.a)({reducer:{contacts:Object(z.g)(Q,K)},middleware:R,devTools:!1}),W={store:U,persistor:Object(z.h)(U)};n(55),n(56);console.log(W),o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(i.a,{store:W.store,children:Object(C.jsx)(s.a,{loading:null,persistor:W.persistor,children:Object(C.jsx)(J,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={label:"ContactForm_label__1HLc4",form:"ContactForm_form__2SkAv",input:"ContactForm_input__3gFB8",button:"ContactForm_button__3B6mV"}}},[[57,1,2]]]);
//# sourceMappingURL=main.7ab539d9.chunk.js.map