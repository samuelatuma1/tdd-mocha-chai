
def dont_amount(arr : list, n : int = None, visited : dict = {}) -> int :
    """
        Uses Dynamic programming to find the max profit
        exempting adjacent indexes if the index is visited.
        Avoids re-computing previously visited indexes by using memoization technique.
        
        ### Parameters:
            - arr: list of integers or float
            ** Please, pass in only arr. Do not pass in n, or visited when calling the function.
        ### Example Use case:
            - dont_amount([2, 10, 14, 8, 1]) -> 18
            - dont_amount([2, 5, 1, 3, 6, 2, 4]) -> 15
        """
        
    if n in visited:
        return visited[n]
    
    if n is None:
        n = len(arr) - 1
    
    # base_case
    if n < 0:
        return 0
    if n == 0:
        return arr[n]
    idx = n 
    pick_at_n = arr[idx] + dont_amount(arr, idx - 2, visited)
    dont_pick_n = dont_amount(arr, idx - 1, visited)
    best  = max(pick_at_n, dont_pick_n)
    
    
    # Keep result in visited to prevent recomputing
    visited[n] = best
    
    return best

#  Possible cases
case1 = [2, 10, 14, 8, 1]
case2= [2, 5, 1, 3, 6, 2, 4]
#  Empty list
case3 = []
# One element
case4 = [1]
# List with many elements
case5  = [1, 4, 3, 6, 8, 1, 3, 8, 11, 3, 0, 15, 16, 1, 6, 11, 0, 3, 5, 1, 8, 6, 2, 1, 11, 5, 8, 3, 2, 5]

print(dont_amount(case1))
print(dont_amount(case2))
print(dont_amount(case3))
print(dont_amount(case4))
print(dont_amount(case5))
