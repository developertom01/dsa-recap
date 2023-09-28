describe('Graph', () => {

    // Adding edges to the graph with addEdge method
    it('should add edge to the graph when valid nodes are provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      expect(graph.graph[1]).toEqual([2]);
    });

    // Traversing the graph with bfs method
    it('should traverse the graph using bfs method when starting node is provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);
      graph.addEdge(3, 5);
      const consoleSpy = jest.spyOn(console, 'log');
      graph.bfs(1);
      expect(consoleSpy).toHaveBeenCalledWith(1);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).toHaveBeenCalledWith(3);
      expect(consoleSpy).toHaveBeenCalledWith(4);
      expect(consoleSpy).toHaveBeenCalledWith(5);
    });

    // Adding edge with non-existent node
    it('should not add edge to the graph when non-existent node is provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      graph.addEdge(3, 4);
      expect(graph.graph[3]).toBeUndefined();
    });

    // Traversing the graph with non-existent node
    it('should not traverse the graph when non-existent node is provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      graph.addEdge(3, 4);
      const consoleSpy = jest.spyOn(console, 'log');
      graph.bfs(5);
      expect(consoleSpy).not.toHaveBeenCalled();
    });

    // Traversing the graph with disconnected nodes
    it('should traverse the graph with disconnected nodes when starting node is provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      graph.addEdge(3, 4);
      const consoleSpy = jest.spyOn(console, 'log');
      graph.bfs(1);
      expect(consoleSpy).toHaveBeenCalledWith(1);
      expect(consoleSpy).toHaveBeenCalledWith(2);
      expect(consoleSpy).not.toHaveBeenCalledWith(3);
      expect(consoleSpy).not.toHaveBeenCalledWith(4);
    });

    // Adding multiple edges between two nodes
    it('should add multiple edges between two nodes when valid nodes are provided', () => {
      const graph = new Graph();
      graph.addEdge(1, 2);
      graph.addEdge(1, 2);
      graph.addEdge(1, 2);
      expect(graph.graph[1]).toEqual([2, 2, 2]);
    });
});
