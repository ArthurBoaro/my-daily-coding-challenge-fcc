function getCapturedValue(pieces) {

  if (!pieces.includes("K")) {
    return "Checkmate";
  }

  const chessPieces = {
    P: { quantity: 8, value: 1 },
    R: { quantity: 2, value: 5 },
    N: { quantity: 2, value: 3 },
    B: { quantity: 2, value: 3 },
    Q: { quantity: 1, value: 9 },
    K: { quantity: 1, value: 0 }
  };

  let totalPiecesValue = 39;

  for (const piece of pieces) {
    totalPiecesValue = totalPiecesValue - chessPieces[piece].value;
  }

  return totalPiecesValue;
}