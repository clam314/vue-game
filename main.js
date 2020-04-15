// <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
new Vue({
    name: "game",
    el: '#app',
    template: `<div id="#app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
    <div class="world">
    <castle v-for="(player,index) in players" :key="index" :player="player" :index="index"/>
    <div class="land"/>
    </div>
    <transition name="hand">
    <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
    </transition>
    <transition name="zoom">
    <overlay v-if="activeOverlay" :key="activeOverlay">
    <component :is="'overlay-content-' + activeOverlay" :player="currentPlayer" :opponent="currentOpponent" :players="players"/>
    </overlay>
    </transition>
    <transition name="fade">
    <div class="overlay-background" v-if="activeOverlay"/>
    </transition>
    </div>`,
    data: state,
    computed: {
        testCard() {
            return cards.archers
        }
    },
    methods: {
        handlePlay() {
            console.log("you played a card!")
        },
        testDrawCard() {
            const ids = Object.keys(cards)
            const randomId = ids[Math.floor(Math.random() * ids.length)]
            return {
                uid: cardUid++,
                id: randomId,
                def: cards[randomId]
            }
        },
        createTestHand() {
            const cards = []
            const ids = Object.keys(cards)
            for (let i = 0; i < 5; i++) {
                cards.push(this.testDrawCard())
            }
            return cards
        },
        testPlayCard(card) {
            const index = this.testHand.indexOf(card)
            console.log(index)
            this.testHand.splice(index, 1)
        }
    },
    created() {
        this.testHand = this.createTestHand()
    }
})