<template>
    <div id="demo">
        <form id="search">
            Search <input name="query" v-on:keyup="Search(Message)">
            <input type="reset">
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
        Search: function (query) {
            let contentText = "";
            contentText = document.querySelectorAll('.employee-name').forEach(function (el) {
                console.log(el.textContent);
            })
            console.log(contentText);
            // var iQuery = new RegExp(query, "ig");
            // return words.toString().replace(iQuery, function (matchedTxt, a, b) {
            //     return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
            // });
        },
        Reset: function () {

        }
    },
    mounted() {
        console.log("Search Component Rendered")
    }

};


</script>