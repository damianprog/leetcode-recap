// var RecentCounter = function () {
//   this.queue = [];
// };

// RecentCounter.prototype.ping = function (t) {
//   this.queue.push(t);

//   while (this.queue[0] < t - 3000) this.queue.shift();

//   return this.queue.length;
// };

// ===============================================================================
// Wersja szybsza bo powyższa w najgorszym case O(n2) bo shift jest O(n)

var RecentCounter = function () {
  this.queue = [];
  this.head = 0;
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue[this.head] < t - 3000) {
    this.head++;
  }

  return this.queue.length - this.head;
};

// ===============================================================================
