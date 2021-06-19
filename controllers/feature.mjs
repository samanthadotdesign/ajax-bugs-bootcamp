export default function initFeatureController(db) {
  // get the list of features
  const index = async (req, res) => {
    try {
      const features = await db.Feature.findAll();
      res.send(features);
    } catch (error) {
      console.log('Error getting features', error);
    }
  };
  return { index };
}
