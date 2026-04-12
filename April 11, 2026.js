function rookBishopAttack(rook, bishop) {

  const letterRook = rook[0];
  const letterBishop = bishop[0];
  const nRook = Number(rook.slice(1));
  const nBishop = Number(bishop.slice(1));
  const colRook = letterRook.charCodeAt(0);
  const colBishop = letterBishop.charCodeAt(0);

  if (letterRook == letterBishop || nRook == nBishop) {
    return "rook";
  }

  if (Math.abs(colRook - colBishop) == Math.abs(nRook - nBishop)) {
    return "bishop";
  }
  
  return "neither";
}

rookBishopAttack("G3", "E8")