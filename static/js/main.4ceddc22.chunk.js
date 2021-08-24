(this["webpackJsonpexpenses-tracker"]=this["webpackJsonpexpenses-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),s=(n(14),n(5)),l=n(2),r=n(1),i=(n(15),n(0));var j=function(e){return Object(i.jsx)("div",{className:"card "+e.className,children:e.children})},u=function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control flex justify-around",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})};var o=function(e){var t=e.expenseDate,n=t.toLocaleString("en-US",{month:"short"}),a=t.toLocaleString("en-US",{day:"2-digit"}),c=t.getFullYear();return Object(i.jsxs)("div",{className:"expense-item__date p-2",children:[Object(i.jsx)("div",{children:n}),Object(i.jsx)("div",{children:a}),Object(i.jsx)("div",{children:c})]})};var b=function(e){var t=e.expenseDate,n=e.expenseTitle,a=e.expenseAmount;return Object(i.jsxs)(j,{className:"expense-item container flex text-center p-3 mt-8 items-center bg-white text-gray-800 border border-gray-300 shadow-inner rounded",children:[Object(i.jsx)(o,{expenseDate:t}),Object(i.jsxs)("div",{className:"expense-item__desc container flex justify-around p-3",children:[Object(i.jsx)("h2",{children:n}),Object(i.jsxs)("div",{className:"expense-item__price p-2",children:["$",a]})]})]})},d=function(e){return 0===e.items.length?Object(i.jsx)("p",{children:"No expenses found."}):Object(i.jsx)("ul",{children:e.items.map((function(e){return Object(i.jsx)(b,{expenseTitle:e.title,expenseDate:e.date,expenseAmount:e.amount},e.id)}))})},x=n(9),m=(n(17),n(18),function(e){var t=e.value,n=e.maxValue,a=e.label,c="0%";return n>0&&(c=Math.round(t/n*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:a})]})}),h=function(e){var t=e.monthPoints,n=t.map((function(e){return e.value})),a=Math.max.apply(Math,Object(s.a)(n));return Object(i.jsx)("div",{className:"chart",children:t.map((function(e){return Object(i.jsx)(m,{value:e.value,maxValue:a,label:e.label},e.label)}))})},v=function(e){var t,n=e.expenses,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(x.a)(n);try{for(c.s();!(t=c.n()).done;){var s=t.value;a[s.date.getMonth()].value+=s.amount}}catch(l){c.e(l)}finally{c.f()}return Object(i.jsx)(h,{monthPoints:a})},p=function(e){var t=Object(r.useState)("2020"),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{selected:a,onChangeFilter:function(e){c(e)}}),Object(i.jsx)("li",{className:"container expenses-list p-2 flex flex-col justify-center aling-center",children:Object(i.jsxs)(j,{children:[Object(i.jsx)(v,{expenses:s}),Object(i.jsx)(d,{items:s})]})})]})},O=n(7),f=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),j=Object(l.a)(s,2),u=j[0],o=j[1],b=Object(r.useState)(""),d=Object(l.a)(b,2),x=d[0],m=d[1];return Object(i.jsxs)("form",{className:"flex items-center",onSubmit:function(t){t.preventDefault();var n={title:a,amount:u,date:new Date(x)};e.onSaveExpenseDate(n),c(""),o(""),m("")},children:[Object(i.jsxs)("fieldset",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control p-3 flex justify-between",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",className:"md:bg-gray-200 md:focus:bg-white ml-5 rounded",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control p-3 flex justify-between",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",className:"ml-5 rounded",value:u,onChange:function(e){o(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control p-3 flex justify-between",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",step:"2022-12-31",className:"ml-5 rounded",value:x,onChange:function(e){m(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions p-3 text-center flex justify-center flex-col-reverse",children:[Object(i.jsx)("button",{onClick:e.onCancel,className:"md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 m-3 rounded",children:"Cancel"}),Object(i.jsx)("button",{type:"submit",className:"md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 m-3 rounded",children:"Add expense"})]})]})},g=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense p-5",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},onCancel:function(){c(!1)},className:"md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 rounded",children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSaveExpenseDate:function(t){var n=Object(O.a)(Object(O.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)}})]})},y=[{id:"e1",title:"Car",amount:1e3,date:new Date(2019,1,1)}];var N=function(){var e=Object(r.useState)(y),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{className:"conteiner max-w-screen-xl bg-gray-100 flex flex-col justify-center items-center p-10 m-10 rounded",children:[Object(i.jsx)(g,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(i.jsx)(p,{items:n})]})};c.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4ceddc22.chunk.js.map