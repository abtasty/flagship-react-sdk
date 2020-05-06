(this["webpackJsonpreact-dev-demo"]=this["webpackJsonpreact-dev-demo"]||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(26),i=a.n(o),r=(a(95),a(6)),c=a(7),s=(a(96),a(8)),d=a(151),m=a(149),u=a(83),f=a(157),h=a(78),g=a(148);f.a.registerLanguage("jsx",h.a);var p=function(e){var t=e.className,a=e.codeString;return l.a.createElement("div",{className:t},l.a.createElement(f.a,{language:"javascript",style:g.a,showLineNumbers:!0},a))},v=a(150),b=a(17),E=a(153),y=a(84),C=a(16),S=a(15),F=a.n(S),k=function(){var e=Object(n.useContext)(ae),t=e.currentSettings,a=e.setSettings,o=l.a.useState(!1),i=Object(c.a)(o,2),s=i[0],d=i[1];return l.a.createElement(b.a,{initialValues:{envId:t.envId,settings:t.sdkConfig},validate:function(e){var t={};return e.envId||(t.envId="Required"),t},onSubmit:function(e,n){(0,n.setSubmitting)(!1),a(Object(r.a)({},t,{envId:e.envId,sdkConfig:Object(r.a)({},e.settings)}))}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.setFieldValue),o=e.values,i=e.touched,r=(e.isValid,e.errors);return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"envIdForm"},l.a.createElement(E.a.Label,null,"Environment ID"),l.a.createElement(E.a.Control,{type:"text",name:"envId",value:o.envId,onChange:a,isValid:i.envId&&!r.envId,isInvalid:!!r.envId}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},r.envId)),l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,'"',l.a.createElement("i",null,"config"),'" prop'),l.a.createElement(C.a,{id:"settings",placeholder:o.settings,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,a=e.jsObject;t?d(!0):(n("settings",a||{},!0),d(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:s,variant:"secondary",type:"submit",style:{cursor:s?"not-allowed":"pointer"}},"Apply change")))}))},O=function(){var e=Object(n.useContext)(ae),t=e.currentSettings,a=e.setSettings,o=l.a.useState(!1),i=Object(c.a)(o,2),s=i[0],d=i[1];return l.a.createElement(b.a,{initialValues:{vId:t.visitorData.id,vContext:t.visitorData.context},validate:function(e){var t={};return e.vId||(t.vId="Required"),t},onSubmit:function(e,n){(0,n.setSubmitting)(!1),a(Object(r.a)({},t,{visitorData:{id:e.vId,context:e.vContext||{}}}))}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.setFieldValue),o=e.values,i=e.touched,r=(e.isValid,e.errors);return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"validationFormik01"},l.a.createElement(E.a.Label,null,"Visitor ID"),l.a.createElement(E.a.Control,{type:"text",name:"vId",value:o.vId,onChange:a,isValid:i.vId&&!r.vId,isInvalid:!!r.vId}),l.a.createElement(E.a.Control.Feedback,{type:"invalid"},r.vId)),l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"validationFormik02"},l.a.createElement(E.a.Label,null,"Visitor Context"),l.a.createElement(C.a,{id:"a_unique_id",placeholder:o.vContext,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,a=e.jsObject;t?d(!0):(n("vContext",a||{},!0),d(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:s,variant:"secondary",type:"submit",style:{cursor:s?"not-allowed":"pointer"}},"Apply change")))}))},j=a(33),I={envId:"bn1ab7m56qolupi5sa0g",sdkConfig:{fetchNow:!0,enableConsoleLogs:!0,enableErrorLayout:!0,nodeEnv:"production"},visitorData:{id:"test-vid",context:{isAuth:!0,isVip:!1}},sandbox:{config:{fetchNow:!0,enableConsoleLogs:!0,enableErrorLayout:!0},envId:["bn1ab7m56qolupi5sa0g_1","bn1ab7m56qolupi5sa0g_2"],nodeEnv:["production","development"],visitorId:["test-vid","test-vid_2","test-vid_3"]}},x=function(){var e=Object(n.useContext)(ae),t=e.currentSettings,a=e.setSettings,o=l.a.useState(Object(r.a)({},t)),i=Object(c.a)(o,2),s=i[0],d=i[1],m=function(e){var t=JSON.parse(e.currentTarget.parentElement.innerText),a=Object(r.a)({},s);if(e.currentTarget.checked)d(Object(r.a)({},s,{visitorData:Object(r.a)({},s.visitorData,{context:Object(r.a)({},s.visitorData.context,{},t)})}));else{var n=Object.keys(t)[0];d(Object(r.a)({},s,{visitorData:Object(r.a)({},s.visitorData,{context:Object.entries(a.visitorData.context).reduce((function(e,t){var a=Object(c.a)(t,2),l=a[0],o=a[1];return l===n?e:Object(r.a)({},e,Object(j.a)({},l,o))}),{})})}))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"initForm.ControlSelect2",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},l.a.createElement("div",null,"visitorId: "),l.a.createElement(E.a.Control,{as:"select",onChange:function(e){return d(Object(r.a)({},s,{visitorData:Object(r.a)({},s.visitorData,{id:e.target.value})}))}},l.a.createElement("option",{key:t.visitorData.id},t.visitorData.id),I.sandbox.visitorId.filter((function(e){return e!=t.visitorData.id})).map((function(e){return l.a.createElement("option",{key:e},e)})))),l.a.createElement(E.a.Group,{controlId:"initForm.ControlSelect3"},l.a.createElement(E.a.Label,null,"visitor context"),Object.entries(Object(r.a)({},I.visitorData.context,{},s.visitorData.context)).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return l.a.createElement(E.a.Check,{key:a,type:"checkbox",id:"default-".concat(a),checked:s.visitorData.context.hasOwnProperty(a),onChange:m,label:JSON.stringify(Object(j.a)({},a,n))})})))),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(y.a,{variant:"secondary",onClick:function(){return a(Object(r.a)({},s))}},"Apply change")))},w=function(){var e=Object(n.useContext)(ae),t=e.currentSettings,a=e.setSettings,o=(e.QA,l.a.useState(Object(r.a)({},t))),i=Object(c.a)(o,2),s=i[0],d=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"initForm.Control1.1",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},l.a.createElement("div",null,"envId: "),l.a.createElement(E.a.Control,{as:"select",onChange:function(e){return d(Object(r.a)({},s,{envId:e.target.value}))}},l.a.createElement("option",{key:s.envId},s.envId),I.sandbox.envId.filter((function(e){return e!=s.envId})).map((function(e){return l.a.createElement("option",{key:e},e)})))),l.a.createElement(E.a.Group,{controlId:"initForm.Control1.11",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},l.a.createElement("div",null,"nodeEnv: "),l.a.createElement(E.a.Control,{as:"select",onChange:function(e){return d(Object(r.a)({},s,{sdkConfig:Object(r.a)({},s.sdkConfig,{nodeEnv:e.target.value})}))}},l.a.createElement("option",{key:s.sdkConfig.nodeEnv},s.sdkConfig.nodeEnv),I.sandbox.nodeEnv.filter((function(e){return e!=s.sdkConfig.nodeEnv})).map((function(e){return l.a.createElement("option",{key:e},e)})))),Object.keys(Object(r.a)({},I.sandbox.config,{},s.sdkConfig)).filter((function(e){return"nodeEnv"!=e})).map((function(e){return l.a.createElement(E.a.Group,{controlId:e+"Form"},l.a.createElement(E.a.Check,{type:"checkbox",checked:!!s.sdkConfig[e]||!1,onChange:function(t){var a=Object(r.a)({},s,{sdkConfig:Object(r.a)({},s.sdkConfig,Object(j.a)({},e,t.currentTarget.checked))});"boolean"!=typeof s.sdkConfig[e]&&delete a.sdkConfig[e],d(a)},label:"".concat(e,"=").concat(s.sdkConfig[e])}))}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement(y.a,{variant:"secondary",onClick:function(){return a(Object(r.a)({},s))}},"Apply change")),l.a.createElement("div",null,"Since we have set those settings:"),l.a.createElement(p,{className:"mv3",codeString:"".concat(JSON.stringify(t.sdkConfig,null,2))}),l.a.createElement("div",null,"When you change those values, you can notice the behavior of the SDK, on logs & network."),l.a.createElement("div",{className:"mb5"},"It will impact the output of Flagship SDK Hooks as well, take a look below."))},N=function(){var e="initialization",t=Object(n.useContext)(ae),a=t.currentSettings,o=(t.setSettings,t.QA),i=l.a.useState(Object(r.a)({},a)),s=Object(c.a)(i,2);s[0],s[1];return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:e}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,e),l.a.createElement("p",null,"The ",l.a.createElement("b",null,e)," is proceed with"," ",l.a.createElement("b",null,"FlagshipProvider"),". In this demo app, it is plugged like so:"),l.a.createElement(p,{className:"mv3",codeString:"import React from 'react';\nimport { FlagshipProvider } from \"@flagship.io/react-sdk\";\n\nconst App: React.FC = () => (\n  <>\n      <FlagshipProvider\n      envId={".concat(a.envId,"}\n      config={\n        ").concat(JSON.stringify(a.sdkConfig,null,2),"\n      }\n      visitorData={\n        ").concat(JSON.stringify(a.visitorData,null,2),'\n    }\n      onInitStart={() => {\n        console.log("init start");\n      }}\n      onInitDone={() => {\n        console.log("init done");\n      }}\n      onUpdate={({ fsModifications }) => {\n        console.log(\n            \'React SDK updated with modifications:\' + JSON.stringify(fsModifications)\n        );\n      }}\n      loadingComponent={\n        <Container className="mt3">\n          <Row>\n            <Col xs={12}>Loading Flagship React SDK...</Col>\n          </Row>\n        </Container>\n      }\n    >\n      <Header />\n      <AppContainer />\n    </FlagshipProvider>\n  </>\n);          ')}),l.a.createElement("p",null,"To understand impact of each props, you can change some value dynamically here:"," "),l.a.createElement("h3",{id:"playWithConfig",style:{borderBottom:"1px solid grey",marginBottom:"16px",paddingBottom:"8px"}},"1 - Playing with ",l.a.createElement("i",null,"config")),o.enabled?l.a.createElement(k,null):l.a.createElement(w,null),l.a.createElement("h3",{style:{borderBottom:"1px solid grey",marginBottom:"16px",paddingBottom:"8px"}},"2 - Playing with ",l.a.createElement("i",null,"visitorData")),o.enabled?l.a.createElement(O,null):l.a.createElement(x,null))))},A=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];Object(s.useFsActivate)(["btnColor","otherKey1","otherKey2"],[a]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Use ",l.a.createElement("b",null,"useFsActivate")," hook to trigger activation of a modification when needed:"),l.a.createElement(p,{className:"mv3",codeString:"const [toggle, setToggle] = React.useState(false);\nuseFsActivate(['btnColor', 'otherKey1', 'otherKey2'], [toggle]);\n\n// {...}\n\n<Button\nvariant=\"secondary\"\nonClick={() => setToggle(!toggle)}\n>\n    Trigger activate\n</Button>"}),l.a.createElement(y.a,{variant:"secondary",onClick:function(){return n(!a)}},"Trigger activate"),l.a.createElement("div",{className:"mv3"},l.a.createElement("p",null,"In this example, we're activating only when ",l.a.createElement("i",null,"toggle")," ","value has changed as we have specified a 2nd argument in"," ",l.a.createElement("i",null,"useFsActivate")," hook."),l.a.createElement("p",null,"We also specified in 1st argument that we want to activate 3 keys. For each key, there is 2 possible scenarios:"),l.a.createElement("p",null,'If the key exist, a http request "activate" will be done.'),l.a.createElement("p",null,"If the key does not exist, you will receive a warning log.")))},M=a(34),T=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=l.a.useState(!1),i=Object(c.a)(o,2),r=i[0],d=i[1],m=l.a.useState(["btnColor","otherKey1","otherKey2"]),f=Object(c.a)(m,2),h=f[0],g=f[1];return Object(s.useFsActivate)(h,[r]),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{initialValues:{modificationToActivate:h},validate:function(e){var t={};return e.modificationToActivate||(t.modificationToActivate="Required"),t},onSubmit:function(e,t){(0,t.setSubmitting)(!1),g(Object(M.a)(e.modificationToActivate)),d(!r)}},(function(e){var t=e.handleSubmit,o=(e.handleChange,e.handleBlur,e.setFieldValue),i=e.values;e.touched,e.isValid,e.errors;return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,"useFsModifications arguments"),l.a.createElement(C.a,{id:"modificationToActivate",placeholder:i.modificationToActivate,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,a=e.jsObject;t?n(!0):(o("modificationToActivate",a||{},!0),n(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:a,variant:"secondary",type:"submit",style:{cursor:a?"not-allowed":"pointer"}},"Trigger activate")))})))},P=function(){var e=Object(n.useContext)(ae).QA;return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:"useFsActivate"}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,"useFsActivate"),e.enabled?l.a.createElement(T,null):l.a.createElement(A,null))))},L=function(){var e=Object(s.useFsModifications)([{key:"btnColor",defaultValue:"green",activate:!1}]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Use ",l.a.createElement("b",null,"useFsModifications")," hook to get the modifications:"),l.a.createElement(p,{className:"mv3",codeString:"import { useFsModifications } from '@flagship.io/react-sdk';\nconst fsModifications = useFsModifications([\n  {\n      key: 'btnColor',\n      defaultValue: 'green',\n      activate: false\n  }\n]);"}),l.a.createElement("p",null,"Output: "),l.a.createElement("div",null,l.a.createElement(y.a,{variant:"secondary",style:{backgroundColor:e.btnColor}},"I'm a button customized with Flagship (backgroundColor=".concat(e.btnColor,")"))),l.a.createElement(p,{className:"mv3",codeString:'<Button\n    variant="secondary"\n    style={{\n        backgroundColor: fsModifications.btnColor\n    }}\n>\n    {`I\'m a button customized with Flagship (backgroundColor=${fsModifications.btnColor})`}\n</Button>'}))},H=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=l.a.useState([{key:"btnColor",defaultValue:"green",activate:!1}]),i=Object(c.a)(o,2),r=i[0],d=i[1],m=Object(s.useFsModifications)(r);return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{initialValues:{fsParams:r},validate:function(e){var t={};return e.fsParams||(t.fsParams="Required"),t},onSubmit:function(e,t){(0,t.setSubmitting)(!1),d(Object(M.a)(e.fsParams))}},(function(e){var t=e.handleSubmit,o=(e.handleChange,e.handleBlur,e.setFieldValue),i=e.values;e.touched,e.isValid,e.errors;return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,"useFsModifications arguments"),l.a.createElement(C.a,{id:"fsParams",placeholder:i.fsParams,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,a=e.jsObject;t?n(!0):(o("fsParams",a||{},!0),n(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:a,variant:"secondary",type:"submit",style:{cursor:a?"not-allowed":"pointer"}},"Apply change")))})),l.a.createElement("div",{className:"mv3 b"},"useFsModifications output:"),l.a.createElement("div",{className:"mb3"},l.a.createElement(C.a,{id:"fsOutput",placeholder:m,locale:F.a,height:"550px",viewOnly:!0,width:"100%",style:{body:{fontSize:"16px"}}})))},D=function(){Object(s.useFsModifications)([{key:"btnColor",defaultValue:"green",activate:!1}]);var e=Object(n.useContext)(ae).QA;return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:"useFsModifications"}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,"useFsModifications"),e.enabled?l.a.createElement(H,null):l.a.createElement(L,null))))},V=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=l.a.useState(!1),i=Object(c.a)(o,2),r=i[0],d=i[1];return Object(s.useFsSynchronize)([a],r),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{className:"mv3",codeString:"useFsSynchronize([listenedValue], activateAllModifications);"}),l.a.createElement("div",null,"When ",l.a.createElement("b",null,"listenedValue")," value changed, it will update modifications in cache (=synchronization)."),l.a.createElement("div",{className:"mb3"},"You can also notice that enabling"," ",l.a.createElement("b",null,"activateAllModifications")," to true will modify the payload sent to the Flagship API and thus trigger an activate."),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"demoFsSynchronize.ControlSelect1"},l.a.createElement(E.a.Label,null,"Playing with 1st argument"),l.a.createElement(E.a.Check,{type:"checkbox",checked:a,onChange:function(e){return n(e.currentTarget.checked)},label:"listenedValue=".concat(a)})),l.a.createElement(E.a.Group,{controlId:"demoFsSynchronize.ControlSelect2"},l.a.createElement(E.a.Label,null,"Playing with 2nd argument"),l.a.createElement(E.a.Check,{type:"checkbox",checked:r,onChange:function(e){return d(e.currentTarget.checked)},label:"activateAllModifications=".concat(r)}))))},K=function(){return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:"useFsSynchronize"}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,"useFsSynchronize"),l.a.createElement(V,null))))},B=a(156),z=function(){var e=Object(s.useFlagship)(),t=(e.status,e.hit),a={multipleCodeString:"<Button\n    onClick={() => {\n        const transactionHit = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        const eventHit = {\n            type: 'Event',\n            data: {\n                category: 'User Engagement',\n                action: 'signOff',\n                label: 'yolo label ;)',\n                value: 123,\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'YoloTitle'\n            }\n        };\n        fsHit.sendMultiple([transactionHit, eventHit]);\n    }}\n>\n    Send multiple transaction hits\n</Button>",multipleComponent:l.a.createElement(y.a,{variant:"secondary",onClick:function(){t.sendMultiple([{type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}},{type:"Event",data:{category:"User Engagement",action:"signOff",label:"yolo label ;)",value:123,documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloTitle"}}])}},"Send multiple mixed hits")},n={simpleCodeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a transaction hit\n</Button>",simpleComponent:l.a.createElement(y.a,{variant:"secondary",onClick:function(){t.send({type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}})}},"Send a transaction hit")},o={simpleCodeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Screen',\n            data: {\n                documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'YoloScreen',\n            },\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a screen hit\n</Button>",simpleComponent:l.a.createElement(y.a,{variant:"secondary",onClick:function(){t.send({type:"Screen",data:{documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloScreen"}})}},"Send a screen hit")},i={simpleCodeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Item',\n            data: {\n              transactionId: '12451342423',\n              name: 'yoloItem',\n              price: 999,\n              code: 'yoloCode',\n              category: 'yoloCategory',\n              quantity: 1234444,\n              documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n              pageTitle: 'YoloScreen',\n            }\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a item hit\n</Button>",simpleComponent:l.a.createElement(y.a,{variant:"secondary",onClick:function(){t.send({type:"Item",data:{transactionId:"12451342423",name:"yoloItem",price:999,code:"yoloCode",category:"yoloCategory",quantity:1234444,documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloScreen"}})}},"Send a item hit")},r={simpleCodeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Event',\n            data: {\n                category: 'User Engagement',\n                action: 'signOff',\n                label: 'yolo label ;)',\n                value: 123,\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'YoloTitle'\n            }\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a page hit\n</Button>",simpleComponent:l.a.createElement(y.a,{variant:"secondary",onClick:function(){t.send({type:"Event",data:{category:"User Engagement",action:"signOff",label:"yolo label ;)",value:123,documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloTitle"}})}},"Send a item hit")},d=l.a.useState(n),m=Object(c.a)(d,2),u=m[0],f=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb3"},"If you're not familiar with the payload that you should a provide to the hit you want to send, you'll have all details available in the"," ",l.a.createElement("a",{href:"https://github.com/abtasty/flagship-react-sdk#shape-of-possible-hits-to-send"},"SDK Hit documentation"),"."),l.a.createElement("div",null,l.a.createElement("b",null,"NOTE:"),l.a.createElement("p",null,"It is not necessary to provide parameters to"," ",l.a.createElement("i",null,"useFlagship")," if your purpose is only to send hits."),l.a.createElement(p,{className:"mv3",codeString:"import { useFlagship } from '@flagship.io/react-sdk';\nconst { hit: fsHit } = useFlagship();"})),l.a.createElement("p",null,"Send a hit, demo: "),l.a.createElement(B.a,{variant:"tabs",defaultActiveKey:"hitTransaction"},l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitTransaction",onClick:function(){return f(n)}},"Transaction Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitScreen",onClick:function(){return f(o)}},"Screen Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitEvent",onClick:function(){return f(r)}},"Event Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitItem",onClick:function(){return f(i)}},"Item Hit"))),l.a.createElement(p,{className:"mv3",codeString:u.simpleCodeString}),l.a.createElement("div",null,u.simpleComponent),l.a.createElement("div",{className:"mt3"},"Send multiple mixed hit, demo: "),l.a.createElement(p,{className:"mv3",codeString:a.multipleCodeString}),l.a.createElement("div",null,a.multipleComponent))},R=function(){var e={transaction:{type:"Transaction",data:{transactionId:"12451342423",affiliation:"yoloAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"yoloShippingMethod",currency:"yoloCurrency",taxes:1234444,paymentMethod:"yoloPaymentMethod",itemCount:2,couponCode:"YOLOCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloScreen"}},screen:{type:"Screen",data:{documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloScreen"}},event:{type:"Event",data:{category:"User Engagement",action:"signOff",label:"yolo label ;)",value:123,documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloTitle"}},item:{type:"Item",data:{transactionId:"12451342423",name:"yoloItem",price:999,code:"yoloCode",category:"yoloCategory",quantity:1234444,documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"YoloScreen"}}},t=l.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],i=l.a.useState(!1),d=Object(c.a)(i,2),m=d[0],f=d[1],h=l.a.useState("transaction"),g=Object(c.a)(h,2),p=g[0],v=g[1],S=l.a.useState(e[p]),k=Object(c.a)(S,2),O=k[0],j=k[1],I=l.a.useState([Object(r.a)({},e.transaction),Object(r.a)({},e.screen),Object(r.a)({},e.event),Object(r.a)({},e.item)]),x=Object(c.a)(I,2),w=x[0],N=x[1];l.a.useEffect((function(){return j(e[p])}),[p]);var A=Object(s.useFlagship)().hit;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Send a hit, demo: "),l.a.createElement(B.a,{variant:"tabs",defaultActiveKey:"hitTransaction"},l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitTransaction",onClick:function(){return v("transaction")}},"Transaction Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitScreen",onClick:function(){return v("screen")}},"Screen Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitEvent",onClick:function(){return v("event")}},"Event Hit")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{eventKey:"hitItem",onClick:function(){return v("item")}},"Item Hit"))),l.a.createElement(b.a,{enableReinitialize:!0,initialValues:{hitPayload:O},validate:function(e){var t={};return e.hitPayload||(t.hitPayload="Required"),t},onSubmit:function(e,t){(0,t.setSubmitting)(!1),j(Object(r.a)({},e.hitPayload)),A.send(Object(r.a)({},e.hitPayload))}},(function(e){var t=e.handleSubmit,a=(e.handleChange,e.handleBlur,e.setFieldValue),i=e.values;e.touched,e.isValid,e.errors;return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,p," hit payload"),l.a.createElement(C.a,{id:"hitPayload",placeholder:i.hitPayload,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,n=e.jsObject;t?o(!0):(a("hitPayload",n||{},!0),o(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:n,variant:"secondary",type:"submit",style:{cursor:n?"not-allowed":"pointer"}},"Send hit")))})),l.a.createElement("div",{className:"mv3"},"Have a look to logs + network on your browser inspect tools to see results."),l.a.createElement(b.a,{initialValues:{hitsPayload:w},validate:function(e){var t={};return e.hitsPayload||(t.hitsPayload="Required"),t},onSubmit:function(e,t){(0,t.setSubmitting)(!1),N(Object(M.a)(e.hitsPayload)),A.sendMultiple(Object(M.a)(e.hitsPayload))}},(function(e){var t=e.handleSubmit,a=(e.handleChange,e.handleBlur,e.setFieldValue),n=e.values;e.touched,e.isValid,e.errors;return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,"sendMultiple argument"),l.a.createElement(C.a,{id:"hitsPayload",placeholder:n.hitsPayload,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,n=e.jsObject;t?f(!0):(a("hitsPayload",n||{},!0),f(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:m,variant:"secondary",type:"submit",style:{cursor:m?"not-allowed":"pointer"}},"Send multiple hits")))})))},q=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],o=l.a.useState({modifications:{requested:[{key:"btnColor",defaultValue:"green",activate:!1}]}}),i=Object(c.a)(o,2),d=i[0],m=i[1],f=Object(s.useFlagship)(d);f.modifications;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{initialValues:{fsParams:d},validate:function(e){var t={};return e.fsParams||(t.fsParams="Required"),t},onSubmit:function(e,t){(0,t.setSubmitting)(!1),m(Object(r.a)({},e.fsParams))}},(function(e){var t=e.handleSubmit,o=(e.handleChange,e.handleBlur,e.setFieldValue),i=e.values;e.touched,e.isValid,e.errors;return l.a.createElement(E.a,{noValidate:!0,onSubmit:t},l.a.createElement(E.a.Group,{as:u.a,md:"12",controlId:"settingsForm"},l.a.createElement(E.a.Label,null,"useFlagship arguments"),l.a.createElement(C.a,{id:"fsParams",placeholder:i.fsParams,locale:F.a,height:"550px",width:"100%",onChange:function(e){var t=e.error,a=e.jsObject;t?n(!0):(o("fsParams",a||{},!0),n(!1))},style:{body:{fontSize:"16px"}}})),l.a.createElement("div",{className:"flex justify-end ph3"},l.a.createElement(y.a,{disabled:a,variant:"secondary",type:"submit",style:{cursor:a?"not-allowed":"pointer"}},"Apply change")))})),l.a.createElement("div",{className:"mv3 b"},"useFlagship output:"),l.a.createElement("div",{className:"mb3"},l.a.createElement(C.a,{id:"fsIutput",placeholder:f,locale:F.a,height:"550px",viewOnly:!0,width:"100%",style:{body:{fontSize:"16px"}}})))},G=function(){var e=Object(s.useFlagship)({modifications:{requested:[{key:"btnColor",defaultValue:"green",activate:!1}]}}).modifications;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"demo: "),l.a.createElement("div",null,l.a.createElement(y.a,{variant:"secondary",style:{backgroundColor:e.btnColor}},"I'm a button customized with Flagship (backgroundColor=".concat(e.btnColor,")"))),l.a.createElement(p,{className:"mv3",codeString:'<Button\n    variant="secondary"\n    style={{\n        backgroundColor: fsModifications.btnColor\n    }}\n>\n    {`I\'m a button customized with Flagship (backgroundColor=${fsModifications.btnColor})`}\n</Button>'}))},Y=function(){Object(s.useFlagship)({modifications:{requested:[{key:"btnColor",defaultValue:"green",activate:!1}]}}).modifications;var e=Object(s.useFlagship)(),t=e.status,a=(e.hit,Object(n.useContext)(ae).QA);return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:"useFlagship"}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,"useFlagship"),l.a.createElement("p",null,"Use ",l.a.createElement("b",null,"useFlagship")," hook to get access to further stuff such as ",l.a.createElement("i",null,"modifications"),", ",l.a.createElement("i",null,"sdk status"),","," ",l.a.createElement("i",null,"hits")," :"),l.a.createElement(p,{className:"mv3",codeString:"import { useFlagship } from '@flagship.io/react-sdk';\nconst fsParams = {\n    modifications: {\n        requested: [\n            {\n                key: 'btnColor',\n                defaultValue: 'green',\n                activate: false\n            }\n        ]\n    }\n}\nconst {\n    modifications: fsModifications,\n    status: fsStatus,\n    hit: fsHit,\n} = useFlagship(fsParams);"}),l.a.createElement("h3",null,"1 - Playing with ",l.a.createElement("i",null,"fsModifications")),a.enabled?l.a.createElement(q,null):l.a.createElement(G,null),l.a.createElement("h3",null,"2 - Reading ",l.a.createElement("i",null,"fsStatus")),l.a.createElement("p",null,"It gives you some information about the current status of the SDK:"),l.a.createElement(p,{className:"mv3",codeString:"\nfsStatus=".concat(JSON.stringify(t,null,2),";\n                        ")}),l.a.createElement("div",{className:"fsAnchor",id:"sendHits"}),l.a.createElement("h3",null,"3 - Playing with ",l.a.createElement("i",null,"hits")),a.enabled?l.a.createElement(R,null):l.a.createElement(z,null))))},U=function(){var e=l.a.useState(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];l.a.useEffect((function(){if(a)throw new Error("Flagship - Creating an error just for test...");o(!1)}),[a]);var i=Object(n.useContext)(ae),r=i.currentSettings;i.setSettings,i.QA;return l.a.createElement(m.a,null,l.a.createElement(u.a,null,l.a.createElement("div",{className:"fsAnchor",id:"safeMode"}),l.a.createElement(v.a,{variant:"dark",className:"fs-alert demoHook"},l.a.createElement(v.a.Heading,null,"Safe Mode"),l.a.createElement("p",null,"When an error occurs unexpectedly, the React SDK switch automatically into ",l.a.createElement("b",null,"Safe Mode"),". Thus, default value of modifications will always be returned. Moreover, other features will just log an error without crash."),l.a.createElement("div",null,l.a.createElement(y.a,{variant:"secondary",onClick:function(){o(!0)}},"Throw an error"),"production"===r.sdkConfig.nodeEnv&&l.a.createElement("div",{className:"mv3"},l.a.createElement("b",null,"NOTE:")," You might not see the banner because you are in 'production' environment. You need to change value of ",l.a.createElement("i",null,"nodeEnv")," in"," ",l.a.createElement("a",{href:"#playWithConfig"},"SDK settings"),"."),!r.sdkConfig.enableErrorLayout&&l.a.createElement("div",{className:"mv3"},l.a.createElement("b",null,"NOTE:")," You might not see the banner because the setting ",l.a.createElement("i",null,"enableErrorLayout")," is disabled, you need to change the value in"," ",l.a.createElement("a",{href:"#playWithConfig"},"SDK settings"),".")))))},Q=function(){return l.a.createElement(d.a,{className:"mt3"},l.a.createElement(N,null),l.a.createElement(Y,null),l.a.createElement(D,null),l.a.createElement(P,null),l.a.createElement(K,null),l.a.createElement(U,null))},J=a(155),W=a(154),_=a(85),$=a.n(_),X=function(){var e=Object(n.useContext)(ae),t=e.QA,a=e.setQA;return l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{className:"fsNavbar",fixed:"top"},l.a.createElement(J.a.Brand,{href:"https://github.com/abtasty/flagship-react-sdk",className:"flex item-center"},l.a.createElement("img",{alt:"Logo Flagship",src:$.a,className:"d-inline-block align-top logoAdjust"}),"React SDK (Dev demo)"),l.a.createElement(B.a,{className:"mr-auto fsNav"},l.a.createElement(B.a.Link,{href:"#initialization"},"Initialization"),l.a.createElement(W.a,{title:"Hooks",id:"nav-dropdown"},l.a.createElement(W.a.Item,{eventKey:"4.0",href:"#useFlagship"},"useFlagship"),l.a.createElement(W.a.Item,{eventKey:"4.1",href:"#useFsModifications"},"useFsModifications"),l.a.createElement(W.a.Item,{eventKey:"4.2",href:"#useFsActivate"},"useFsActivate"),l.a.createElement(W.a.Item,{eventKey:"4.3",href:"#useFsSynchronize"},"useFsSynchronize")),l.a.createElement(W.a,{title:"Features",id:"nav-dropdown"},l.a.createElement(W.a.Item,{eventKey:"4.0",href:"#useFlagship"},"Get modification(s)"),l.a.createElement(W.a.Item,{eventKey:"4.1",href:"#useFsActivate"},"Activate modification(s)"),l.a.createElement(W.a.Item,{eventKey:"4.2",href:"#sendHits"},"Send Hit(s)"),l.a.createElement(W.a.Item,{eventKey:"4.3",href:"#useFsSynchronize"},"Refresh modifications"),l.a.createElement(W.a.Item,{eventKey:"4.4",href:"#safeMode"},"Safe Mode"))),l.a.createElement(E.a,{inline:!0},l.a.createElement(W.a,{title:"QA mode",id:"nav-dropdown"},l.a.createElement(W.a.Item,{eventKey:"10.0",onClick:function(){return a(Object(r.a)({},t,{enabled:!0}))}},"ON ",t.enabled&&"\u2705"),l.a.createElement(W.a.Item,{eventKey:"10.1",onClick:function(){return a(Object(r.a)({},t,{enabled:!1}))}},"OFF ",!t.enabled&&"\u2705")),l.a.createElement(B.a.Link,{href:"https://github.com/abtasty/flagship-react-sdk"},"Github"),l.a.createElement(B.a.Link,{href:"https://www.abtasty.com/solutions-product-teams/"},"What is Flagship ?"))))},Z=a(152),ee=function(e){var t=e.onHide,a=e.show;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z.a,{size:"lg",show:a,onHide:t,"aria-labelledby":"example-modal-sizes-title-lg"},l.a.createElement(Z.a.Header,{closeButton:!0},l.a.createElement(Z.a.Title,{id:"example-modal-sizes-title-lg"},"Edit SDK settings:")),l.a.createElement(Z.a.Body,null,"...")))},te=function(){var e=Object(n.useContext)(ae),t=e.QA,a=e.setQA;return t.enabled?l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{className:"fsNavbar qaHeader",fixed:"top"},l.a.createElement(J.a.Brand,{href:"#",className:"flex item-center"},"QA Mode: ",l.a.createElement("span",{className:"green"},"Enabled")),l.a.createElement(B.a,{className:"mr-auto fsNav"}),l.a.createElement(E.a,{inline:!0},l.a.createElement(B.a.Link,{onClick:function(){return a(Object(r.a)({},t,{enabled:!1}))}},"Switch off"))),l.a.createElement(ee,{onHide:function(){return a(Object(r.a)({},t,{show:Object(r.a)({},t.show,{settingsModal:!1})}))},show:t.show.settingsModal})):null},ae=Object(n.createContext)(null),ne=function(){var e=l.a.useState({envId:I.envId,sdkConfig:Object(r.a)({},I.sdkConfig),visitorData:Object(r.a)({},I.visitorData)}),t=Object(c.a)(e,2),a=t[0],n=t[1],o=l.a.useState({enabled:!1,show:{settingsModal:!1}}),i=Object(c.a)(o,2),f=i[0],h=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae.Provider,{value:{currentSettings:a,setSettings:n,QA:f,setQA:h}},l.a.createElement(s.FlagshipProvider,{envId:a.envId,config:a.sdkConfig,visitorData:a.visitorData,onInitStart:function(){console.log("React SDK init start")},onInitDone:function(){console.log("React SDK init done")},onUpdate:function(e){var t=e.fsModifications;console.log("React SDK updated with modifications:\n"+JSON.stringify(t))},loadingComponent:l.a.createElement(d.a,{className:"mt5"},l.a.createElement(m.a,null,l.a.createElement(u.a,{xs:12,style:{color:"white",height:"100vh",fontSize:"5vw"}},"Loading Flagship React SDK...")))},l.a.createElement(X,null),l.a.createElement(te,null),l.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(140);i.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports=a.p+"static/media/Flagship-horizontal-product-white.6e8b90f3.png"},90:function(e,t,a){e.exports=a(141)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.f462bcd1.chunk.js.map