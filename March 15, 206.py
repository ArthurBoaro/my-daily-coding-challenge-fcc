def get_captured_value(pieces):
    
    if "K" not in pieces:
        return "Checkmate"

    chess_pieces = {
    "P": {"quantity": 8, "value": 1},
    "R": {"quantity": 2, "value": 5},
    "N": {"quantity": 2, "value": 3},
    "B": {"quantity": 2, "value": 3},
    "Q": {"quantity": 1, "value": 9},
    "K": {"quantity": 1, "value": 0}
}

    total_pieces_value = 39

    for piece in pieces:
        total_pieces_value = total_pieces_value - chess_pieces[piece]["value"]

    return total_pieces_value