(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(14),n(1)),u=n(2),i=n(4),s=n(3),m=n(5),h=n(6),d=(n(15),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={worth:"",myCurrency:"1",WantedCurrency:"1",myCurrencyCode:"PL",WantedCurrencyCode:"PL",result:""},n.handleChangeWorth=function(e){n.setState({worth:e.target.value})},n.handleChangeCurrency=function(e){var t,a=e.target.value,r=e.target.name,c=e.target.dataset.code,l=e.target.options[e.target.selectedIndex].dataset.code;n.setState((t={},Object(h.a)(t,r,a),Object(h.a)(t,c,l),t))},n.handleSubmit=function(e){e.preventDefault();var t=(n.state.worth*(n.state.myCurrency/n.state.WantedCurrency)).toFixed(2),a="".concat(n.state.worth," ").concat(n.state.myCurrencyCode," = ").concat(t," ").concat(n.state.WantedCurrencyCode," ");n.setState({result:a})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log(this.props.NBPcurrencyList);var e=this.props.NBPcurrencyList,t=[{currency:"zloty polski",code:"PL",mid:1}].concat(e).map((function(e){return r.a.createElement("option",{key:e.code,value:e.mid.toFixed(4),"data-code":e.code},e.code," ",e.currency)}));return r.a.createElement("div",{className:"CurrencyConverterBox"},r.a.createElement("h1",null,"PRZELICZNIK WALUT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"worth"},r.a.createElement("p",null,"Warto\u015b\u0107:"),r.a.createElement("br",null),r.a.createElement("input",{id:"worth",name:"worth",type:"number",value:this.state.worth,onChange:this.handleChangeWorth})),r.a.createElement("label",{htmlFor:"myCurrency"},r.a.createElement("p",null,"Mam:"),r.a.createElement("br",null),r.a.createElement("select",{id:"myCurrency",name:"myCurrency","data-code":"myCurrencyCode",value:this.state.myCurrency,onChange:this.handleChangeCurrency},t)),r.a.createElement("label",{htmlFor:"WantedCurrency"},r.a.createElement("p",null,"Chc\u0119 otrzyma\u0107:"),r.a.createElement("br",null),r.a.createElement("select",{id:"WantedCurrency",name:"WantedCurrency","data-code":"WantedCurrencyCode",value:this.state.WantedCurrency,onChange:this.handleChangeCurrency},t)),r.a.createElement("button",null,"PRZELICZ")),r.a.createElement("div",{className:"result"},r.a.createElement("p",null,this.state.result)))}}]),t}(r.a.Component)),y=(n(16),n(17),function(){var e=new Date;return" na dzie\u0144: \n  ".concat(e.getDate()<=9?"0".concat(e.getDate()):e.getDate(),"-").concat(e.getMonth()+1<=9?"0".concat(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getFullYear())}),C=function(e){var t=e.NBPcurrencyList.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{key:"".concat(e.code).concat(t)},e.code),r.a.createElement("td",{key:"".concat(e.currency).concat(t)},e.currency),r.a.createElement("td",{key:"".concat(e.mid).concat(t)},e.mid.toFixed(4)))}));return console.log(t),r.a.createElement("div",{className:"ExchangeRate"},r.a.createElement("h1",null,"KURS WALUT"," ",r.a.createElement("span",{className:"CurrentDate"},r.a.createElement(y,null))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Kod"),r.a.createElement("th",null,"Nazwa"),r.a.createElement("th",null,"\u015aredni kurs"))),r.a.createElement("tbody",null,t)))},E=(n(18),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={currencyList:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nbp.pl/api/exchangerates/tables/a/").then((function(e){return e.json()})).then((function(t){var n=t[0].rates;e.setState((function(e){return{currencyList:e.currencyList.concat(n)}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(d,{NBPcurrencyList:this.state.currencyList}),r.a.createElement(C,{NBPcurrencyList:this.state.currencyList}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d84b1e85.chunk.js.map