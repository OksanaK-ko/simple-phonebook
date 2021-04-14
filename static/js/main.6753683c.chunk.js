(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__iYJYk",ContactList_item:"ContactList_ContactList_item__heW7m",button:"ContactList_button__aTTVE",enter:"ContactList_enter__nt9Z1",enterActive:"ContactList_enterActive__2SWY7",exit:"ContactList_exit__mLv5D",exitActive:"ContactList_exitActive__2Qus0"}},18:function(t,e,n){t.exports={label:"Filter_label__253fE",input:"Filter_input__29Koh",form:"Filter_form__3bs4J"}},23:function(t,e,n){t.exports={alertBox:"Alert_alertBox__3_7_M",alert:"Alert_alert__1jaFd"}},24:function(t,e,n){t.exports={container:"App_container__EljwE",title:"App_title__2Dfpf"}},27:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(8),s=n(29),l=n(11),u=n(30),b=n(31),m=n(35),j=n(34),d=n(13),h=n.n(d),f=n(5),p={addContact:Object(f.b)("contacts/Add",(function(t){return{payload:{id:h.a.generate(),name:t.name,number:t.number}}})),deleteContact:Object(f.b)("contacts/Delete"),changeFilter:Object(f.b)("contacts/changeFilter")},_=n(59),O=n(23),x=n.n(O),C=n(1),v=function(){return Object(C.jsx)("div",{className:x.a.alertBox,children:Object(C.jsx)("h2",{className:x.a.alert,children:"Contact already exists!"})})},g=(n(27),n(9)),N=n.n(g),L=function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",error:!1},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(t){return t.name.toLowerCase()===e.currentTarget.elements[0].value.toLowerCase()})))return t.setState((function(){return{error:!0}})),void setTimeout((function(){t.setState((function(){return{error:!1}}))}),2500);t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(_.a,{in:this.state.error,appear:!0,classNames:"error",timeout:250,unmountOnExit:!0,children:Object(C.jsx)(v,{})}),Object(C.jsx)("form",{onSubmit:this.handleSubmit,children:Object(C.jsxs)("div",{className:N.a.form,children:[Object(C.jsxs)("label",{className:N.a.label,htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{className:N.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(C.jsxs)("label",{className:N.a.label,htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{className:N.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(C.jsx)("button",{className:N.a.button,type:"submit",children:"Add contact"})]})})]})}}]),n}(a.Component);L.defaultProps={type:"text",name:null};var F,y=Object(i.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(p.addContact(e))}}}))(L),I=n(14),A=n.n(I),w=n(60),S=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(i.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:S(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(p.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)(w.a,{component:"ul",className:A.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsx)(_.a,{timeout:250,classNames:A.a,children:Object(C.jsxs)("li",{className:A.a.ContactList_item,children:[a,": ",c,Object(C.jsx)("button",{className:A.a.button,onClick:function(){return n(e)},children:"Delete"})]})},e)}))})})),E=n(18),D=n.n(E),T=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChangeFilter:function(e){return t(p.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(C.jsx)("div",{className:D.a.form,children:Object(C.jsxs)("label",{className:D.a.label,children:["Find contacts by name",Object(C.jsx)("input",{className:D.a.input,type:"text",value:e,onChange:n})]})})})),B=n(24),J=n.n(B),Y=function(){return Object(C.jsxs)("div",{className:J.a.container,children:[Object(C.jsx)(_.a,{in:!0,appear:!0,classNames:"fade",timeout:500,children:Object(C.jsx)("h1",{className:J.a.title,children:"Phonebook"})}),Object(C.jsx)(y,{}),Object(C.jsx)(_.a,{in:!0,classNames:"fade",timeout:500,unmountOnExit:!0,children:Object(C.jsx)(T,{})}),Object(C.jsx)(_.a,{in:!0,classNames:"fade",timeout:250,unmountOnExit:!0,children:Object(C.jsx)(k,{})})]})},M=n(17),P=n(32),W=n.n(P),Z=n(6),q=n(33),z=n.n(q),K=n(2),Q=Object(f.c)([],(F={},Object(l.a)(F,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(M.a)(t),[n])})),Object(l.a)(F,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),R=Object(f.c)("",Object(l.a)({},p.changeFilter,(function(t,e){return e.payload}))),V=Object(K.c)({items:Q,filter:R}),G={key:"contacts",storage:z.a,blacklist:["filter"]},H=[].concat(Object(M.a)(Object(f.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[W.a]),U=Object(f.a)({reducer:{contacts:Object(Z.g)(G,V)},middleware:H,devTools:!1}),X={store:U,persistor:Object(Z.h)(U)};n(56),n(57);console.log(X),o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(i.a,{store:X.store,children:Object(C.jsx)(s.a,{loading:null,persistor:X.persistor,children:Object(C.jsx)(Y,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={label:"ContactForm_label__1SbIR",form:"ContactForm_form__1jlLw",input:"ContactForm_input__oddZd",button:"ContactForm_button__6OAqo"}}},[[58,1,2]]]);
//# sourceMappingURL=main.6753683c.chunk.js.map