<template>
    <div>setTimeout递归</div>
    <div style="text-align: center;">
        <timer time=60></timer>
    </div>
    <div style="margin-top:30px;">setInterval</div>
    <div>
        <button @click="setTimer">{{begin?second:'开始倒计时'}}</button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import timer from './timer.vue'


export default {
    name: 'Demow',
    components: { timer },
    setup() {

        const state = reactive({
            begin: false,
            second: 60
        })

        let timer = null
        const setTimer = () => { 
            if(state.begin) return
            timer = setInterval(() => {
                state.begin = true
                if (state.second > 1) {
                    state.second -= 1
                } else {
                    state.begin = false
                    state.second = 60
                    clearTimer()
                }
            }, 1000)
        }
        // 清除定时器
        const clearTimer = () => {
            clearInterval(timer)
        }

        

        return {
            ...toRefs(state),
            setTimer
        }
    },
}
</script>
