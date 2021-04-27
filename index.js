const Render = require("./src/render.js")
const fs = require('fs')
const SDK = require('@yuque/sdk');
const client = new SDK({
  token: 'A4of6TlXsYRw6oOZm0iwTc1CN4XDOqqd81qxzwBR',
  handler(res) {
    // should handler error yourself
    if (res.status !== 200) {
      const err = new Error(res.data.message);
      /* istanbul ignore next */
      err.status = res.data.status || res.status;
      err.code = res.data.code;
      err.data = res;
      throw err;
    }
    // return whatever you want
    const { data, abilities } = res.data;
    return data;
  }
  // other options
});

// apis
const { users, groups, repos, docs } = client;
async function setup() {
  // const r_users = await users.get();
  // const render = new Render()
  // render.g_people(r_users)


  const r_repos = await repos.get({ namespace: "roylau/blog" });
  fs.writeFileSync('./data/r_repos.json',JSON.stringify(r_repos,null,2))
  // console.log(r_repos)

  const docsList = await docs.list({ namespace: "roylau/blog" })
  fs.writeFileSync('./data/docsList.json',JSON.stringify(docsList,null,2))
  // console.log(docsList)

  const docsConentArr = []
  for (let i = 0; i < docsList.length; i++) {
    const r_docs = await docs.get({ namespace: "roylau/blog", slug: docsList[i].slug });
    // console.log(r_docs)
    docsConentArr.push(r_docs)
  }
  fs.writeFileSync('./data/docsConentArr.json',JSON.stringiÏfy(docsConentArr,null,2))

}
setup()
