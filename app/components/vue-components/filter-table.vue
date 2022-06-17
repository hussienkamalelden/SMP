<template>
    <div id="demo">
        <form id="search">
            Search <input name="query" v-on:keyup="Search(Message)" v-model="Message">
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
        Reset: function () {

        }
    },
    mounted() {
        console.log("Search Component Rendered")
    }

};


</script>