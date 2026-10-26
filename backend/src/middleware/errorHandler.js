// 404 for unknown API paths
function notFound(req, res) {
  res.status(404).json({ error: 'Not found' });
}

// Central error handler: malformed JSON, oversized body, anything unexpected
// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Malformed JSON' });
  }
  if (error.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Request too large' });
  }
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
}

module.exports = { notFound, errorHandler };
