let comments = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, comment, slug } = req.body;
    if (!name || !email || !comment || !slug) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newComment = { name, email, comment, slug, date: new Date().toISOString() };
    comments.push(newComment);
    return res.status(200).json({ message: 'Comment added successfully', comment: newComment });
  } else if (req.method === 'GET') {
    const { slug } = req.query;
    const postComments = comments.filter((c) => c.slug === slug);
    return res.status(200).json(postComments);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
