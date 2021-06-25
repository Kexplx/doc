client.flushall(() => {
  client.hmset("hosts", { fname: 1 }, (err, ok) => {
    if (err != null) {
      // handle error.
    }

    client.hgetall("hosts", (err, obj) => {
      console.log(obj);
    });
  });
});
