/**
 * Created by 文琪 on 2015/3/9.
 */

var dns = require('dns');

dns.lookup('sysyhzcgjdd.ynu.edu.cn', function(err, addresses){
    if(err) console.log(err);
    console.log(JSON.stringify(addresses));
});

//dns.setServers(['114.114.114.114']);
console.log(dns);