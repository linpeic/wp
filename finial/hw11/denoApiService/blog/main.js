import {sqlFetch} from '../lib/sql.js'

export var R = {}
let _id=0, _title=1, _body=2

window.onhashchange = async function () //hash值改變決定如何執行
{
  var r
  var tokens = window.location.hash.split('/')//分割
  console.log('tokens=', tokens)
  switch (tokens[0]) {
    case '#show'://當tokens[0]是'#show'執行以下
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`)
      R.show(r[0]) // 取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多比，所以用 results[0] 只取第一筆)
      break
    case '#new'://當tokens[0]是'#new'執行以下
      R.new()
      break
    default://前面都不符合時，執行以下動作
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`)//執行SQL查詢
      R.list(posts)//查詢的資料傳送到R.list()裡面
      break
  }
}

window.onload = async function () {
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`)
  window.onhashchange()
}//blog數據庫名稱，後面為要查詢的

R.layout = function (title, content) {
  document.querySelector('title').innerText = title
  document.querySelector('#content').innerHTML = content
}//網頁的格式

R.list = function (posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post[_title]}</h2>
      <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
    </li>
    `)
  }
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul> 
  `
  return R.layout('Posts', content)//標題'Posts' 內容
}//posts.length數量

R.new = function () {
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)//表單
  document.querySelector('#savePost').onclick = ()=>R.savePost()//當按鈕被按下，用R.savePost()保存
}

R.show = function (post) {
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)
}//用_title存取post的標題、_body post的內文

R.savePost = async function () {
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`)//將擷取到的標題以及本文插入到Posts中
  window.location.hash = '#list'//回列表
}
