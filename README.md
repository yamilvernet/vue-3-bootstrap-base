# vue-start

esta es una plantilla de Vue 3 con el enrutador y Bootstrap 5

## Como usar las clases y ejecutar acciones

    <button 
    class="btn btn-primary" 
    data-bs-target="#collapseTarget" 
    data-bs-toggle="collapse">
    Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">
    This is the toggle-able content!
    </div>

## O podes importar los compoenetes

    import { Popover } from bootstrap;

    const popover = Vue.component('bsPopover', {
    template: `
        <slot/>
    `,
    props: {
        content: {
        required: false,
        default: '',
        },
        title: {
        default: 'My Popover',
        },
        trigger: {
        default: 'click',
        },
        delay: {
        default: 0,
        },
        html: {
        default: false,
        },
    },
    mounted() {
        // pass bootstrap popover options from props
        var options = this.$props
        var ele = this.$slots.default[0].elm
        new Popover(ele,options)
    },
    })

    <bs-popover
    title="Hello Popover"
    content="This is my content for the popover!"
    trigger="hover">
        <button class="btn btn-danger">
        Hover for popover
        </button>
    </bs-popover>