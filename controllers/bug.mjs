export default function initBugController(db) {
  // Renders the page on load
  const index = (req, res) => {
    try {
      res.render('homepage');
    } catch (error) {
      console.log('error getting bugs', error);
    }
  };

  // Create new bug
  const create = async (req, res) => {
    const { feature_id: featureId } = req.params;
    const { problem, errorText, commit } = req.body;
    console.log('destructured object', req.body);

    try {
      await db.Bug.create({
        problem,
        errorText,
        commit,
        featureId,
        // createdAt & updatedAt are automatically created
        // Only necessary for seeder file
      });
      res.redirect('/');
    } catch (error) {
      console.log('error creating bug', error);
    }
  };

  return { index, create };
}
