var ranges = {}

process.env.RANGES.split(";").map(function(r) {
  var arr = r.split(":", 2);
  var name = arr[0];
  var org_range = arr[1];
  ranges[name] = org_range.split(",").map(function(r) { 
    if (r.match(/-/)) {
      return r.split("-"); 
    } else {
      return r;
    }
  });
});

module.exports = {
  "nick": process.env.IRC_NICK,
  "consumer_key": process.env.CONSUMER_KEY,
  "consumer_secret": process.env.CONSUMER_SECRET,
  "access_token": process.env.ACCESS_TOKEN,
  "access_token_secret": process.env.ACCESS_TOKEN_SECRET,
  "ranges": ranges
}
