new Vue({
    name: "game",
    el: '#app',
    template: `<div id="#app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
    </div>`,
    data: state
})