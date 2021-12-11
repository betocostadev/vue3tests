import { h } from "@vue/runtime-core"
// STATELESS component
const FuncCount = (props) => {

  // Refs can be used
  // const x = ref('x')

  // Reactive is also allowed
  // const y = reactive({ a: 1, b: 2})

  // Life-cycle hooks are not allowed inside a functional component

  function onClick() {
    console.log('im clicked!')
  }

  return h('p', { class: 'count', onClick }, props.count)
}

FuncCount.props = {
  count: {
    type: Number,
    required: true
  }
}

export default FuncCount

