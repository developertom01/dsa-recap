import unittest
from .graph import Graph
class TestGraph(unittest.TestCase):

    # Add edges to the graph and perform BFS on it
    def test_add_edges_and_bfs(self):
        g = Graph()
        g.add_edge(0, 1)
        g.add_edge(0, 2)
        g.add_edge(1, 2)
        g.add_edge(2, 0)
        g.add_edge(2, 3)
        g.add_edge(3, 3)
        expected_output = "2 0 3 1 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(2)
            self.assertEqual(fake_out.getvalue(), expected_output)

    # Add multiple edges to the graph and perform BFS on it
    def test_add_multiple_edges_and_bfs(self):
        g = Graph()
        g.add_edge(0, 1)
        g.add_edge(0, 2)
        g.add_edge(1, 2)
        g.add_edge(2, 0)
        g.add_edge(2, 3)
        g.add_edge(3, 3)
        g.add_edge(4, 5)
        g.add_edge(5, 6)
        expected_output = "4 5 6 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(4)
            self.assertEqual(fake_out.getvalue(), expected_output)

    # Add a single edge to the graph and perform BFS on it
    def test_add_single_edge_and_bfs(self):
        g = Graph()
        g.add_edge(0, 1)
        expected_output = "0 1 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(0)
            self.assertEqual(fake_out.getvalue(), expected_output)

    # Add edges to the graph with non-existent vertices and perform BFS on it
    def test_add_edges_with_nonexistent_vertices_and_bfs(self):
        g = Graph()
        g.add_edge(0, 1)
        g.add_edge(1, 2)
        g.add_edge(2, 3)
        expected_output = "0 1 2 3 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(0)
            self.assertEqual(fake_out.getvalue(), expected_output)

    # Add edges to the graph with vertices of different data types and perform BFS on it
    def test_add_edges_with_different_data_types_and_bfs(self):
        g = Graph()
        g.add_edge(0, "a")
        g.add_edge("a", 2)
        g.add_edge(2, 3)
        expected_output = "0 a 2 3 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(0)
            self.assertEqual(fake_out.getvalue(), expected_output)

    # Add edges to the graph with duplicate vertices and perform BFS on it
    def test_add_edges_with_duplicate_vertices_and_bfs(self):
        g = Graph()
        g.add_edge(0, 1)
        g.add_edge(0, 1)
        g.add_edge(1, 2)
        g.add_edge(2, 0)
        g.add_edge(2, 3)
        g.add_edge(3, 3)
        expected_output = "2 0 3 1 "
        with patch('sys.stdout', new=StringIO()) as fake_out:
            g.bfs(2)
            self.assertEqual(fake_out.getvalue(), expected_output)