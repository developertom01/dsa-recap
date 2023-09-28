from collections import defaultdict

class Graph:
    def __init__(self) -> None:
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
    
    def bfs(self,s):
        visited = [False] * (len(list(self.graph.keys())))
        queue  = []

        queue.append(s)
        visited[s] = True

        while queue:
            s = queue.pop()
            print(s, end=" ")
            print(queue)
            for i in self.graph[s]:
                if visited[i] == False:
                    queue.append(i)
                    visited[i] = True


if __name__ == "__main__":
    g =Graph()
    g.add_edge(0, 1)
    g.add_edge(0, 2)
    g.add_edge(1, 2)
    g.add_edge(2, 0)
    g.add_edge(2, 3)
    g.add_edge(3, 3)

    g.bfs(2)

