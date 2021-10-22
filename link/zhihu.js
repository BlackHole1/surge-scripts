const targetURL = getTargetURL($request.url);

if (targetURL === null) {
  $done({});
} else {
  $done({
    response: {
      status: 302,
      headers: {
        Location: targetURL,
      },
    }
  });
}

function getTargetURL(url) {
  const targetRegex = /https?:\/\/link\.zhihu\.com\/\?(.*)target=(.*)\&?/;
  const result = targetRegex.exec(url);

  return result ? decodeURIComponent(result[2]) : null;
}