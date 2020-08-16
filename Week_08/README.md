## 学习笔记
    
#### 本周知识点：

  基本概念

    位运算
    布隆过滤器和LRU
    排序算法

    位运算：

      机器里的数字表示方式和存储格式就是 二进制

      指定位置的位运算

        1. 将x最右边的n位清零:x&(~0<<n)
        2. 获取x的第n位值(0或者1):(x>>n)&1
        3. 获取x的第n位的幂值:x&(1<<n)
        4. 仅将第n位置为1:x|(1<<n)
        5. 仅将第n位置为0:x&(~(1<<n))
        6. 将x最高位至第n位(含)清零:x&((1<<n)-1)
        7. 将第n位至第0位(含)清零:x&(~((1<<(n+1))-1))

      实战位运算要点

        判断奇偶 x%2==1 —>(x&1)==1 x%2==0 —>(x&1)==0
        x>>1—>x/2. 即: x=x/2; —> x=x>>1; mid=(left+right)/2; —> mid=(left+right)>>1
        X=X&(X-1)清零最低位的1
        X&-X=>得到最低位的 1
        X&~X=>0
    
    LRU Cache

      LRU，least recent use，意思是最近最少使用的。如果最近最少使用的，就把它放到最后去淘汰。
      一般来说，LRU的实现方式是用哈希表，再加一个双向链表来实现。

      根据LRU Cache的更新原则，可以得出LRU的算法模板

        class LRUCache {
          constructor(capacity) {
            // 缓存大小
            this.capacity = capacity;
            // 初始化缓存哈希对象，保存缓存元素
            this.cache = new Map();
          }
          // 获取缓存数据，如果关键字 (key) 存在于缓存中，则获取关键字的值（总是正数），否则返回 -1。
          get(key) {
            if (!this.cache.has(key)) return -1;
            
            let value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
          }
          // 更新、写入数据
          put(key, value) {
            if (this.cache.has(key)) {
              this.cache.delete(key);
            } else {
              if (this.cache.size >= this.capacity) {
                // Map 中新 set 的元素会放在后面
                let firstKey = this.cache.keys().next();
                this.cache.delete(firstKey.value);
              }
            }
            this.cache.set(key, value);
          }
        }

      浏览器缓存淘汰策略

        浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除

        常见的策略有三种：

          1.先进先出策 略FIFO（First In，First Out）
          2.最少使用策略LFU（Least Frequently Used）
          3.最近最少使用策略LRU（Least Recently Used）

    初级排序和高级排序的实现和特性

      排序算法
        比较类排序
          通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序。
        非比较类排序
          不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序
      初级排序 -- O(n^2)
        选择排序（Selection Sort）
          每次找到最小值，然后放到待排序数组的起始位置
        插入排序（Insertion Sort）
          从前到后逐步构建有序序列；对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
        冒泡排序（Bubble Sort）
          嵌套循环，每次查看相邻的元素，如果逆序，则交换
      高级排序 -- O(n*logn)
        快速排序（Quick Sort）
          数组取标杆pivot，将小元素放在pivot左边，大元素放右侧，然后依次对右边和右边的子数组继续快排，以达到整个序列有序
        归并排序（Merge Sort）-- 分治
            把长度为n的输入序列分成两个长度为n/2的子序列
            对这两个子序列分别采用归并排序
            将两个排序好的子序列合并成一个最终的排序序列
          *快排和归并 具有相似性，但步骤顺序相反
          *归并：先排序左右子数组，然后合并两个左右子数组
          *快排：先调配出左右子数组，然后对于左右子数组进行排序
          堆排序（Heap Sort）-- 堆插入O(logN)，取最大/小值O(1)
            数组元素依次建立小顶堆
            依次取堆顶元素，并删除
      特殊排序 -- O(n)
        计数排序（Counting Sort）
          计数排序要求输入的数据必须是有确定范围的整数，将输入的数据值转化为键存储在额外开辟的数组空间中，然后依次把计数大于1的填充回原数组
        桶排序（Bucket Sort）
          假设输入数据服从均匀分步，将数据分到有限数量的桶里，每个桶在分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）
        基数排序（Radix Sort）
          按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，知道最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。