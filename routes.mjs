import db from './models/index.mjs';

// import your controllers here
import initBugController from './controllers/bug.mjs';
import initFeatureController from './controllers/feature.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const BugsController = initBugController(db);
  const FeaturesController = initFeatureController(db);

  // On page load, render the button
  // Routes for changing pages
  app.get('/', BugsController.index);

  // We use axios to get the features on page load
  app.get('/features', FeaturesController.index);

  app.post('/bug/:feature_id', BugsController.create);
}
