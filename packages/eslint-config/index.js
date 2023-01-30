const sharedExtends = require('./shared/extends');
const sharedRules = require('./shared/rules');

module.exports = {
  root: true,
  extends: [...sharedExtends],
  rules: {
    ...sharedRules,
  },
};
