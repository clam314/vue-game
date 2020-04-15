// <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
new Vue({
    name: "game",
    el: '#app',
    template: `<div id="#app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"/>
    <transition name="hand">
    <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
    </transition>
    <overlay v-if="activeOverlay">
    <overlay-content-player-turn v-if="activeOverlay === 'player-turn'" :player="currentPlayer"/>
    <overlay-content-last-play v-if="activeOverlay === 'last-play'" :opponent="currentOpponent"/>
    <overlay-content-game-over v-if="activeOverlay === 'game-over'" :players="players"/>
    </overlay>
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