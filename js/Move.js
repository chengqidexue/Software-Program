
function Mouse(obj,target,name,func) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var cur=0;
        if(name=='opacity')
            cur=Math.round(parseFloat(getStyle(obj,name))*100);
        else cur=parseInt(getStyle(obj,name));
        if(cur==target){
            clearInterval(obj.timer);
            if(func) func;
        }
        else{
            var speed = (target - cur) / 6;
            speed < 0 ? speed = Math.floor(speed) : speed = Math.ceil(speed);
            if(name=='opacity'){
                obj.style.filter='alpha(opacity:'+cur+speed+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else obj.style[name]=cur+speed+'px';
        }
    },30);
}
function MouseJson(obj,json,func) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
      var bSop=true;
      for(var name in json){
          var cur=0;
          if(name=='opacity')
              cur=Math.round(parseFloat(getStyle(obj,name))*100);
          else cur=parseInt(getStyle(obj,name));
          var speed = (json[name] - cur) / 6;
          speed < 0 ? speed = Math.floor(speed) : speed = Math.ceil(speed);
          if(cur!=json[name])
            bSop=false;
              if(name=='opacity'){
                  obj.style.filter='alpha(opacity:'+cur+speed+')';
                  obj.style.opacity=(cur+speed)/100;
              }
              else obj.style[name]=cur+speed+'px';
      }
      if(bSop){
              clearInterval(obj.timer);
              if(func) func;
      }
    },30);
}
function getStyle(obj,name) {
    if(obj.currentStyle)
        return obj.currentStyle[name];
    else return getComputedStyle(obj,false)[name];
}
function getByClass(oParent,sClass) {
    var aEle=oParent.getElementsByTagName('*');
    var aResult=[];
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==sClass)
            aResult.push(aEle[i])
    }
    return aResult;
}
function getPos(ev) {
    var scroolTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scroolLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    return {x:ev.clientX+scroolLeft,y:ev.clientY+scroolTop};
}