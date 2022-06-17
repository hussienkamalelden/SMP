<template>
    <div>
        <form class="form-holder" id="search">
            <input class="search-bar" name="query" v-on:keyup="Search(Message)" v-model="Message" placeholder="Search">
            <input class="clear-btn" type="reset" value="Clear" v-on:click="Reset()">
        </form>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: "filterTable",
    components: {
    },
    data() {
        return {
            Message: ''
        }
    },
    methods: {
        Highlight: function (query) {
            let queryReg = new RegExp(query, 'i');

            //Check employee names
            document.querySelectorAll('.employee-name').forEach(function (el) {
                if (queryReg.test(el.textContent)) {
                    el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
                }
            });
            //Check employee address
            document.querySelectorAll('.employee-address').forEach(function (el) {
                if (queryReg.test(el.textContent)) {
                    el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
                }
            });
            //Check employee About
            document.querySelectorAll('.employee-about').forEach(function (el) {
                if (queryReg.test(el.textContent)) {
                    el.innerHTML = el.textContent.replace(queryReg, '<span class="highlight">$&</span>');
                }
            });
        },
        ClearHighlight: function () {
            //give all highlighted elements white background
            document.querySelectorAll('.highlight').forEach(function (el) {
                el.style.backgroundColor = "white";
                el.style.color = "#445065";
            });
        },
        Search: function (query) {
            this.ClearHighlight();
            this.Highlight(query);
        },
        Reset: function () {
            this.ClearHighlight();
            this.$router.replace('/');
        }
    },
    mounted() {
        console.log("Search Component Rendered")
    }

};


</script>