var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader ('Access-Control-Allow-Origin', '*');
    res.setHeader ('Access-Control-Allow-Credentials', true);
    res.setHeader ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader ('Access-Control-Allow-Headers', 'Content-Type');
    setTimeout(function() {
    	res.end(JSON.stringify([  {    "values": [      {        "x": 0,        "y": 0.4      },      {        "x": 1,        "y": 0.5      },      {        "x": 2,        "y": 0.6      },      {        "x": 3,        "y": 0.8      },      {        "x": 4,        "y": 0.9      },      {        "x": 5,        "y": 0.3      },      {        "x": 6,        "y": 0.6      },      {        "x": 7,        "y": 0.2      },      {        "x": 8,        "y": 0.5      },      {        "x": 9,        "y": 0.7      },      {        "x": 10,        "y": 0.6      },      {        "x": 11,        "y": 0.2      },      {        "x": 12,        "y": 0.5      },      {        "x": 13,        "y": 0.2      },      {        "x": 14,        "y": 0.7      },      {        "x": 15,        "y": 0.8      },      {        "x": 16,        "y": 0.8      },      {        "x": 17,        "y": 0.8      },      {        "x": 18,        "y": 0.8      },      {        "x": 19,        "y": 0.8      },      {        "x": 20,        "y": 0.8      },      {        "x": 21,        "y": 0.8      },      {        "x": 22,        "y": 0.8      },      {        "x": 23,        "y": 0.8      }    ],    "key": "Actual Data Latency",    "color": "#ff7f0e"  },  {    "values": [      {        "x": 0,        "y": 1      },      {        "x": 1,        "y": 1      },      {        "x": 2,        "y": 1      },      {        "x": 3,        "y": 1      },      {        "x": 4,        "y": 1      },      {        "x": 5,        "y": 1      },      {        "x": 6,        "y": 1      },      {        "x": 7,        "y": 1      },      {        "x": 8,        "y": 1      },      {        "x": 9,        "y": 1      },      {        "x": 10,        "y": 1      },      {        "x": 11,        "y": 1      },      {        "x": 12,        "y": 1      },      {        "x": 13,        "y": 1      },      {        "x": 14,        "y": 1      },      {        "x": 15,        "y": 1      },      {        "x": 16,        "y": 1      },      {        "x": 17,        "y": 1      },      {        "x": 18,        "y": 1      },      {        "x": 19,        "y": 1      },      {        "x": 20,        "y": 1      },      {        "x": 21,        "y": 1      },      {        "x": 22,        "y": 1      },      {        "x": 23,        "y": 1      }    ],    "key": "Permissible Data Latency",    "color": "#2ca02c"  }], 
    		null, 
    		3));
    	console.log("hi");
	}, 3000);
    
});
app.listen(3001);