def tic_tac_toe(board):

    rows = [board[0], board[1], board[2]]
    cols = list(map(list, zip(*board)))
    diag = [[board[0][0], board[1][1], board[2][2]], [board[0][2], board[1][1], board[2][0]]]
    new_board = rows + cols + diag

    for row in new_board:
        if (set(row) == {"X"}):
            return "X wins"
        elif (set(row) == {"O"}):
            return "O wins"

    return "Draw"