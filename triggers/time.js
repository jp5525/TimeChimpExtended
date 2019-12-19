// triggers on time with a certain tag
const triggerTime = (z, bundle) => 
  z.request({url: 'https://api.timechimp.com/v1/time' })
    .then(response => z.JSON.parse(response.content))
    .then(times=> times.filter(t=>t.hours > 0))


module.exports = {
  key: 'time',
  noun: 'Time',

  display: {
    label: 'Get Completed Time',
    description: 'Triggers when a time entry is closed.'
  },

  operation: {
    inputFields: [],
    perform: triggerTime,
  }
};
