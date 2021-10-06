import math
import random


def print_board(board):
    """
    :param board: the current state of the game board
    :return: none - print the board according to the keyboard number pad
    """
    print("\t============")
    print("\t GAME BOARD")
    print("\t============\n")
    print(f"\t {board[7]} | {board[8]} | {board[9]} ")
    print("\t---+---+---")
    print(f"\t {board[4]} | {board[5]} | {board[6]} ")
    print("\t---+---+---")
    print(f"\t {board[1]} | {board[2]} | {board[3]} ")


def win_check(board):
    """

    :param board: the current state of the game board
    :return: true if there is s winning, false otherwise.
    """
    return (
        # ROWS
        (board[1] == board[2] == board[3] and board[1] != '?') or
        (board[4] == board[5] == board[6] and board[4] != '?') or
        (board[7] == board[8] == board[9] and board[7] != '?') or
        # COLS
        (board[1] == board[4] == board[7] and board[1] != '?') or
        (board[2] == board[5] == board[8] and board[2] != '?') or
        (board[3] == board[6] == board[9] and board[3] != '?') or
        # DIAGONALS
        (board[1] == board[5] == board[9] and board[1] != '?') or
        (board[3] == board[5] == board[7] and board[3] != '?')
    )


def play_move(board, square, player):
    if board[square] == '?':
        board[square] = player
        return True
    else:
        return False


def copy_board(board):
    ret_board = []
    for i in board:
        ret_board.append(i)
    return ret_board


def select_random_move(board, moves_list):
    possible_moves = []
    for i in moves_list:
        if board[i] == '?':
            possible_moves.append(i)

    if len(possible_moves) != 0:
        return random.choice(possible_moves)
    else:
        return None


def ai_move(board, marker):
    """ai strategy
    make move for the computer
    """
    if marker == 'X':
        comp_marker = 'X'
        player_marker = 'O'
    else:
        comp_marker = 'O'
        player_marker = 'X'

    # Win Check for CPU
    for i in range(1, 10):
        copy = copy_board(board)
        if copy[i] == "?":
            copy[i] = comp_marker
            if win_check(copy):
                board[i] = marker
                return None

    # Block Player's Winning Move
    for i in range(1, 10):
        copy = copy_board(board)
        if copy[i] == "?":
            copy[i] = player_marker
            if win_check(copy):
                board[i] = marker
                return None

    # Center if available
    if board[5] == "?":
        board[5] = marker
        return None

    # Sides
    move = None
    while not move:
        move = select_random_move(board, [2, 4, 6, 8])
        if move:
            board[move] = marker
            return None
        else:
            move = None

    # Corners if available
    move = select_random_move(board, [1, 3, 7, 9])
    if move:
        board[move] = marker
        return None


def play(board, winner, player_marker, ai_marker):
    count = 0
    while count < 9:
        position = int(input("\nEnter your move (1,9): "))
        while not play_move(board, position, player_marker):
            print("INVALID MOVE ! \n")
            position = int(input("\nEnter your move (1,9): "))
        count += 1
        print_board(board)
        if win_check(board):
            return player_marker
        ai_move(board, ai_marker)
        count += 1
        print_board(board)
        if win_check(board):
            return ai_marker

def main():
    game_state = True

    player_marker = None
    ai_marker = None
    while not (player_marker == 'X' or player_marker == 'O'):
        player_marker = input("pick X or O\n").upper()
        if player_marker == 'X':
            ai_marker = 'O'
            break
        elif player_marker == 'O':
            ai_marker = 'X'
            break
        else:
            print("invalid option\n")

    board = ['?'] * 10
    print_board(board)
    winner = None

    while game_state:
        winner = play(board, winner, player_marker, ai_marker)

        if winner:
            print("the winner is:", winner)
        else:
            print("its a draw ! /n")

        restart = input("want to play again ? (y/n) \n").upper()
        if restart == 'N':
            game_state = False
    print("BYE :) ")


main()
