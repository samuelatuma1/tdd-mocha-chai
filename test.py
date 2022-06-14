from waje import dont_amount

import unittest

class TestDont_Amount(unittest.TestCase):
    def test_empty(self):
        """ Asserts empty list returns 0
        """
        return self.assertEqual(dont_amount([]), 0)
    
    def assert_soln_matches_output(self):
        """
            Asserts dont_amount([2, 10, 14, 8, 1]) equals 18
        """
        return self.assertEqual(dont_amount([2, 10, 14, 8, 1]), 18)
    
    def assert_soln_matches_output2(self):
        
        return self.assertEqual(dont_amount([2, 5, 1, 3, 6, 2, 4]), 22)
    
    
    

TestDont_Amount().test_empty()
TestDont_Amount().assert_soln_matches_output()
TestDont_Amount().assert_soln_matches_output2()