// vvvv database
const data = []

// need to filter through service types
data.find({service: {$regex: /userinput/i }})
data.find({service: /userinput/i })