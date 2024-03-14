import {Users} from "../Data/Users.data.js";
import Mock from 'mockjs'



Mock.mock('/login', 'post', (req) => {
  let result = {
    msg: '',
    data: '',
    user: {},
  }
  let form = JSON.parse(req.body);
  const user = Users.find(user => user.username === form.username)
  if (user) {
    if (user.password === form.password){

      result.msg = '登陆成功'
      result.data = 'true'
      result.user = user
    } else {
      result.msg = '密码错误'
      result.data = 'false'
    }
  } else {
    result.msg = '用户不存在'
    result.data = 'false'
  }
  return result
})

