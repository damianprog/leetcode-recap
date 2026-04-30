var highestAltitude = function (gain) {
  let currentAltitude = 0;
  let highestAltitude = 0;

  for (const netGain of gain) {
    currentAltitude += netGain;

    highestAltitude = Math.max(highestAltitude, currentAltitude);
  }

  return highestAltitude;
};
