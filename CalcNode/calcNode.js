module.exports = {
    sum: function() {
        for (var i = 0; i <= 5; i++) {
            setTimeout(function() {
              console.log('i: ' + i);
            }, i * 1000);
        }
    },
    
    sum2: function() {
        for (var i = 0; i <= 5; i++) {
        (function(j) {
            setTimeout(function() {
                console.log('i: ' + j);
              }, i * 1000);
        })(i)
    }
    }
}