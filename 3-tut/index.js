const {format , compareAsc} = require("date-fns")



const date = format(new Date(2014 , 12 , 12) , 'yyyy-MM-dd')
console.log(date)