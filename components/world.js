Vue.component("castle", {
    template: `<div class="castle" :class="'player-' + index">
    <img class="building" :src="'svg/castle'+index+'.svg'"/>
    <img class="ground" :src="'svg/ground'+index+'.svg'"/>

    </div>`,
    props: ["player", "index"]
})