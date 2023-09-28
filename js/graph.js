class Graph {
    constructor() {
        this.graph = {}
    }
    addEdge(a, b) {
        if (!this.graph[a]) {
            this.graph[a] = []
        }
        this.graph[a].push(b)
    }

    bfs(s) {
        const queue = []
        const flatNodes = Array.from(new Set([...Object.keys(this.graph).map(a => Number(a)), ...Object.values(this.graph).flatMap((s) => s)]))
        const visited = flatNodes.fill(false)

        queue.push(s)
        visited[s] = true

        while (queue.length) {
            s = queue.pop()
            console.log(s, " ")
            for (const i of this.graph[s]) {
                if (!visited[i]) {
                    queue.push(i)
                    visited[i] = true
                }
            }
        }
    }
}

const g = new Graph()

g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 2)
g.addEdge(1, 3)
g.addEdge(2, 3)
g.addEdge(2, 4)
g.addEdge(3, 4)
g.addEdge(4, 1)

g.bfs(4)