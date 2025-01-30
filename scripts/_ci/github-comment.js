const REPO = process.env.ACCESS_REPO;
const TOKEN = process.env.ACCESS_TOKEN;
const PR = process.env.PR_NUMBER;
const argv = process.argv;
const tag = argv[argv.length - 2];
const comment = argv[argv.length - 1];
const REPLACE_MARK = `<!-- GHA_UPDATE_COMMENT_${tag} -->`;

const wrappedComment = `
  ${REPLACE_MARK}
  ${comment}
`.trim();

async function withGithub(url, json, method) {
  const res = await fetch(url, {
    method: method || (json ? 'POST' : 'GET'),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(TOKEN).toString('base64')}`,
    },
    body: json ? JSON.stringify(json) : undefined,
  });

  return res.json();
}

(async function run() {
  if (PR == null) {
    console.log('未获取到PR，忽略处理')
    return;
  }

  const comments = await withGithub(`https://api.github.com/repos/${REPO}/issues/${PR}/comments`);

  // Find my comment
  const updateComment = comments.find(({ body }) => body.includes(REPLACE_MARK));

  console.log('Origin comment:', updateComment);

  // Update
  let res;
  if (!updateComment) {
    res = await withGithub(`https://api.github.com/repos/${REPO}/issues/${PR}/comments`, {
      body: wrappedComment,
    });
  } else {
    res = await withGithub(
      `https://api.github.com/repos/${REPO}/issues/comments/${updateComment.id}`,
      {
        body: wrappedComment,
      },
      'PATCH',
    );
  }


  console.log(res);
})();
