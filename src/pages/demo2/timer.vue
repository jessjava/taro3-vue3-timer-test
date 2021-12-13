<template> 
  <div class="_base-count-down no-rtl">
    <div class="content" style="font-size:20px;"> 
      {{seconds}}
    </div> 
  </div> 
</template> 
<script> 
/* eslint-disable object-curly-newline */ 
 
export default { 
    data: () => ({ 
        days: '0', 
        hours: '00', 
        mins: '00', 
        seconds: '00', 
        timer: null, 
        curTime: 0 
    }), 
    props: { 
        time: { 
            type: [Number, String], 
            default: 0 
        }, 
        refreshCounter: { 
            type: [Number, String], 
            default: 0 
        }, 
        end: { 
            type: [Number, String], 
            default: 0 
        }, 
        isMiniSecond: { 
            type: Boolean, 
            default: false 
        } 
    }, 
    computed: { 
        duration() { 
            if (this.end) { 
                let end = String(this.end).length >= 13 ? +this.end : +this.end * 1000 
                end -= Date.now() 
                return end 
            } 
            const time = this.isMiniSecond ? Math.round(+this.time / 1000) : Math.round(+this.time) 
            return time 
        } 
    }, 
    mounted() { 
        this.countDown() 
    }, 
    watch: { 
        // duration() { 
        //     this.countDown() 
        // }, 
        // refreshCounter() { 
        //     this.countDown() 
        // } 
    }, 
    methods: { 
        countDown() { 
            // eslint-disable-next-line no-unused-expressions 
            this.curTime = Date.now() 
            this.getTime(this.time)
        }, 
        getTime(time) { 
            this.timer && clearTimeout(this.timer) 
            if (time < 0) { 
                return 
            } 
            this.seconds = time
            this.timer = setTimeout(() => { 
                const now = Date.now() 
                const diffTime = Math.floor((now - this.curTime) / 1000) 
                const step = diffTime > 1 ? diffTime : 1 // 页面退到后台的时候不会计时，对比时间差，大于1s的重置倒计时 
                this.curTime = now 
                this.getTime(time - step) 
            }, 1000) 
        } 
    } 
} 
</script> 