(window["webpackJsonpreact-noteful"]=window["webpackJsonpreact-noteful"]||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),l=n.n(o),c=n(3),s=(n(30),n(19)),i=n(15),u=n(11),m=(n(31),{API_FOLDERS:"https://my-json-server.typicode.com/asktami/react-router-context-noteful/folders",API_NOTES:"https://my-json-server.typicode.com/asktami/react-router-context-noteful/notes"}),d=r.a.createContext({notes:[],folders:[],deleteNote:function(){},addNote:function(){},addFolder:function(){},addErrorNotes:function(){}}),h=function(e){return r.a.createElement("header",null,r.a.createElement("span",null,r.a.createElement("h1",null,r.a.createElement(c.b,{to:"/"},"Noteful"))),r.a.createElement("span",null,"a React app"))},f=function(e){return r.a.createElement("footer",null,"\xa9 2019"," ",r.a.createElement("a",{href:"http://www.asktami.com",target:"_blank",rel:"noopener noreferrer"},"Tami Williams"))},p=n(6),E=n(7),b=n(9),v=n(8),O=n(10),j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,"Could not display this folder."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),y=function(e){var t=Object(a.useContext)(d).folders;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},r.a.createElement("span",null,r.a.createElement("h2",null,"Folders")),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(c.c,{to:"/add-folder"},r.a.createElement("button",{className:"btn-add"},"+")))),r.a.createElement("ul",null,t.map(function(t){return r.a.createElement("li",{key:t.id,className:t.id===e.match.params.folderId?" active":null},r.a.createElement(j,null,r.a.createElement(c.c,{to:"/folder/".concat(t.id)},r.a.createElement("span",{role:"img","aria-label":"Folder"},"\ud83d\udcc2"),"\xa0",t.name)))})))},g=function(e){var t=Object(a.useContext)(d),n=t.folders,o=t.notes,l=o?o.find(function(t){return t.id===e.match.params.noteId}):"";if(!l)return"Sorry, no note found.";var c=l.folderId,s=n.filter(function(e){return e.id===c});return r.a.createElement(r.a.Fragment,null,s?s.map(function(e){return r.a.createElement("div",{className:"header-container",key:e.id},r.a.createElement("span",null,r.a.createElement("h2",null,e.name)))}):null,r.a.createElement("br",null),r.a.createElement("button",{className:"btn-save",onClick:e.history.goBack},"Go Back"))},C=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h2",null,"Could not display this note."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component),N=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).handleClickDelete=function(e){e.preventDefault();var t=n.props.note.id;fetch(m.API_NOTES+"/".concat(t),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){throw e})}).then(function(e){n.context.deleteNote(t),n.props.location.pathname.includes("/note/")&&n.props.history.push("/")}).catch(function(e){n.context.addErrorNotes(e)})},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"note-item"},this.context.notesError&&r.a.createElement("p",{class:"error"},this.context.errorNotes.value),r.a.createElement(c.c,{to:{pathname:"/note/".concat(this.props.note.id),props:this.props}},r.a.createElement("h3",null,this.props.note.name)),r.a.createElement("div",{className:"button-container"},r.a.createElement("span",null,"Modified on"," ",r.a.createElement("span",{className:"note-datemod"},this.props.note.modified?this.props.note.modified.split("T",1)[0]:"")),r.a.createElement("span",null,r.a.createElement("button",{className:"btn-delete",onClick:this.handleClickDelete},"-"))))}}]),t}(r.a.Component);N.contextType=d;var S=function(e){var t=Object(a.useContext)(d).notes,n=e.match.params.folderId?t.filter(function(t){return t.folderId===e.match.params.folderId}):t;return console.log("NoteList props.match.params.folderId = ",e.match.params.folderId),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},r.a.createElement("span",null,r.a.createElement("h2",null,"Notes")),"\xa0\xa0",r.a.createElement("span",null,r.a.createElement(c.c,{to:{pathname:"/add-note",state:{folderId:e.match.params.folderId}}},r.a.createElement("button",{className:"btn-add"},"+")))),n.length>0?n.map(function(t){return r.a.createElement("article",{key:t.id},r.a.createElement(C,null,r.a.createElement("div",{className:"note"},r.a.createElement(N,Object.assign({note:t},e)))))}):r.a.createElement("article",{className:"no-border"},r.a.createElement("div",{className:"note"},"No notes in this folder.")))},k=function(e){var t=Object(a.useContext)(d).notes.find(function(t){return t.id===e.match.params.noteId})||{};return r.a.createElement("article",null,r.a.createElement("div",{className:"note"},r.a.createElement(N,Object.assign({},e,{note:t})),r.a.createElement("p",{className:"note-content"},t.content)))},w=n(13);function I(e){return e.message?r.a.createElement("div",{className:"error"},e.message):r.a.createElement(r.a.Fragment,null)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var F=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={apiError:null,formValid:!1,errorCount:null,name:"",errors:{name:"You must enter a folder name"}},n.updateErrorCount=function(){var e=n.state.errors,t=0;Object.values(e).forEach(function(e){e.length>0&&t++}),n.setState({errorCount:t});var a=0===t;n.setState({formValid:a})},n.validateField=function(e,t){var a="";"name"===e&&(0===t.trim().length?a="Folder name is required":t.trim().length<3&&(a="Folder name must be at least 3 characters long"));var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state).errors;r[e]=a,n.setState({errors:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r.trim())),n.validateField(a,r),n.updateErrorCount()},n.handleClickCancel=function(){n.props.history.push("/")},n.handleSubmit=function(e){if(e.preventDefault(),!(n.state.errorCount>0)){var t=e.target.name,a={name:t.value};n.setState({apiError:null}),fetch(m.API_FOLDERS,{method:"POST",body:JSON.stringify(a),headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){throw e})}).then(function(e){t.value="",n.context.addFolder(e),n.props.history.push("/")}).catch(function(e){n.setState({apiError:e})})}},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state.errors;return this.state.apiError?r.a.createElement("p",{class:"error"},this.state.apiError):r.a.createElement("form",{className:"addFolderForm",onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"New Folder"),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",name:"name",required:!0,"aria-required":"true","aria-invalid":"true",onChange:this.handleChange}),e.name.length>0&&r.a.createElement(I,{message:e.name}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-cancel",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{className:"btn-save",disabled:!1===this.state.formValid},"Save Folder")),null!==this.state.errorCount?r.a.createElement("p",{className:"form-status"},"Form is ",this.state.formValid?"complete  \u2705":"incomplete  \u274c"):null)}}]),t}(r.a.Component);F.contextType=d;var P=F;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var T=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(b.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={apiError:null,formValid:!1,errorCount:null,folderId:n.props.location.state.folderId||"",name:"",content:"",errors:{folderId:!n.props.location.state.folderId&&"You must select a folder",name:"You must enter a note title",content:"You must enter a description"}},n.updateErrorCount=function(){var e=n.state.errors,t=0;Object.values(e).forEach(function(e){e.length>0&&t++}),n.setState({errorCount:t});var a=0===t;n.setState({formValid:a})},n.validateField=function(e,t){var a="";"name"===e&&(0===t.length?a="Note title is required":t.length<3&&(a="Note title must be at least 3 characters long")),"folderId"===e&&0===t.length&&(a="You must select a folder"),"content"===e&&(0===t.length?a="You must enter a description":t.length<5&&(a="The description must be at least 5 characters long"));var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach(function(t){Object(w.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n.state).errors;r[e]=a,n.setState({errors:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r.trim())),n.validateField(a,r.trim()),n.updateErrorCount()},n.handleClickCancel=function(){n.props.history.push("/")},n.handleSubmit=function(e){if(e.preventDefault(),!(n.state.errorCount>0)){var t=e.target,a=t.folderId,r=t.name,o=t.content,l={folderId:a.value,name:r.value,content:o.value,modified:new Date};n.setState({apiError:null}),fetch(m.API_NOTES,{method:"POST",body:JSON.stringify(l),headers:{"content-type":"application/json"}}).then(function(e){return e.ok?e.json():e.json().then(function(e){throw e})}).then(function(e){a.value="",r.value="",o.value="",n.context.addNote(e),n.props.history.push("/")}).catch(function(e){n.setState({apiError:e})})}},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state.errors,t=this.context.folders;return this.state.apiError?r.a.createElement("p",{class:"error"},this.state.apiError):r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"New Note"),r.a.createElement("label",{htmlFor:"folderId"},"Folder"),r.a.createElement("select",{id:"folderId",name:"folderId",required:!0,value:this.state.folderId,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select a folder"),t.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),e.folderId.length>0&&r.a.createElement(I,{message:e.folderId}),r.a.createElement("label",{htmlFor:"name"},"Title"),r.a.createElement("input",{type:"text",id:"name",name:"name",onChange:this.handleChange}),e.name.length>0&&r.a.createElement(I,{message:e.name}),r.a.createElement("label",{htmlFor:"content"},"Description"),r.a.createElement("textarea",{id:"content",name:"content",onChange:this.handleChange}),e.content.length>0&&r.a.createElement(I,{message:e.content}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn-cancel",onClick:this.handleClickCancel},"Cancel")," ",r.a.createElement("button",{className:"btn-save",disabled:!1===this.state.formValid},"Save Note")),null!==this.state.errorCount?r.a.createElement("p",{className:"form-status"},"Form is ",this.state.formValid?"complete  \u2705":"incomplete  \u274c"):null)}}]),t}(r.a.Component);T.contextType=d;var A=[{path:"/",exact:!0,header:h,aside:y,section:S},{path:"/folder/:folderId",exact:!0,header:h,aside:y,section:S},{path:"/note/:noteId",exact:!0,header:h,aside:g,section:k},{path:"/add-folder",exact:!0,header:h,aside:null,section:P},{path:"/add-note",exact:!0,header:h,aside:null,section:T},{path:"/:any/:any/:any",exact:!0,header:h,aside:function(){return null},section:function(){return"Do not edit the  url!"}}],V=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)([]),p=Object(i.a)(c,2),E=p[0],b=p[1],v=Object(a.useState)(null),O=Object(i.a)(v,2),j=O[0],y=O[1],g=Object(a.useState)(null),C=Object(i.a)(g,2),N=C[0],S=C[1];Object(a.useEffect)(function(){fetch(m.API_FOLDERS,{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)throw new Error(e.status);return e.json()}).then(l).catch(function(e){return y(e)}),fetch(m.API_NOTES,{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){if(!e.ok)throw new Error(e.status);return e.json()}).then(b).catch(function(e){return S(e)})},[]);var k={notes:E,folders:o,deleteNote:function(e){var t=E.filter(function(t){return t.id!==e});b(t)},addNote:function(e){b([].concat(Object(s.a)(E),[e]))},addFolder:function(e){l([].concat(Object(s.a)(o),[e]))},addErrorNotes:function(e){S(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(d.Provider,{value:k},r.a.createElement("main",null,r.a.createElement("aside",null,j&&r.a.createElement("p",{class:"error"},j.value),A.map(function(e){var t=e.path,n=e.exact,a=e.aside;return r.a.createElement(u.a,{key:t,path:t,exact:n,component:a})})),r.a.createElement("section",null,N&&r.a.createElement("p",{class:"error"},N.value),A.map(function(e){var t=e.path,n=e.exact,a=e.section;return r.a.createElement(u.a,{key:t,path:t,exact:n,component:a})})))),r.a.createElement(f,null))};l.a.render(r.a.createElement(c.a,{basename:"/react-router-context-noteful"},r.a.createElement(V,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.375c48ea.chunk.js.map