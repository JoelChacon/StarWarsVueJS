<template>
    <div class="container well" id="starApp">
        <h1>Star Wars DB</h1>
        <p>Get a Star Wars Character</p>
        <hr>
        <select class="widthSelect" v-model="character1">
            <option v-for="person in characters" v-bind:value="person">
                {{person.name}}
            </option>
        </select>
        <div v-if="character1">
            <h2>{{character1.name}}</h2>
            <p>Some stats about {{character1.name}}:</p>
            <ul>
                <li>
                    <strong>Height: </strong>{{character1.height}}
                </li>
                <li>
                    <strong>Mass: </strong>{{character1.mass}}
                </li>
                <li>
                    <strong>Hair color: </strong>{{character1.hair_color}}
                </li>
                <li>
                    <strong>Birth year: </strong>{{character1.birth_year}}
                </li>
            </ul>
        </div>
    </div>
</template>
<!-- ////////////////// -->
<style scoped>
    .widthSelect {
        width: 150px;
    }
</style>
<!-- ////////////////// -->
<script>
export default {
        name: "star-app",
        props: [],
        data() {
            return {
                characters: [],
                character1: ''
            }
        },
        computed: {},
        watch: {},
        events: {
            'starwarsCharacterSelected': function(character) {
                console.log(character);
                this.character1 = character
            }
        },
        created: function() {
            // this.getCharacters();
            this.getStarWarCharacters();
        },
        methods: {
            getStarWarCharacters: function() {
                var her = this;
                this.$http.get('http://swapi.co/api/people/?format=json').then(function(res) {
                    console.log(res);
                    her.characters = res.body.results
                })
            }
        }
    }
</script>