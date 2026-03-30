const { ACCESS_REPO: REPO, ACCESS_TOKEN: TOKEN, PR_NUMBER: PR } = process.env;
const tag = process.argv.at(-2);
const comment = process.argv.at(-1);
const REPLACE_MARK = `<!-- GHA_UPDATE_COMMENT -->`;
const ISSUE_API = `https://api.github.com/repos/${REPO}/issues`;

const wrappedComment = `${REPLACE_MARK}\n${comment}`;

async function withGithub(path, options = {}) {
  const { method = 'GET', body } = options;
  const res = await fetch(`${ISSUE_API}${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
      Authorization: TOKEN.startsWith('ghp_') ? `Basic ${Buffer.from(TOKEN).toString('base64')}` : `Bearer ${TOKEN}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub API ${method} ${path} failed: ${res.status} ${error}`);
  }

  return res.status === 204 ? null : res.json();
}

async function run() {
  const comments = await withGithub(`/${PR}/comments`);
  const existing = comments.find(({ body }) => typeof body === 'string' && body.includes(REPLACE_MARK));

  console.log('Origin comment:', existing ?? null);

  const path = existing ? `/comments/${existing.id}` : `/${PR}/comments`;
  const method = existing ? 'PATCH' : 'POST';
  const result = await withGithub(path, {
    method,
    body: { body: wrappedComment },
  });

  console.log('Comment completed:', result);
}

run().catch(error => {
  console.error('Comment script failed:', error.message);
  process.exit(1);
});
