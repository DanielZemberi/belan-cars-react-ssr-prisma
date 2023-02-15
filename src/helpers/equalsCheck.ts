const equalsCheck = <T, U>(a: T[], b: U[]) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export default equalsCheck;
