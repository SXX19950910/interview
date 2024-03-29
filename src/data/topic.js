
export const TopicList = [
    {
        title: '1、下面代码打印什么内容',
        type: 'select',
        id: '1',
        answerOptions: [
            {
                label: 'A、a defined? true b defined? true',
                value: '1'
            },
            {
                label: 'B、a defined? true b defined? false',
                value: '2'
            },
            {
                label: 'C、a defined? false b defined? true',
                value: '3'
            },
            {
                label: 'D、a defined? false b defined? false',
                value: '4'
            }
        ],
        topic: '    (function () {\n' +
            '        const a = b = 3\n' +
            '    })()\n' +
            '\n' +
            '    console.log(\'a defined?\' + (typeof a !== "undefined"))\n' +
            '    console.log(\'b defined?\' + (typeof a !== "undefined"))',
        language: 'javascript',
        answer: '2'
    },
    {
        title: '2、使用SetStatePage组件，控制台会打印什么？',
        type: 'select',
        id: '2',
        answerOptions: [
            {
                label: 'A、render',
                value: '1'
            },
            {
                label: 'B、render render',
                value: '2'
            },
            {
                label: 'C、render render render',
                value: '3'
            },
            {
                label: 'D、render render render render',
                value: '4'
            }
        ],
        language: 'jsx',
        topic: 'import {useEffect, useState} from \'react\'\n' +
            '\n' +
            'export default function SetStatePage () {\n' +
            '\n' +
            '    const [count, setCount] = useState(-1)\n' +
            '\n' +
            '    useEffect(() => {\n' +
            '        setCount(0)\n' +
            '    }, [])\n' +
            '\n' +
            '    console.log(\'render\')\n' +
            '    return (\n' +
            '        <div>\n' +
            '            <h1>SetStatePage</h1>\n' +
            '            <button>{ count }</button>\n' +
            '        </div>\n' +
            '    )\n' +
            '}',
        answer: ['render', 'render', 'render', 'render']
    },
    {
        title: '3、在使用typeof和instanceof进行类型判断正确的是？',
        type: 'select',
        id: '3',
        answerOptions: [
            {
                label: 'A、typeof null 为 "null"',
                value: '1'
            },
            {
                label: 'B、null instanceof Object 为 true',
                value: '2'
            },
            {
                label: 'C、typeof Array 为 "array"',
                value: '3'
            },
            {
                label: 'D、[] instanceof Array 为 true',
                value: '4'
            }
        ],
        answer: '4'
    },
    {
        id: '4',
        title: '4、以下不能够减少渲染更新渲染次数的是？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、列表添加Key属性',
                value: '1'
            },
            {
                label: 'B、shouldComponentUpdate',
                value: '2'
            },
            {
                label: 'C、pureComponent memo',
                value: '3'
            },
            {
                label: 'D、减少state，多用props',
                value: '4'
            }
        ],
        answer: '4'
    },
    {
        title: '5、useEffect和useLayoutEffect的说法正确的是（多选）',
        type: 'select',
        id: '5',
        answerOptions: [
            {
                label: 'A、两者执行时机不同',
                value: '1'
            },
            {
                label: 'B、useEffect为异步任务执行',
                value: '2'
            },
            {
                label: 'C、useLayoutEffect为渲染后同步任务执行',
                value: '3'
            },
            {
                label: 'D、两者不可同时使用',
                value: '4'
            }
        ],
        answer: ['2', '1']
    },
    {
        title: '6、以下输出结果是什么？',
        id: '6',
        type: 'select',
        answerOptions: [
            {
                label: 'A、tempId { user: "admin" }',
                value: '1'
            },
            {
                label: 'B、null { user: "admin" }',
                value: '2'
            },
            {
                label: 'C、null "',
                value: '3'
            },
            {
                label: 'D、tempId "',
                value: '4'
            }
        ],
        topic: 'const service = function (id = \'tempId\', config = { user: \'admin\' }) {\n' +
            '    console.log(id, config)\n' +
            '}\n' +
            '\n' +
            'service(null, "")',
        answer: '3'
    },
    {
        title: '7、以下代码的打印结果是什么?',
        id: 7,
        type: 'select',
        answerOptions: [
            {
                label: 'A、没有打印结果',
                value: '1'
            },
            {
                label: 'B、打印undefined',
                value: '2'
            },
            {
                label: 'C、打印字符串"Foo"',
                value: '3'
            },
            {
                label: 'D、打印错误对象Error:Foo',
                value: '4'
            }
        ],
        language: 'javascript',
        topic: '    const promiseFn = () => {\n' +
            '        return new Promise((resolve, reject) => {\n' +
            '            setTimeout(() => {\n' +
            '                reject(Error(\'Foo\'))\n' +
            '            }, 500)\n' +
            '        })\n' +
            '    }\n' +
            '\n' +
            '    const catchPromise = promiseFn().catch(err => {\n' +
            '        return err\n' +
            '    })\n' +
            '\n' +
            '    catchPromise.then((res) => {\n' +
            '        console.log(res)\n' +
            '    })',
        answer: '4'
    },
    {
        title: '8、js事件循环机制（1）',
        id: '8',
        topic: 'setTimeout(function() {\n' +
            '    console.log(\'4\')\n' +
            '})\n' +
            '\n' +
            'new Promise(function(resolve) {\n' +
            '    console.log(\'1\') \n' +
            '    resolve()\n' +
            '}).then(function() {\n' +
            '    console.log(\'3\')\n' +
            '})\n' +
            'console.log(\'2\')',
        type: 'select',
        language: 'javascript',
        answer: '1 2 3 4'
    },
    {
        title: '9、js事件循环机制（2）',
        topic: '    setTimeout(function () {\n' +
            '        console.log(\'6\')\n' +
            '    }, 0)\n' +
            '    console.log(\'1\')\n' +
            '    async function async1() {\n' +
            '        console.log(\'2\')\n' +
            '        await async2()\n' +
            '        console.log(\'5\')\n' +
            '    }\n' +
            '    async function async2() {\n' +
            '        console.log(\'3\')\n' +
            '    }\n' +
            '    async1()\n' +
            '    console.log(\'4\')',
        answerOptions: [
            {
                label: '答案、123456'
            }
        ],
        language: 'javascript',
        type: 'select'
    },
    {
        title: '10、笔试题（1）',
        type: 'solution',
        subtitle: '计算容器矩阵',
        solutionName: 'computeRect'
    },
    {
        title: '11、js事件循环机制',
        type: 'select',
        answerOptions: [
            {
                label: 'js在执行过程中，会先按书写顺序将同步任务放入主进程中，依次执行，待主进程中任务执行完则去事件队列中取异步任务，先微后宏，将其拿到主进程中执行，依次循环读取→执行的操作，这样就构成了事件循环。',
                value: '1',
                className: '!w-full'
            }
        ]
    },
    {
        title: '12、http请求方法，写4种',
        type: 'select',
        answerOptions: [
            {
                label: '1、GET方法用于使用给定的URI从给定服务器中检索信息，即从指定资源中请求数据。使用GET方法的请求应该只是检索数据，并且不应对数据产生其他影响。',
                className: '!w-full',
                value: '1'
            },
            {
                label: '2、POST方法用于将数据发送到服务器以创建或更新资源，它要求服务器确认请求中包含的内容作为由URI区分的Web资源的另一个下属 ,POST请求永远不会被缓存，且对数据长度没有限制',
                className: '!w-full',
                value: '2'
            },
            {
                label: '3、PUT方法用于将数据发送到服务器以创建或更新资源，它可以用上传的内容替换目标资源中的所有当前内容,它会将包含的元素放在所提供的URI下，如果URI指示的是当前资源，则会被改变。如果URI未指示当前资源，则服务器可以使用该URI创建资源。',
                className: '!w-full',
                value: '3'
            },
            {
                label: '4、DELETE方法用来删除指定的资源，它会删除URI给出的目标资源的所有当前内容',
                className: '!w-full',
                value: '4'
            }
        ]
    },
    {
        title: '13、react生命周期',
        type: 'solution',
        solutionName: 'lifeCycle'
    },
    {
        title: '14、useMemo的用法',
        type: 'solution',
        solutionName: 'useMemo'
    },
    {
        title: '15、子组件点击3次按钮后，总共打印多少次？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、1次',
                value: '1'
            },
            {
                label: 'B、2次',
                value: '2'
            },
            {
                label: 'C、3次',
                value: '3'
            },
            {
                label: 'D、4次',
                value: '4'
            }
        ],
        topic: 'import { memo, useState, useCallback } from "react";\n' +
            '\n' +
            'const counter = (props) => {\n' +
            '    console.log(\'render\')\n' +
            '    return (\n' +
            '        <div>\n' +
            '            <button onClick={props.onAdd}>加</button>\n' +
            '        </div>\n' +
            '    )\n' +
            '}\n' +
            '\n' +
            'const Counter = memo(counter)\n' +
            '\n' +
            'export default function ButtonCount () {\n' +
            '    const [count, setCount] = useState(0)\n' +
            '    const onAdd = useCallback(() => {\n' +
            '        setCount(count + 1)\n' +
            '    }, [count])\n' +
            '    return (\n' +
            '        <div>\n' +
            '            <Counter onAdd={onAdd} />\n' +
            '        </div>\n' +
            '    )\n' +
            '}',
        answer: '2'
    },
    {
        title: '16、React16.8版本后, 类组件init阶段会在以下那个生命周期触发？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、constructor',
                value: '1'
            },
            {
                label: 'B、shouldComponentUpdate',
                value: '2'
            },
            {
                label: 'C、getDerivedStateFormProps',
                value: '3'
            },
            {
                label: 'D、render',
                value: '4'
            }
        ],
        answer: '4'
    },
    {
        title: '17、React中控制组件是否更新的方式有哪些？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、render',
                value: '1'
            },
            {
                label: 'B、React.memo',
                value: '2'
            },
            {
                label: 'C、HOC',
                value: '3'
            },
            {
                label: 'D、shouldComponentUpdate',
                value: '4'
            }
        ],
        answer: ['2', '3', '4']
    },
    {
        title: '18、js运行时的作用域有哪些？(多选)',
        type: 'select',
        answerOptions: [
            {
                label: 'A、全局作用域',
                value: '1'
            },
            {
                label: 'B、函数作用域',
                value: '2'
            },
            {
                label: 'C、块级作用域',
                value: '3'
            },
            {
                label: 'D、根作用域',
                value: '4'
            }
        ],
        answer: ['1', '2', '3']
    },
    {
        title: '19、HTTP缓存策略以下可作为强制策略的是? (多选)',
        type: 'select',
        answerOptions: [
            {
                label: 'A、Expire',
                value: '1'
            },
            {
                label: 'B、Cache-Control',
                value: '2'
            },
            {
                label: 'C、Etag',
                value: '3'
            },
            {
                label: 'D、Last-Modified',
                value: '4'
            }
        ],
        answer: ['3', '4']
    },
    {
        title: '20、HTTP状态响应码以下代表永久重定向的是？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、302',
                value: '1'
            },
            {
                label: 'B、301',
                value: '2'
            },
            {
                label: 'C、304',
                value: '3'
            },
            {
                label: 'D、306',
                value: '4'
            }
        ],
        answer: '2'
    },
    {
        title: '21、DOM Level2事件流阶段顺序是什么？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、捕获-冒泡-target',
                value: '1'
            },
            {
                label: 'B、target-冒泡-捕获',
                value: '2'
            },
            {
                label: '3、捕获-target-冒泡',
                value: '3'
            },
            {
                label: '4、冒泡-target-捕获',
                value: '4'
            }
        ],
        answer: '3'
    },
    {
        title: '22、以下可实现函数中缓存数据的方法有？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、闭包',
                value: '1'
            },
            {
                label: 'B、柯里化',
                value: '2'
            },
            {
                label: 'C、对象自字面量',
                value: '3'
            },
            {
                label: 'D、常量',
                value: '4'
            }
        ],
        answer: ['1', '4']
    },
    {
        title: '23、Javascript以下属于基本数据类型的是？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、123',
                value: '1'
            },
            {
                label: 'B、NaN',
                value: '2'
            },
            {
                label: 'C、undefined',
                value: '3'
            },
            {
                label: 'D、/^{}$/',
                value: '4'
            }
        ],
        answer: ['1', '3']
    },
    {
        title: '24、以下针对树形的遍历说法正确的是？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、顺序遍历',
                value: '1'
            },
            {
                label: 'B、逆序遍历',
                value: '2'
            },
            {
                label: 'C、深度优先遍历',
                value: '3'
            },
            {
                label: 'D、广度优先遍历',
                value: '4'
            }
        ],
        topic: 'const treeTraverse = (tree, callback) => {\n' +
            '    const currentTree = [tree]\n' +
            '    let node\n' +
            '    while (node = currentTree.shift()) {\n' +
            '        const children = node.children || []\n' +
            '        currentTree.unshift(...children)\n' +
            '        callback && callback(node)\n' +
            '    }\n' +
            '}'
    },
    {
        title: '25、js中Map对象查询时间节点时间复杂度为？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、O(1)',
                value: '1'
            },
            {
                label: 'B、O(n)',
                value: '2'
            },
            {
                label: 'C、O(logn)',
                value: '3'
            },
            {
                label: 'D、O(n^2)',
                value: '4'
            }
        ]
    },
    {
        title: '26、以下算法中为不稳定排序的是？',
        type: 'select',
        answerOptions: [
            {
                label: 'A、插入排序',
                value: '1'
            },
            {
                label: 'B、归并排序',
                value: '2'
            },
            {
                label: 'C、堆排序',
                value: '3'
            },
            {
                label: 'D、快速排序',
                value: '4'
            }
        ],
        answer: '4'
    },
    {
        title: '27、javascript中常见的垃圾回收机制有哪些？（至少两种）',
        type: 'select',
        answerOptions: [
            {
                label: '1.标记清除: 大部分浏览器以此方式进行垃圾回收，当变量进入执行环境（函数中声明变量）时，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候将其标记为“离开环境”，在离开环境之后还有的变量就是需要被删除的变量。标记方式不定，可以是某个特殊位的反转或者维护一个列表等',
                value: '1',
                className: '!w-full'
            },
            {
                label: '2.引用计数: 这种方式常常会引起内存泄漏，低版本的IE使用这种方式。这种方式的机制为：跟踪一个值的引用次数，当声明一个变量并将一个引用类型赋值给该变量时该值引用次数加1，当这个变量指向其他一个值时该值的引用次数便减1。当该值的引用次数为0时就会被回收。',
                value: '2',
                className: '!w-full'
            }
        ]
    },
    {
        title: '28、javascript常见的本地缓存有哪些？（至少三种）',
        type: 'select',
        answerOptions: [
            {
                label: '1、localStorage持久缓存，除非主动清除否则一直存在',
                value: '1'
            },
            {
                label: '2、sessionStorage临时缓存,浏览器关闭后就清除',
                value: '2'
            },
            {
                label: '3、cookie，经典的本地缓存，存储内容有限，拥有跨域和时效性等特性'
            }
        ]
    },
    {
        title: '29、请问下面代码打印什么内容?',
        type: 'select',
        topic: 'console.log(1)\n' +
            '\n' +
            'setTimeout(() => {\n' +
            '    console.log(2)\n' +
            '})\n' +
            '\n' +
            'new Promise((resolve, reject) => {\n' +
            '    console.log(\'new Promise\')\n' +
            '    resolve()\n' +
            '}).then(() => {\n' +
            '    console.log(\'then\')\n' +
            '})\n' +
            '\n' +
            'console.log(\'3\')',
        answer: ['1', 'new promise', '3', 'then', '2']
    },
    {
        title: '30、阻止按钮点击事件冒泡到容器的方法是？',
        type: 'select',
        topic: '\n' +
            'const RefDemo = () => {\n' +
            '    const [count, setCount] = useState(0)\n' +
            '    const countRef = useRef(count)\n' +
            '    const onClickContainer = () => {\n' +
            '        console.log(1)\n' +
            '    }\n' +
            '    const onAdd = (event) => {\n' +
            '        //todo 阻止事件冒泡\n' +
            '        console.log(2)\n' +
            '    }\n' +
            '    return (\n' +
            '        <div id={\'container\'} onClick={onClickContainer}>\n' +
            '            <button onClick={onAdd}>Ref</button>\n' +
            '        </div>\n' +
            '    )\n' +
            '}'
    },
    {
        title: '31、请问以下代码输出结果是什么？',
        type: 'select',
        topic: 'let result = 1\n' +
            '\n' +
            'const add = function () {\n' +
            '    result += 1\n' +
            '}\n' +
            '\n' +
            'const counter = function (def = 1) {\n' +
            '    let result = def\n' +
            '    return {\n' +
            '        add,\n' +
            '        get() {\n' +
            '            return result\n' +
            '        }\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'const count = counter()\n' +
            'count.add()\n' +
            'console.log(count.get())\n' +
            'count.add()\n' +
            'console.log(count.get())',
        answer: ['1', '1']
    },
    {
        title: '32、请问点击一次按钮后的打印结果是什么？',
        type: 'select',
        topic: 'import {Component} from "react";\n' +
            '\n' +
            'export default class ButtonClick extends Component {\n' +
            '    constructor(props) {\n' +
            '        super(props);\n' +
            '        this.state = {\n' +
            '            count: 0\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    static getDemoStateFromProps(prevState) {\n' +
            '        console.log(\'hello\')\n' +
            '        return {\n' +
            '            ...prevState\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    componentDidMount() {\n' +
            '        console.log(\'mount\')\n' +
            '    }\n' +
            '\n' +
            '    componentDidUpdate(prevProps, prevState, snapshot) {\n' +
            '        console.log(\'update\')\n' +
            '    }\n' +
            '\n' +
            '    shouldComponentUpdate(nextProps, nextState, nextContext) {\n' +
            '        console.log(\'should\')\n' +
            '        return true\n' +
            '    }\n' +
            '\n' +
            '    getSnapshotBeforeUpdate(prevProps, prevState) {\n' +
            '        console.log(\'snapshot\')\n' +
            '        return true\n' +
            '    }\n' +
            '\n' +
            '    onClick =() => {\n' +
            '        this.setState(state => ({ ...state, count: state.count + 1 }))\n' +
            '    }\n' +
            '\n' +
            '    render () {\n' +
            '        console.log(\'render\')\n' +
            '        return (\n' +
            '            <div>\n' +
            '                <button onClick={this.onClick}>Derived</button>\n' +
            '            </div>\n' +
            '        )\n' +
            '    }\n' +
            '\n' +
            '}',
        answer: ['should', 'should', 'render', 'render', 'snapshot', 'update']
    },
    {
        title: '33、以下程序输出的内容是什么？',
        type: 'select',
        topic: ' function Foo() {\n' +
            '       var i = 0\n' +
            '       return function () {\n' +
            '           document.write(i++)\n' +
            '       }\n' +
            '   }\n' +
            '   var f1 = Foo()\n' +
            '   var f2 = Foo()\n' +
            '   f1()\n' +
            '   f1()\n' +
            '   f2()',
        answer: ['0', '1', '0']
    },
    {
        title: '34、以下程序输出结果是什么？',
        type: 'select',
        topic: '   var b = \'40\'\n' +
            '   var c = 7\n' +
            '\n' +
            '   console.log(b%c)',
        answerOptions: [
            {
                label: 'A、5',
                value: '1'
            },
            {
                label: 'B、"5"',
                value: '2'
            },
            {
                label: 'undefined',
                value: '3'
            },
            {
                label: 'null',
                value: '4'
            }
        ],
        answer: '1'
    },
    {
        title: '35、以下程序输出什么？',
        type: 'select',
        topic: '   var myObject = {\n' +
            '       foo: \'bar\',\n' +
            '       func: function () {\n' +
            '           var self = this\n' +
            '           console.log(this.foo)\n' +
            '           console.log(self.foo)\n' +
            '           (function () {\n' +
            '               console.log(this.foo)\n' +
            '               console.log(self.foo)\n' +
            '           }())\n' +
            '       }\n' +
            '   }',
        answer: ['bar', 'bar', 'undefined', 'bar']
    },
    {
        title: '36、ts中interface和type的区别',
        type: 'select',
        answerOptions: [
            {
                label: '1、interface只能定义对象类型的数据结构, type则可以定义其他类型的，例如联合类型',
                value: '1',
                className: '!w-full'
            },
            {
                label: '2、interface定义重名会合并属性，type则不可以',
                value: '2',
                className: '!w-full'
            }
        ]
    },
    {
        title: '37、git rebase 和 git merge的区别',
        type: 'select',
        id: '37',
        answerOptions: [
            {
                label: 'git merge: 将两个分支合并为一个最新的提交，会有两个parent',
                value: '1',
                className: '!w-full'
            },
            {
                label: 'git rebase：会取消分⽀中的每个提交，并把他们临时存放，然后把当前分⽀更新到最新的origin分⽀，最后再把所有提交应⽤到分⽀上。',
                value: '2',
                className: '!w-full'
            }

        ]
    },
    {
        title: '38、请手写防抖函数',
        type: 'select',
        id: '38',
        answerType: 'code',
        answer: 'const debounce = function (fn, delay) {\n' +
            '        let timer\n' +
            '        const context = this\n' +
            '        return function () {\n' +
            '            clearTimeout(timer)\n' +
            '            timer = setTimeout(() => {\n' +
            '                fn.apply(context)\n' +
            '            }, delay)\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    const handleClick = () => {\n' +
            '        console.log(\'被点击了\')\n' +
            '    }\n' +
            '\n' +
            '    const debounceClick = debounce(handleClick, 500)\n' +
            '\n' +
            '    document.querySelector(\'.btn\').addEventListener(\'click\', function () {\n' +
            '        debounceClick()\n' +
            '    })'
    },
    {
        title: '39、js的设计模式有哪些？',
        id: '39',
        answerOptions: [
            {
                label: '1、装饰器模式',
                value: '1'
            },
            {
                label: '2、构造器模式',
                value: '2'
            },
            {
                label: '3、工厂模式',
                value: '3'
            },
            {
                label: '4、单例模式',
                value: '4'
            },
            {
                label: '5、适配器模式',
                value: '5'
            },
            {
                label: '6、发布订阅模式',
                value: '6'
            }
        ]
    },
    {
        title: '40、请聊聊http1.0, 1.1, 2.0, 3.0',
        id: '40',
        type: 'select',
        answerOptions: [
            {
                label: '1:无状态，无连接；2:短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能;3:无host头域，也就是http请求头里的host；4:不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象',
                value: '1',
                className: '!w-full'
            }
        ]
    },
    {
        title: '41、js变量的创建机制',
        id: '41',
        type: 'select'
    },
    {
        title: '42、React Hook在使用时需要注意些什么？',
        id: '42',
        type: 'select',
        answerOptions: [
            {
                label: '1、HOOK需要顶层调用,在循环或条件判断等其他地方使用是不可以的',
                value: '1',
                className: '!w-full'
            },
            {
                label: '2、需要注意HOOK的调用顺序',
                value: '2',
                className: '!w-full'
            }
        ]
    },
    {
        title: '43、执行上下文和执行栈',
        id: '43',
        type: 'select',
        answerOptions: [
            {
                label: '执行栈也叫调用栈，具有后进先出的结构，用于存储在代码执行期间创建的所有执行上下文。当JS引擎开始执行第一行脚本代码时，就会创建一个全局执行上下文然后压入执行栈中，每当引擎遇到一个函数时，就会创建一个函数执行上下文，然后将这个执行上下文压入到执行栈。引擎会执行位于执行栈栈顶的执行上下文（一般是函数执行上下文），当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程就会到达执行栈的下一个执行上下文',
                value: '1',
                className: '!w-full'
            }
        ]
    },
    {
        title: '44、ref和reactive的区别',
        id: '44',
        type: 'select',
        answerOptions: [
            {
                label: '1、ref返回一个响应式且可变的ref对象，可以修改其值，里面包含一个value属性',
                value: '1',
                className: '!w-full'
            },
            {
                label: '2、reactive接受的值是一个对象的形式',
                className: '!w-full'
            }
        ]
    },
    {
        title: '45、请说说以下的输出的结果',
        id: '45',
        type: 'select',
        answerOptions: [],
        topic: 'function c () {\n' +
            '    console.log(this)\n' +
            '  }\n' +
            '  function b () {\n' +
            '    return function () {\n' +
            '      console.log(this)\n' +
            '    }\n' +
            '  }\n' +
            '  const obj = {\n' +
            '    b() {\n' +
            '      console.log(this)\n' +
            '    }\n' +
            '  }\n' +
            '\n' +
            '  c()\n' +
            '  b()()\n' +
            '  obj.b()',
        answer: ['window', 'window', 'obj']
    }
]