//获取第一页参数 
 $(document).ready(function (){
      var roles=localStorage.getItem("roles");
         var role=new Array(); 
         var roleName=new Array();
         role=roles.split(',');
    	 for(var n=0;n<role.length;n++)
    		        {
    		         switch(role[n])
    		           {
    		           case "90900023":
    		    	   roleName[n]="远程专员";break;
    		           case "90900014":
        		       roleName[n]="分行片区经理";break;
    		           case "90900013":
        		       roleName[n]="分行专员";break;
    		           case "90900019":
        		       roleName[n]="直销主任";break;
    		           case "90900012":
        		       roleName[n]="直销业务员";break;
    		           case "90900018":
        		       roleName[n]="寿险专员";break;
    		           case "90900001":
        		       roleName[n]="理财经理";break;
    		           case "90900003":
        		       roleName[n]="社区经理";break;
    		           case "90900008":
        		       roleName[n]="远程渠道";break;
    		           case "90900009":
        		       roleName[n]="私行PB";break;
    		           case "90900004":
        		       roleName[n]="小微客户经理";break;
    		           case "90900002":
        		       roleName[n]=" 综拓经理";break;
    		           case "90900005":
        		       roleName[n]="对公客户经理";break;
    		           case "90900006":
        		       roleName[n]="个贷客户经理";break;
    		           case "90900007":
        		       roleName[n]="汽融客户经理";break;
    		           case "90900015":
        		       roleName[n]="信用卡人员";break;
    		           case "90900016":
        		       roleName[n]="零售内勤";break;
    		           case "90900017":
        		       roleName[n]="非零人员";break;
    		           case "90900010":
            		   roleName[n]="理财助理";break;
        		       case "90900011":
            		   roleName[n]="理财顾问";break;
    		           }
  		                  var str="";
  		                  if(n==0) str+='<option selected="selected" value="'+role[n]+'">';
  		                     else  str+='<option value="'+role[n]+'">';
  		                  str+=roleName[n];
  		                  str+='</option>';
  		                  $("#changeUser").append(str);
    		        }
      });  
 
function getQueryStringByName(name) {
    var result = null;
    var search = window.location.search;	
    if(search.indexOf("=&=")!=-1) {	//防止注入
        result = search.replace("=&=","=").match(new RegExp("[\?\&]"+name+"=([^\&]+)","i"))
    } else {
        result = search.match(new RegExp("[\?\&]"+name+"=([^\&]+)","i"))
    }
    if(result == null || result.length < 1) {
        return ""
    }
    return result[1];
     };