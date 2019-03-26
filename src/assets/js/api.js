/**
 * Created by Administrator on 2018/12/4.
 */
const baseURL = "http://jsonplaceholder.typicode.com/";//测试用


//正则
const regMoney = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/; //输入金额
const regIdCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //18位身份证
const regPhone = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;//手机号码
const regPassward = new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/); //密码验证规则（6~12位字母数字组和）









export { baseURL , regMoney ,regIdCard ,regPhone ,regPassward }
