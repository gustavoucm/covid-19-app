(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10bff645"],{"92d1":function(t,a,e){},ad3a:function(t,a,e){"use strict";var s=e("92d1"),n=e.n(s);n.a},f096:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.loading?e("LoadingComponent"):t._e(),t.showCountryInfo?e("v-row",[e("v-col",{staticClass:"text-center",attrs:{md:"10","offset-md":"1"}},[e("h1",[t._v(t._s(t.countryInfo.translations.es))]),e("img",{staticClass:"d-flex justify-center mex flag mt-3",attrs:{src:t.countryInfo.flag,width:"350",alt:t.countryInfo.translations.es+" flag"}})])],1):t._e(),t.loading?t._e():e("v-row",[e("v-col",{attrs:{"offset-md":"1",md:"10"}},[e("v-row",[e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.cases.total,!1)))]),e("h2",{staticClass:"text-center pt-3"},[t._v("Casos confirmados")])])],1)],1),e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.deaths.total,!1)))]),e("h2",{staticClass:"text-center pt-3"},[t._v("Defunciones")])])],1)],1),e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.cases.critical,!1)))]),e("h2",{staticClass:"text-center"},[t._v("Casos criticos")])])],1)],1),e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.cases.new,!0)))]),e("h2",{staticClass:"text-center"},[t._v("Nuevos casos")])])],1)],1),e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.deaths.new,!0)))]),e("h2",{staticClass:"text-center"},[t._v("Nuevas defunciones")])])],1)],1),e("v-col",{staticClass:"mb-5",attrs:{md:"4",sm:"6"}},[e("v-card",{staticClass:"d-flex align-content-center flex-wrap mx-auto",attrs:{width:"200",height:"200"}},[e("v-card-text",[e("p",{staticClass:"text-center number"},[t._v(t._s(t.format(t.data.cases.recovered,!1)))]),e("h2",{staticClass:"text-center pt-3"},[t._v("Total de recuperados")])])],1)],1)],1)],1)],1),t.loading?t._e():e("v-row",[e("v-col",{attrs:{"offset-sm":"1",sm:"10"}},[e("p",{staticClass:"text-right"},[t._v("* Información recabada el dia "+t._s(t.currentDate))])])],1),t.loading?t._e():e("v-row",[e("v-col",{staticClass:"mb-5",attrs:{"offset-sm":"1",sm:"10"}},[e("v-card",[e("v-card-text",[e("canvas",{attrs:{id:"line-chart",width:"800",height:"450"}})])],1)],1)],1)],1)},n=[],r=(e("6b54"),e("a481"),e("7f7f"),e("30ef")),c=e.n(r),i={name:"countryComponent",data:function(){return{loading:!0,myChart:null,country:"",currentDate:"",screenWidth:0,labelAvailable:!0,nameURI:"",chart:{labels:[],data:[],recovered:[],deaths:[]},showCountryInfo:!1,data:{country:"",cases:{new:"",active:0,critical:0,recovered:0,total:0},deaths:{new:"",total:0},day:"",time:""},countryInfo:null}},created:function(){var t=this;this.screenWidth=screen.width,this.labelAvailable=!(screen.width<600),window.addEventListener("resize",(function(){t.screenWidth=screen.width,t.labelAvailable=!(screen.width<600),t.generateChart()})),this.nameURI=this.$route.params.name,this.$store.dispatch("coronavirus/getStatistics",{event:{context:this,country:this.nameURI}})},methods:{getDate:function(){var t=new Date(this.data.day),a={weekday:"long",year:"numeric",month:"long",day:"numeric"};this.currentDate=t.toLocaleDateString("es-ES",a),this.getCountryInfo()},getCountryInfo:function(){this.loading=!1,this.$store.dispatch("coronavirus/getCountryInfo",{event:{context:this,country:this.nameURI}}),this.$store.dispatch("coronavirus/getHistoryByCountry",{event:{context:this,country:this.nameURI}})},generateChart:function(){this.myChart=new c.a(document.getElementById("line-chart"),{type:"line",data:{labels:this.chart.labels,datasets:[{data:this.chart.data,label:"Confirmados",borderColor:"#3e95cd",fill:!1}]},options:{title:{display:!0,text:"Número de casos confirmados en "+(this.countryInfo.translations.es?this.countryInfo.translations.es:this.nameURI)},scales:{xAxes:[{ticks:{display:this.labelAvailable}}]}}})},format:function(t,a){return""===t||null===t?"En proceso":a?(t=t.substring(1),"+"+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")):t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},o=i,l=(e("ad3a"),e("2877")),d=e("6544"),h=e.n(d),m=e("b0af"),f=e("99d9"),u=e("62ad"),v=e("0fd9"),x=Object(l["a"])(o,s,n,!1,null,"a8cd4ba4",null);a["default"]=x.exports;h()(x,{VCard:m["a"],VCardText:f["a"],VCol:u["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-10bff645.e9e1e7d7.js.map