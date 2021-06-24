---
title: svelte语法点小记
description: svelte和vue、react不同，在构建页面的时候语法需要和其余框架区别开，记录官方文档有助于理解使用。
keywords: svelte, vue, react, 文档
labels: ['前端', 'svelte']
date: 2021-06-24
---

计划重写原本由sapper编写的博客，需要移除sapper，只用svelte和一般的构建即可。在此之前，需要花点时间学习（回顾）一下svelte的一下语法点，会和vue进行对比，暂不深入理解内部原理，单纯建立在官方文档的基础上。

记录并不是所有细节都要兼顾。遇到和vue理念比较大，或者说这个语法并没有让我那么容易记住的知识点，我都会记录下来，并在后续闲暇的时间下进行回顾复习，有点类似于做一下错题本。

1. 变量和代码块都只需要放在一个花括号里面就好了。在vue里面是`{{}}`包裹，有点不同。不要有带入vue语法的惯性思维。

2. 和vue类似，一个`.svelte`文件就是一个组件，包含了script、html、还有css。可以在另一个svelte组件中引入svelte组件。

3. {@html 字符串}，包裹的字符串会被转化为不信任来源的html代码，注意防止xss攻击。

4. 当组件中的变量更新的时候，svelte会自动更新对应的dom。类似于vue中的计算属性，svelte是这么处理的：

   ```javascript
   const varable = 0
   $: varableName = varable + 1
   ```

   其中`$:`就是可以标识变量为“计算属性”，其中varable变化的话，对应的varableName也会跟着变化。

   `$:`不仅仅是标识变量为计算属性，还可以是一串代码块，在该代码块中的变量一旦发生变化，就会执行这个代码块，而如果没有变量变化，这一个代码块就不会执行。所以把这个符号理解为响应式定义符更好，官网提到的名词就叫响应式声明。

5. 对于一般变量，直接赋值就可以产生响应式的效果，但如果是对象类型就不可以，比如数组的push等操作，就不会更新dom。svelte的解决方式有

   1. 在数组操作之后，将结果数组赋值给原数组。

      ```js
      let num = [1, 2, 3]
      function addNum(newNum) {
        num.push(newNum)
      }
      // 直接在html上调用这个addNum函数，是不会对num进行更新的，需要改为
      function addNum(newNum) {
        num.push(newNum)
        num = num
      }
      // 抑或者
      function addNum(newNum) {
        num = [...num, newNum]
      }
      ```

   2. 对于对象属性的更新，可以直接赋值。

      ```javascript
      let obj = {
        name: 'cat'
      }
      // 可以直接更新obj上的name属性
      function changeName(newName) {
        obj.name = newName
      }
      ```

6.组件参数传递。和vue不一样，vue在一个组件中对传入参数是直接在props上进行声明的。而svelte是直接在组件内export参数。

```vue
// 组件displayName.svelte
<script>
  export let name = "name参数的默认值" // 这里就直接表示组件a具有一个name的参数，外部可以传递进来
</script>

// 组件b.svelte
<script>
  import DisplayName from './displayName.svelte'
	let myName = 'cat'
</script>
<DisplayName name={myName}></DisplayName>


```

7. if块。初次感受肯定是没有vue方便快捷，但写多几遍之后，发现还是可以接受这样的一个语法糖。注意#号不能遗漏掉。

   ```vue
   {#if isTrue}
   	// 执行为isTrue的html
   {:else if 条件} // 这个是额外可能出现的条件
   {:else}
   	// 执行isTrue为false的html
   {/if}
   ```

8. 循环块。类比vue中的v-for。其中（）内的数值表示为id，可以有效更新dom。

   ```vue
   let arr = [
   	{
   		id: 1,
   		name: 'cat'
   	},
   	{
   		id: 2,
   		name: 'dog'
   	}
   ]
   {#each arr as item, index(item.id)}
   	<p>{index}: {item.name}</p>
   {/each}
   // 用上解构，会更加简洁明了
   {#each arr as {id, name}, index(id)}
   	<p>{index}: {id} {name}</p>
   ```

9. await块。没想到真的有这个东西，可以直接拿来判断一个promise在多个状态下的表现，这可以说不用写那一堆loading了，大致的代码如下：

   ```vue
   <script>
   	let promise = getDataFromUrl()
     async getDataFromUrl() {}
   </script>
   // 直接拿promise就像是一个promise一样在html中await
   {#await promise}
   	<p>正在请求中...</p>
   {:then res}
   	<p>返回的内容{res}</p>
   {:catch error}
   	<p>请求出现异常</p>
   {/await}
   
   // 抑或者，你不需要展示loading以及catch错误的话，可以直接then出来
   {#await promise then res}
   	<p>返回的内容{res}</p>
   {/await}
   ```

10. 事件处理。通过on定义符进行事件绑定。

    ```vue
    <button on:click={事件名}>点击</button>
    // on后面接上原生的事件就好了，比如click、mousemove等
    // 事件名可以替换为代码块，如
    <button on:click={e => {// 对变量进行操作}>点击</button>
    ```

    有些框架由于性能的原因建议不要用行内的方式写事件，尤其是在循环里面。但svelte并没有这个问题，你可以直接用而不用担心那些琐碎，svelte总会做到最好。

    事件修饰符，可以对事件进行几个有用的修饰。以previewDefault举例：

    ```vue
    <button on:click|preventDefault={事件名}>点击</button>
    ```

    1. preventDefault 阻止默认事件。
    2. stopPropagation 阻止事件冒泡。
    3. passive 优化对touch、wheel事件的滚动表现。
    4. capture 在 *capture* 阶段而不是*bubbling* 阶段触发事件处理程序。
    5. once 事件只运行一次就删除绑定。
    6. self 仅当 event.target 是其本身时才执行。

    以上修饰符可以串联使用。

11. 组件通信。老生常谈，业务中遇到的太多了。

    
    
    ```vue
    // 父组件 parent.svelte
    <script>
    	import child from './child.svelte'
      function sayHello(name) {
        console.log(`Hi, ${name}`)
      }
    </script>
    <child on:say={sayHello}></child>
    
    // 子组件 child.svelte
    <script>
      // 子组件要调用父组件的事件，需要用到事件派发器
      import { createEventDispatcher } from 'svelte'
      const dispatch = createEventDispatcher()
    	function sayHello() {
        // 这里的话有些类似vue中的$emit
        dispatch('say', {
          name: '我'
        })
      }
    </script>
    <button on:click={sayHello}>点击</button>
    // 如果是dom事件，那么子组件只要不具名，就可以直接调用父组件的事件
    // 父组件事件定义
    <button on:click={eventName}>点击</button>
    // 如果子组件想直接调用dom事件eventName，则
    // 子组件
    <button on:click>点击</button>
    ```

    如果组件嵌套，需要多次转发事件的话，可以把中间的组件都加一个on:eventName，那么事件名为eventName的事件就会一直转发到目标组件上。

    

    *2021-06-01 23:20*

12.双向绑定。和vue原理对比TODO。在svelte中的双向绑定，只需要通过bind修饰就可以。

```vue
<script>
	let name = 'cat'
</script>
<input bind:value={name}></input>
```

表单元素都可以通过bind进行双向绑定，比如checkbox等。

对数组对象，可以直接对值进行循环绑定，这个和vue类似。

每个块级标签都可以对`clientWidth`、`clientHeight`、`offsetWidth`、`offsetHeight`进行绑定。但绑定值只是可读，直接赋值不会进行更新。可以用在读取块元素的尺寸后用于展示等业务上。

13. 组件绑定。这个有点意思，我觉得像是vue中的.sync修饰。可以做到在父组件中直接读取子组件export的值。

14. 生命周期。类比vue的生命周期，svelte的生命周期钩子还是很容易理解的。

在svelte中，每一个组件都有其完整的生命周期，周期的函数需要从svelte中引入。

- `onMount`。使用最多的应该是`onMount`钩子，它在组件渲染到dom后执行。可以在这个周期内进行数据的请求操作，这是svelte所推荐的，如果把请求操作放到script内则不好，因为如果需要服务端渲染的话，生命周期函数是没法在服务端渲染过程中执行的。

- `onDestroy`。组件销毁的时候调用，可以对计时器进行清除等操作。文档中有一个有意思的封装，可以把计数器的操作和组件销毁时销毁计时器一起封装。

  ```javascript
  // 比如封装到util.js中
  imoprt { onDestroy } from 'svelte'
  export function onInterval(callback, time) {
    const interval = setInterval(callback, time)
    onDestroy(() => {
      clearInterval(interval)
    })
  }
  ```

  那么在组件中就可以直接引入onInterval并调用，那就不需要关切组件销毁的时候有没有把计时器进行销毁。

  ```vue
  <script>
    import { onInterval } from './util.js'
    onInterval(() => {}, 1000)
  </script>
  ```

- `beforeUpdate`、`afterUpdate`。该钩子在DOM渲染完成前执行。场景例如：渲染标签的滚动位置。
- `tick`。可以随时调用，是一个带有resolve方法的promise，解释是每当组件pendding状态变化就会立即提现到DOM中，类似于vue的`$nextTick()`?

15. store。svelte自带了壮态管理，由引入自svelte/store的writable定义：

    **可写store**

    ```javascript
    imoprt { writable } from 'svelte/store'
    
    export const count = writable(0) // 默认值为0，这里注意可以使用const进行定义，即便count是一个数值
    ```

    在组件中，count具备update、set方法，分别表示更新和重置值。

    在store创建后，开启的事件订阅，需要在不使用的时候销毁。我们可以在组件的onDestroy周期中取消订阅，避免内存溢出。

    ```vue
    <script>
    	import { onDestroy } from 'svelte'
      import { count } from './store.js'
      
      let countValue
      const unsubscribe = count.subscribe(value => { // 手动订阅
        count_value = value
      })
      onDestroy(unsubscribe) // 在组件销毁的时候取消订阅
    </script>
    ```

    那如果每一个状态都需要这么订阅和销毁的话，就太冗余了，svelte提供一个$符。可以对状态自动进行订阅和取消订阅。yyds。

    ```vue
    <scirpt>
    	imoprt { count } from './store.js'
    </scirpt>
    <p> {$count} </p>
    ```

    **只读store**

    只需在定义的时候，由writable改为readable就可以定义一个只读的store。

    **防止暴露set、update方法的自定义store**

    ```javascript
    import { writable } from 'svelte/store'
    function createCount() {
      const { subscribe, set, update } = writable(0)
      return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
      }
    }
    ```

    

16. class指令。在svelte中动态设置class或者说其余的dom属性，会和vue有一些不一样。

    ```vue
    <div class="{isTrue ? 'true-class' : 'false-class'}">
      name
    </div>
    <div class:selected="{isTrue}"> // 之后留意如何设置camel-case的class名
      name
    </div>
    ```

    

17. 组件插槽，和vue的思想一样，这里看文档注意多个插槽怎么具名。

    ```vue
    // 例如slot.svelte
    <slot name="slot-a"></slot>
    
    // 调用的组件
    <Slot>
    	<div slot="slot-a">
        这里是一个具名插槽
      </div>
    </Slot>
    ```

    

18.context API。通过context api，可以跨越组件进行通信。具备setContext和getContext两个api。如果在一个组件中调用了setContext(key, context)，那么，在所有该子组件中都可以调用该context。

```javascript
// 父组件中
setContext(key, context)
// 任意的子组件中
const context = getContext(key)
```

19. 特殊标签。svelte具备一些特殊的标签。
    - svelte:self。允许组件递归的去包含自己本身。

    - svelte:component。动态组件，与vue类似的用法，通过传入this的组件名，动态挂在组件。

      ```vue
      <svelte:component this={compnentName}></svelte:component>
      ```

    - svelte:window。把它当作是一个window对象，可以在该标签上进行事件的监听等操作。

    - svelte:body。和window的标签一样，可以在document.body上添加事件监听。

    - svelte:head。允许你在页面的<head>标签内插入内容。

      ```html
      <svelte:head>
        <link></link>
      </svelte:head>
      ```

      需要注意的是，在服务端渲染下，这个标签的内容将会单独返回到html中。