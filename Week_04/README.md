## 学习笔记
    
#### 本周知识点：
    
  1.深度优先搜索、广度优先搜索
  2.贪心算法
  3.二分查找

    在树或图中搜索特定节点
      每个节点访问一次
      且每个节点仅访问一次
      对于节点的不同访问顺序，分为：
      深度优先搜索 Depth first search
      广度优先搜索 Breadth first search
      其他：优先级优先-启发式搜索

      1. 深度优先
      const visited = [];
      function dfs(root, visited) {
        // terminator
        if (visited.includes(root)) return;
        visited.push(root);
        // process...

        // drill down
        for (child in root.children) {
          if (visited.includes(child)) continue;
          dfs(child, visited);
        }
      }

      2.广度优先
      function bfs(graph, start, end) {
        const visited = [];
        const queue = [];
        queue.push(start);
        while (!queue.length) {
          const node = queue.shift();
          visited.push(node);
          // process node
          // 再讲node的子节点一次放入队列
          const nodes = generator_nodes(node);
          queue.push(nodes);
        }
      }

    贪心算法
      定义：贪心算法是一种在当下每一步中选择最好或者最优的选择，从而你导致的结果是全局最好或最优
      贪心算法和动态规划的异同点：
        贪心：对于每个子问题的解决方案都作出选择，且不能回退
        动态规划：会保存以前的没个结果，并会根据以前的结果对当前选择，有回退功能
        回溯：能回退
      用途：
        贪心可以解决一些最优化问题，比如求图中的最小生成树、哈夫曼编码等。
        但实际工程和生活中，贪心算法一般不能求得我们想要的答案
        一旦一个问题可以通过贪心算法来解决，那么贪心算法一般是这个问题的最好办法
        由于贪心的高效性和一般求得结果比较接近最优解，所以贪心算法可以用作辅助算法，或者解决一些结果要求不是特别精确的问题
    
    二分查找
      能够使用二分查找的问题需要满足以下三个前提：
        1.目标函数单调性（单调递增或者递减）
        2.存在上下界（bounded）
        3.能够通过索引访问（index accessible）
      
      代码模版
        /* JavaScript */
        let left = 0, right = len(array) - 1
        while (left <= right) {
          let mid = (left + right) >> 1
          if (array[mid] === target) { /*find the target*/; return }
          else if (array[mid] < target) left = mid + 1
          else right = mid - 1
        }
        
  总结
    经过数次练习掌握基本的解决问题的方法，提高编程基本功，但是为什么这么做还是不能理解的透彻。也许熟能生巧之后才能体会上面三种算法的精髓。

