webpackJsonp([1],{"0V06":function(e,t){},"1/oy":function(e,t){},"9M+g":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},K3NX:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(e){n("eGlv")},null,null).exports,o=n("/ocq"),r=n("mtWM"),c=n.n(r),u=n("BO1k"),l=n.n(u),d={name:"ECSRespondent",props:["form"],data:function(){return{parameters:{title:"Login",description:"Ingresa con tus credenciales para comenzar",inputs:[{label:"usuario",placeholder:"Ingrese su usuario",type:"text",active:!0,id:"input-user",res:"",name:"",value:""},{label:"Contraseña",placeholder:"Ingrese su contraseña",type:"password",active:!0,id:"input-ecn",res:"",name:"",value:""},{label:"Genero",type:"checkbox",active:!0,id:"genero",res:"",options:[{name:"genero",value:"femenino",checked:!0,text:"Femenino"},{name:"genero",value:"masculino",checked:!1,text:"Masculino"}]}],button:{textButton:"Ingresar",active:!0},button_aux:{textButton:"Ingresar",active:!1},links:[{description:"olvido contraseña, haz click",span:"aqui",link:"/FormRespondent",active:!0},{description:"",span:"",link:"",active:!1}],note:"Comunicate al xxxxxx"}}},mounted:function(){void 0!==this.form&&(this.parameters=this.form)},watch:{form:function(){void 0!==this.form&&(this.parameters=this.form)}},methods:{acton_event:function(){var e={button:"next"},t=!0,n=!1,s=void 0;try{for(var a,i=l()(this.parameters.inputs);!(t=(a=i.next()).done);t=!0){var o=a.value;o.active&&(e[o.id]=o.res)}}catch(e){n=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw s}}this.$emit("listen:event",e)},acton_event_aux:function(){var e={button:"previus"},t=!0,n=!1,s=void 0;try{for(var a,i=l()(this.parameters.inputs);!(t=(a=i.next()).done);t=!0){var o=a.value;o.active&&(e[o.id]=o.res)}}catch(e){n=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw s}}this.$emit("listen:event",e)}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row totalWidth justify-content-center"},[n("div",{staticClass:"cardSectionForm col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"},[n("div",{staticClass:"container cardLogin"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[void 0!==e.parameters.title?n("h5",{domProps:{textContent:e._s(e.parameters.title)}}):e._e(),e._v(" "),void 0!==e.parameters.description?n("br"):e._e(),e._v(" "),void 0!==e.parameters.description?n("p",{staticClass:"textAlignLeft",domProps:{textContent:e._s(e.parameters.description)}}):e._e(),e._v(" "),n("hr")])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("form",{on:{submit:function(e){e.preventDefault()}}},[e._l(e.parameters.inputs,function(t,s){return t.active?n("div",{key:s,staticClass:"form-group"},[n("label",{staticClass:"textAlignLeft d-block",attrs:{for:t.id},domProps:{textContent:e._s(t.label)}}),e._v(" "),"checkbox"===t.type&&"radio"!=t.type&&"checkbox"!=t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-control",attrs:{id:t.id,placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.res)?e._i(t.res,null)>-1:t.res},on:{change:function(n){var s=t.res,a=n.target,i=!!a.checked;if(Array.isArray(s)){var o=e._i(s,null);a.checked?o<0&&e.$set(t,"res",s.concat([null])):o>-1&&e.$set(t,"res",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"res",i)}}}):"radio"===t.type&&"radio"!=t.type&&"checkbox"!=t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-control",attrs:{id:t.id,placeholder:t.placeholder,type:"radio"},domProps:{checked:e._q(t.res,null)},on:{change:function(n){e.$set(t,"res",null)}}}):"radio"!=t.type&&"checkbox"!=t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-control",attrs:{id:t.id,placeholder:t.placeholder,type:t.type},domProps:{value:t.res},on:{input:function(n){n.target.composing||e.$set(t,"res",n.target.value)}}}):n("div",e._l(t.options,function(s,a){return n("div",{key:a,staticClass:"d-flex inputOption"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-check-input",attrs:{name:s.name,id:a,type:"checkbox"},domProps:{checked:s.checked,value:s.value,checked:Array.isArray(t.res)?e._i(t.res,s.value)>-1:t.res},on:{change:function(n){var a=t.res,i=n.target,o=!!i.checked;if(Array.isArray(a)){var r=s.value,c=e._i(a,r);i.checked?c<0&&e.$set(t,"res",a.concat([r])):c>-1&&e.$set(t,"res",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(t,"res",o)}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-check-input",attrs:{name:s.name,id:a,type:"radio"},domProps:{checked:s.checked,value:s.value,checked:e._q(t.res,s.value)},on:{change:function(n){e.$set(t,"res",s.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"item.res"}],staticClass:"form-check-input",attrs:{name:s.name,id:a,type:t.type},domProps:{checked:s.checked,value:s.value,value:t.res},on:{input:function(n){n.target.composing||e.$set(t,"res",n.target.value)}}}),e._v(" "+e._s(s.text)+"\n                                    ")])}))]):e._e()}),e._v(" "),void 0!==e.parameters.button_aux&&e.parameters.button_aux.active?n("button",{staticClass:"btn btn-secondary",domProps:{textContent:e._s(e.parameters.button_aux.textButton)},on:{click:e.acton_event_aux}}):e._e(),e._v(" "),void 0!==e.parameters.button&&e.parameters.button.active?n("button",{staticClass:"btn btn-secondary",domProps:{textContent:e._s(e.parameters.button.textButton)},on:{click:e.acton_event}}):e._e()],2),e._v(" "),n("hr")])]),e._v(" "),void 0!==e.parameters.links?n("div",{staticClass:"row"},[n("div",{staticClass:"col"},e._l(e.parameters.links,function(t,s){return t.active?n("div",{key:s,staticClass:"d-flex"},[n("p",{domProps:{textContent:e._s(t.description)}}),e._v(" "),n("router-link",{attrs:{to:t.link}},[n("p",{domProps:{textContent:e._s(t.span)}})])],1):e._e()}))]):e._e(),e._v(" "),void 0!==e.parameters.note?n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"textAlignLeft",domProps:{textContent:e._s(e.parameters.note)}})])]):e._e()])])])])},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(e){n("u8VY")},"data-v-26ad8e01",null).exports,v={name:"ECSRespondent",components:{SectionForm:f},data:function(){return{parameters:{title:"Republica de Bolumbia - Censo poblacional",description:"Ingresa con tus credenciales para comenzar el censo",inputs:[{label:"Código CFN",placeholder:"Ingrese se código CFN",type:"text",active:!0,id:"cfn",res:"",name:"",value:""},{label:"Código ECN",placeholder:"Ingrese se código ECN",type:"text",active:!0,id:"ecn",res:"",name:"",value:""}],button:{textButton:"Ingresar",active:!0},note:"¿Los códigos no funcionan?, Llama al  2539184"}}},methods:{eventFormLogin:function(e){if(""!==e.cfn&&""!=e.ecn){e.cfn,e.ecn;this.$router.push({path:"/FormRespondent/"+e.cfn+"/"+e.ecn,props:!0})}else alert("Ingrese los dos codigos")}}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"componentLogin d-flex justify-content-center align-items-center"},[t("section-form",{attrs:{id:"sectionForm",form:this.parameters},on:{"listen:event":this.eventFormLogin}})],1)},staticRenderFns:[]};var h=n("VU/8")(v,m,!1,function(e){n("0V06")},null,null).exports,A={name:"FormRespondent",props:["cfn","ecn"],data:function(){return{sections_user:void 0,form_user:void 0,section_form:void 0,title:void 0,date_form:void 0,index_section:0,is_census_nigth:!1,answers_form:void 0}},components:{SectionForm:f},mounted:function(){var e=this;c.a.get("http://ecsbackend.mybluemix.net/user/get_form/"+this.cfn+"/"+this.ecn).then(function(t){1==t.data.state?(e.answers_form=t.data.form,e.init_form(E)):(alert(t.data.msg),e.$router.push({path:"/"}))}).catch(function(e){console.log(e)}),c.a.get("http://ecsbackend.mybluemix.net/user/is_census_nigth/").then(function(t){1==t.data.state?e.is_census_nigth=t.data.is_census_nigth:alert(t.data.msg)}).catch(function(e){alert("Error en la conexion con el servidor, intente mas tarde"),console.log(e)})},methods:{init_form:function(e){if(void 0===e.secciones)return!1;this.form_user=e,this.title=e.titulo,this.date_form=e.fecha,this.sections_user=[];for(var t=0;t<e.secciones.length;t++){this.sections_user[t]={},this.sections_user[t].title=e.secciones[t].titulo,this.sections_user[t].inputs=[],this.sections_user[t].button={},this.sections_user[t].button.textButton="Siguiente Sección",this.sections_user[t].button.active=!0,this.sections_user[t].button_aux={},this.sections_user[t].button_aux.textButton="Anterior Sección",this.sections_user[t].button_aux.active=!0;for(var n=0;n<e.secciones[t].preguntas.length;n++){var s=e.secciones[t].preguntas[n];if(this.sections_user[t].inputs[n]={},void 0===s.opciones)this.sections_user[t].inputs[n].label=s.enunciado,this.sections_user[t].inputs[n].type="text",this.sections_user[t].inputs[n].active=!0,this.sections_user[t].inputs[n].id="input-"+n,this.sections_user[t].inputs[n].res=this.answers_form[t][n].answer;else{this.sections_user[t].inputs[n].label=s.enunciado,this.sections_user[t].inputs[n].type="radio",this.sections_user[t].inputs[n].active=!0,this.sections_user[t].inputs[n].id="input-"+n,this.sections_user[t].inputs[n].options=[],this.sections_user[t].inputs[n].res=this.answers_form[t][n].answer;for(var a=0;a<s.opciones.length;a++)this.sections_user[t].inputs[n].options[a]={},this.sections_user[t].inputs[n].options[a].value=s.opciones[a],this.sections_user[t].inputs[n].options[a].text=s.opciones[a],this.sections_user[t].inputs[n].options[a].name=s.opciones[a],this.sections_user[t].inputs[n].options[a].checked=!0}}}return this.section_form=this.sections_user[this.index_section],!0},nextSection:function(e){this.save_form(e,this.index_section),"next"==e.button?(this.index_section++,this.index_section>=this.sections_user.length&&(this.index_section=0)):(this.index_section--,this.index_section<0&&(this.index_section=this.sections_user.length-1)),this.section_form=this.sections_user[this.index_section],this.refresh_nav(this.index_section)},save_form:function(e,t){for(var n=0;n<this.form_user.secciones[t].preguntas.length;n++){this.form_user.secciones[t].preguntas[n].respuesta=e["input-"+n]}},send_form:function(){this.$refs.section_form_ref.acton_event(),c.a.post("http://ecsbackend.mybluemix.net/user/save_form/",this.form_user,{headers:{"Content-type":"application/json"}}).then(function(e){1==e.state?alert("Se ha salvado con exito"):alert(e.data.msg)}).catch(function(e){console.log(e),alert("Se produjo un error, vuelve a intentarlo más tarde")})},finish_form:function(){this.$refs.section_form_ref.acton_event(),console.log(this.form_user.codigo),c.a.post("http://ecsbackend.mybluemix.net/user/end_form/",this.form_user.codigo,{headers:{"Content-type":"application/json"}}).then(function(e){1==e.state?alert("Ha finalizado el censo correctamente, recuerde confirmar la última noche"):alert(e.data.msg)}).catch(function(e){console.log(e),alert("Se produjo un error, vuelve a intentarlo más tarde")})},change_section:function(e){switch(e){case 0:this.index_section=0,this.section_form=this.sections_user[this.index_section];break;case 1:this.index_section=1,this.section_form=this.sections_user[this.index_section]}this.refresh_nav(this.index_section)},refresh_nav:function(e){var t=this.$el.querySelectorAll(".active"),n=!0,s=!1,a=void 0;try{for(var i,o=l()(t);!(n=(i=o.next()).done);n=!0){i.value.className="nav-link active"}}catch(e){s=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(s)throw a}}e>=0&&e<=2?t[0].className="nav-link active selected":e>=3&&e<=6&&(t[1].className="nav-link active selected")},logout:function(){this.$router.push({path:"/"})}}},E={titulo:"CUESTIONARIO CENSO",fecha:"2018",codigo:{cfn:"1-10",ecn:"p"},secciones:[{titulo:"DATOS DE LA VIVIENDA",preguntas:[{enunciado:"INDIQUE EL TIPO DE VIVIENDA",respuesta:"",opciones:["Casa","Departamento en edificio","Vivienda tradicional indígena","Pieza en casa antigua","Mediagua, mejora, rancho o choza","Móvil (carpa, casa rodante o similar)","Otro tipo de vivienda particular"]},{enunciado:"INDIQUE SI LA VIVIENDA ESTÁ",respuesta:"",opciones:["Con moradores presentes","Con moradores ausentes","En venta, para arriendo, abandonada u otro","De temporada (vacacional u otro)"]}]},{titulo:"DATOS DE LA VIVIENDA",preguntas:[{enunciado:"¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN LAS PAREDES EXTERIORES?",respuesta:"",opciones:["Hormigón armado","Albañilería: bloque de cemento, piedra o ladrillo","Tabique forrado por ambas caras","Tabique sin forro interior","Adobe, barro, quincha, pirca u otro artesanal tradicional","Materiales precarios (lata, cartón, plástico, etc.)"]},{enunciado:"¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN LA CUBIERTA DEL TECHO?",respuesta:"",opciones:["Tejas o tejuelas de arcilla, metálicas, de cemento, de madera, asfálticas o plásticas","Losa hormigón","Planchas metálicas de zinc, cobre, etc. o fibrocemento","Fonolita o plancha de fieltro embreado","Paja, coirón, totora o caña","Materiales precarios (lata, cartón, plástico, etc.)"]},{enunciado:"¿CUÁL ES EL MATERIAL DE CONSTRUCCIÓN PRINCIPAL EN EL PISO?",respuesta:"",opciones:["Parquet, piso flotante, cerámico, madera, alfombra, flexit, cubrepiso u otro similar; sobre radier o vigas de madera","Radier sin revestimiento","Baldosa de cemento.","Capa de cemento sobre tierra","Tierra"]}]},{titulo:"DATOS DE LA VIVIENDA",preguntas:[{enunciado:"¿CUÁNTAS PIEZAS DE ESTA VIVIENDA SE USAN EXCLUSIVAMENTE COMO DORMITORIO?",respuesta:"",opciones:["0","1","2","3","4","5","Más"]},{enunciado:"El agua que usa esta vivienda proviene principalmente de",respuesta:"",opciones:["Red pública","Pozo o noria","Camión aljibe","Río, vertiente, estero, canal, lago, etc"]}]},{titulo:"DATOS DE LAS PERSONAS",preguntas:[{enunciado:"¿QUÉ RELACIÓN DE PARENTESCO TIENE CON EL JEFE/a DE HOGAR?",respuesta:"",opciones:["Esposo/a o cónyuge","Conviviente por unión civil","Conviviente de hecho","Hijo/a","Hijo/a del cónyuge","Hermano/a","Padre/Madre","Cuñado/a","Suegro/a","Yerno/Nuera","Nieto/a","Abuelo/a","Otro pariente","No pariente"]},{enunciado:"¿CUÁL ES SU SEXO?",respuesta:"",opciones:["Hombre","Mujer"]},{enunciado:"¿EN QUÉ MES NACIÓ?",respuesta:"",opciones:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"]},{enunciado:"¿EN QUÉ AÑO NACIÓ?",respuesta:""}]},{titulo:"DATOS DE LAS PERSONAS",preguntas:[{enunciado:"¿DONDE VIVE HABITUALMENTE?",respuesta:"",opciones:["En esta comuna","En otra comuna","En otro país"]},{enunciado:"¿EN DONDE NACIÓ USTED?",respuesta:"",opciones:["En esta comuna","En otra comuna","En otro país"]},{enunciado:"¿EN DONDE NACIÓ SU MADRE?",respuesta:"",opciones:["En esta comuna","En otra comuna","En otro país"]}]},{titulo:"DATOS DE LAS PERSONAS",preguntas:[{enunciado:"¿ASISTE ACTUALMENTE A LA EDUCACIÓN FORMAL?",respuesta:"",opciones:["Sí","No"]},{enunciado:"¿CUÁL ES EL CURSO O AÑO MÁS ALTO APROBADO?",respuesta:"",opciones:["0","1","2","3","4","5","6","7","8"]},{enunciado:"EL CURSO ANTERIORMENTE DECLARADO, A CUÁL DE LOS SIGUIENTES NIVELES CORRESPONDE",respuesta:"",opciones:["Sala Cuna o Jardín Infantil","Prekínder","Kínder","Educación Básica Primaria","Preparatoria","Científico-Humanista","Técnica Profesional","Técnica Comercial, Industrial/Normalista","Magister","Doctorado"]}]},{titulo:"DATOS DE LAS PERSONAS",preguntas:[{enunciado:"¿SE CONSIDERA PERTENECIENTE A ALGÚN PUEBLO INDÍGENA U ORIGINARIO?",respuesta:"",opciones:["Sí","No"]},{enunciado:"DURANTE LA SEMANA PASADA, ¿TRABAJÓ?",respuesta:"",opciones:["Sí, por un pago en dinero o especies","Sí, sin pago para un familiar","No, tenía empleo pero estuvo de vacaciones, con licencia, en descanso laboral, etc","No, se encontraba buscando empleo","No, estaba estudiando","No, realizó quehaceres de su hogar","No, es jubilado, pensionado o rentista","No, otra situación"]},{enunciado:"¿CUÁNTAS HIJAS E HIJOS NACIDOS HA TENIDO EN TOTAL?",respuesta:"",opciones:["Ninguno","1","2","3","Más de 3"]}]}]},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-page-form-respondent"},[n("div",{staticClass:"container-fluid header-respondent"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"col-2 d-flex align-self-center"},[n("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v("Salir")])])])]),e._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row d-flex justify-content-center"},[n("div",{staticClass:"col-11 col-md-10 col-lg-8 descriptionCensus"},[n("h5",[e._v("Bienvenido CFN= "+e._s(e.cfn)+"; ECN= "+e._s(e.ecn))]),e._v(" "),void 0!==e.title?n("h6",{domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),void 0!==e.date_form?n("p",[e._v("La última modificación fue el "),n("span",{domProps:{textContent:e._s(e.date_form)}})]):e._e(),e._v(" "),n("p",[e._v("Esta es la página oficial del censo electrónico de la republica de Bolumbia, debe de responder\n                    todas las preguntas completamente, puede realizar las siguientes acciones:\n                ")]),e._v(" "),e._m(2)])])]),e._v(" "),n("div",{staticClass:"d-flex justify-content-center"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active selected",attrs:{href:"#"},on:{click:function(t){e.change_section(0)}}},[e._v("Sección de vivienda")])]),e._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{href:"#"},on:{click:function(t){e.change_section(1)}}},[e._v("Sección de persona")])])])]),e._v(" "),n("div",{staticClass:"sectionFormPrincipal"},[n("section-form",{ref:"section_form_ref",attrs:{form:e.section_form},on:{"listen:event":e.nextSection}})],1),e._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:e.send_form}},[e._v("Guardar")]),e._v(" "),n("button",{staticClass:"btn btn-success",on:{click:e.finish_form}},[e._v("Terminar censo")]),e._v(" "),e.is_census_nigth?n("button",{staticClass:"btn btn-success",on:{click:e.finish_form}},[e._v("Confirmar censo")]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-4"},[t("img",{staticClass:"logoBolumbia",attrs:{src:n("njn4"),alt:"Logo Bolumbia"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-6 header-title d-flex align-self-center"},[t("p",[this._v("Censo electrónico de Bolumbia")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("ol",{staticClass:"text-left"},[t("li",[this._v("Guardar los cambios y continuar otro día")]),this._v(" "),t("li",[this._v("Enviar todo el formulario, con esta acción estan afirmando que terminaron el censo")]),this._v(" "),t("li",[this._v("El último día del censo va estar activado el boton de confirmar, debe realizar esta acción")])])])}]};var C=n("VU/8")(A,x,!1,function(e){n("K3NX")},null,null).exports;s.a.use(o.a);var g=new o.a({routes:[{path:"/",name:"ECSRespondent",component:h},{path:"/FormRespondent/:cfn/:ecn",name:"FormRespondent",component:C,props:!0}]}),N=n("e6fC");n("Jmt5"),n("9M+g"),n("dhIU");s.a.use(N.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:i},template:"<App/>"})},dhIU:function(e,t,n){"use strict";const s=n("2cg0"),a=n("rBKV");e.exports=s(a,{NODE_ENV:'"development"',ROOT_API:'"http://localhost:8000"'})},eGlv:function(e,t){},njn4:function(e,t){e.exports="data:image/jpeg;base64,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"},rBKV:function(e,t,n){"use strict";e.exports={NODE_ENV:'"production"',ROOT_API:'"http://ecsbackend.mybluemix.net"'}},u8VY:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6b01a5ab1e4522e5de15.js.map