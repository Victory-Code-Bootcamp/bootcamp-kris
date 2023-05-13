let isAwake = false;

// isAwake = false => returns true (you can attack)
// isAwake = true => returns false (you can't attack)
let canAttack = (isAwake) => {
  if (isAwake) {
    return false;
  } else if (!isAwake) {
    return true;
  }
};
// isAwake = false => returns true
// isAwake = true => returns false (you can't attack)
let canAttack2 = (isAwake) => {
  let goodToAttack = !isAwake;
  return goodToAttack;
};
