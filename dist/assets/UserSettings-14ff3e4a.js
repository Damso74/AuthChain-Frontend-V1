import{r,j as e}from"./index-0cd8c9ef.js";const m=()=>{const[t,n]=r.useState(""),[a,l]=r.useState(""),o=s=>{s.preventDefault(),console.log("Settings updated with email:",t,"and new password:",a)},i=s=>{n(s.target.value)},d=s=>{l(s.target.value)};return e.jsxs("div",{className:"UserSettings",children:[e.jsx("h2",{children:"Paramètres Utilisateur"}),e.jsxs("form",{onSubmit:o,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"user-email",children:"Email :"}),e.jsx("input",{type:"email",id:"user-email",value:t,onChange:i})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"new-password",children:"Nouveau mot de passe :"}),e.jsx("input",{type:"password",id:"new-password",value:a,onChange:d})]}),e.jsx("button",{type:"submit",children:"Mettre à jour"})]})]})};export{m as default};
