(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"07db":function(t,e,s){"use strict";var a=s("db49");e["a"]={show:()=>a["a"].get("users?page=1"),save:t=>a["a"].post("users",t),edit:t=>{let e=a["a"].put("user/"+t.id,t);return e}}},"5b13":function(t,e,s){"use strict";s("9577")},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"container",attrs:{padding:""}},[s("h1",{staticClass:"text-h4 text-center"},[t._v("Usuarios")]),s("div",[s("q-form",{ref:"myForm",on:{submit:t.save,reset:t.onReset}},[s("q-input",{staticClass:"q-ma-md",attrs:{outlined:"",label:"Nome *",rules:[function(t){return t&&t.length>=3||"O campo nome é obrigatorio e deve ter no minimo 3 caracteres."}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),s("q-input",{staticClass:"q-ma-md",attrs:{outlined:"",label:"Profissão *",rules:[function(t){return t&&t.length>=3||"O campo profissão é obrigatorio e deve ter no minimo 3 caracteres."}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"work"}})]},proxy:!0}]),model:{value:t.user.job,callback:function(e){t.$set(t.user,"job",e)},expression:"user.job"}}),s("div",{staticClass:"column float-left"},[s("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Salvar",icon:"add",type:"submit"}})],1)],1)],1),s("q-separator",{staticClass:"q-my-sm"}),s("div",[s("div",{staticClass:"q-pa-md"},[s("q-markup-table",[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("#Id")]),s("th",{staticClass:"text-center"},[t._v("Nome")]),s("th",{staticClass:"text-center"},[t._v("Ocupação")]),s("th",{staticClass:"text-center"},[t._v("Criado em")]),s("th",{staticClass:"text-center"},[t._v("Ultima alteração")]),s("th",{staticClass:"text-center"},[t._v("Ações")])])]),s("tbody",t._l(t.usuarios,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-left"},[t._v(t._s(e.id))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.name))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.job))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.createdAt))]),s("td",{staticClass:"text-center"},[t._v(t._s(e.updatedAt))]),s("td",{staticClass:"text-right"},[s("q-btn",{staticClass:"q-mx-sm",attrs:{color:"primary",icon:"edit","aria-label":"Editar usuario"},on:{click:function(s){return t.edit(e)}}}),s("q-btn",{attrs:{color:"negative",icon:"delete","aria-label":"Deletar usuario"},on:{click:function(s){return t.remove(e)}}})],1)])})),0)])],1)])],1)},i=[],r=(s("a434"),s("e6cf"),s("07db")),o={name:"PageIndex",data(){return{user:{name:"",job:""},usuarios:[]}},methods:{save(){this.user.id?r["a"].edit(this.user).then((t=>{this.onSubmit("Usuario atualizado!");let e=this.usuarios.findIndex((e=>e.id===t.data.id));this.usuarios.splice(e,1),this.usuarios.push(t.data)})):r["a"].save(this.user).then((t=>{console.log(t.data),this.usuarios.push(t.data),this.onSubmit("Cadastro realizado!")}))},edit(t){this.user=t},remove(t){if(confirm(`Deseja remover o(a) usuário(a) ${t.name} ?`)){let e=this.usuarios.findIndex((e=>e.id==t.id));this.usuarios.splice(e,1)}},onSubmit(t){this.$q.notify.setDefaults({position:"top",timeout:3e3,actions:[{icon:"close",color:"white"}]}),this.$q.notify({message:t,color:"positive"}),this.onReset()},async onReset(){await this.resetForm(),this.$refs.myForm.resetValidation()},async resetForm(){this.user={name:"",job:""}}}},n=o,c=(s("5b13"),s("2877")),u=s("9989"),l=s("0378"),d=s("27f9"),m=s("0016"),p=s("9c40"),b=s("eb85"),h=s("2bb1"),f=s("eebe"),v=s.n(f),x=Object(c["a"])(n,a,i,!1,null,"66dc10ee",null);e["default"]=x.exports;v()(x,"components",{QPage:u["a"],QForm:l["a"],QInput:d["a"],QIcon:m["a"],QBtn:p["a"],QSeparator:b["a"],QMarkupTable:h["a"]})},9577:function(t,e,s){}}]);