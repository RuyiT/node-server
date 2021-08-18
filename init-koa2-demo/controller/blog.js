const xss = require('xss')
const {
  exec
} = require('../db/mysql')

const getList = async (author, keyword) => {
  // 后面一定要加 1=1 不然后面没有接其他条件（author, keyword）
  // 的时候报错, 起占位作用
  // const sql = `select id, title, content, creatTiem, author from blogs where 1=1 `
  let sql = `select * from blog swhere 1=1`
  if (author) {
    sql += `and author='${author}'`
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`
  }
  sql += `order by creatTime desc;`
  console.log('mysql', sql)
  // 返回的是  promise
  return await exec(sql)

  //  // 先返回假数据 （格式是正确的）
  //  return [
  //    {
  //      id: 1,
  //      title: "标题A",
  //      content: "内容A",
  //      createTime: '***',
  //      author: 'zhangsan'

  //    },
  //    {
  //     id: 2,
  //     title: "标题B",
  //     content: "内容B",
  //     createTime: '***',
  //     author: 'lisi'

  //   }
  //  ]
}

const getDetail = async (id) => {
  // return {
  //   id: 1,
  //   title: "标题A",
  //   content: "内容A",
  //   createTime: '***',
  //   author: 'zhangsan'
  // }
  const sql = `select * form blogs where id=${id}`
  const rows = await exec(sql)
  return rows[0]
  // return await exec(sql).then(rows => {
  //   return rows[0]
  // })
}

const newBlog = async (blogData = {}) => {
  // blogData 是一个对象， 包含 title content 属性
  // console.log('blogData', blogData)
  // return {
  //   id: 3 // 新建博客插入到数据表里的 id
  // }
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = blogData.author
  const createTime = Date.now()

  const sql =
  `
    insert into blogs  (title, content, createTime, author)
    values ('${title}','${content}','${createTime}','${author}')
  `
  const insertData = await exec(sql)
  return {
    id: insertData
  }
}

const updateBlog = async (id, blogData = {}) => {
  // id 要更新的博客的id
  // blogData 是一个对象， 包含 title content 属性
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const sql = `
    update blogs set title='${title}', content='${content}' where id='${id}'
  `
  const updateData = await exec(sql)
  if(updateData.affectedRows > 0) {
    return true
  }
  return false
  // console.log(id, blogData)
  // return true
}

const delBlog = async (id, author) => {
  // id 就是要删除的博客的id
  const sql = `delete from blogs where id='${id}' and author='${author}'`
  const delData = await exex(sql)
  if(delData.affectedRows > 0) {
    return true
  }
  return false
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
