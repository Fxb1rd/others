
//深度克隆
//例子
var Person={
    Name:"peter",
    Age:"18",
    Address:{
        province:"beijing"
    },
    Favorite:[
        "swimming",
        {reading:"history book"}
    ]
};
//函数
function cloneObject(src){
    var Result;
    switch(Object.prototype.toString.call(src)){
        case "[object Number]":
            Result = src;
            break;
        case "[object String]":
            Result = src;
            break;
        case "[object Array]":
            var temp = [];
            for(var i=0,a;a = src[i];i++) {
                 temp[i] = cloneObject(a);
            }
            Result = temp;
            delete temp;
            break;
        case "[object Object]":
            var temp = {};
            var keys = Object.keys(src);
            // keys 为对象src的键名字数组
            for(var i=0,a;a=keys[i];i++) {
                temp[a] = cloneObject(src[a]);
            }
            Result = temp;
            delete temp;
            delete keys;
            break;
        default:
            break;
    }
    return Result;
};

