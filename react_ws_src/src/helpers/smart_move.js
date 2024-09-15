import rand_arr_elem from "./rand_arr_elem"
import win_sets from "./win_sets"

// Helper function to check if a move wins
function check_winning_move(a, sym) {
  for (let win_set of win_sets) {
    const [col1, col2, col3] = win_set
    if (a[col1] === sym && a[col2] === sym && !a[col3]) return col3
    if (a[col1] === sym && a[col3] === sym && !a[col2]) return col2
    if (a[col2] === sym && a[col3] === sym && !a[col1]) return col1
  }

  return null
}

function smart_move(a) {
  // Check for a winning move
  const win_move = check_winning_move(a, "o")
  if (win_move) return win_move

  // Check for a blocking move
  const block_move = check_winning_move(a, "x")
  if (block_move) return block_move

  // Prefer to take the center
  if (!a["c5"]) return "c5"

  // prevent the L move
  if (
    (a["c1"] == "x" && a["c9"] == "x") ||
    (a["c3"] == "x" && a["c7"] == "x")
  ) {
    // take one of the sides
    for (let c of ["c2", "c4", "c6", "c8"]) {
      if (!a[c]) return c
    }
  }

  // If center is taken, try to take one of the corners
  if (!a["c1"]) return "c1"
  if (!a["c3"]) return "c3"
  if (!a["c7"]) return "c7"
  if (!a["c9"]) return "c9"

  // Fall back to taking a random empty cell
  let empty_cells_arr = []
  for (let i = 1; i <= 9; i++) !a["c" + i] && empty_cells_arr.push("c" + i)
  return rand_arr_elem(empty_cells_arr)
}

export default smart_move
