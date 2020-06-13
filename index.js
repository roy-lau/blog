const Render = require("./src/render.js")
const SDK = require('@yuque/sdk');
const client = new SDK({
  token: 'A4of6TlXsYRw6oOZm0iwTc1CN4XDOqqd81qxzwBR',
  // other options
});

// apis
const { users, groups, repos, docs } = client;
async function setup() {
  // const r_users = await users.get();
  // const render = new Render()
  // render.g_people(r_users)


  const r_repos = await repos.get({ namespace: "roylau/blog" });
  console.log(r_repos)

  // for (let i = 0; i < r_repos.length; i++) {
  //   const r_docs = await docs.get({ login: "roylau/blog" });
  //   console.log(r_docs)
  // }
}
setup()
