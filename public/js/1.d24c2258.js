(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"07db":function(a,t,e){"use strict";var s=e("bc3a"),r=e.n(s);const i=r.a.create({baseURL:"https://reqres.in/api/"});t["a"]={show:()=>i.get("users?page=1"),save:a=>i.post("users",a),edit:a=>{let t=i.put("user/"+a.id,a);return t}}},aa82:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"container",attrs:{padding:""}},[e("h1",{staticClass:"text-h4 text-center"},[a._v("Lista de Usuarios")]),e("q-list",{attrs:{bordered:"",separator:""}},a._l(a.users,(function(t){return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,staticClass:"q-mb-sm",attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",[e("img",{attrs:{src:""+t.avatar}})])],1),e("q-item-section",[e("q-item-label",[a._v(a._s(t.first_name)+" ' ' "+a._s(t.last_name))]),e("q-item-label",{attrs:{caption:"",lines:"1"}},[a._v(a._s(t.email))])],1)],1)})),1)],1)},r=[],i=e("07db"),n={name:"ListaUsuarios",data(){return{users:[]}},created(){i["a"].show().then((a=>{console.log("Res.data.data ",a.data.data),this.users=a.data.data}))}},c=n,l=e("2877"),o=e("9989"),d=e("1c1c"),u=e("66e5"),p=e("4074"),m=e("cb32"),b=e("0170"),v=e("714f"),_=e("eebe"),q=e.n(_),f=Object(l["a"])(c,s,r,!1,null,"3f64b4ba",null);t["default"]=f.exports;q()(f,"components",{QPage:o["a"],QList:d["a"],QItem:u["a"],QItemSection:p["a"],QAvatar:m["a"],QItemLabel:b["a"]}),q()(f,"directives",{Ripple:v["a"]})}}]);