// 按需导入 
import m1, {
    s1,
    s2 as ss2,
    s3,
    say
} from './m1.js'

// 直接导入并执行代码
// import "./m1.js";

console.log(m1)
console.log(s1)
console.log(ss2)
console.log(s3);
console.log(s1 + ss2 + s3);
console.log(say)
say()