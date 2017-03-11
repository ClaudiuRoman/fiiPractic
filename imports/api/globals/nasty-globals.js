import Donuts from '/imports/api/donuts/collection.js';

// / Keep in mind: because we used export default, when we import, we can import as any name:
// import AnyNameIWantWillBeTheSame from '/imports/api/donuts/collection.js'
DonutsCollection = Donuts; // we did not use var, let, const before it, so it's a global