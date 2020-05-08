const Render = require("./src/render.js")
const SDK = require('@yuque/sdk');
const client = new SDK({
  token: 'A4of6TlXsYRw6oOZm0iwTc1CN4XDOqqd81qxzwBR',
  // other options
});

// apis
const { users, groups, repos, docs } = client;
async function setup() {
  const result = await users.get();
  const render = new Render()
  render.g_people(result)
}
setup()
