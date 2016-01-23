/*
The code below follows a tutorial from Burak Kanber:
 http://burakkanber.com/blog/machine-learning-in-js-k-nearest-neighbor-part-1/
 */ 

/*
The Problem:
Given the number of rooms and area (in square feet) of a type of dwelling, figure out if it's an apartment, house, or flat.
 */
var _ = require('underscore');

// A Node to represent each data point:
var Node = function(rooms, area, type) {
  this.rooms = rooms;
  this.area = area;
  this.type = type;
};

// A NodeList constructor to store nodes:
var NodeList = function(k) {
  this.nodes = [];
  this.k = k;
};
NodeList.prototype.normalize = function() {
  // find the hi/lo, lo is = 0, high is one
};



var JSONdata = [
  {
    'Rooms':'1',
    'Area':'350',
    'Type':'apartment'
  },
  {
    'Rooms':'2',
    'Area':'300',
    'Type':'apartment'
  },
  {
    'Rooms':'3',
    'Area':'300',
    'Type':'apartment'
  },
  {
    'Rooms':'4',
    'Area':'250',
    'Type':'apartment'
  },
  {
    'Rooms':'4',
    'Area':'500',
    'Type':'apartment'
  },
  {
    'Rooms':'4',
    'Area':'400',
    'Type':'apartment'
  },
  {
    'Rooms':'5',
    'Area':'450',
    'Type':'apartment'
  },
  {
    'Rooms':'7',
    'Area':'850',
    'Type':'house'
  },
  {
    'Rooms':'7',
    'Area':'900',
    'Type':'house'
  },
  {
    'Rooms':'7',
    'Area':'1200',
    'Type':'house'
  },
  {
    'Rooms':'8',
    'Area':'1500',
    'Type':'house'
  },
  {
    'Rooms':'9',
    'Area':'1300',
    'Type':'house'
  },
  {
    'Rooms':'8',
    'Area':'1240',
    'Type':'house'
  },
  {
    'Rooms':'10',
    'Area':'1700',
    'Type':'house'
  },
  {
    'Rooms':'9',
    'Area':'1000',
    'Type':'house'
  },
  {
    'Rooms':'1',
    'Area':'800',
    'Type':'flat'
  },
  {
    'Rooms':'3',
    'Area':'900',
    'Type':'flat'
  },
  {
    'Rooms':'2',
    'Area':'700',
    'Type':'flat'
  },
  {
    'Rooms':'1',
    'Area':'900',
    'Type':'flat'
  },
  {
    'Rooms':'2',
    'Area':'1150',
    'Type':'flat'
  },
  {
    'Rooms':'1',
    'Area':'1000',
    'Type':'flat'
  },
  {
    'Rooms':'2',
    'Area':'1200',
    'Type':'flat'
  },
  {
    'Rooms':'1',
    'Area':'1300',
    'Type':'flat'
  }
];

function cleanseData(data) {
  var cleansed = {};
  // set the keys in cleansed... 1-to keys in data, 2-to an empty array 
  _.each(_.keys(data[0]), a => cleansed[a] = []);
  data.forEach((d, i) => {
    for (var key in d) {
      cleansed[key].push(Number(d[key]) || d[key])
    }
    if (i === data.length - 1) {
      for (var k in cleansed) {
        cleansed[k] = normalize(cleansed[k]);
      }
    }
  });
  return objectify(cleansed);
}
function normalize(arr, num) {
  if (arr[0].constructor !== Number) {
    return arr;
  }
  var min = Math.min.apply(Math, arr); 
  var max = Math.max.apply(Math, arr);
  var result = [0];
  arr.forEach((a, i) => {
    if (i > 0) {
      result.push(((a - min)/(max-min)).toFixed(3));
    }
  });
  return result;
}
function objectify (obj) {
  var result = [];
  var keys = _.keys(obj);
  // grab any array, they should all have the same length;
  var arr = obj[keys[0]];
  _.each(arr, (a, i) => {
    var el = {};
    _.each(keys, key => {
      el[key] = obj[key][i];
    })
    result.push(el);
  });
  return result;
}














