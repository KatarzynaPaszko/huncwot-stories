const { ok, created } = require('huncwot/response');
const db = require('huncwot/db');

async function browse(request) {
  const results = await db('stories');

  return ok(results);
}

async function read(request) {
  const { id } = request.params;

  const result = await db('stories').where({ id });
  return ok(result);
}

async function edit(request) {
  const { id, name } = request.params;

  await db('stories').where({ id }).update({ name });

  return ok({ status: `success: ${id} changed to ${name}` });
}

async function add(request) {
  const { title, url } = request.params;

  await db('stories').insert({ title, url, score: 0, submitted_at: "2017-07-07T12:05:06.000Z" });

  return created({ status: `success: ${title} created` });
}

async function destroy(request) {
  const { id } = request.params;

  await db('stories').where({ id }).del();

  return ok({ status: `success: ${id} destroyed` });
}

module.exports = { browse, read, edit, add, destroy }
