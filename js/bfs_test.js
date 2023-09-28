// https://www.geeksforgeeks.org/find-the-level-of-given-node-in-an-undirected-graph/
//Link to question


const castEdgesToGraph = (E) => {
    const graph = {}

    E.forEach(element => {
        if (!graph[element[0]]) {
            graph[element[0]] = []
        }
        graph[element[0]].push(element[1])
    });
    return graph
}

const findLevelOfGivenNode = (V, E, N) => {
    const graph = castEdgesToGraph(E)

    const visitedNodes = Array.from(Math.max(E.flatMap(e => e))).fill(false)
    let s = E[0][0]
    const queue = []
    queue.push(s)
    visitedNodes[s] = true
    let level = 0
    if (N === s) {
        return 0
    }
    while (queue.length) {
        s = queue.pop(0)
        for (const i of graph[s] ?? []) {
            if (i === N) {
                return level
            }
            level++
            if (!visitedNodes[i]) {
                visitedNodes[i] = true
                queue.push(i)
            }
        }
    }


    return -1

}
let V = 5;
let edges = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [5, 6], [6, 4]];
const level = findLevelOfGivenNode(V, edges, 6)

console.log(level)