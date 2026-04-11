function rookAttack(rook1, rook2) {

  const letterRook1 = rook1[0];
  const letterRook2 = rook2[0];
  const nRook1 = rook1.slice(1);
  const nRook2 = rook2.slice(1);

  return letterRook1 == letterRook2 || nRook1 == nRook2;
}